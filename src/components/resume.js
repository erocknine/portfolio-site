import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from 'semantic-ui-react'

export default function Resume() {
  return (
    <section className="resume-section">
      <div id="resume" className="resume-header-bar">
        <h1>RESUME</h1>
      </div>
      <div className="resume-content">
        <div className="resume-text">
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={200}><h2>EMPLOYMENT HISTORY</h2></ScrollAnimation>
          <div className="resume-history">
            <div>
              <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200}><h3>Bigeye Sushi</h3></ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
                <p className="resume-text-sub"><strong>Assistant Manager, Brooklyn, NY, Oct 2018 - Oct 2019</strong></p>
                <p className="resume-text-desc"><Icon name="angle double right"/>Managed staff, EOD financials, inventory, pop-up events, and food prep at Sushi restaurant in downtown Brooklyn</p>
              </ScrollAnimation>
            </div>
            
            <div>
              <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200}><h3>Banzai Phresh</h3></ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}> 
                <p className="resume-text-sub"><strong>Owner/Sole Proprietor, Honolulu, HI, Dec 2017 - June 2018</strong></p>
                <p className="resume-text-desc"><Icon name="angle double right"/>Managed and operated a 6-month pop-up restaurant in Ala Moana Mall, Hawaii.</p>
                <p className="resume-text-desc"><Icon name="angle double right"/>Overlooked restaurant design, customer service, cooking, financials, and logistical operation of the business. We averaged 100 customers a day, maintained a 30% profit margin, with 4.5 stars from reviews on yelp.</p>
              </ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200}><h3>Banzai Phresh</h3></ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
                <p className="resume-text-sub"><strong>Owner, Brooklyn, NY, Apr 2016 - September 2017</strong></p>
                <p className="resume-text-desc"><Icon name="angle double right"/>Managed and operated an outdoor food booth for two seasons at Smorgasburg Market, Brooklyn.</p>
                <p className="resume-text-desc"><Icon name="angle double right"/>Overlooked booth design, customer service, cooking, financials, and logistical operation of the business. We averaged 200 customers a day and maintained a 25% profit margin.</p>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={200}><h2>EDUCATION</h2></ScrollAnimation>
          
          <div className="resume-education">
            <ScrollAnimation animateIn="flipInX" animateOnce={true} delay={200}><h3>Flatiron Coding School</h3></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={400}><p className="resume-text-desc"><Icon name="angle double right"/>Full Stack Web Development, JavaScript, Ruby on Rails, SQL, and React</p></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={300}><h3>Soka University of America</h3></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={400}><p className="resume-text-desc"><Icon name="angle double right"/>Bachelor of Arts: Social and Behavioral Sciences: 3.8 GPA, Magna Cum Laude</p></ScrollAnimation>
          </div>
        </div>
        <div className="navbar-tab" />
      </div>
    </section>
  )
}