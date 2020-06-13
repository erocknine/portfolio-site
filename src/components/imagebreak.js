import React, { useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export function ImageBreak(props) {
  return (
    <section className={`image-section-${props.num}`}>
      
    </section>
  )
}

export function ImageBreakThree() {
  const imageLeft = ["images/hotchicken.jpg", "images/serra.jpg", "images/overeasy.jpg", "images/akasaka.jpg"]
  const imageMiddle = ["images/niagara.jpg", "images/affogato.jpg", "images/path.jpg", "images/mario.jpg"]
  const imageRight = ["images/montreal.jpg", "images/shibuya.jpg", "images/beach.jpg", "images/ramen.jpg"]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {

    if (currentImage === 4) {
      setCurrentImage(0)
    }
    let timer = setTimeout(() => setCurrentImage(currentImage + 1), 5000)
    return () => {
      clearTimeout(timer)
    }
  })

  const Image = ({ image }) => {
    return <img src={image} className="image-three" />
  }

  return (
    <section className="image-section-three">
      <Image image={imageLeft[currentImage]}/>
      <Image image={imageMiddle[currentImage]}/>
      <Image image={imageRight[currentImage]}/>
      <div className="text-desc">
        <ScrollAnimation offset={25} animateIn="fadeIn" delay={200}><h1>Places I've been</h1></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="fadeIn" delay={200}><h1>food I've eaten</h1></ScrollAnimation>
      </div>
    </section>
  )
}