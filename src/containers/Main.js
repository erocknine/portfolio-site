import React, { Suspense } from 'react'
import Name from '../components/name'
import Navbar from './Navbar'
import Profile from '../components/profile'
import Resume from '../components/resume'
// import { ImageBreak } from '../components/imagebreak'
import TypeBreak from '../components/typebreak'
import Blogs from '../components/blogs'
import Feature from '../components/feature'
import Loader from '../components/loader'

const Projects = React.lazy(() => import('../components/projects'));
const ImageBreak = React.lazy(() => import('../components/imagebreak'));

export default function Main() {

  return (
    <main className="main-container">
      <Navbar/>
      <Name />
      <Profile />
      <Suspense fallback={<Loader/>}>
        <ImageBreak value={"astro"}/>
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