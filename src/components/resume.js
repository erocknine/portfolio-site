import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from 'semantic-ui-react'

export default function Resume() {
  return (
    <section className="resume-section">
      <div id="resume" className="header-bar">
        <h1>RESUME</h1>
      </div>
      <div className="resume-content">

        <div className="resume-text">
          <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={200}><h2>EXPERIENCE</h2></ScrollAnimation>
          <div className="resume-history">
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>Bigeye Sushi</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Assistant Manager, Brooklyn, NY, October 2018 - October 2019</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Managed staff, EOD financials, inventory, pop-up events, and food prep at Sushi restaurant in downtown Brooklyn.</p></ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>Banzai Phresh</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}> <p className="resume-text-sub"><strong>Owner/Sole Proprietor, Honolulu, HI, December 2017 - June 2018</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Owned and operated a 6-month pop-up restaurant in Ala Moana Mall, Hawaii.</p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Oversaw restaurant design, customer service, cooking, financials, and overall logistical operation of the business. We averaged 100 customers a day, maintained a 30% profit margin, with 4.5 stars from reviews on yelp.</p></ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>Banzai Phresh</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Owner/Sole Proprietor, Brooklyn, NY, April 2016 - September 2017</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Owned and operated an outdoor food booth for two seasons at Smorgasburg Market, Brooklyn.</p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Oversaw booth design, customer service, cooking, financials, and overall logistical operation of the business. We averaged 200 customers a day and maintained a 25% profit margin.</p></ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>Zipcar</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Fleet Associate, Brooklyn, NY, 2015</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Accomplished daily tasks of maintaining and managing Zipcars all around Brooklyn. Issues included exploring unknown problems, fixing flat tires, dead batteries, oil changes, and retrieving cars.</p></ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>Kings of Fortune</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Writer, Brooklyn, NY, 2014</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Self-published a fiction novel titled 'Kings of Fortune' on Amazon Createspace.</p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Received positive reviews with 5 stars on San Francisco Book Review, 4 of 5 stars on Portland Book Review, and featured review on Kirkus magazine.</p></ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>Nova Jibun Mirai</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>English Teacher, Tokyo, Japan, 2013</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Organized lessons and facilitated English-learning conversations/discussions for students from children to elders, in small groups of four at a time.</p></ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={200}><h2>EDUCATION</h2></ScrollAnimation>
          <div className="resume-education">
            <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>Flatiron Software Engineering School</h3></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>February 2020 - May 2020</strong></p></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={400}><p className="resume-text-desc"><Icon name="angle double right"/>Full Stack Web Development, JavaScript, Ruby on Rails, SQL, and React</p></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={300}><h3>Soka University of America</h3></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>August 2008 - May 2012 </strong></p></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={400}><p className="resume-text-desc"><Icon name="angle double right"/>Bachelor of Arts: Social and Behavioral Sciences: 3.8 GPA, Magna Cum Laude</p></ScrollAnimation>
          </div>
        </div>

      </div>
    </section>
  )
}