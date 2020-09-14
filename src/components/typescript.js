import React from 'react'
import Typical from 'react-typical';

export default function TypeScript(props) {

  return (
    <section className="home-type">
      <Typical
        steps={['Imagine', 1000, 'Design', 700, 'Create', 1300]}
        loop={Infinity}
        wrapper="h1"
      />
      {props.children}
    </section>
  )
}
