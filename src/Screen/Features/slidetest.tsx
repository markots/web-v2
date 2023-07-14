import { images } from "../../constants/images";
import { useState, useEffect } from "react";
import Svgtext1 from "../../component/Features/text";
import Svgtext2 from "../../component/Features/text2";
import Svg7Component from "../../component/Features/desktop/feature7";
import AnimateText from "../../component/Features/animateText";
import { AnimationOnScroll } from "react-animation-on-scroll";
import LazyLoad from 'react-lazyload';
import 'animate.css'
import SvgM7Component from "../../component/Features/mobile/Mfeed7";


function FeedSlidertest() {



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
      className="flex flex-col md:gap-12 flex-grow-1 justify-center bg-black relative items-center "
      style={{
        background: `url(${images.background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "auto",
        width: "auto",
      }}
    >
      <div className="flex flex-col md:flex-col  flex-grow-1 justify-center  relative w-full items-center ">





        <AnimateText>
          <div className=" mb-16 pr-96">  <Svgtext1 /> </div>

        </AnimateText>

        <AnimationOnScroll duration={2} animateIn="animate__fadeInRightBig" animateOut="animate__fadeInLeftBig">






          <LazyLoad> <div className="flex z-1 flex-col items-center mb-20 -mt-40">
            {isMobileView ? <SvgM7Component /> : <Svg7Component />  }
          </div> </LazyLoad>


          <div className=" items-center max-w-2xl text-center text-base sm:text-xl md:text-2xl lg:text-2xl font-Outfit font-normal leading-24 sm:leading-30 md:leading-34 text-white ">
            <p className="z-1 -mb-40 ">
              Experience boundless possibilities with your on-chain verifiable
              identity – gain exclusive event access, exciting airdrop rewards,
              and in-app perks!
            </p>
          </div>
        </AnimationOnScroll>
      </div>


      <AnimateText>
        <div className=" mb-16">  <Svgtext2 /> </div>

      </AnimateText>
    </div>
  );
}

export default FeedSlidertest;
