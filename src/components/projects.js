import React, { useState } from 'react'

export default function Projects() {
  return (
    <section className="projects-section">
      <div id="projects" className="projects-header-bar">
        <h1 className="projects-header">PROJECTS</h1>
      </div>
      <div className="panels">
        <Panel number={'one'} title={"CurbAlert"} text={'CurbAlert allows users to view or create posts of things people are giving or throwing away in their area.'} tech={'React JS, Ruby Rails, PostgreSQL, Geolocation API, Google Directions API, Leaflet API, AWS S3, React CSS Transition Group, Semantic UI, React Sortable HOC'}/>
        <Panel number={'two'} title={"Hangouts"} text={'Hangouts allows friended users to view each other’s locations on map to conveniently schedule hangouts at restaurants mutually close to all parties.'} tech={'React JS, Ruby Rails, PostgreSQL, Yelp API, Geolocation API, Leaflet API, React CSS Transition Group, Semantic UI'}/>
        <Panel number={'three'} title={"Super Pet Bros. Unleashed"} text={'Super Pet Bros. Unleashed allows users to create a profile for their pet, set personality type, stats and moves, to battle other pet profiles in a pokemon-style gameplay.'} tech={'Javascript, Ruby Rails, PostgreSQL'}/>
        <Panel number={'four'} title={"KARA-OK!"} text={'KARA-OK! allows users to search for song lyrics and youtube videos, and add them to playlists for a convenient sing-along session.'} tech={'Ruby Rails, PostgreSQL, Lyrics API'}/>
        <div className="navbar-tab"></div>
      </div>
    </section>
  )
}

const Panel = ({ number, title, text, tech }) => {

  const [open, setOpen] = useState(false)

  return (
      <div className={open ? `panel panel-${number} open-active`:`panel panel-${number}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <div></div>
        <h2 className="project-title">{title}</h2>
        <p className="project-text">{text}</p>
        <p className="project-tech">{tech}</p>
      </div>
  )
}