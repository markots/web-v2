import { images } from '../../constants/images';
import React from 'react';
import SVGFeat from '../../component/Features/connect2';
import Svgtext1 from '../../component/Features/text';
import Svgtext2 from '../../component/Features/text2';
import MarqueeText from '../../Function/marquee';
import MarqueeText2 from '../../Function/marque2';
import Svg7Component from '../../component/Features/feature7';

function FeedSlider5() {
  return (
    <div
      className="flex flex-col md:gap-12 flex-grow-1 justify-center bg-black relative items-center "
      style={{
        background: `url(${images.background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 'auto',
        width: 'auto',
      }}
    >
      <div className="flex flex-col md:flex-col  flex-grow-1 justify-center  relative w-full items-center ">
        <div className="h-40"></div>
        <MarqueeText />
        <div className="flex flex-col items-center mb-20">
          <Svg7Component />
        </div>

        <div className=" items-center justify-center text-base sm:text-xl md:text-2xl lg:text-2xl font-[Outfit] font-normal leading-[24px] sm:leading-[30px] md:leading-[34px] text-white  px-4
    sm:w-[320px] sm:h-auto sm:min-h-[69px]
    md:w-full md:max-w-[910px] md:h-auto md:min-h-[120px]
    lg:w-full lg:max-w-[910px] lg:h-auto lg:min-h-[120px]">
                

                

                <div className=" items-center justify-center flex  self-stretch text-base sm:text-xl md:text-2xl lg:text-2xl font-[Outfit] font-normal leading-[24px] sm:leading-[30px] md:leading-[34px] text-white">
                Experience boundless possibilities with your on-chain verifiable identity – gain exclusive event access, exciting airdrop rewards, and in-app perks!
                </div>
            </div>

        
        


        <MarqueeText2 />
      </div>
    </div>
  );
}

export default FeedSlider5;
