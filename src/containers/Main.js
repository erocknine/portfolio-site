import React from 'react'
import Name from '../components/name'
import Profile from '../components/profile'
import Parallax from '../components/parallax'
import Projects from '../components/projects'

export default function Main() {

  return (
    <main className="main-container">
      <Name/>
      <Profile/>
      <Parallax class={'first'}/>
      <Projects/>
    </main>
  )
}