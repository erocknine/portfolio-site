import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import '../style/resume.scss'
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
            <a href="https://ericskcheung.com/ERIC_SK_CHEUNG_RESUME.pdf" target="_blank" rel="noopener noreferrer">DOWNLOADABLE</a>
          </div>
          <ScrollAnimation offset={25} animateIn="fadeInDown" animateOnce={true} delay={200}><h2>EXPERIENCE</h2></ScrollAnimation>
          <div className="resume-history">
            <div>
              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>HIES Inc.</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Freelance Front-end Developer / UI Designer, Brooklyn, NY, July 2020 - August 2020</strong></p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-info">Designed & created company website for HIES Inc., an environmental services company, to be modern, manageable, and business & user-friendly. Built using React JS & Redux, SASS, and PIXI.js.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Incorporated</strong> PIXI.js to create realistic water effect on hero image, and chose natural color palette following environmental theme. Styled page with custom SASS, React transition group for dropdown transitions, and made responsive on mobile and tablet. Recreated hero image with Adobe Photoshop for higher resolution.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Reorganized</strong> HIES services (over 20) into four main categories, created individual pages per category, and composed cursory descriptions & allotted relevant images for each. Added keyword search functionality in services to allow users to conveniently search for a service.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Utilized</strong> React Router for URL address routing. Implemented EmailJS to allow clients to email HIES contact directly from website without a back-end.</p></ScrollAnimation>



              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>PROJECT: CURBALERT</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Full Stack Developer, Brooklyn, NY, June 2020</strong></p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-info">Curbalert allows users to post images and details of items people are giving or throwing away in their area, becoming viewable on a public map. Built using React JS & Redux front-end and Ruby & Rails with PostgreSQL back-end.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Engineered</strong> codebase synchronizing Geolocation & Google Geocode API to translate latitude/longitude coordinates into common addresses. Also incorporated Google Directions API by decoding address polylines and accessing response keys to be plotted on map provided by Leaflet API.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Collaborated</strong> functionality between AWS S3 and Rails Active Storage to store user images on cloud bucket for convenient access by Rails REST API. Response URL provided by AWS S3 allowed users a preview of image after upload before persisting to post.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Incorporated</strong> React transition group library to allow transition animations between conditional renders of DOM elements in React. Implemented React-Sortable-Hoc library in combination with Array-Move package to provide user capability of dragging components within DOM.</p></ScrollAnimation>


              <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>PROJECT: HANGOUTS</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Full Stack Developer, Brooklyn, NY, May 2020</strong></p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-info">Hangouts allows friended users to conveniently schedule get-togethers with Yelp suggested restaurants in areas mutually close to all parties. Built using React JS & Redux front-end and Ruby & Rails with PostgreSQL back-end.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Architected</strong> a Rails back-end call to YELP Search API to provide restaurant suggestions at user requested coordinates, and return response data to be visually displayed on map provided by Leaflet API on front-end. Utilized specific URL parameters for specific conditions in requests.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Composed</strong> function to calculate a midpoint location between a group of users from coordinate data retrieved by Geolocation & Google Geocode API. Coordinates plotted to Leaflet map, simultaneously passing parameters to YELP Search API.</p></ScrollAnimation>


              

              {/* <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>SUPER PET BROS. UNLEASHED</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Full Stack Developer, Brooklyn, NY, April 2020</strong></p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-info">In this game, users can create a profile for their pet, set personality type, stats and moves, and battle other users' pets in pokemon-style gameplay. Built using JavaScript front-end and Ruby & Rails with PostgreSQL back-end.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Implemented</strong> battle animations, sound effects and background music using a combination of JavaScript functions working harmoniously with CSS. Created web audio player allowing user to play multiple tracks during battle with pause, play, and skip with JavaScript class utilizing JavaScript's Audio Constructor.</p></ScrollAnimation> */}


              {/* <ScrollAnimation offset={25} animateIn="flipInX" animateOnce={true} delay={200}><h3>KARA-OK!</h3></ScrollAnimation>
              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>Full Stack Developer, Brooklyn, NY, March 2020</strong></p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-info">KARA-OK! allows users to search for song lyrics and add them to playlists for a convenient sing-along session. Built using Ruby & Rails with PostgreSQL.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Built</strong> back-end API for users to search for song lyrics by requesting from Lyrics API. JSON responses are extracted and Regex to generate dynamic song lyric pages to be added to user's playlists.</p></ScrollAnimation>

              <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-desc"><strong>Implemented</strong> user authentication using Rails Bcrypt for password encryption.</p></ScrollAnimation>
               */}


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
            <ScrollAnimation offset={25} animateIn="fadeIn" animateOnce={true} delay={200}><p className="resume-text-sub"><strong>February 2020 - June 2020</strong></p></ScrollAnimation>
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