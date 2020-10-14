import React from 'react'
import '../style/resume.scss'

export default function Resume() {
  return (
    <section className="resume-section">
      <div id="resume" />
      <div className="header-bar">
        <h1 className="resume-header">RESUME</h1>
      </div>

      <div className="resume-content">
        <div className="resume-text">
          <div className="resume-download">
            <a href="https://ericskcheung.com/ERIC_SAIKIT_CHEUNG_RESUME.pdf" target="_blank" rel="noopener noreferrer">DOWNLOADABLE</a>
          </div>

          <h2>EXPERIENCE</h2>
          <div className="resume-history">
            
            <div>
              <h3>MIKI HOUSE Americas</h3>
              <p className="resume-text-sub"><strong>Freelance Web Developer • Brooklyn, NY • September 2020 - Present</strong></p>

              <p className="resume-text-info">Develop custom features for client's Shopify store using Liquid, Javascript & CSS.</p>

              <p className="resume-text-desc"><strong>Designed</strong> & implemented Upsell & Cross-sell features using Limespot application analytics.</p>

              <p className="resume-text-desc"><strong>Refined</strong> search feature filters, related items feature, and restyled specific UI components.</p>
            </div>

            <div>
              <h3>HIES INC.</h3>
              <p className="resume-text-sub"><strong>Contract Web Developer / UI Designer • Brooklyn, NY • July 2020 - August 2020</strong></p>

              <p className="resume-text-info">Designed & built company website for HIES Inc., an environmental services company, to be modern, manageable, and business & user-friendly. Built using React JS & Redux, SASS, PIXI.js, React Router, and EmailJS.</p>

              <p className="resume-text-desc"><strong>Incorporated</strong> PIXI.js to create realistic water motion effect on hero image, and chose natural color palette following environmental theme. Recreated hero image with Adobe Photoshop for higher resolution. Styled page and made responsive with custom SASS.</p>

              <p className="resume-text-desc"><strong>Organized</strong> company’s list of over 20 services into 4 categories improving website manageability, and added a keyword search feature for users to conveniently search services.</p>

              <p className="resume-text-desc"><strong>Utilized</strong> React Router for URL page routing, and EmailJS for personalized contact form.</p>
            </div>

            {/* <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>BIGEYE SUSHI</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Manager • Brooklyn, NY • October 2018 - October 2019</strong></p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Managed</strong> staff, EOD financials, inventory, and food prep at Sushi restaurant in downtown Brooklyn.</p></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Coordinated</strong> and directed pop-up events at WeWork facilities and street fairs, managing staff, food supply and setup, and transportation to event sites.</p></ScrollAnimation>
            </div> */}
            
            <div>
              <h3>BANZAI PHRESH</h3>
              <p className="resume-text-info">Owned & operated restaurants at Smorgasburg Market, NY, and Ala Moana Mall, Hawaii. Resolved logistics including service & product quality management, restaurant design, inventory deadlines, divison of labor, and time management.</p>
              <p className="resume-text-sub"><strong>Owner/Sole Proprietor • Honolulu, HI • December 2017 - June 2018</strong></p>
              <p className="resume-text-info">Operated a 6-month pop-up restaurant in Ala Moana Mall, Hawaii.</p>
              <p className="resume-text-desc"><strong>Served</strong> 100 average customers a day, maintained a 30% profit margin, with 4.5 star reviews on yelp.</p>
            </div>
            <div>
              <p className="resume-text-sub"><strong>Owner/Sole Proprietor • Brooklyn, NY • April 2016 - September 2017</strong></p>
              <p className="resume-text-info">Operated an outdoor food booth for two seasons at Smorgasburg Market, Brooklyn.</p>
              <p className="resume-text-desc"><strong>Served</strong> 200 average customers a day and maintained a 25% profit margin.</p>
            </div>
            
            <div>
              <h3>KINGS OF FORTUNE</h3>
              <p className="resume-text-sub"><strong>Writer • Brooklyn, NY • 2014 - 2015</strong></p>
              <p className="resume-text-info">Self-published a fiction novel titled 'Kings of Fortune' on Amazon Createspace.</p>
              <p className="resume-text-desc"><strong>Received</strong> positive reviews with 5 stars on San Francisco Book Review, 4 of 5 stars on Portland Book Review, and featured review on Kirkus magazine.</p>
            </div>
      
          </div>

          <h2>TECHNICAL PROJECTS</h2>
          <div className="resume-history">
          <div>
              <h3>CURBALERT</h3>
              <p className="resume-text-sub"><strong>June 2020</strong></p>

              <p className="resume-text-info">Users can post images & details of unwanted items onto a public map. Built with Javascript, React & Redux, Ruby on Rails, PostgreSQL, React Router, Geolocation, Google Geocode & Directions, Leaflet, AWS S3.</p>

              <p className="resume-text-desc"><strong>Codebase</strong> charts user coordinates on map by utilizing Geolocation & Google Geocode API.</p>

              <p className="resume-text-desc"><strong>Displays</strong> directions between user and items by decoding polyline using Google Directions API.</p>

              <p className="resume-text-desc"><strong>Stores </strong> user images by on AWS S3 Cloud collaborating with built-in Rails Active Storage.</p>
            </div>

            <div>
              <h3>HANGOUTS</h3>
              <p className="resume-text-sub"><strong>May 2020</strong></p>

              <p className="resume-text-info">Users can plan meetups at location calculated to be mutually close distance between all participants. Built with Javascript, React, Ruby on Rails, PostgreSQL, React Router, Geolocation, Google Geocode, Leaflet.</p>

              <p className="resume-text-desc"><strong>Implemented</strong> YELP Search API for restaurant suggestions in RESTful Rails backend.</p>

              <p className="resume-text-desc"><strong>Composed</strong> logic to calculate a midpoint location between groups of users from coordinate data retrieved by Geolocation & Google Geocode API.</p>
            </div>

            <div>
              <h3>KARA-OK!</h3>
              <p className="resume-text-sub"><strong>March 2020</strong></p>

              <p className="resume-text-info">Users can search & save song lyrics to personalized playlists. Built with Ruby, Rails, PostgreSQL, Lyrics API.</p>

              <p className="resume-text-desc"><strong>Built</strong> Rails backend to store song & lyric data requested from Lyrics API.</p>

              <p className="resume-text-desc"><strong>Implemented</strong> user authentication using Rails Bcrypt for password encryption.</p>
            </div>

          </div>

          <h2>EDUCATION</h2>
          <div className="resume-education">
            <h3>FLATIRON SOFTWARE ENGINEERING SCHOOL</h3>
            <p className="resume-text-sub"><strong>Brooklyn, NY • February 2020 - June 2020</strong></p>
            <p className="resume-text-desc">Full Stack Web Development, JavaScript, Ruby on Rails, SQL, and React</p>
            <h3>SOKA UNIVERSITY OF AMERICA</h3>
            <p className="resume-text-sub"><strong>Aliso Viejo, CA • August 2008 - May 2012 </strong></p>
            <p className="resume-text-desc">Bachelor of Arts: Social and Behavioral Sciences: 3.8 GPA, Magna Cum Laude</p>
          </div>
        </div>

      </div>
    </section>
  )
}