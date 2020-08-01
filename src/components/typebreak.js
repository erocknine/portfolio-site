import React, {useRef} from 'react'
import useScript from './typescript'

export default function TypeBreak(props) {
  const instance = useRef(null)

  return (
    <section className="image-section-type">
      <h1 className="typescript" ref={instance}>{useScript(instance)}</h1>
      {props.children}
    </section>
  )
}