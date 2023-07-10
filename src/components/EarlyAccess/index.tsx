import React from 'react'

function EarlyAccess() {
  return (
    <>
      <div className='bg-black'>
        <div className='relative'>
          <img src='/images/early_left.svg' alt="left" className='absolute top-[-700px] z-0' />
        </div>
        <div className="justify-center lg:flex">
          <p className="text-[29px] pt-[209px] pb-[125px] text-center text-white font-Outfit font-bold">Backed by the best</p>
        </div>
        <div className='justify-center lg:flex space-x-24 pb-12'>
          <img src="/images/bixin.svg" alt="bixin_image"/>
          <img src="/images/aptos.svg" alt="aptos_image"/>
        </div>
        <div className='lg:flex space-x-60 w-[300%] ml-[-20%] pb-64'>
          <p className='text-center text-white font-Outfit font-bold text-7xl pt-20 z-10'>Let's connect</p>
          <p className='text-center text-white font-Outfit font-bold text-7xl pt-20 z-10'>Let's connect</p>
          <p className='text-center text-white font-Outfit font-bold text-7xl pt-20 z-10'>Let's connect</p>
          <p className='text-center text-white font-Outfit font-bold text-7xl pt-20 z-10'>Let's connect</p>
        </div>
        
        <div className='relative'>
          <img className='w-full absolute mt-[-200px]' src="/images/line.svg" alt="line_image"/>
          <img className='w-full' src="/images/bottom.svg" alt="bottom_image"/>
          <div className="absolute inset-0 flex items-center justify-center w-full bottom-[70%]">
            <div className="bg-gray-500 bg-opacity-30 backdrop-blur-sm py-24 border border-white w-8/12 rounded-md">
              <p className="text-[32px] text-center text-white font-Outfit font-bold">Be among the first to try out Townesquare</p>
              <p className="text-[18px] text-center text-white font-Outfit pt-4">We’ll send you an invite to try out TowneSquare as soon as we’re ready.<br/>No spam, no junk mail or other mumbo-jumbo, pinky promise!</p>
              <div className='flex space-x-6 justify-center pt-16'>
                <input className="placeholder-shown:border-gray-500 border-[#CCCCCC] border rounded-full bg-black px-5 w-6/12 text-white text-[16px] py-1 h-12" placeholder='Your email' />
                <button className="rounded-full bg-[#9264F8] text-[18px] font-Outfit text-white py-2 px-6 h-12">Signup for early access</button>
              </div>
            </div>
          </div>
          <div className='absolute text-center w-full bottom-[40%]'>
            <p className="text-[20px] text-center text-white font-Outfit font-bold">Find out more about Townesquare</p>
            <div className='flex justify-center pt-6 space-x-8'>
              <img src="/images/twitter.svg" alt="twitter_image"/>
              <img src="/images/github.svg" alt="github_image"/>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default EarlyAccess
