import { images } from "../../constants/images";
import React, { useState, useEffect } from "react";
import SVGFeat from "../../component/Features/connect2";
import Svgtext1 from "../../component/Features/text";
import Svgtext2 from "../../component/Features/text2";
import MarqueeText from "../../Function/marquee";
import MarqueeText2 from "../../Function/marque2";

function FeedSlider6() {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    // Logic to determine mobile view
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobileView(windowWidth < 768); 
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className="flex flex-col md:gap-12 flex-grow-1 justify-center bg-black relative items-center mt-30"
      style={{
        background: `url(${images.background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "auto",
        width: "auto",
      }}
    >
      <div className=" flex flex-col md:flex-col  flex-grow-1 justify-center  relative w-full items-center">
        <div className="h-40"></div>
        <MarqueeText />

        <div className="z-10 -mt-32 flex flex-col items-center mb-20 ">
         {isMobileView ? <img
         src= {images.feature5}/>   :  <img
         src={images.mfeature5}/> }
        </div>

        <div className="items-center max-w-2xl  text-center text-base sm:text-xl md:text-2xl lg:text-2xl font-Outfit font-normal leading-24 sm:leading-30 md:leading-34 text-white ">
          <p>
            Self-bank yourself with crypto payments that can go to anyone
            anywhere you want
          </p>
        </div>
        <MarqueeText2 />
      </div>
    </div>
  );
}

export default FeedSlider6;