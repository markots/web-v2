
import { images } from '../../constants/images';
import React, { useState, useEffect } from 'react';
import SVGFeat from '../../component/Features/connect2';


function FeedSlider6() {
  return (
    <div
      className="flex flex-col md:gap-12 flex-grow-1 justify-center bg-black relative "
      style={{
        background: `url(${images.background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 'auto',
        width: 'auto',
      }}
    >
      <div className="w-hug-760 h-auto h-hug-413 mt-30 p-8 top-278 left-578 gap-42">

        <div className="flex flex-col items-center mb-12 mt-24">
          <SVGFeat />
        </div>





        <div className="items-center w-668 h-80 text-center text-base sm:text-xl md:text-2xl lg:text-2xl font-Outfit font-normal leading-24 sm:leading-30 md:leading-34 text-white mb-60">
          <p className="break-words">
            Self-bank yourself with crypto payments that can go to anyone anywhere you want
          </p>
        </div>
      </div>




    </div>

  );
}

export default FeedSlider6;
