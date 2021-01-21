import React, { useState } from 'react'
import { descendingBlogs } from './BlogsPage/blogPage'
import '../style/blogs.scss'
import { Icon } from 'semantic-ui-react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'

export default function Blogs() {

  return (
    <section className="blogs-section">
      <div id="blogs" />
      <div className="header-bar">
        <h1 className="blogs-header">BLOGS</h1>
      </div>

      <div className="blogs-content">
        <div className="blogs-content__blogs">
          {renderBlogCards()}
        </div>
        <Contact />
      </div>
    </section>
  )
}

const scrollTop = () => {
  let html = document.querySelector("html")
  html.style.scrollBehavior = "auto";
  window.scrollTo(0,0)
}

const renderBlogCards = () => {
  return descendingBlogs.map((blog, index) => <Link to={`/blogs/${blog.url}`} key={index} onClick={() => scrollTop()}><BlogCard key={index} title={blog.title} image={blog.image} caption={blog.caption} date={blog.date}/></Link>)
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
        <p className="contact-email-bottom">
          <span className={copy ? "copied-open":"copied-closed"}><strong>Copied!</strong>&nbsp;</span>
          Eric.saikit.cheung@gmail.com</p>
      </CopyToClipboard>
      <div className="contact-links">
        <a href="https://www.instagram.com/erock_esquire/" target="_blank" rel="noopener noreferrer"><Icon name='instagram' /></a>
        <a href="https://www.linkedin.com/in/eric-sk-cheung/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' /></a>
        <a href="https://github.com/erocknine" target="_blank" rel="noopener noreferrer"><Icon name='github' /></a>
      </div>
    </div>
  )
}
