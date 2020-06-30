import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from 'semantic-ui-react'

export default function Profile() {

  return (
    <section className="profile-section">

      <div className="profile-sliders">
        <div className="profile-left"
        data-aos-offset="200"
        data-aos="profile-slide-left"
        data-aos-easing="ease-in-out"
        data-aos-duration="700"
        data-aos-delay="300"
        data-aos-mirror="true"
        ></div>

        <div className="profile-right"
        data-aos-offset="200"
        data-aos="profile-slide-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="700"
        data-aos-delay="300"
        data-aos-mirror="true"
        ></div>
      </div>

      <div id="profile" className="profile-text">
        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={200}><h2 className="text">Eric Sai Kit Cheung</h2></ScrollAnimation>
        
        <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200}><p className="text"><Icon name="angle double right"/>Full-stack Software Engineer</p></ScrollAnimation>
        <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200}><p className="text"><Icon name="angle double right"/>Trilingual, fluent in English and Chinese, and conversational in Japanese</p></ScrollAnimation>
        <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200}><p className="text desc">I love to build aesthetically pleasing projects, find creative solutions to problems, and am an avid food adventurer and cat instagram follower. My goal for every project is to be visually appealing yet functional, creative yet intuitive.</p></ScrollAnimation> 
        <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200}><p className="text desc">I love traveling, gaming, and eating as many different kinds of food as possible! I’ve taught English in Japan, owned and operated a food business in Hawaii, and self-published a novel while in NYC.</p></ScrollAnimation>

        <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true}><h3 className="text">{`// Technical Skills`}</h3></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={100}><p className="text"><Icon name="angle double right"/>Languages & Frameworks - React, Redux, Javascript, Ruby, Rails, NodeJS, Express, HTML</p></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={100}><p className="text"><Icon name="angle double right"/>Databases - MongoDB, PostgreSQL, SQL</p></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={100}><p className="text"><Icon name="angle double right"/>Style - CSS, SASS, Bootstrap, Material IO, Semantic UI </p></ScrollAnimation>
      </div>
    </section>
  )
}