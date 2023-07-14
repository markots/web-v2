import React, { useState, useEffect } from 'react';
import { images } from '../../constants/images';
import CustomText from '../../component/Features/CustomText';
import Feed2 from '../../component/Features/desktop/Feed2';
import FeedMain from '../../component/Features/Feedmain';
import SvgMobiFeed from '../../component/Features/mobile/MFeedMain';
import AnimateScroll from '../../component/Features/animation';

function Features() {
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
      className="flex flex-col md:flex-row gap-20 flex-grow-1 justify-center bg-black relative w-full"
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
          {isMobileView ? <SvgMobiFeed /> : <FeedMain />}
        </div>

        <CustomText
          title="Contextual social feed"
          content="TowneSquare feed enables context-specific features for each post to maximize utility for viewers. Users can seamlessly transition between finance and social experience in one user-friendly feed."
        />
      </div>

      </AnimateScroll>
    </div>
  );
}

export default Features;
