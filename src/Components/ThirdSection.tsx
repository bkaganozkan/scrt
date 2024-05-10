import React from "react";
import Desktop from '../assets/images/Desktop.png'


const ThirdSection = () => {

    return (
        <div className=" sm:py-40 px-4 pt-4 pb-14 sm:px-20 bg-white sm:bg-[#FFFBEB]">
            <div className="container relative third-card-shadow grid sm:grid-cols-2 sm:gap-20 px-4 sm:px-20 bg-white rounded-[30px] sm:py-14">
                <div className="z-20 flex flex-wrap grow-0 flex-col gap-6 items-center sm:items-start ">
                    <h2 className="font-bold text-[32px] leading-[35.2px] px-4 pt-8 sm:font-extrabold sm:text-[56px] sm:leading-[61.6px] text-[#0F172A] text-center sm:text-left">Why join us</h2>
                    <ul className="font-normal text-base gap-2 sm:font-normal sm:text-xl sm:leading-9 custom-list">
                        <li >Est et in pharetra magna adipiscing ornare aliquam.</li>
                        <li >Est et in pharetra magna adipiscing ornare aliquam.</li>
                        <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
                    </ul>
                    <div className="flex-grow-0 z-20">
                        <button className=" border-2 border-[#78350F] p-4 rounded-lg">
                            <span className="text-[#78350F] font-medium text-xl">
                                Sign up now
                            </span>
                        </button>
                    </div>
                </div>
                <div className="mt-8 sm:mt-0 sm:bg-desktop">
                    <img className="z-30 relative object-none desktop-shadow" src={Desktop} alt="desktop" />
                </div>
                {/* <div className="sm:bg-desktop">
                        
                </div> */}
            </div>
        </div>
    )
}

export default ThirdSection;