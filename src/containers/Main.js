import React from 'react'
import Name from '../components/name'
import Profile from '../components/profile'
import {ImageBreak, ImageBreakThree} from '../components/imagebreak'
import Projects from '../components/projects'
import Resume from '../components/resume'
import Blogs from '../components/blogs'
import Feature from '../components/feature'

export default function Main() {

  return (
    <main className="main-container">
      <Name/>
      <Profile/>
      <ImageBreakThree/>
      <Projects/>
      <Feature />
      <Resume/>
      <ImageBreak num={"one"}/>
      <Blogs/>
    </main>
  )
}