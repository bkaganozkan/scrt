import React from "react";
import AppStore from '../assets/images/App Store - Filled.png'
import GooglePlay from '../assets/images/Google Play.png'
import Youtube from '../assets/icons/youtube.png'
import Facebook from '../assets/icons/facebook.png'
import Twitter from '../assets/icons/twitter.png'
import Instagram from '../assets/icons/instagram.png'
import LinkedIn from '../assets/icons/linkedin.png'
import World from '../assets/icons/world.png'

const ItemList = [
    {
        items: ['Product', 'Pricing', 'Overview', 'Browse', 'Accessibility', 'Five']
    },
    {
        items: ['Solutions', 'Brainstorming', 'Ideation', 'Wireframing', 'Research', 'Design']
    },
    {
        items: ['Support', 'Contact Us', 'Developers', 'Documentation', 'Integrations', 'Reports']
    },
]

const FollowUsList = [
    Youtube, Facebook, Twitter, Instagram, LinkedIn
]


const FooterSection = () => {

    return (
        <div className="sm:px-20 text-white bg-[#0F172A] text-center sm:text-left">
            <div className="sm:grid sm:grid-cols-4 flex flex-col justify-evenly gap-12 sm:gap-0 py-12 sm:py-12 border-y border-y-[#334155]">
                {ItemList.map((item, index) =>
                    <div>
                        {item.items.map((i, ind) =>
                            <div className="py-3 first:font-medium font-normal text-base" key={index}>{i}</div>
                        )}
                    </div>
                )}
                <div>
                    <div className="flex flex-col gap-2 ">
                        <div className="font-medium text-base py-3">Get the App</div>
                        <img className="w-[120px] self-center sm:self-start h-10 object-none" src={AppStore} alt="" />
                        <img className="w-[135px] self-center sm:self-start h-10" src={GooglePlay} alt="" />
                        <div className="pt-12 pb-3">Follow Us</div>
                        <div className="flex gap-4  justify-center sm:justify-start">
                            {
                                FollowUsList.map((item, ind) =>
                                    <img key={ind} src={item} alt="" />
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:flex sm:justify-between py-12 items-center">
                <div>Collers @ 2023. All rights reserved.</div>
                <div className="grid grid-cols-4 gap-8 px-[29.5px] sm:px-0 py-12">
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                    <a href="">Contact</a>
                    <a href="" className="grid grid-cols-2">
                        <img src={World} alt="" />EN</a>
                </div>
            </div>
        </div>
    )
}

export default FooterSection