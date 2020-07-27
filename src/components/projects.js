import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import CurbalertDoc from './projects/curbalert'
import HangoutsDoc from './projects/hangouts'
import SuperpetDoc from './projects/superpet'
import KaraDoc from './projects/kara'
import GoroomDoc from './projects/goroom'
import HiesDoc from './projects/hies'


export default function Projects() {
  const [open, setOpen] = useState(false);
  const [projectDoc, setProjectDoc] = useState("")
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState("")

  const handleProject = (projectCheck) => {
    if(projectDoc === "") {
      setOpen(true)
    }
    if(projectDoc === projectCheck) {
      setOpen(false)
      setProjectDoc("")
    }
    if(projectDoc !== projectCheck) {
      setProjectDoc(`${projectCheck}`)
    }
  }

  return (
    <section className="projects-section">
      <div id="projects" className="header-bar">
        <h1 className="projects-header">PROJECTS</h1>
      </div>
      <div className="projects-content">
        <div className="projects-cards">

          <AnchorLink href={ open && projectDoc === "curbalert" ? null:"#curbalert" } className="projects-card curbalert">
            <Card project={projects[0]} hover={hover} active={active} projectDoc={projectDoc} projectName={"curbalert"} handleProject={handleProject} setHover={setHover} setActive={setActive}/>
          </AnchorLink>
          <CurbalertDoc project={projects[0]} projectDoc={projectDoc} projectName={"curbalert"} handleProject={handleProject}/>

          <AnchorLink href={ open && projectDoc === "hangouts" ? null:"#hangouts" } className="projects-card hangouts">
            <Card project={projects[1]} hover={hover} active={active} projectDoc={projectDoc} projectName={"hangouts"} handleProject={handleProject} setHover={setHover} setActive={setActive}/>
          </AnchorLink>
          <HangoutsDoc project={projects[1]} projectDoc={projectDoc} projectName={"hangouts"} handleProject={handleProject}/>
          
          <AnchorLink href={ open && projectDoc === "superpet" ? null:"#superpet" } className="projects-card superpet">
            <Card project={projects[2]} hover={hover} active={active} projectDoc={projectDoc} projectName={"superpet"} handleProject={handleProject} setHover={setHover} setActive={setActive}/>
          </AnchorLink>
          <SuperpetDoc project={projects[2]} projectDoc={projectDoc} projectName={"superpet"} handleProject={handleProject}/>

          <AnchorLink href={ open && projectDoc === "kara" ? null:"#kara" } className="projects-card kara">
            <Card project={projects[3]} hover={hover} active={active} projectDoc={projectDoc} projectName={"kara"} handleProject={handleProject} setHover={setHover} setActive={setActive}/>
          </AnchorLink>
          <KaraDoc project={projects[3]} projectDoc={projectDoc} projectName={"kara"} handleProject={handleProject}/>

          <AnchorLink href={ open && projectDoc === "hies" ? null:"#anchor" } className="projects-card hies">
            <Card project={projects[4]} hover={hover} active={active} projectDoc={projectDoc} projectName={"hies"} handleProject={handleProject} setHover={setHover} setActive={setActive}/>
          </AnchorLink>
          <HiesDoc project={projects[4]} projectDoc={projectDoc} projectName={"hies"} handleProject={handleProject}/>

          <AnchorLink href={ open && projectDoc === "goroom" ? null:"#anchor" } className="projects-card goroom">
            <Card project={projects[5]} hover={hover} active={active} projectDoc={projectDoc} projectName={"goroom"} handleProject={handleProject} setHover={setHover} setActive={setActive}/>
          </AnchorLink>
          <GoroomDoc project={projects[5]} projectDoc={projectDoc} projectName={"goroom"} handleProject={handleProject}/>
          <div id="anchor"/>

        </div>
      </div>
    </section>
  );
}

