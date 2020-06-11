import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Icon } from 'semantic-ui-react'

export default function Navbar() {

  return (
    <nav className="navbar">
      <ul>
        <ScrollAnimation offset={50} animateIn='fadeInDown' animateOnce={true}><NavItem aos={'projects'} >Projects</NavItem></ScrollAnimation>
        <ScrollAnimation offset={50} animateIn='fadeInDown' animateOnce={true} delay={250}><NavItem aos={'resume'}>Resume</NavItem></ScrollAnimation>
        <ScrollAnimation offset={50} animateIn='fadeInDown' animateOnce={true} delay={500}><NavItem aos={'blogs'}>Blogs</NavItem></ScrollAnimation>
        <ScrollAnimation offset={50} animateIn='fadeInDown' animateOnce={true} delay={750}><Contact aos={'contact'}>Contact</Contact></ScrollAnimation>
      </ul>
    </nav>
  )
}

const NavItem = (props) => {
  return (
    <li className="nav-item"
      data-aos={`navbar-relocate-${props.aos}`}
      data-aos-anchor="trigger-navbar-relocate"
      data-aos-anchor-placement="top-top"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <AnchorLink href={`#${props.aos}`} className="nav-link">
        { props.children }
      </AnchorLink>
    </li>
  );
}

const Contact = (props) => {

  const [openContact, setOpenContact] = useState(false)
  const [copy, setCopy] = useState(false)

  const handleCopy = () => {
    setCopy(true)
    setTimeout(() => setCopy(false), 9000)
  }

  return (
    <li className="nav-item"
      data-aos={`navbar-relocate-${props.aos}`}
      data-aos-anchor="trigger-navbar-relocate"
      data-aos-anchor-placement="top-top"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <span className="nav-link" onClick={() => setOpenContact(!openContact)}>
        { props.children }
      </span>
        <div className={openContact ? "nav-contact-open":"nav-contact-closed"}>
          <CopyToClipboard text={'Eric.saikit.cheung@gmail.com'} onCopy={() => handleCopy()}>
            <span className="contact-email"><span className={copy ? "copied-open":"copied-closed"}><strong>Copied!</strong>&nbsp;</span>Eric.saikit.cheung@gmail.com<Icon circular name='mail outline' /></span></CopyToClipboard>

          <a href="https://www.instagram.com/erock_esquire/" target="_blank" rel="noopener noreferrer">Instagram<Icon circular name='instagram' /></a>
          <a href="https://www.linkedin.com/in/eric-sk-cheung/" target="_blank" rel="noopener noreferrer">LinkedIn<Icon circular name='linkedin' /></a>
          <a href="https://github.com/erocknine" target="_blank" rel="noopener noreferrer">GitHub<Icon circular name='github' /></a>
        </div>
    </li>
  )
}