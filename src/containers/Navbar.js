import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <NavItem>Projects</NavItem>
        <NavItem>Resume</NavItem>
        <NavItem>Blogs</NavItem>
        <NavItem>Contact</NavItem>
      </ul>
    </nav>
  )
}

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href="#" className="nav-link">
        { props.children }
      </a>
    </li>
  );
}