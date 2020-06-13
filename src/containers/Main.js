import React from 'react'
import Name from '../components/name'
import Profile from '../components/profile'
import {ImageBreak, ImageBreakThree} from '../components/imagebreak'
import Projects from '../components/projects'
import Resume from '../components/resume'
import Blogs from '../components/blogs'
import Conclusion from '../components/conclusion'

export default function Main() {

  return (
    <main className="main-container">
      <Name/>
      <Profile/>
      <ImageBreak num={"one"}/>
      <Projects/>
      <ImageBreakThree/>
      <Resume/>
      <ImageBreak num={"two"}/>
      <Blogs/>
    </main>
  )
}