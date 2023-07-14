
import { images } from '../../constants/images'
import CustomText from '../../component/Features/CustomText'
import Feed2 from '../../component/Features/desktop/Feed2'
import { useState, useEffect } from 'react';
import SvgMFeed2 from '../../component/Features/mobile/MFeed2';
import AnimateScroll from '../../component/Features/animation';
import SVGProfile from '../../component/Features/mobile/MProfile';
import ProfileFeed from '../../component/Features/desktop/Peofile';
import SVGFeeed4 from '../../component/Features/mobile/Mfeed4';
import DMfeedSvg from '../../component/Features/desktop/DmFeed';
import SvgMobiFeed from '../../component/Features/mobile/MFeedMain';
import FeedMain from '../../component/Features/Feedmain';

function FeedSlider2() {
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




<div className='flex flex-col' >


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
<AnimateScroll>  

  

<div className="flex flex-col md:flex-row gap-20 flex-grow-1 justify-center bg-black relative w-full items-center"> 
      <div className="flex flex-col justify-center items-center md:items-start mb-151 mt-24 mb-20">
        {isMobileView ? <SvgMFeed2 /> : <Feed2 />}
      </div>


      <CustomText
        title=" One-click community onboarding"
        content=' Users now have to hop between multiple platforms to access the full offerings of a community. 

              

      

      Community members on TowneSquare can access community servers with their token or NFT in just
      one-click. It also allows non-token communities to be created with the same full suite of features from governance to townhall spaces.'
      /> </div>
      
       </AnimateScroll>

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

<AnimateScroll>

        <div className=" flex flex-col md:flex-row gap-20 flex-grow-1 justify-center bg-black relative w-full items-center">


          <div className="flex flex-col justify-center items-center md:items-start mb-151 mt-24 mb-20">
            {isMobileView ? <SVGFeeed4 /> : <DMfeedSvg />}
          </div>

          <CustomText
            title=" An all-in-one DM system "
            content=' Your user profile on TowneSquare is an identity system that seamlessly connects on-chain credentials, NFT membership, and other verifiable experiences to enable new use cases such as ticketing, reward drops, and authentication services.'
          />
        </div>
      </AnimateScroll>

    

</div>


    </div>
  
  )
}
export default FeedSlider2