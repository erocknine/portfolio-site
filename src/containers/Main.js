import React, { Suspense } from 'react'
import Name from '../components/name'
import Profile from '../components/profile'
import { ImageBreak, TypeBreak } from '../components/imagebreak'
import Resume from '../components/resume'
import Blogs from '../components/blogs'
import Feature from '../components/feature'

const Projects = React.lazy(() => import('../components/projects'));

export default function Main() {

  return (
    <main className="main-container">
      <Name />
      <Profile />
      <ImageBreak value={"astro"}/>
      <Suspense fallback={<ImageBreak value={"astro"}/>}>
        <Projects />
      </Suspense>
      <TypeBreak>
        <Feature num={2} />
      </TypeBreak>
      <Resume />
      <Feature num={1}/>
      <Blogs />
    </main>
  )
}