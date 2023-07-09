import React from 'react';
import SvgComponent from '../../component/Features/feed';
import { images } from '../../constants/images';
import CustomText from '../../component/Features/CustomText';
import FeedMain from '../../component/Features/Feedmain';
import AnimateOnScroll from '../../component/Features/animation';

function Features() {
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
      

          <div className="flex flex-col justify-center items-center md:items-start mb-151 mt-24 mb-20">

            <FeedMain />
          </div>


          <CustomText
            title=" Contextual social feed "
            content='TowneSquare feed enables context-specific features for each post to maximize utility for viewers. Users can seamlessly transition between finance and social experience in one user-friendly feed.'
          />



       



    </div>
  );
}

export default Features;
