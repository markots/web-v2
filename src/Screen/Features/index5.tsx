
import Svgtext1 from "../../component/Features/text";
import Svgtext2 from "../../component/Features/text2";
import { images } from "../../constants/images";
import { useState, useEffect } from "react";

import Svg7Component from "../../component/Features/desktop/feature7";
import AnimateText from "../../component/Features/animateText";
import { AnimationOnScroll } from "react-animation-on-scroll";
import 'animate.css'


import SvgFeature6 from "../../component/Features/desktop/Feature6";
import SvgL5Component from "../../component/Features/desktop/Feature55";
import MB5Component from "../../component/Features/mobile/Mfeed5";
import SvgM6Component from "../../component/Features/mobile/Mfeed6";
import SvgM7Component from "../../component/Features/mobile/Mfeed7";


function Featureindex2() {
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
        <AnimateText>
          <div className=" pr-96 mt-16">  <Svgtext1 /> </div>

        </AnimateText>

        <AnimationOnScroll
          duration={2}
          animateIn="animate__fadeInRightBig"
          animateOut="animate__fadeOutLeftBig">

<div className="flex z-1 flex-col items-center mb-20 -mt-40">
  {isMobileView ? (
    <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
      <img className="w-full" src="/images/m_features5.svg" alt="Self-bank" />
    </div>
  ) : (
    <img className="w-full" src="/images/features5.svg" alt="Self-bank" />
  )}
</div>

          <div className="items-center max-w-2xl  text-center text-base sm:text-xl md:text-2xl lg:text-2xl font-Outfit font-normal leading-24 sm:leading-30 md:leading-34 text-white ">
            <p>
              Self-bank yourself with crypto payments that can go to anyone
              anywhere you want
            </p>
          </div>
        </AnimationOnScroll>

        <AnimateText>
          <div className=" mb-16 pl-80">  <Svgtext2 /> </div>



        </AnimateText>
      </div>
      <div className=" flex flex-col md:flex-col  flex-grow-1 justify-center  relative w-full items-center">
        <div className="h-40"></div>
        <AnimateText>
          <div className="pr-96 mt-16">  <Svgtext1 /> </div>

        </AnimateText>

        <AnimationOnScroll duration={2} animateIn="animate__fadeInRightBig" animateOut="animate__fadeInLeftBig">

        <div className="flex z-1 flex-col items-center mb-20 -mt-40">
  {isMobileView ? (
    <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
      <img className="w-full" src="/images/m_features6.svg" alt="Discover_new_friends" />
    </div>
  ) : (
    <img className="w-full" src="/images/features6.svg" alt="Discover_new_friends" />
  )}
</div>

          <div className="items-center p-4 max-w-2xl text-center text-base sm:text-xl md:text-2xl lg:text-2xl font-Outfit font-normal leading-24 sm:leading-30 md:leading-34 text-white ">
            <p className="">
              Discover new friends, communities, creators, and on-chain goods
              based on your interests
            </p>
          </div>
        </AnimationOnScroll>
        <AnimateText>
          <div className=" mb-16">  <Svgtext2 /> </div>

        </AnimateText>
      </div>
      <div className="flex flex-col md:flex-col  flex-grow-1 justify-center  relative w-full items-center ">
       
        <AnimateText>
          <div className="  pr-6 mt-16">  <Svgtext1 /> </div>

        </AnimateText>

      </div>

    

      <div className="flex flex-col md:flex-col  flex-grow-1 justify-center  relative w-full items-center ">



        <AnimationOnScroll duration={2} animateIn="animate__fadeInRightBig" animateOut="animate__fadeInLeftBig">


        <div className="flex z-1 flex-col items-center mb-20 -mt-20">
  {isMobileView ? (
    <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
      <img className="w-full" src="/images/m_features7.svg" alt="experence_freedom" />
    </div>
  ) : (
    <img className="w-full" src="/images/features7.svg" alt="experence_freedom" />
  )}
</div>

          <div className=" items-center max-w-2xl text-center text-base sm:text-xl md:text-2xl lg:text-2xl font-Outfit font-normal leading-24 sm:leading-30 md:leading-34 text-white ">
            <p className="z-1 -mb-40 ">
              Experience boundless possibilities with your on-chain verifiable
              identity – gain exclusive event access, exciting airdrop rewards,
              and in-app perks!
            </p>
          </div>
        </AnimationOnScroll>
        <AnimateText>
          <div className=" mb-16 pr-96">  <Svgtext1 /> </div>

        </AnimateText>
      </div>



    </div>
  );
}

export default Featureindex2;
