import React, { useState, useEffect } from 'react'

export default function Name() {

  const [hoverDelay, setHoverDelay] = useState(true)

  useEffect (() => {
    const timer = setTimeout(() => setHoverDelay(false), 2000)
    return () => clearTimeout(timer);
  }, [])

  return (
    <section className="name-section" id="trigger-navbar-relocate">
      <div className="name-section-front">
        <div className="name-section-image">
          <h1 className={hoverDelay ? "name-section-name-hover":"name-section-name"}>Eric SK.C</h1>
        </div>
      </div>
    </section>
  )
}