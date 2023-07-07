import React from 'react'
import { images } from '../../constants/images';
import { BsTwitter } from 'react-icons/bs';

const Home = () => {
  return (
    <div
      className="relative"
    >
      <img src={images.homeBackground} alt="background" />
      <div className="absolute inset-0 pt-32">
        <div className="flex gap-32 items-center justify-center px-24">
          <div className="flex flex-col gap-6">
            <span className="text-[56px] font-bold">
              <span className="text-[#00EEFD]">The Web3 ”everything” app</span>
              <br />you have been waiting for
            </span>
            <span className="text-[32px] font-semibold">
              By “everything”, we mean social, payments, community space, discover your favorite content & digital items – all in one place.
            </span>
            <div className="self-start">
              <div className="p-6 flex text-xl font-semibold border border-1 border-[#666] rounded-xl bg-[#00000033]">
                Coming soon on &nbsp;
                <img src={images.androidLogo} className="w-6" alt="logo" />
                &nbsp;Android and&nbsp;
                <img src={images.appleLogo} className="w-6" alt="logo" />
                &nbsp;iOS
              </div>
            </div>
            <div className="flex gap-6">
              <button
                className="px-6 h-12 text-[18px] text-black font-semibold bg-white rounded-full"
              >
                Get early access
              </button>
              <button
                className="px-6 h-12 flex items-center text-[18px] text-white font-semibold border-2 border-white rounded-full"
              >
                Follow us on
                <BsTwitter
                  size={38}
                  style={{
                    color: "#009EF7",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                  }}
                />
                Twitter
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center min-w-[300px]">
            <img src={images.feed} alt="feed"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home