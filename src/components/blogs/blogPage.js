import React, { useState, Fragment, Suspense } from 'react'
import Navbar from '../../containers/Navbar'
import { AutoBioOne, AutoBioTwo, AutoBioThree } from './autobio'
import { BlogLoader } from '../loader'
import { Route, Switch, Link, useLocation } from 'react-router-dom'
import '../../style/blogPage.scss';

const Regex = React.lazy(() => import('./regex'));
const CSS = React.lazy(() => import('./css'));
const ActiveStorage = React.lazy(() => import('./activeStorage'));

export function BlogPage() {

  let location = useLocation();
  let url = location.pathname.replace(/\/blogs\//g, "")
  let matched = ascendingBlogs.findIndex(blog => blog.url === url)

  const forward = () => {
    let next = matched + 1;
    if (next > ascendingBlogs.length - 1) {
      next = 0
    }
    return next
  }

  const backward = () => {
    let next = matched - 1;
    if (next < 0) {
      next = ascendingBlogs.length - 1
    }
    return next
  }
  console.log(backward(), matched, forward())

  const [dark, setDark] = useState(false)

  return (
    <Fragment>
      <Navbar />
      <div className={dark ? "blog-page dark":"blog-page"}>
        <div className="blog-page__top-color"></div>
        <Link className="blog-button backward" to={`/blogs/${ascendingBlogs[backward()].url}`} onClick={() => scrollTop()}>
          <img className="return" src={`/images/project-images/${dark ? "return_white":"return"}.png`} alt="Return Arrow"/>
        </Link>
        <Link className="blog-button forward" to={`/blogs/${ascendingBlogs[forward()].url}`} onClick={() => scrollTop()}>
          <img className="return" src={`/images/project-images/${dark ? "return_white":"return"}.png`} alt="Return Arrow"/>
        </Link>
        <div className="blog-dark-mode" onClick={() => setDark(!dark)}>
          {dark ? <Dark />:<Light />}
        </div>
        <div className="blog-page__blog-text">
        <Suspense fallback={<BlogLoader/>}>
          <Switch>
            {renderBlogRoutes()}
          </Switch>
        </Suspense>
        </div>
      </div>
    </Fragment>
  )
}

export const blogs = [
  {title: "So you wanna use RegEx, do ya?", image: "images/blog-images/js_code.jpg", caption: "Guide to becoming familiar with RegEx in Ruby and JavaScript. Not for the weak-willed.", date: "March 18, 2020", url: "so-you-wanna-use-regex-do-ya", order: "031320", component: Regex}, 
  {title: "Don't sleep on CSS", image: "images/blog-images/css_art_popsicle.jpg", caption: "A dissertation on CSS philosophy and application that would make God cry.", date: "April 9, 2020", url: "dont-sleep-on-css", order: "040920", component: CSS}, 
  {title: "Active Storage makes your site legit", image: "images/blog-images/aws.png", caption: "Setting up Active Storage + Amazon S3 with React Frontend / Rails Backend.", date: "September 6, 2020", url: "active-storage-makes-your-site-legit", order: "090620", component: ActiveStorage}, 
  {title: "My 20's - Part One - Life in Japan", image: "images/blog-images/autobio/cherry_blossom.jpg", caption: "Life usually begins after college. After graduating, I spend two years in Japan encountering Love Hotels with my girlfriend, breakdancing in Tokyo, and accidentally entering the culinary industry.", date: "June 27, 2020", url: "my-20s-part-one", order: "062720", component: AutoBioOne}, 
  {title: "My 20's - Part Two - Diving into the Food Industry", image: "images/blog-images/autobio/highline.jpg", caption: "Some people spend years searching for a passion. Returning to NYC, I self-published a novel and worked a chain of restaurant jobs before finally seeing a meaningful goal in my life.", date: "June 29, 2020", url: "my-20s-part-two", order: "062920", component: AutoBioTwo}, 
  {title: "My 20's - Part Three - Starting a Food Business", image: "images/blog-images/autobio/banzai_smorg.jpg", caption: "Diving headfirst into a business venture isn't the best move, but planning, learning, and playing smart is what helped me succeed at Smorgasburg.", date: "July 6, 2020", url: "my-20s-part-three", order: "070620", component: AutoBioThree}
]

export const descendingBlogs = blogs.slice().sort((a, b) => b.order - a.order)
export const ascendingBlogs = blogs.slice().sort((a, b) => a.order - b.order)

const scrollTop = () => {
  let html = document.querySelector("html")
  html.style.scrollBehavior = "auto";
  window.scrollTo(0,0)
}

const renderBlogRoutes = () => {
  return blogs.map((blog, index) => <Route exact={true} key={index} path={`/blogs/${blog.url}`} component={blog.component}/>)
}

const Dark = () => {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
  )
}

const Light = () => {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>  )
}