import React, { useState, Fragment } from "react";
import "../style/navbar.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Icon } from "semantic-ui-react";

import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <Fragment>
      <nav
        className="navbar"
        data-aos={`navbar-shade`}
        data-aos-anchor="trigger-navbar-shade"
        data-aos-anchor-placement="top-top"
        data-aos-easing="ease-in-out"
      >
        <ul className="navbar__ul">
          <NavItem name={"projects"} link={"/#projects"}>Projects</NavItem>
          <NavItem name={"resume"} link={"/#resume"}>Resume</NavItem>
          <NavItem name={"blogs"} link={"/blogs"} top={true}>Blogs</NavItem>
          <Contact>Contact</Contact>
        </ul>
      </nav>
    </Fragment>
  );
}

const NavItem = ({ children, name, link, top }) => {
  const scrollTop = () => {
    let html = document.querySelector("html");
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
  };

  return (
    <li className={`nav-item ${name}`}>
      {top ? (
        <Link smooth to={link} onClick={() => scrollTop()}>
          <span className="nav-link">{children}</span>
        </Link>
      ) : (
        <Link smooth to={link}>
          <span className="nav-link">{children}</span>
        </Link>
      )}
    </li>
  );
};

const Contact = (props) => {
  const [openContact, setOpenContact] = useState(false);
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 7000);
  };

  return (
    <li className="nav-item contact">
      <span className="nav-link" onClick={() => setOpenContact(!openContact)}>
        {props.children}
      </span>
      <div className={openContact ? "nav-contact-open" : "nav-contact-closed"}>
        <CopyToClipboard
          text={"Eric.saikit.cheung@gmail.com"}
          onCopy={() => handleCopy()}
        >
          <span className="contact-email">
            <span className={copy ? "copied-open" : "copied-closed"}>
              <strong>COPIED!</strong>&nbsp;
            </span>
            Eric.Saikit.Cheung@gmail.com
            <Icon circular name="mail outline" />
          </span>
        </CopyToClipboard>

        <a
          href="https://www.instagram.com/erock_esquire/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
          <Icon circular name="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-sk-cheung/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <Icon circular name="linkedin" />
        </a>
        <a
          href="https://github.com/erocknine"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <Icon circular name="github" />
        </a>
      </div>
    </li>
  );
};
