import React, { useState, useEffect } from 'react';
import { images } from '../../constants/images'
import CustomText from '../../component/Features/CustomText'
import ProfileFeed from '../../component/Features/Peofile'
import AnimateOnScroll from '../../component/Features/animation'
import SVGProfile from '../../component/Features/mobile/MProfile';
import AnimateScroll from '../../component/Features/animation';

function FeedSlider3() {
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
      className="flex flex-col md:flex-row gap-20 flex-grow-1 justify-center bg-black relative w-full items-center"
      style={{
        background: `url(${images.back})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 'auto',
        width: 'auto',
      }}
    >

    <AnimateScroll>  
    <div className="flex flex-col md:flex-row gap-20 flex-grow-1 justify-center bg-black relative w-full items-center"> 
          <div className="flex flex-col justify-center items-center md:items-start mb-151 mt-24 mb-20">
          {isMobileView ? <SVGProfile/> : <ProfileFeed/>}
          </div>


          <CustomText
            title=" An easy-to-use Web3 identity frontend "
            content=' Your user profile on TowneSquare is an identity system that seamlessly connects on-chain credentials, NFT membership, and other verifiable experiences to enable new use cases such as ticketing, reward drops, and authentication services.'
          />

</div>

</AnimateScroll>
        

    </div>
  )
}
export default FeedSlider3