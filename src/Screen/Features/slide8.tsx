import { images } from "../../constants/images";
import React from "react";
import SVGFeat from "../../component/Features/connect2";
import Svgtext1 from "../../component/Features/text";
import Svgtext2 from "../../component/Features/text2";
import MarqueeText from "../../Function/marquee";
import MarqueeText2 from "../../Function/marque2";
import Svg7Component from "../../component/Features/feature7";

function FeedSlider5() {
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
        <div className="h-40"></div>
        <MarqueeText />
        <div className="flex z-1 flex-col items-center mb-20 -mt-40">
          <Svg7Component />
        </div>

        <div className=" items-center max-w-2xl text-center text-base sm:text-xl md:text-2xl lg:text-2xl font-Outfit font-normal leading-24 sm:leading-30 md:leading-34 text-white ">
          <p className="z-1 -mb-40 ">
            Experience boundless possibilities with your on-chain verifiable
            identity – gain exclusive event access, exciting airdrop rewards,
            and in-app perks!
          </p>
        </div>
      </div>

      <MarqueeText2 />
    </div>
  );
}

export default FeedSlider5;
