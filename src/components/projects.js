import React, { useState } from 'react'

export default function Projects() {
  return (
    <section className="projects-section">
      <h1 id="projects" className="projects-header">Projects</h1>
      <div className="projects-header-bar">
      </div>
      <div className="panels">
        <Panel number={'one'}/>
        <Panel number={'two'}/>
        <Panel number={'three'}/>
        <Panel number={'four'}/>
        <div className="navbar-tab"></div>
      </div>
    </section>
  )
}

const Panel = ({ number }) => {

  const [open, setOpen] = useState(false)

  return (
      <div className={open ? `panel panel-${number} open-active`:`panel panel-${number}`} onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)}>

      </div>
  )
}