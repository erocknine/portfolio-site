import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default function Profile() {

  return (
    <section className="profile-section">
      <ScrollAnimation animateIn="fadeOutLeftBig" initiallyVisible={true} delay={200}>
        <div className="profile-left"></div>
      </ScrollAnimation>
      <ScrollAnimation offset={300} animateOut="fadeInLeftBig">
        <div className="profile-left"></div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeOutRightBig" initiallyVisible={true} delay={200}>
        <div className="profile-right"></div>
      </ScrollAnimation>
      <ScrollAnimation offset={300} animateOut="fadeInRightBig">
        <div className="profile-right"></div>
      </ScrollAnimation>

      <div className="profile-section-text">
        <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={400}><h2 className="text">Eric Sai Kit Cheung</h2></ScrollAnimation>
        <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200}>
          <p className="text">Trilingual Full-stack web developer fluent in Chinese and conversational in Japanese, with a background in management.</p>
          
          <p className="text">I am constantly charmed by programming technologies, and motivated to create visually appealing and intuitive interfaces for users.</p>
            
          <p className="text">I’ve taught English in Japan, owned and operated a food business in Hawaii, and written a book while in NYC. My diverse background and experiences give me strong skills in project management, creativity, and design.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInDown" animateOnce={true}><h3 className="text">//Technical Skills</h3></ScrollAnimation>
        <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200}><p className="text">React, Redux, Javascript, Ruby, Rails, NodeJS, Express, MongoDB, SQL, HTML, CSS, Sass, Bootstrap, Material IO, Semantic UI </p></ScrollAnimation>
      </div>
    </section>
  )
}