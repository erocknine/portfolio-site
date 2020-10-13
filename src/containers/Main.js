import React, { Suspense } from 'react'
import Name from '../components/name'
import Navbar from './Navbar'
import Profile from '../components/profile'
import Resume from '../components/resume'
import Blogs from '../components/blogs'
import ImageBreak from '../components/imagebreak'
import { Loader } from '../components/loader'
// import TypeBreak from '../components/typebreak'
// import Feature from '../components/feature'


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
      <Resume />
      <Blogs />
    </main>
  )
}