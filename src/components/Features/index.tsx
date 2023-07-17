import React from 'react'
import { gsap } from 'gsap';
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Featuredex from './components/feature1';
import Featureindex2 from './components/feature2';
gsap.registerPlugin(ScrollTrigger);

function Features() {
  return (
    <Tween
      to={{
        x: '300px',
        scrollTrigger: {
          trigger: '.square',
          start: '-200px center',
          end: '200px center',
          scrub: 0.5,
          markers: true,
        },
      }}
    >
      <div className="square" style={{ width: '100px', height: '100px', background: '#ccc' }} 
     
      /> 
      <Featuredex/>
      <Featureindex2/>
    </Tween>
  )
}

export default Features