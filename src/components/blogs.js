import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../style/blogs.scss'
import { Icon } from 'semantic-ui-react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Blogs() {

  return (
    <section className="blogs-section">
      <div id="blogs" />
      <div className="header-bar">
        <h1 className="blogs-header">BLOGS</h1>
      </div>

      <div className="blogs-content">
        {renderBlogCards()}
      </div>

      <Contact />

    </section>
  )
}

const renderBlogCards = () => {
  return blogs.map(blog => <BlogCard title={blog.title} image={blog.image} caption={blog.caption} date={blog.date}/>)
}

const BlogCard = ({ title, image, caption, date}) => {
  return (
    <div className="blog-card">
      <img className="blog-card__image" src={image} alt={title} />
      <div className="blog-card__text">
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{caption}</p>
      </div>
      <div className="blog-card__arrow">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
      </div>
    </div>
  )
}

const blogs = [
  {title: "So you wanna use RegEx, do ya?", image: "images/blog-images/js_code.jpg", caption: "Guide to becoming familiar with RegEx in Ruby and JavaScript. Not for the weak-willed.", date: "March 18, 2020"}, 
  {title: "Don't sleep on CSS", image: "images/blog-images/css_art_popsicle.jpg", caption: "A dissertation on CSS philosophy and application that would make God cry.", date: "April 9, 2020"}, 
  {title: "Being on point with API endpoints", image: "images/blog-images/endpoints.png", caption: "Utilizing API endpoints with an example implementing GuideBox API.", date: "May 14, 2020"}, 
  {title: "Active Storage makes your site legit", image: "images/blog-images/aws.png", caption: "Setting up Active Storage + Amazon S3 with React Frontend / Rails Backend.", date: "September 6, 2020"}, 
]

const Contact = () => {

  const [copy, setCopy] = useState(false)

  const handleCopy = () => {
    setCopy(true)
    setTimeout(() => setCopy(false), 7000)
  }

  return (
    <div className="contact-info">
      <p>Eric Sai Kit Cheung</p>
      <p>Brooklyn, NY</p>
      <CopyToClipboard text={'Eric.saikit.cheung@gmail.com'} onCopy={() => handleCopy()}>
        <p className="contact-email-bottom"><span className={copy ? "copied-open":"copied-closed"}><strong>Copied!</strong>&nbsp;</span>Eric.saikit.cheung@gmail.com</p>
      </CopyToClipboard>
      <div className="contact-links">
        <a href="https://www.instagram.com/erock_esquire/" target="_blank" rel="noopener noreferrer"><Icon name='instagram' /></a>
        <a href="https://www.linkedin.com/in/eric-sk-cheung/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' /></a>
        <a href="https://github.com/erocknine" target="_blank" rel="noopener noreferrer"><Icon name='github' /></a>
      </div>
    </div>
  )
}
