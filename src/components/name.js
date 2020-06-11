import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default function Name() {
  return (
    <section className="name-section" id="trigger-navbar-relocate">
      <div className="name-section-front">
        <div className="name-section-image">
          <ScrollAnimation 
          animateIn='zoomIn'
          animateOnce={true}>
            <h1 className="name-section-name">Eric SK.C.</h1>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}