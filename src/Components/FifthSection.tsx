import React from "react";
import Cols from '../assets/images/Col.png'
import Rocket from '../assets/icons/rocket.svg'
import Search from '../assets/icons/search.svg'
import Podcast from '../assets/icons/podcast.svg'
import Screen from '../assets/icons/screen.svg'
import ShieldCheck from '../assets/icons/shield-check.svg'
import SettingsAlt from '../assets/icons/settings-alt.svg'

const listItems = [
    {
        icon: Search,
        title: 'Bibendum tellus',
        href: 'https://google.com',
        active: true
    },
    {
        icon: ShieldCheck,
        title: 'Cras eget',
        href: 'https://google.com',
        active: false
    },
    {
        icon: Rocket,
        title: 'Dolor pharetra',
        href: 'https://google.com',
        active: false
    },
    {
        icon: Screen,
        title: 'Amet, fringilla',
        href: 'https://google.com',
        active: false
    },
    {
        icon: Podcast,
        title: 'Amet nibh',
        href: 'https://google.com',
        active: false
    },
    {
        icon: SettingsAlt,
        title: 'Sed velit',
        href: 'https://google.com',
        active: false
    },
]

const FifthSection = () => {

    return (
        <div className="px-4 grid gap-8 pt-12 pb-24 sm:px-20 sm:pt-20 sm:pb-32 relative bg-white sm:bg-[#FFFBEB] overflow-hidden ">
            <div className="first-layer absolute left-0"></div>
            <div className="second-layer absolute left-0"></div>
            <div className="third-layer absolute left-0"></div>
            <div className="grid gap-8 sm:mb-20 z-20">
                <h2 className="font-bold text-[32px] text-center leading-[36px] sm:text-left sm:font-extrabold sm:text-[56px]">Grow your collection</h2>
                <p className="font-normal text-base text-center sm:text-left sm:font-normal sm:text-lg" >Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                    Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
            </div>
            <div className=" sm:grid sm:grid-cols-3 z-20">
                <div className="flex justify-start overflow-x-auto gap-4 w-[100vw] sm:flex sm:flex-col sm:flex-wrap sm:gap-4" >
                    {listItems.map((item, index) =>
                        <div key={index} className={item.active ? "active p-4" : "p-4"} >
                            <a href={item.href} className="flex text-nowrap flex-wrap w-60 sm:w-full items-center object-center gap-1 sm:font-medium sm:text-xl">
                                <img src={item.icon} alt="" />
                                {item.title}
                                {item.active ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.586 10.6569L11.636 6.70692C11.4538 6.51832 11.353 6.26571 11.3553 6.00352C11.3576 5.74132 11.4628 5.49051 11.6482 5.3051C11.8336 5.11969 12.0844 5.01452 12.3466 5.01224C12.6088 5.00997 12.8614 5.11076 13.05 5.29292L18.707 10.9499C18.8002 11.0426 18.8741 11.1527 18.9246 11.2741C18.9751 11.3954 19.001 11.5255 19.001 11.6569C19.001 11.7883 18.9751 11.9184 18.9246 12.0398C18.8741 12.1611 18.8002 12.2713 18.707 12.3639L13.05 18.0209C12.9578 18.1164 12.8474 18.1926 12.7254 18.245C12.6034 18.2974 12.4722 18.325 12.3394 18.3262C12.2066 18.3273 12.0749 18.302 11.952 18.2517C11.8291 18.2015 11.7175 18.1272 11.6236 18.0333C11.5297 17.9394 11.4555 17.8278 11.4052 17.7049C11.3549 17.582 11.3296 17.4503 11.3307 17.3175C11.3319 17.1847 11.3595 17.0535 11.4119 16.9315C11.4643 16.8095 11.5405 16.6992 11.636 16.6069L15.586 12.6569H6C5.73478 12.6569 5.48043 12.5516 5.29289 12.364C5.10536 12.1765 5 11.9221 5 11.6569C5 11.3917 5.10536 11.1373 5.29289 10.9498C5.48043 10.7623 5.73478 10.6569 6 10.6569H15.586Z" fill="#0F172A" />
                                </svg>
                                    : null}
                            </a>
                        </div>
                    )}
                </div>
                <div className="z-20 sm:col-span-2" >
                    <img src={Cols} className="w-[361px] h-[260px] sm:w-[960px] sm:h-[560px] object-fill"  alt="" />
                </div>
            </div>
        </div>
    )
}

export default FifthSection;