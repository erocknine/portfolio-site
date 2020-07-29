import React, { useState, Fragment } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from 'semantic-ui-react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navbar() {

  return (
    <Fragment>
      <nav className="navbar-top"
        data-aos={`navbar-relocate-top`}
        data-aos-anchor="trigger-navbar-relocate"
        data-aos-anchor-placement="top-top"
        data-aos-easing="ease-in-out"
        data-aos-delay="1100"
      >
        <a href="#profile" className="eric-sk-cheung" 
          data-aos={`navbar-relocate-eric`}
          data-aos-anchor="trigger-navbar-relocate"
          data-aos-anchor-placement="top-top"
          data-aos-easing="ease-in-out"
          data-aos-duration={1500}>
        </a>
        <ul className="ulReal">
          <ScrollAnimation offset={10} animateIn='fadeInDown' animateOnce={true}><Projects position={'top'}>Projects</Projects></ScrollAnimation>
          <ScrollAnimation offset={10} animateIn='fadeInDown' animateOnce={true} delay={250}><Resume position={'top'}>Resume</Resume></ScrollAnimation>
          <ScrollAnimation offset={10} animateIn='fadeInDown' animateOnce={true} delay={500}><Blogs position={'top'}>Blogs</Blogs></ScrollAnimation>
          <ScrollAnimation offset={10} animateIn='fadeInDown' animateOnce={true} delay={750}><Contact position={'top'}>Contact</Contact></ScrollAnimation>
        </ul>
        <ul className="ulClone">
          <ProjectsClone position={'top'}>Projects</ProjectsClone>
          <ResumeClone position={'top'}>Resume</ResumeClone>
          <BlogsClone position={'top'}>Blogs</BlogsClone>
          <ContactClone position={'top'}>Contact</ContactClone>
        </ul>
      </nav>
      <nav className="navbar-right">
        <ul>
          <Projects position={'right'}>Projects</Projects>
          <Resume position={'right'}>Resume</Resume>
          <Blogs position={'right'}>Blogs</Blogs>
          <Contact position={'right'}>Contact</Contact>
        </ul>
      </nav>
    </Fragment>
  )
}

const Projects = (props) => {
  return (
    <li className="nav-item"
      data-aos={`navbar-relocate-projects-${props.position}`}
      data-aos-anchor="trigger-navbar-relocate"
      data-aos-anchor-placement="top-top"
      data-aos-easing="ease-in-out"
      data-aos-delay={props.position === 'right' ? "1000": "0"}
      data-aos-duration={props.position === 'top' ? "1000":"250"}
    >
      <a href="#projects" className="nav-link">
        { props.children }
      </a>
    </li>
  );
}

const Resume = (props) => {
  return (
    <li className="nav-item"
      data-aos={`navbar-relocate-resume-${props.position}`}
      data-aos-anchor="trigger-navbar-relocate"
      data-aos-anchor-placement="top-top"
      data-aos-easing="ease-in-out"
      data-aos-delay={props.position === 'right' ? "750": "0"}
      data-aos-duration={props.position === 'top' ? "750":"500"}
    >
      <a href="#resume" className="nav-link">
        { props.children }
      </a>
    </li>
  );
}

const Blogs = (props) => {
  return (
    <li className="nav-item"
      data-aos={`navbar-relocate-blogs-${props.position}`}
      data-aos-anchor="trigger-navbar-relocate"
      data-aos-anchor-placement="top-top"
      data-aos-easing="ease-in-out"
      data-aos-delay={props.position === 'right' ? "500": "0"}
      data-aos-duration={props.position === 'top' ? "500":"750"}
    >
      <a href="#blogs" className="nav-link">
        { props.children }
      </a>
    </li>
  );
}

