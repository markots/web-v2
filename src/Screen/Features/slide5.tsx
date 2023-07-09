import AnimateOnScroll from "../../component/Features/animation";
import React from 'react'
import { images } from '../../constants/images'
import CustomText from '../../component/Features/CustomText'
import ProfileFeed from '../../component/Features/Peofile'
import DMfeedSvg from "../../component/Features/DmFeed";



function Feature5() {
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
            <AnimateOnScroll>

                <div className=" flex flex-row">


                    <div className="flex flex-col justify-center items-center md:items-start mb-151 mt-24 mb-20">
                        <DMfeedSvg />
                    </div>


                    <CustomText
                        title=" An all-in-one DM system "
                        content=' Your user profile on TowneSquare is an identity system that seamlessly connects on-chain credentials, NFT membership, and other verifiable experiences to enable new use cases such as ticketing, reward drops, and authentication services.'
                    />



                </div>



            </AnimateOnScroll>



        </div>



    )
}

export default Feature5