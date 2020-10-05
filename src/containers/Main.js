import React, { Suspense } from 'react'
import Name from '../components/name'
import Navbar from './Navbar'
import Profile from '../components/profile'
import Resume from '../components/resume'
import TypeBreak from '../components/typebreak'
import Blogs from '../components/blogs'
import Feature from '../components/feature'
import ImageBreak from '../components/imagebreak'
import { Loader } from '../components/loader'

const Projects = React.lazy(() => import('../components/projects'));

export default function Main() {

  return (
    <main className="main-container">
      <Navbar/>
      <Name />
      <Profile />
      <ImageBreak value={"astro"}/>
      <Suspense fallback={<Loader/>}>
        <Projects />
      </Suspense>
      <TypeBreak>
        <Feature num={2}/>
      </TypeBreak>
      <Resume />
      <Feature num={1}/>
      <Blogs />
    </main>
  )
}