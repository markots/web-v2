import React from 'react'
import { images } from '../../constants/images'
import CustomText from '../../component/Features/CustomText'
import Feed2 from '../../component/Features/Feed2'
import SlideText from '../../component/Features/animation'
import AnimateOnScroll from '../../component/Features/animation'

function FeedSlider2() {
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
            <Feed2 />
          </div>


          <CustomText
            title=" One-click community onboarding"
            content=' Users now have to hop between multiple platforms to access the full offerings of a community. 

      

      Community members on TowneSquare can access community servers with their token or NFT in just
      one-click. It also allows non-token communities to be created with the same full suite of features from governance to townhall spaces.'
          />


       





    </div>
  )
}
export default FeedSlider2