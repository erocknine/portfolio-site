import React from 'react'
import Typical from 'react-typical';

export default function TypeScript(props) {

  return (
    <section className="image-section-type">
      <Typical
        steps={['Imagine', 1800, 'Design', 1700, 'Create', 2000]}
        loop={Infinity}
        wrapper="h1"
      />
      {props.children}
    </section>
  )
}
