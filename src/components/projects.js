import React, { useState } from "react";
import '../style/projects.scss'
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

          <AnchorLink href={ open && projectDoc === "curbalert" ? null:"#anchor" } className="projects-card curbalert">
            <Card project={projects[0]} hover={hover} active={active} projectDoc={projectDoc} projectName={"curbalert"} handleProject={handleProject} setHover={setHover} setActive={setActive}/>
          </AnchorLink>
          <CurbalertDoc project={projects[0]} projectDoc={projectDoc} projectName={"curbalert"} handleProject={handleProject}/>

          <AnchorLink href={ open && projectDoc === "hangouts" ? null:"#anchor" } className="projects-card hangouts">
            <Card project={projects[1]} hover={hover} active={active} projectDoc={projectDoc} projectName={"hangouts"} handleProject={handleProject} setHover={setHover} setActive={setActive}/>
          </AnchorLink>
          <HangoutsDoc project={projects[1]} projectDoc={projectDoc} projectName={"hangouts"} handleProject={handleProject}/>
          
          <AnchorLink href={ open && projectDoc === "superpet" ? null:"#anchor" } className="projects-card superpet">
            <Card project={projects[2]} hover={hover} active={active} projectDoc={projectDoc} projectName={"superpet"} handleProject={handleProject} setHover={setHover} setActive={setActive}/>
          </AnchorLink>
          <SuperpetDoc project={projects[2]} projectDoc={projectDoc} projectName={"superpet"} handleProject={handleProject}/>

          <AnchorLink href={ open && projectDoc === "kara" ? null:"#anchor" } className="projects-card kara">
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
  },
  {
    title: "Hangouts",
  },
  {
    title: "Super Pet Bros. Unleashed",
  },
  {
    title: "KARA-OK!",
  },
  {
    title: "HIES Inc.",
  },
  {
    title: "Go Room",
  },
];
