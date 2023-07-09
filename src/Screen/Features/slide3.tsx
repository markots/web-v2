import React from 'react'
import { images } from '../../constants/images'
import CustomText from '../../component/Features/CustomText'
import ProfileFeed from '../../component/Features/Peofile'
import AnimateOnScroll from '../../component/Features/animation'

function FeedSlider3() {
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
            <ProfileFeed />
          </div>


          <CustomText
            title=" An easy-to-use Web3 identity frontend "
            content=' Your user profile on TowneSquare is an identity system that seamlessly connects on-chain credentials, NFT membership, and other verifiable experiences to enable new use cases such as ticketing, reward drops, and authentication services.'
          />


        

    </div>
  )
}
export default FeedSlider3