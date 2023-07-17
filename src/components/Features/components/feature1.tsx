

import { useState, useEffect } from 'react';

import CustomText from './CustomText';
import { AnimateScroll } from './Animationstyle';



function Featuredex() {
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
        <div className="flex flex-col md:flex-row gap-20 flex-grow-1 justify-center bg-black relative w-full items-center">
            <div
                className="flex flex-col md:flex-row gap-20 flex-grow-1 justify-center bg-black relative w-full items-center"
                style={{
                    background: `url("/images/backk.png")`,
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
                                {isMobileView ? (
                                    <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                                        <img className="w-full" src="/images/features/m_features1.svg" alt="experence_freedom" />
                                    </div>
                                ) : (
                                    <img className="w-full" src="/images/features/features1.svg" alt="experence_freedom" />
                                )}
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
                                {isMobileView ? (
                                    <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                                        <img className="w-full" src="/images/features/m_features2.svg" alt="experence_freedom" />
                                    </div>
                                ) : (
                                    <img className="w-full" src="/images/features/features2.svg" alt="experence_freedom" />
                                )}
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
                                {isMobileView ? (
                                    <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                                        <img className="w-full" src="/images/features/m_features3.svg" alt="experence_freedom" />
                                    </div>
                                ) : (
                                    <img className="w-full" src="/images/features/features3.svg" alt="experence_freedom" />
                                )}
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
                                {isMobileView ? (
                                    <div className="md:mx-8 lg:mx-8 lg:w-1/3 md:w-1/2">
                                        <img className="w-full" src="/images/features/m_features4.svg" alt="experence_freedom" />
                                    </div>
                                ) : (
                                    <img className="w-full" src="/images/features/features4.svg" alt="experence_freedom" />
                                )}
                            </div>

                            <CustomText
                                title=" An all-in-one DM system "
                                content=' Your user profile on TowneSquare is an identity system that seamlessly connects on-chain credentials, NFT membership, and other verifiable experiences to enable new use cases such as ticketing, reward drops, and authentication services.'
                            />
                        </div>
                    </AnimateScroll>



                </div>


            </div>
        </div>

    )
}
export default Featuredex;