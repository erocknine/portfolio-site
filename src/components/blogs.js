import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Icon } from 'semantic-ui-react'

export default function Blogs() {

  return (
    <section className="blogs-section">

      <div id="blogs" className="header-bar">
        <h2>BLOGS</h2>
      </div>

      <div className="blogs-content">
        <div className="blogs-text">
          <Carousel infiniteLoop={true} showThumbs={false}>
            <div>
              <a href="https://medium.com/@echeungsk/so-you-wanna-use-regex-do-ya-fc9d1e5aaf99" target="_blank" rel="noopener noreferrer" className="blog-link">
                VIEW MEDIUM BLOG
                <img src="images/blog-images/blog-regex.png" alt="regex medium blog" className="blog-slide"/>
              </a>
            </div>
            <div>
              <a href="https://medium.com/@echeungsk/dont-sleep-on-css-b8083b7bc276" target="_blank" rel="noopener noreferrer" className="blog-link">
                VIEW MEDIUM BLOG
                <img src="images/blog-images/blog-css.png" alt="css medium blog" className="blog-slide"/>
              </a>
            </div>
            <div>
              <a href="https://medium.com/@echeungsk/being-on-point-with-api-endpoints-a543d3f6333b" target="_blank" rel="noopener noreferrer" className="blog-link">
                VIEW MEDIUM BLOG
                <img src="images/blog-images/blog-api.png" alt="api medium blog" className="blog-slide"/>
              </a>
            </div>
          </Carousel>
        </div>

        <div className="contact-info">
          <p>Eric Sai Kit Cheung</p>
          <p>Brooklyn, NY</p>
          <p>Eric.saikit.cheung@gmail.com</p>
          <div className="contact-links">
            <a href="https://www.instagram.com/erock_esquire/" target="_blank" rel="noopener noreferrer"><Icon name='instagram' /></a>
            <a href="https://www.linkedin.com/in/eric-sk-cheung/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' /></a>
            <a href="https://github.com/erocknine" target="_blank" rel="noopener noreferrer"><Icon name='github' /></a>
          </div>
        </div>

      </div>
    </section>
  )
}
