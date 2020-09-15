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
              <h3>HIES INC.</h3>
              <p className="resume-text-sub"><strong>Freelance Web Developer / UI Designer • Brooklyn, NY • July 2020 - August 2020</strong></p>

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

              <p className="resume-text-info">Curbalert allows users to post images and details of items people are giving or throwing away in their area, becoming viewable on a public map. Built with Javascript, React & Redux, Ruby on Rails, PostgreSQL, React Router, Geolocation, Google Geocode & Directions, Leaflet, AWS S3.</p>

              <p className="resume-text-desc"><strong>Engineered</strong> codebase synchronizing Geolocation & Google Geocode API to obtain coordinates. Decoded polyline from Google Directions response to draw directions between user coordinates and item.</p>

              <p className="resume-text-desc"><strong>Collaborated</strong> functionality between AWS S3 Cloud & Rails Active Storage to store user post images on cloud bucket through Rails back-end API.</p>

              <p className="resume-text-desc"><strong>Incorporated</strong> React transition group library for transition animations by conditionally rendered DOM elements. Implemented React-Sortable-Hoc library in combination with Array-Move package for draggable components within DOM.</p>
            </div>

            <div>
              <h3>HANGOUTS</h3>
              <p className="resume-text-sub"><strong>May 2020</strong></p>

              <p className="resume-text-info">Hangouts allows friended users to schedule meetups at Yelp restaurants in areas mutually close to all parties. Built with Javascript, React, Ruby on Rails, PostgreSQL, React Router, Geolocation, Google Geocode, Leaflet.</p>

              <p className="resume-text-desc"><strong>Architected</strong> a Rails back-end call to YELP Search API to provide restaurant suggestions at user current coordinates and requested coordinates, before plotting to Leaflet API maps.</p>

              <p className="resume-text-desc"><strong>Composed</strong> function to calculate a midpoint location between groups of users from coordinate data retrieved by Geolocation & Google Geocode API.</p>
            </div>

            <div>
              <h3>KARA-OK!</h3>
              <p className="resume-text-sub"><strong>March 2020</strong></p>

              <p className="resume-text-info">KARA-OK! allows users to search & save song lyrics to playlists for a convenient sing-along session. Built with Ruby, Rails, PostgreSQL, Lyrics API.</p>

              <p className="resume-text-desc"><strong>Built</strong> back-end API for users to search for song lyrics by requesting from Lyrics API. JSON responses are extracted and Regex to generate dynamic song lyric pages to be added to user's playlists.</p>

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