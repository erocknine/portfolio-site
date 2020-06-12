import React from 'react'
import Name from '../components/name'
import Profile from '../components/profile'
import {Parallax, ParallaxThree} from '../components/parallax'
import Projects from '../components/projects'
import Resume from '../components/resume'

export default function Main() {

  return (
    <main className="main-container">
      <Name/>
      <Profile/>
      <Parallax/>
      <Projects/>
      <ParallaxThree/>
      <Resume/>
    </main>
  )
}