const Contact = (props) => {

  const [openContact, setOpenContact] = useState(false)
  const [copy, setCopy] = useState(false)

  const handleCopy = () => {
    setCopy(true)
    setTimeout(() => setCopy(false), 7000)
  }

  return (
    <li className="nav-item"
      data-aos={`navbar-relocate-contact-${props.position}`}
      data-aos-anchor="trigger-navbar-relocate"
      data-aos-anchor-placement="top-top"
      data-aos-easing="ease-in-out"
      data-aos-delay={props.position === 'right' ? "250": "0"}
      data-aos-duration={props.position === 'top' ? "250":"1000"}
    >
      <span className="nav-link" onClick={() => setOpenContact(!openContact)}>
        { props.children }
      </span>
        <div className={openContact ? "nav-contact-open":"nav-contact-closed"}>
          <CopyToClipboard text={'Eric.saikit.cheung@gmail.com'} onCopy={() => handleCopy()}>
            <span className="contact-email"><span className={copy ? "copied-open":"copied-closed"}><strong>Copied!</strong>&nbsp;</span>Eric.Saikit.Cheung@gmail.com<Icon circular name='mail outline' /></span></CopyToClipboard>

          <a href="https://www.instagram.com/erock_esquire/" target="_blank" rel="noopener noreferrer">Instagram<Icon circular name='instagram' /></a>
          <a href="https://www.linkedin.com/in/eric-sk-cheung/" target="_blank" rel="noopener noreferrer">LinkedIn<Icon circular name='linkedin' /></a>
          <a href="https://github.com/erocknine" target="_blank" rel="noopener noreferrer">GitHub<Icon circular name='github' /></a>
        </div>
    </li>
  )
}


const ProjectsClone = (props) => {
  return (
    <li className="nav-item projects"
      data-aos={`navbar-relocate-projects-${props.position}`}
      data-aos-anchor="trigger-navbar-relocate"
      data-aos-anchor-placement="top-top"
      data-aos-easing="ease-in-out"
      data-aos-delay={props.position === 'right' ? "1000": "0"}
      data-aos-duration={props.position === 'top' ? "1000":"250"}
    >
      <a href="#projects" className="nav-link">
        { props.children }
      </a>
    </li>
  );
}

const ResumeClone = (props) => {
  return (
    <li className="nav-item resume"
      data-aos={`navbar-relocate-resume-${props.position}`}
      data-aos-anchor="trigger-navbar-relocate"
      data-aos-anchor-placement="top-top"
      data-aos-easing="ease-in-out"
      data-aos-delay={props.position === 'right' ? "750": "0"}
      data-aos-duration={props.position === 'top' ? "750":"500"}
    >
      <a href="#resume" className="nav-link">
        { props.children }
      </a>
    </li>
  );
}

const BlogsClone = (props) => {
  return (
    <li className="nav-item blogs"
      data-aos={`navbar-relocate-blogs-${props.position}`}
      data-aos-anchor="trigger-navbar-relocate"
      data-aos-anchor-placement="top-top"
      data-aos-easing="ease-in-out"
      data-aos-delay={props.position === 'right' ? "500": "0"}
      data-aos-duration={props.position === 'top' ? "500":"750"}
    >
      <a href="#blogs" className="nav-link">
        { props.children }
      </a>
    </li>
  );
}

const ContactClone = (props) => {

  const [openContact, setOpenContact] = useState(false)
  const [copy, setCopy] = useState(false)

  const handleCopy = () => {
    setCopy(true)
    setTimeout(() => setCopy(false), 9000)
  }

  return (
    <li className="nav-item contact"
      data-aos={`navbar-relocate-contact-${props.position}`}
      data-aos-anchor="trigger-navbar-relocate"
      data-aos-anchor-placement="top-top"
      data-aos-easing="ease-in-out"
      data-aos-delay={props.position === 'right' ? "250": "0"}
      data-aos-duration={props.position === 'top' ? "250":"1000"}
    >
      <span className="nav-link" onClick={() => setOpenContact(!openContact)}>
        { props.children }
      </span>
        <div className={openContact ? "nav-contact-open":"nav-contact-closed"}>
          <CopyToClipboard text={'Eric.saikit.cheung@gmail.com'} onCopy={() => handleCopy()}>
            <span className="contact-email"><span className={copy ? "copied-open":"copied-closed"}><strong>Copied!</strong>&nbsp;</span>Eric.Saikit.Cheung@gmail.com<Icon circular name='mail outline' /></span></CopyToClipboard>

          <a href="https://www.instagram.com/erock_esquire/" target="_blank" rel="noopener noreferrer">Instagram<Icon circular name='instagram' /></a>
          <a href="https://www.linkedin.com/in/eric-sk-cheung/" target="_blank" rel="noopener noreferrer">LinkedIn<Icon circular name='linkedin' /></a>
          <a href="https://github.com/erocknine" target="_blank" rel="noopener noreferrer">GitHub<Icon circular name='github' /></a>
        </div>
    </li>
  )
}


