import React, { useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export function ImageBreak(props) {
  return (
    <section className={`image-section-${props.num}`} />
  )
}

export function ImageBreakThree() {
  const imageLeft = ["images/imagebreak/hotchicken.jpg", "images/imagebreak/serra.jpg", "images/imagebreak/overeasy.jpg", "images/imagebreak/akasaka.jpg"]
  const imageMiddle = ["images/imagebreak/niagara.jpg", "images/imagebreak/affogato.jpg", "images/imagebreak/path.jpg", "images/imagebreak/mario.jpg"]
  const imageRight = ["images/imagebreak/montreal.jpg", "images/imagebreak/shibuya.jpg", "images/imagebreak/beach.jpg", "images/imagebreak/ramen.jpg"]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (currentImage === 4) {
      setCurrentImage(0)
    }
    let timer = setTimeout(() => setCurrentImage(currentImage + 1), 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [currentImage])

  const Image = ({ image }) => {
    return <img src={image} alt="Eric's life pictures" className="image-three" />
  }

  return (
    <section className="image-section-three">
      <Image image={imageLeft[currentImage]}/>
      <Image image={imageMiddle[currentImage]}/>
      <Image image={imageRight[currentImage]}/>
      <div className="text-desc">
        <ScrollAnimation offset={25} animateIn="fadeIn" delay={200}><h1>Adventures</h1></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="fadeIn" delay={200}><h1>Food</h1></ScrollAnimation>
        <ScrollAnimation offset={25} animateIn="fadeIn" delay={200}><h1>Life</h1></ScrollAnimation>
      </div>
    </section>
  )
}