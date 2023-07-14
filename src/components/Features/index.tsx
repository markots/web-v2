import React, { useState } from "react";
import { useEffect } from "react";
import { useInView } from 'react-cool-inview'
import { motion, useScroll } from "framer-motion"

function Features() {
  const {observe, unobserve, inView, scrollDirection, entry} = useInView({
    threshold:1,
    onEnter:({scrollDirection, entry, observe, unobserve}) => {
    },
    onChange:({inView, observe}) => {
      observe()
    },
  })


  return (
    <>
      <div className="bg">
        <div className="line1_1">
          <img src="/images/home/line1.svg" alt="line1"/>
        </div>
        <div className="line2_1 ">
          <img src="/images/home/line2.svg" alt="line2"/>
        </div>
        <div className="line3_1">
          <img src="/images/home/line3.svg" alt="line3"/>
        </div>
        <div className="mark1_1">
          <img src="/images/home/watermark1.svg" alt="watermark1"/>
        </div>
        <div className="mark2_1">
          <img src="/images/home/watermark2.svg" alt="watermark2"/>
        </div>
        <div className="image1_1">
          <img src="/images/home/image1.svg" alt="image1"/>
          <br></br>
          <img src="/images/home/text1.svg" alt="text1"/>
        </div>
        <div className="image2_1">
          <img src="/images/home/image2.svg" alt="image2"/>
          <br></br>
          <img src="/images/home/text2.svg" alt="text2"/>
        </div>
        <div className="image3_1">
          <img src="/images/home/image3.svg" alt="image3"/>
          <br></br>
          <img src="/images/home/text3.svg" alt="text3"/>
        </div>
      </div>
    </>
  )
}

export default Features