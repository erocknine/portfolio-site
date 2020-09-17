import React, { useState, Fragment } from 'react'
import UIfx from 'uifx';
import Sound from '../sounds/switch-click.mp3';

import { Link } from 'react-router-dom';

export default function Welcome(props) {

  const { handleWelcome } = props
  const [sliders, setSliders] = useState(false)
  const [pressed, setPressed] = useState(false)

  const switchClick = new UIfx(Sound);

  const handlePress = () => {
    setPressed(true)
    switchClick.play()
  }

  return (
    <section className="welcome-section">
      <Link to={"/"} className={pressed ? "signature-pressed":"signature"} onMouseDown={() => handlePress()} onMouseUp={() => {setSliders(true); setPressed(false); handleWelcome()}} onMouseLeave={() => setPressed(false)}>張</Link>
    
      
      {sliders && <Fragment><div className="welcome-panel-left"></div>
      <div className="welcome-panel-right"></div></Fragment>}
    </section>
  )
}