const Card = (props) => {
  const { hover, active, projectName, handleProject, setHover, setActive } = props
  const { title } = props.project;

  return (
    <div id="goroom" className={`projects-card ${projectName}`} onClick={() => handleProject(projectName)} onMouseEnter={() => {setHover(true);setActive(`${projectName}`)}} onMouseLeave={() => {setHover(false);setActive("")}}>
      
      <div className={hover && (active !== projectName && active !== "") ? `projects-card ${projectName} false`:`projects-card ${projectName}`}>
      </div>

      <div className={hover && (active !== projectName && active !== "") ? "projects-card-title show" : "projects-card-title"}><h2>{title}</h2></div>
    </div>
  );
};


const projects = [
  {
    title: "CurbAlert",
    text:
      "Curbalert allows users to post images and details of items people are giving or throwing away in their area, becoming viewable on a public map. Assisted by Google Directions, users can make their way to hidden treasures that are simply going to waste.",
    tech:
      "React JS, Ruby Rails, PostgreSQL, Google Directions API, Geolocation API, Leaflet API, AWS S3 Cloud, React Transition Group, Semantic UI",
    images: [
      "images/project-images/curbalert/curbalert-start.gif",
      "images/project-images/curbalert/curbalert-directions.gif",
      "images/project-images/curbalert/curbalert03.png",
      "images/project-images/curbalert/curbalert04.png",
    ],
  },
  {
    title: "Hangouts",
    text:
      "Tired of being invited to places that are too far for comfort? Well, Hangouts allows friended users to conveniently schedule get-togethers with Yelp suggested restaurants in areas mutually close to all parties.",
    tech: "React JS, Ruby Rails, PostgreSQL, Yelp API, Geolocation API, Leaflet API, React Transition Group, Semantic UI",
    images: [
      "images/project-images/hangouts/hangouts01.png",
      "images/project-images/hangouts/hangouts02.png",
      "images/project-images/hangouts/hangouts03.png",
      "images/project-images/hangouts/hangouts04.png",
    ],
  },
  {
    title: "Super Pet Bros. Unleashed",
    text:
      "If you've ever had a friend who claimed their pet is better than yours, then have no fear because Super Pet Bros. is here! In this game, users can create a profile for their pet, set personality type, stats and moves, and battle other users' pets in a pokemon-style gameplay.",
    tech: "Javascript, Ruby Rails, PostgreSQL",
    images: [
      "images/project-images/super-pet/pet01.png",
      "images/project-images/super-pet/pet02.png",
      "images/project-images/super-pet/pet03.png",
      "images/project-images/super-pet/pet04.png",
    ],
  },
  {
    title: "KARA-OK!",
    text:
      "A joyful night of singing your favorite songs can become disappointing if you can't remember the lyrics. KARA-OK! saves the night by allowing users to search for song lyrics and add them to playlists for a convenient sing-along session.",
    tech: "Ruby Rails, PostgreSQL, Lyrics API",
    images: [
      "images/project-images/kara-ok/kara01.png",
      "images/project-images/kara-ok/kara02.png",
      "images/project-images/kara-ok/kara03.png",
      "images/project-images/kara-ok/kara04.png",
    ],
  },
  {
    title: "HIES Inc.",
    text:
      "A mock-up redesign of static company website for HIES Inc., an environmental services company, for future integration into current site domain. ",
    tech: "React JS, PIXI.js, CSS Transition Group, SASS",
    images: ["images/project-images/hies/new_hies.png",
    "images/project-images/hies/new_hies2.png",
    "images/project-images/hies/new_hies2.png",
    "images/project-images/hies/original_hies.png",
    "images/project-images/hies/original_hies2.png"],
  },
  {
    title: "Go Room",
    text:
      "A redesign of GO ROOM home page, a video-chat web app that offers a robust poker game, supporting up to 16 users.",
    tech: "Angular JS, TypeScript, SASS",
    images: ["images/project-images/goroom/goroom_new.png"],
  },
];
