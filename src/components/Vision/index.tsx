import React, { ReactElement, ReactNode } from 'react'
import { useInView } from 'react-cool-inview'


function Vision() {
  const {observe, unobserve, inView, scrollDirection, entry} = useInView({
    threshold:1,
    onEnter:({scrollDirection, entry, observe, unobserve}) => {
      observe()
    },
    onChange:({inView, observe}) => {
      observe()
    },
  })

    const transform = () => {
      const sticky = document.querySelector('.sticky')
      const offSetTop = sticky?.parentElement?.offsetTop
      const scrollSection = sticky?.querySelector('.scroll_section')
      let percentage = 0;
      if(offSetTop != undefined){
         let value = ((window.scrollY - offSetTop) / window.innerHeight) * 100
        percentage = value < 0 ? 0 : value > 400 ? 400 : value
      }

      scrollSection?.setAttribute("style",`transform:translate3d(${-(percentage)}vw, 0, 0)`)
    }

  window.addEventListener('scroll',(e) => {
    transform()
  })


  return (
    <div className="bg-fixed bg-black bg-right-bottom bg-no-repeat bg-cover bg-vision-bg-mobile md:bg-vision-bg-tablet lg:bg-vision-bg">
      <div  className="h-screen text-white bg-black lg:bg-transparent font-Outfit">
        <div className="relative flex items-center justify-center h-full">
          <p className="absolute font-bold opacity-25 left-20 whitespace-nowrap">~ manage personal data</p>
          <p className="absolute font-bold opacity-50 top-16">~ full control</p>
          <p className="absolute font-bold opacity-20 top-32 right-px">= p2p payment</p>
          <p  className="absolute font-bold opacity-50 bottom-40 focus-visible:opacity-100 right-4">~ financial freedom</p>
          <p className="absolute font-bold opacity-25 -left-1 bottom-20">=Identity freedom</p>
          <p className="absolute font-bold opacity-20 whitespace-nowrap -right-2 bottom-6">=Open finance</p>
          <div  ref={observe} className="flex flex-col items-center justify-center right-2 top-48">
              <p id='text_1' className={inView ? "text-3xl font-extrabold text-center opacity-100 ease-in delay-300": "text-3xl font-extrabold text-center opacity-25"}>We want to put the power of Web3 in</p>
              <p id='text_2' className={inView ? "text-3xl font-extrabold text-center  ease-in delay-500 transition-opacity": "text-3xl font-extrabold text-center opacity-25"}>the hands of billons, so we created</p>
              <p  id='text_3' className={inView ? "text-3xl font-extrabold text-center ease-in delay-700 transition-opacity": "text-3xl font-extrabold text-center opacity-25"}>TowneSquare</p>
              <img alt='signature' className={ inView ? "ease-in delay-1000 transition-opacity bottom-52": "transition ease-in delay-1000 opacity-0 bottom-52" } src="/images/signature.svg"/>
          </div>
        </div>
      </div>
    <div className='h-[400vh]'>
      <div className="sticky overflow-hidden top-0 h-[100vh]">
        <div className='absolute top-0 scroll_section h-[100%] w-[400vw] will-change-transform flex'>
            <div className="items-center justify-center hidden w-screen lg:flex"> 
              <div> 
                <p className="text-2xl text-center text-white">Envision a future where everyone has</p>
                <h1 className={inView ? "text-blue-500 font-extrabold text-4xl": "text-white font-extrabold text-4xl"}>finance, informational ,and identity freedom</h1>
              </div>
          </div>
          <div className='flex flex-col items-center justify-center w-screen h-screen px-2 text-white font-Outfit lg:flex-row md:flex-row'>
            <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
              <img className="w-full" src="/images/financial_freedom.svg" alt="financial_freedom"/>
            </div>
            <div>
              <p className="py-2 font-light">With TowneSquare you get</p>
              <div className="py-4">
                <h1 className="text-3xl ">Financial freedom</h1>
                <img src="/images/financial_img.png" alt="financial_image"/>
              </div>
              <p className="font-light leading-6 lg:text-xl">
                Don't like centralized institutions or other third <p>parties mess with your finance?
                Neither do we</p> 
                <p> Liberate yourself and seize limitless financial</p><p>opportunities with
                TowneSquare.</p>
              </p>
            </div>
          </div>
      <div className="flex flex-col items-center justify-center w-screen h-screen px-2 text-white font-Outfit lg:flex-row md:flex-row">
       <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
         <img className="w-full" src="/images/identity_freedom.svg" alt='identity_freedom'/>
       </div>
       <div>
         <p className="py-2 font-light">With TowneSquare you get</p>
        <div className="py-4">
          <h1 className="text-3xl">Identity freedom</h1>
          <img src="/images/financial_img.png" alt="financial_image"/>
        </div>
        <p className="font-light leading-6 lg:text-xl">
          Embrace the power to shape and <p>cultivate your unique identity and </p> <p> persona.
          Own your verifable history </p>  <p> records, securely stored on decentralized</p>
          <p>ledgers, empowering you to define and </p> <p> express
          yourself authentically.</p>
        </p>
       </div>
      </div>
       <div className='flex flex-col items-center justify-center w-screen h-screen px-2 text-white font-Outfit lg:flex-row md:flex-row'>
       <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
         <img className="w-full" src="/images/informational_freedom.svg" alt="financial_freedom"/>
       </div>
       <div>
        <p className="py-2 font-light">With TowneSquare you get</p>
        <div className="py-4">
          <h1 className="text-3xl ">Informational freedom</h1>
          <img src="/images/financial_img.png" alt="financial_image"/>
        </div>
        <p className="font-light leading-6 lg:text-xl">
          Ignite the flow of information and ideas  <p>in a public town square, governed by</p> 
          <p> user-defined rules, liberated from the </p><p>grasp of centralized data managers.</p>
          <p>Explore, share and discover without</p>
          <p>Limitation</p>
        </p>
       </div>
      </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Vision