import React, { useState, Fragment } from "react";
import '../style/projects.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import CurbalertDoc from './projects/curbalert'
import HangoutsDoc from './projects/hangouts'
import SuperpetDoc from './projects/superpet'
import KaraDoc from './projects/kara'
import GoroomDoc from './projects/goroom'
import HiesDoc from './projects/hies'
import NumbertoolDoc from './projects/numbertool'

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [openDoc, setOpenDoc] = useState("")
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState("")

  const handleProject = (name) => {
    if(openDoc === "") {
      setOpen(true)
    }
    if(openDoc === name) {
      setOpen(false)
      setOpenDoc("")
    }
    if(openDoc !== name) {
      setOpenDoc(`${name}`)
    }
  }

  const renderProjects = () => {
    return projects.map((project, index) => 
    <Fragment key={index}>
      <ProjectDiv 
        name={project.name}
        title={project.title}
        projectDoc={project.projectDoc}
        handleProject={handleProject}
        hover={hover}
        active={active}
        setHover={setHover}
        setActive={setActive}
        open={open}
        openDoc={openDoc}
      />
      {project.projectDoc}
    </Fragment>
    )
  }

  const projects = [
    {name: "curbalert", title: "CurbAlert", projectDoc: <CurbalertDoc openDoc={openDoc} handleProject={handleProject}/>}, 
    {name: "hangouts", title: "Hangouts", projectDoc: <HangoutsDoc openDoc={openDoc} handleProject={handleProject}/>}, 
    {name: "superpet", title: "Super Pet Bros. Unleashed", projectDoc: <SuperpetDoc openDoc={openDoc} handleProject={handleProject}/>}, 
    {name: "kara", title: "KARA-OK!", projectDoc: <KaraDoc openDoc={openDoc} handleProject={handleProject}/>}, 
    {name: "hies", title: "HIES Inc.", projectDoc: <HiesDoc openDoc={openDoc} handleProject={handleProject}/>}, 
    {name: "goroom", title: "Go Room", projectDoc: <GoroomDoc openDoc={openDoc} handleProject={handleProject}/>},
    {name: "numbertool", title: "Number Tool", projectDoc: <NumbertoolDoc openDoc={openDoc} handleProject={handleProject}/>}
  ]

  return (
    <section className="projects-section">
      <div id="projects"/>
      <div className="header-bar">
        <h1 className="projects-header">PROJECTS</h1>
      </div>
      
      <div className="projects-content">
        <div className="projects-cards">

          { renderProjects() }

          <div id="anchor"/>
        </div>
      </div>
    </section>
  );
}

  const ProjectDiv = ({ name, title, handleProject, open, openDoc, hover, active, setHover, setActive }) => {
    return (
      <Fragment>
        <AnchorLink href={ open && openDoc === name ? null:"#anchor" } className={`projects-card ${name}`}>
          <Card 
            name={name} 
            title={title} 
            hover={hover} 
            active={active} 
            setHover={setHover} 
            setActive={setActive} 
            handleProject={handleProject} 
          />
        </AnchorLink>
      </Fragment>
    )
  }

  const Card = (props) => {
    const { name, title, hover, active, setHover, setActive, handleProject } = props
    
    return (
      <div className={`projects-card ${name}`}
        onClick={() => handleProject(name)}
      >
        <div className={`projects-card ${name}`} />
        <div className="projects-card-title">
          <h2>{title}</h2>
        </div>
      </div>
    );
  };