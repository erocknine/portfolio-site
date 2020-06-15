import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';

export default function Projects() {

  const karaok = ["images/project-images/kara-ok/kara01.png", "images/project-images/kara-ok/kara02.png", "images/project-images/kara-ok/kara03.png", "images/project-images/kara-ok/kara04.png"]
  const superpet = ["images/project-images/super-pet/pet01.png", "images/project-images/super-pet/pet02.png", "images/project-images/super-pet/pet03.png", "images/project-images/super-pet/pet04.png"]
  const hangouts = ["images/project-images/hangouts/hangouts01.png", "images/project-images/hangouts/hangouts02.png", "images/project-images/hangouts/hangouts03.png", "images/project-images/hangouts/hangouts04.png"]
  const curbalert = ["images/project-images/curbalert/curbalert01.png", "images/project-images/curbalert/curbalert02.png", "images/project-images/curbalert/curbalert03.png", "images/project-images/curbalert/curbalert04.png"]

  return (
    <section className="projects-section">
      <div id="projects" className="header-bar">
        <h1 className="projects-header">PROJECTS</h1>
      </div>
      <div className="projects-content">
        <div className="panels">
          <Panel title={"KARA-OK!"} text={'A joyful night of singing your favorite songs can become disappointing if you can\'t remember the lyrics. KARA-OK! saves the night by allowing users to search for song lyrics and add them to playlists for a convenient sing-along session.'} tech={'Ruby Rails, PostgreSQL, Lyrics API'} images={karaok}/>
          <Panel title={"Super Pet Bros. Unleashed"} text={'If you\'ve ever had a friend who claimed their pet is better than yours, then have no fear because Super Pet Bros. is here! In this game, users can create a profile for their pet, set personality type, stats and moves, and battle other pets in a pokemon-style gameplay.'} tech={'Javascript, Ruby Rails, PostgreSQL'} images={superpet}/>
          <Panel title={"Hangouts"} text={'Hangouts allows friended users to conveniently schedule hangouts at restaurants in areas mutually close to all parties. Hangouts will suggest restaurants with an integrated Yelp search at a conveniently calculated location.'} tech={'React JS, Ruby Rails, PostgreSQL, Yelp API, Geolocation API, Leaflet API, React CSS Transition Group, Semantic UI'} images={hangouts}/>
          <Panel title={"CurbAlert"} text={'Curbalert allows users to post images and details of things people are giving or throwing away in their area, becoming viewable on a public map. Assisted by Google Directions, users can make their way to hidden treasures that are simply going to waste.'} tech={'React JS, Ruby Rails, PostgreSQL, Google Directions API, Geolocation API, Leaflet API, AWS S3 Cloud, React CSS Transition Group, Semantic UI, React Sortable HOC'} images={curbalert}/>
        </div>
        <div className="navbar-tab" />
      </div>
    </section>
  )
}

const Panel = ({ number, title, text, tech, images }, props) => {

  const [open, setOpen] = useState(false)

  const renderSlides = () => {

    return images.map(image => 
    <div onClick={() => setOpen(true)}>
      <img src={image} alt={title} className="blog-slide"/>
    </div>
    )
  }

  return (
      <div className={open ? `panel open-active`:`panel`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <div className="project-slides">
          <Carousel infiniteLoop={true} showThumbs={false}>
            {renderSlides()}
          </Carousel>
        </div>
        <h2 className="project-title">{title}</h2>
        <p className="project-text">{text}</p>
        <p className="project-tech">{tech}</p>
      </div>
  )
}

{/* <a href="#" target="_blank" rel="noopener noreferrer" className="blog-link">
  VIEW DEMO VIDEO
</a> */}