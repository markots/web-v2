import React, { useState } from 'react'
import { images } from '../../constants/images';
import { BsTwitter } from 'react-icons/bs';

const Home = () => {
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const onMouseMove = (e: any) => {
    const percentX = (window.innerWidth / 2 - e.clientX) / (window.innerWidth / 2);
    const percentY = (window.innerHeight / 2 - e.clientY) / (window.innerHeight / 2);

    const maxOffset = 30;
    setOffset({ left: maxOffset * percentX, top: maxOffset * percentY });
  }

  return (
    <div
      className="relative overflow-hidden h-[1500px] md:h-[800px]"
      onMouseMove={(e) => onMouseMove(e)}
    >
      <img
        src={images.homeBackground}
        alt="background"
        className="hidden md:block md:h-full lg:w-full"
      />
      <img
        src={images.homeBackgroundMobile}
        alt="background"
        className="md:hidden w-full h-auto"
      />
      <div className="absolute inset-0 pt-24 lg:pt-32">
        <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row md:gap-8 lg:gap-32 items-center justify-center px-4">
          <div className="flex flex-col gap-6 max-w-[800px]">
            <span className="text-[40px] md:text-[48px] lg:text-[56px] font-bold">
              <span className="text-[#00EEFD]">The Web3 ”everything” app</span>
              <br />you have been waiting for
            </span>
            <span className="text-[24px] lg:text-[32px] font-semibold">
              By “everything”, we mean social, payments, community space, discover your favorite content & digital items – all in one place.
            </span>
            <div className="self-start">
              <div className="p-4 lg:p-6 flex flex-col lg:flex-row gap-4 lg:gap-0 text-xl font-semibold border border-1 border-[#666] rounded-xl bg-[#00000033]">
                Coming soon on &nbsp;
                <div className="flex">
                  <img src={images.androidLogo} className="w-6" alt="logo" />
                  &nbsp;Android and&nbsp;
                  <img src={images.appleLogo} className="w-6" alt="logo" />
                  &nbsp;iOS
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <button
                className="px-2 md:px-4 lg:px-6 h-12 text-[18px] text-black font-semibold bg-white rounded-full"
              >
                Get early access
              </button>
              <button
                className="px-2 md:px-4 lg:px-6 h-12 flex items-center text-[18px] text-white font-semibold border-2 border-white rounded-full"
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
                <span className="hidden lg:block">Twitter</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center min-w-[300px] relative">
            <img
              src={images.glass} alt="glass"
              className="absolute -right-2 -top-2 ease-in"
              style={{
                left: offset.left,
                top: offset.top
              }}
            />
            <img src={images.feed} alt="feed" className="z-10" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home