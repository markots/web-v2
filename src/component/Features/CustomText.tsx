import React from 'react';


interface CustomTextProps {
    title: string;
    content: string;
}

const CustomText: React.FC<CustomTextProps> = ({ title, content }) => {
    return (



        <div className=" p-12 flex flex-col self-stretch md:flex justify-center items-center md:items-start text-center md:text-left">
            <div className="text-base sm:text-xl md:text-2xl lg:text-2xl font-[Outfit] font-normal leading-[24px] sm:leading-[30px] md:leading-[34px] text-white max-w-[500px] px-4
    sm:w-[328px] sm:h-auto sm:min-h-[384px]
    md:w-full md:max-w-[500px] md:h-auto md:min-h-[202px]
    lg:w-full lg:max-w-[500px] lg:h-auto lg:min-h-[270px]">
                <div className=" text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-[Outfit]  hover:-translate-y-1 hover:scale-110 hover: font-bold  duration-300 ...font-bold text-white mb-6">
                    {title}
                </div>

                

                <div className="flex flex-col self-stretch text-base sm:text-xl md:text-2xl lg:text-2xl font-[Outfit] font-normal leading-[24px] sm:leading-[30px] md:leading-[34px] text-white">
                    {content}
                </div>
            </div>
        </div>

    );
};

export default CustomText;
