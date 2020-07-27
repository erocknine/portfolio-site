import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
// import { Icon } from 'semantic-ui-react'

export default function Resume() {
  return (
    <section className="resume-section">
      <div id="resume" className="header-bar">
        <h1 className="resume-header">RESUME</h1>
      </div>
      <div className="resume-content">

        <div className="resume-text">
          <div className="resume-download">
            <a href="https://ericskcheung.com/ERIC_SK.CHEUNG_RESUME.pdf" target="_blank" rel="noopener noreferrer">DOWNLOADABLE</a>
          </div>
          <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={200}><h2>EXPERIENCE</h2></ScrollAnimation>
          <div className="resume-history">
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>FLATIRON SCHOOL</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Software Engineering Student, Brooklyn, NY, February 2020 - June 2020</strong></p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Developed</strong> full-stack web applications using React, Redux, Javascript, Ruby, Rails, SQL, PostgreSQL, HTML, CSS, SASS</p></ScrollAnimation>
              
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Completed</strong> collaboration projects using APIs & frameworks such as AWS S3 Cloud, Google Directions API, Google Geocode API, Geolocation API, Yelp Search API, Leaflet API, Guidebox API, CSS Transition Group, Semantic UI</p></ScrollAnimation>
              
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Engineered</strong> codebase synchronizing Geolocation & Google Geocode API to translate latitude/longitude coordinates into common addresses. Also incorporated Google Directions API by decoding address polylines and accessing response keys, to be plotted on map provided by Leaflet API.</p></ScrollAnimation>
              
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Designed</strong> page layouts & user interface for multiple collaboration projects. Created custom hero images & logos with Adobe illustrator, implemented custom SVG images & icons into React components, executed page styling using custom CSS/SASS working in unison with React conditional renders, and Semantic UI for uniform forms and icons.</p></ScrollAnimation>
              
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Collaborated</strong> functionality between AWS S3 and Rails Active Storage to store user images on cloud bucket for convenient access by Rails REST API. Response URL provided by AWS S3 allowed users a preview of image after upload before persisting to post.</p></ScrollAnimation>
              
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Incorporated</strong> React transition group library to allow transition animations between conditional renders of DOM elements in React. Implemented React-Sortable-Hoc library in combination with Array-Move package to provide user capability of dragging components within DOM.</p></ScrollAnimation>
              
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Architected</strong> a Rails back-end call to YELP Search API to provide restaurant suggestions at user requested coordinates, and return response data to be visually displayed on map provided by Leaflet API on front-end. Utilized specific URL parameters for specific conditions in requests.</p></ScrollAnimation>

            </div>
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>BIGEYE SUSHI</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Manager, Brooklyn, NY, October 2018 - October 2019</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Managed</strong> staff, EOD financials, inventory, and food prep at Sushi restaurant in downtown Brooklyn.</p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Coordinated</strong> and directed pop-up events at WeWork facilities and street fairs, managing staff, food supply and setup, and transportation to event sites.</p></ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>BANZAI PHRESH</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}> <p className="resume-text-sub"><strong>Owner/Sole Proprietor, Honolulu, HI, December 2017 - June 2018</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Owned</strong> and operated a 6-month pop-up restaurant in Ala Moana Mall, Hawaii.</p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Oversaw</strong> restaurant design, customer service, cooking, financials, and overall logistical operation of the business. We averaged 100 customers a day, maintained a 30% profit margin, with 4.5 stars from reviews on yelp.</p></ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Owner/Sole Proprietor, Brooklyn, NY, April 2016 - September 2017</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Owned</strong> and operated an outdoor food booth for two seasons at Smorgasburg Market, Brooklyn.</p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Oversaw</strong> booth design, customer service, cooking, financials, and overall logistical operation of the business. We averaged 200 customers a day and maintained a 25% profit margin.</p></ScrollAnimation>
            </div>
            {/* <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>Zipcar</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Fleet Associate, Brooklyn, NY, 2015</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Accomplished daily tasks of maintaining and managing Zipcars all around Brooklyn. Issues included exploring unknown problems, fixing flat tires, dead batteries, oil changes, and retrieving cars.</p></ScrollAnimation>
            </div> */}
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>KINGS OF FORTUNE</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Writer, Brooklyn, NY, 2014</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Self-published</strong> a fiction novel titled 'Kings of Fortune' on Amazon Createspace.</p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Received</strong> positive reviews with 5 stars on San Francisco Book Review, 4 of 5 stars on Portland Book Review, and featured review on Kirkus magazine.</p></ScrollAnimation>
            </div>
            {/* <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>Nova Jibun Mirai</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>English Teacher, Tokyo, Japan, 2013</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><Icon name="angle double right"/>Organized lessons and facilitated English-learning conversations/discussions for students from children to elders, in small groups of four at a time.</p></ScrollAnimation>
            </div> */}
          </div>

          <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={200}><h2>EDUCATION</h2></ScrollAnimation>
          <div className="resume-education">
            <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>FLATIRON SOFTWARE ENGINEERING SCHOOL</h3></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>February 2020 - May 2020</strong></p></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={400}><p className="resume-text-desc">Full Stack Web Development, JavaScript, Ruby on Rails, SQL, and React</p></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={300}><h3>SOKA UNIVERSITY OF AMERICA</h3></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>August 2008 - May 2012 </strong></p></ScrollAnimation>
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={400}><p className="resume-text-desc">Bachelor of Arts: Social and Behavioral Sciences: 3.8 GPA, Magna Cum Laude</p></ScrollAnimation>
          </div>
        </div>

      </div>
    </section>
  )
}