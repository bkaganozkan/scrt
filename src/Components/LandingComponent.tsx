import React from "react";


const Shoes = require("../assets/images/shoes.png")


const LandingComponent = () => {

    return (
        <div className="sm:landing-bg sm-landing-bg py-12" >
            <div className="grid sm:grid-cols-2 gap-8 ">
                <div className="p-4 sm:p-20 text-[#0F172A]" >
                    <h1 className="font-extrabold text-7xl leading-[80px] mb-8 text-center sm:text-left">Collectible Sneakers</h1>
                    <p className="font-normal text-lg mb-8 text-center sm:text-left">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                    <div className="flex items-center justify-center sm:justify-start text-xl font-medium  text-[#78350F] gap-4 ">
                        <a className="cursor-pointer border-2 rounded-lg p-4 border-[#78350F] text-center" >Sign up now</a>
                        <a className="text-center inline-block flex cursor-pointer">
                            <svg width={24} height={24} className="mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#78350F" opacity="0" /><g fill="#78350F"><path d="m12 2a10 10 0 1 0 10 10 10 10 0 0 0 -10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1 -8 8z" /><path d="m12.34 7.45a1.7 1.7 0 0 0 -1.85-.3 1.6 1.6 0 0 0 -1 1.48v6.74a1.6 1.6 0 0 0 1 1.48 1.68 1.68 0 0 0 .69.15 1.74 1.74 0 0 0 1.16-.45l3.66-3.37a1.6 1.6 0 0 0 0-2.36zm-.84 7.15v-5.2l2.81 2.6z" /></g></svg>
                            Watch Demo</a>
                    </div>
                </div>

                <div className="m-4 sm:m-20 z-10 relative">
                    <img src={Shoes} alt="" className="object-contain" />
                    <div className="sm-shoes-bg sm:shoes-bg"></div>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-20 text-[#0F172A] px-4 pt-12 sm:p-20 w-full">
                <div className="flex flex-col items-center">
                    {/* <svg className="mb-4" width="64px" height="64px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#78350F"><path d="M6.74534 4H17.3132C17.3132 4 16.4326 17.2571 12.0293 17.2571C9.87826 17.2571 8.56786 14.0935 7.79011 10.8571C6.97574 7.46844 6.74534 4 6.74534 4Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.3132 4C17.3132 4 18.2344 3.01733 19 2.99999C20.5 2.96603 20.7773 4 20.7773 4C21.0709 4.60953 21.3057 6.19429 19.8967 7.65715C18.4876 9.12 16.9103 10.4 16.2684 10.8571" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.74527 4.00001C6.74527 4.00001 5.78547 3.00614 4.99995 3.00001C3.49995 2.9883 3.22264 4.00001 3.22264 4.00001C2.92908 4.60953 2.69424 6.19429 4.1033 7.65715C5.51235 9.12001 7.14823 10.4 7.79004 10.8572" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.50662 20C8.50662 18.1714 12.0292 17.2571 12.0292 17.2571C12.0292 17.2571 15.5519 18.1714 15.5519 20H8.50662Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> */}
                    <h4 className="font-medium text-xl mb-4" >Nibh viverra</h4>
                    <p className="font-normal text-lg w-[373.33px]">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                </div>
                <div className="flex flex-col items-center">
                    {/* <svg className="mb-4" width="64px" height="64px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#78350F"><path d="M21 20L3 14" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 10V11" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 9V10" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 8V9" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"></path><path d="M3 21H21V12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12V21Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> */}
                    <h4 className="font-medium text-xl mb-4" >Cursus amet</h4>
                    <p className="font-normal text-lg w-[373.33px]">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                </div>
                <div className="flex flex-col items-center">
                    {/* <svg className="mb-4" width="64px" height="64px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#78350F"><path d="M2 20V9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z" stroke="#78350F" stroke-width="1.5"></path><path d="M8.5 2.5L12 6L15.5 2.5" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> */}
                    <h4 className="font-medium text-xl mb-4" >Ipsum fermentum</h4>
                    <p className="font-normal text-lg w-[373.33px]">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                </div>


            </div>
        </div>
    )
}

export default LandingComponent;