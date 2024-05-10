import React from "react";
import ShoesLast from '../assets/images/xx.jfif'


const SixthSection = () => {

    return (
        <div className="bg-[#78350F] sm-section-bg sm:section-bg relative">
            <div className="flex flex-col gap-2 sm:px-20 sm:py-[270.5px] py-[310.5px] px-4 text-center text-[#FFFBEB] locator-box-shadow z-30">
                <h1 className="font-extrabold sm:text-8xl text-5xl">
                    11,658,468
                </h1>
                <h2 className="sm:font-extrabold  sm:text-6xl font-bold text-[32px]">
                    Shoes Collected
                </h2>
            </div>
            <div className="sm-section-position sm:section-position absolute flex flex-col items-center locator-box-shadow">
                <img className="z-30  border-[5px] border-white rounded-[5px] object-cover w-[256px] h-[200px]" src={ShoesLast} alt="" />
                <div className="z-20 absolute top-48 bg-[#E2E8F0] rounded-[5px] w-[250px] py-4 px-2">Emma Simpson collected one pair of Cool Shoes.</div>
                <div className="z-10 absolute top-64 left-28 map-green-pointer"></div>
            </div>


        </div>
    )
}

export default SixthSection;