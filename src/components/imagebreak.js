import React, { useState, useRef, useEffect } from 'react'

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
  const instance = useRef(null)

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
      <div className="image-desc">
        <h1 className="image-desc-text">I <h1 className="image-desc-text type" ref={instance}>{useScript(instance)}</h1></h1>
      </div>
    </section>
  )
}

const useScript = (ref) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.setAttribute('type', 'text/javascript');
    script.innerHTML = `
      const TxtType = function(toType, element, pause) {
      this.toType = toType;
      this.element = element;
      this.loopNum = 0;
      this.pause = pause;
      this.txt = ""
      this.tick();
      this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function() {
      const i = this.loopNum % this.toType.length;
      const fullTxt = this.toType[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.element.innerText = this.txt;
    
      const that = this;
      let delta = 200 - Math.random() * 100;
    
      if (this.isDeleting) { delta /= 2; }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.pause;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function() {
        that.tick();
      }, delta);
    };
    
    function type(typeArray, element, pause) { 
      const toType = typeArray;
      new TxtType(toType, element, pause);
    }
    
    const element = document.querySelector('.image-desc-text.type');
    element.innerText = type(["Imagine", "Design", "Create"], element, 1000)
    `

    script.async = true;

    ref.current.appendChild(script);

  }, [ref])

}

//<ScrollAnimation offset={25} animateIn="fadeIn" delay={200}><h1>Adventures</h1></ScrollAnimation>
//<ScrollAnimation offset={25} animateIn="fadeIn" delay={200}><h1>Food</h1></ScrollAnimation>
//<ScrollAnimation offset={25} animateIn="fadeIn" delay={200}><h1>Life</h1></ScrollAnimation>