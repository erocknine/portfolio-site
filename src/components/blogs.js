import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withCaption from 'react-awesome-slider/dist/captioned';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';

export default function Blogs() {

  const CaptionedSlider = withCaption(AwesomeSlider);

  const Slider = (
    <CaptionedSlider
      screens={[
        {
          backgroundColor: '#4a9c8c',
          media: '/images/affogato.jpg',
          caption: 'I want to see what you got.',
        },
        {
          backgroundColor: '#4a9c8c',
          media: '../images/astro.jpg',
          caption: "The answer is -- Don't think about it.",
        },
      ]}
    />
  );

  return (
    <section className="blogs-section">

      <div id="blogs" className="blogs-header-bar">
        <h2>BLOGS</h2>
      </div>

      <div className="blogs-content">
        <div className="blogs-text">
        <Slider/>
        </div>
      </div>

    </section>
  )
}
