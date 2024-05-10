
import React, { useEffect, useState } from "react";

const menuItems = [
    {
        index: 0,
        label: "Producs",
    },
    {
        index: 1,
        label: "Solutions",
    },
    {
        index: 2,
        label: "Pricing",
    },
    {
        index: 3,
        label: "Resources",
    },
    {
        index: 4,
        label: "Login",
    },
    {
        index: 5,
        label: "Sign up now",
    }
]

const HeaderComponent = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const handleWindowWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowWidth);

        return () => window.removeEventListener('resize', handleWindowWidth)
    }, [])

    return (
        <div className="flex justify-between p-4 sm:px-20 text-[#78350F] items-center h-16 sm:h-24 bg-white sm:bg-[#FEF3C7]">
            <h5 className="font-bold font-roboto text-[32px] py-[30.5px]"> Collers</h5>
            {width > 768 ? <div className="grid grid-cols-6 py-6 gap-2">
                {
                    menuItems.map(item =>
                        <div className="cursor-pointer px-2 py-3 font-medium text-base leading-6 text-center last:border-[#78350F] last:border-2 last:rounded-lg" key={item.index}> {item.label} </div>
                    )
                }
            </div> :
                <div>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 5.5H13" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 12.5H8" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 19.5H3" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            }
        </div>
    )
}

export default HeaderComponent