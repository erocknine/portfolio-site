import React from "react";
import "../style/resume.scss";

export default function Resume() {
  return (
    <section className="resume-section">
      <div id="resume" />
      <div className="header-bar">
        <h1 className="resume-header">RESUME</h1>
      </div>

      <div className="resume-content">
        <div className="resume-download">
          <a
            href="https://ericskcheung.com/ERIC_SAIKIT_CHEUNG_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOWNLOADABLE
          </a>
        </div>

        <div className="resume-text">
          <h2>EXPERIENCE</h2>
          <div className="resume-history">
            <div>
              <h3>MIKI HOUSE Americas</h3>
              <p className="resume-text-sub">
                Web Developer • Brooklyn, NY • September 2020 - Present
              </p>

              <p className="resume-text-info">
                Develop custom features for client's Shopify store using Liquid,
                Javascript & CSS.
              </p>

              <p className="resume-text-desc">
                <strong>Designed</strong> & implemented Upsell & Cross-sell
                features using Limespot application analytics.
              </p>

              <p className="resume-text-desc">
                <strong>Refined</strong> search feature functionality, related
                products feature, and styled UI components to user stories.
              </p>

              <p className="resume-text-desc">
                <strong>Performed</strong> unit and integration testing of
                features.
              </p>
            </div>

            <div>
              <h3>HIES INC.</h3>
              <p className="resume-text-sub">
                Contract Web Developer / UI Designer • Brooklyn, NY • July 2020
                - August 2020
              </p>

              <p className="resume-text-info">
                Designed & built company website for HIES Inc., an environmental
                services company, to be modern, manageable, and business &
                user-friendly. Built using React JS & Redux, SASS, PIXI.js,
                React Router, and EmailJS.
              </p>

              <p className="resume-text-desc">
                <strong>Incorporated</strong> PIXI.js to create realistic water
                motion effect on hero image, and chose natural color palette
                following environmental theme. Recreated hero image with Adobe
                Photoshop for higher resolution. Styled page and made responsive
                with custom SASS.
              </p>

              <p className="resume-text-desc">
                <strong>Organized</strong> company’s list of over 20 services
                into 4 categories improving website manageability, and added a
                keyword search feature for users to conveniently search
                services.
              </p>

              <p className="resume-text-desc">
                <strong>Utilized</strong> React Router for URL page routing, and
                EmailJS for personalized contact form.
              </p>
            </div>

            <div>
              <h3>BANZAI PHRESH</h3>
              <p className="resume-text-sub">April 2016 - June 2018</p>
              <p className="resume-text-info">
                Owned & operated restaurants at Smorgasburg Market, NY, and Ala
                Moana Mall, Hawaii. Resolved logistics including service &
                product quality management, restaurant design, inventory
                deadlines, divison of labor, and time management.
              </p>
              <p className="resume-text-sub">
                Owner / Sole Proprietor • Honolulu, HI • December 2017 - June
                2018
              </p>
              <p className="resume-text-info">
                Operated a 6-month pop-up restaurant in Ala Moana Mall, Hawaii.
              </p>
              <p className="resume-text-desc">
                <strong>Served</strong> 100 average customers a day, maintained
                a 30% profit margin, with 4.5 star reviews on yelp.
              </p>

              <div>
                <p className="resume-text-sub">
                  Owner / Sole Proprietor • Brooklyn, NY • April 2016 -
                  September 2017
                </p>
                <p className="resume-text-info">
                  Operated an outdoor food booth for two seasons at Smorgasburg
                  Market, Brooklyn.
                </p>
                <p className="resume-text-desc">
                  <strong>Served</strong> 200 average customers a day and
                  maintained a 25% profit margin.
                </p>
              </div>

              {/* <div>
                <h3>KINGS OF FORTUNE</h3>
                <p className="resume-text-sub">
                  Writer • Brooklyn, NY • 2014 - 2015
                </p>
                <p className="resume-text-info">
                  Self-published a fiction novel titled 'Kings of Fortune' on
                  Amazon Createspace.
                </p>
                <p className="resume-text-desc">
                  <strong>Received</strong> positive reviews with 5 stars on San
                  Francisco Book Review, 4 of 5 stars on Portland Book Review,
                  and featured review on Kirkus magazine.
                </p>
              </div> */}
            </div>
          </div>

          <h2>TECHNICAL PROJECTS</h2>
          <div className="resume-history">
            <div>
              <h3>FEMMECUBATOR</h3>

              <p className="resume-text-info">
                Mentorship hub for women entering tech industry. Built with
                Javascript, React, Node, MongoDB, Material, JEST.
              </p>

              <p className="resume-text-desc">
                <strong>Built</strong> UI components with JEST unit tests,
                Storybook, WCAG, browser compatibility, and responsive testing.
              </p>

              <p className="resume-text-desc">
                <strong>Agile</strong> work environment with daily standups,
                assigning user stories, PR code reviews, collaborative testing.
              </p>
            </div>

            <div>
              <h3>CURBALERT</h3>
              <p className="resume-text-info">
                Users can post images & details of unwanted items onto a public
                map. Built with Javascript, React & Redux, Ruby on Rails,
                PostgreSQL, React Router, Geolocation, Google Geocode &
                Directions, Leaflet, AWS S3.
              </p>

              <p className="resume-text-desc">
                <strong>Codebase</strong> charts user coordinates on map by
                utilizing Geolocation & Google Geocode API.
              </p>

              <p className="resume-text-desc">
                <strong>Displays</strong> directions between user and items by
                decoding polyline using Google Directions API.
              </p>

              <p className="resume-text-desc">
                <strong>Incorporated</strong> AWS S3 Cloud with Rails Active
                Storage for storing user and item images on cloud.
              </p>
            </div>

            <div>
              <h3>HANGOUTS</h3>
              <p className="resume-text-info">
                Users can plan meetups at location calculated to be mutually
                close distance between all participants. Built with Javascript,
                React, Ruby on Rails, PostgreSQL, React Router, Geolocation,
                Google Geocode, Leaflet.
              </p>

              <p className="resume-text-desc">
                <strong>Implemented</strong> YELP Search API for restaurant
                suggestions in RESTful Rails backend.
              </p>

              <p className="resume-text-desc">
                <strong>Composed</strong> logic to calculate a midpoint location
                between groups of users from coordinate data retrieved by
                Geolocation & Google Geocode API.
              </p>
            </div>
          </div>

          <h2>EDUCATION</h2>
          <div className="resume-education">
            <div>
              <h3>FLATIRON SOFTWARE ENGINEERING SCHOOL</h3>
              <p className="resume-text-sub">
                Brooklyn, NY • February 2020 - June 2020
              </p>
              <p className="resume-text-desc">
                Full Stack Web Development, JavaScript, Ruby on Rails, SQL, and
                React
              </p>
            </div>

            <div>
              <h3>SOKA UNIVERSITY OF AMERICA</h3>
              <p className="resume-text-sub">
                Aliso Viejo, CA • August 2008 - May 2012{" "}
              </p>
              <p className="resume-text-desc">
                Bachelor of Arts: Social and Behavioral Sciences: 3.8 GPA, Magna
                Cum Laude
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
