import React from "react";
import Shoes1 from "../assets/images/ayakkabi.jfif"
import Shoes2 from "../assets/images/ayakkabi2.jfif"
import Shoes3 from "../assets/images/ayakkabi3.jfif"

const products = [
    {
        id: 1,
        title: 'Title',
        description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        image: Shoes1
    },
    {
        id: 2,
        title: 'Title',
        description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        image: Shoes2
    },
    {
        id: 3,
        title: 'Title',
        description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
        image: Shoes3
    },
]


const SecondSection = () => {


    return (
        <div className="bg-[#0F172A] border-b-1 border-t-4 border-[#E2E8F0] text-white py-12 sm:pb-14">
            <div className="grid sm:grid-cols-4 m-4 mt-12 sm:m-20 gap-20 align-middle sm:text-left">
                <div className="sm:col-span-3 font-extrabold text-[32px] sm:text-[56px] leading-[35.2px] sm:leading-[61.6px] text-center sm:text-left"> The best of the best</div>
                <button className="border-2 border-white rounded-lg  mx-16 sm:mx-0  py-5 px-6 font-bold text-2xl leading-6">Sign up now</button>
            </div>
            <div className="grid sm:grid-cols-3  sm:mx-9 mb-20 gap-8 sm:gap-12 sm-second-bg  sm:second-bg px-4 sm:px-8 sm:py-6 ">
                {products.map((item) =>
                    <div key={item.id} className="border border-[#0F172A] rounded-[10px] bg-[#0F172A] second-box-shadow">
                        <img src={item.image} alt="shoes" className="object-cover rounded-[4px] sm:h-[220px] sm:w-[402px]" />
                        <div className="mx-8 mt-8">
                            <h6 className="mb-4 font-bold text-2xl leading-[26.6px]">{item.title}</h6>
                            <p className="text-lg font-normal">{item.description}</p>
                        </div>
                        <div className="grid p-8">
                            <button className="border-2 border-white p-4 rounded-lg flex items-center justify-center font-medium text-">
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99999 16C6.46956 16 5.96085 15.7893 5.58578 15.4142C5.21071 15.0391 4.99999 14.5304 4.99999 14C4.99999 13.4696 5.21071 12.9609 5.58578 12.5858C5.96085 12.2107 6.46956 12 6.99999 12C7.53043 12 8.03913 12.2107 8.41421 12.5858C8.78928 12.9609 8.99999 13.4696 8.99999 14C8.99999 14.5304 8.78928 15.0391 8.41421 15.4142C8.03913 15.7893 7.53043 16 6.99999 16ZM14 16C13.4696 16 12.9609 15.7893 12.5858 15.4142C12.2107 15.0391 12 14.5304 12 14C12 13.4696 12.2107 12.9609 12.5858 12.5858C12.9609 12.2107 13.4696 12 14 12C14.5304 12 15.0391 12.2107 15.4142 12.5858C15.7893 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16ZM0.961994 1.923C0.712355 1.91495 0.475635 1.81012 0.301892 1.63068C0.128149 1.45125 0.0310059 1.21127 0.0310059 0.9615C0.0310059 0.711732 0.128149 0.471755 0.301892 0.292318C0.475635 0.11288 0.712355 0.00805181 0.961994 0L2.11299 0C3.01499 0 3.79499 0.626 3.99099 1.506L5.24399 7.148C5.43999 8.028 6.21999 8.654 7.12199 8.654H14.634L16.076 2.884H6.73099C6.4837 2.87272 6.25028 2.76654 6.07928 2.58755C5.90827 2.40857 5.81285 2.17055 5.81285 1.923C5.81285 1.67545 5.90827 1.43743 6.07928 1.25845C6.25028 1.07946 6.4837 0.973284 6.73099 0.962H16.076C16.3683 0.961914 16.6568 1.02848 16.9196 1.15663C17.1823 1.28479 17.4124 1.47116 17.5923 1.70158C17.7722 1.93201 17.8972 2.20041 17.9578 2.4864C18.0184 2.77238 18.013 3.06842 17.942 3.352L16.5 9.12C16.396 9.5362 16.1559 9.90568 15.8178 10.1697C15.4797 10.4337 15.063 10.5771 14.634 10.577H7.12199C6.24679 10.5771 5.39772 10.2787 4.71501 9.7311C4.0323 9.18348 3.55678 8.41938 3.36699 7.565L2.11299 1.923H0.961994Z" fill="white" />
                                </svg>
                                <span className="px-4">
                                    Buy Now
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )

}

export default SecondSection;