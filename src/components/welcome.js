import React, { useState, Fragment } from 'react'

export default function Welcome(props) {

  const { handleLoad } = props
  const [welcome, setWelcome] = useState(false)
  const [pressed, setPressed] = useState(false)

  return (
    <section className="welcome-section">
      <h1 className={pressed ? "signature-pressed":"signature"} onMouseDown={() => setPressed(true)} onMouseUp={() => {setWelcome(true); setPressed(false); handleLoad()}} onMouseLeave={() => setPressed(false)}>張</h1>
      
      {welcome && <Fragment><div className="welcome-panel-left"></div>
      <div className="welcome-panel-right"></div></Fragment>}
    </section>
  )
}