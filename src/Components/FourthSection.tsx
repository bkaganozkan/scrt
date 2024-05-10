import React from "react";
import CompanyIcon from '../assets/icons/companyIcon.png'
import UserImage from '../assets/icons/userImage.png'

const customersList = [
    {
        companyIcon: CompanyIcon,
        company: 'Zoomerr',
        descriptino: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
        userImage: UserImage,
        userName: 'Hellen Jummy',
        userPosition: 'Team Lead'
    },
    {
        companyIcon: CompanyIcon,
        company: 'SHEELS',
        descriptino: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
        userImage: UserImage,
        userName: 'Hellena John',
        userPosition: 'Co-founder'
    },
    {
        companyIcon: CompanyIcon,
        company: 'ArtVenue',
        descriptino: 'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
        userImage: UserImage,
        userName: 'David Oshodi',
        userPosition: 'Manager'
    },
    {
        companyIcon: CompanyIcon,
        company: 'WALMART',
        descriptino: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
        userImage: UserImage,
        userName: 'Burak Kagan Ozkan',
        userPosition: 'Software Engineer'
    },
    {
        companyIcon: CompanyIcon,
        company: 'WALMART',
        descriptino: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
        userImage: UserImage,
        userName: 'Burak Kagan Ozkan',
        userPosition: 'Software Engineer'
    },
]



const FourthSection = () => {

    return (
        <div className="py-12 pb-24 sm:py-20 bg-[#FFFBEB] ">
            <div className="flex sm:px-20 px-4 py-4 sm:items-center">
                <h2 className="flex-grow font-bold text-3xl text-center sm:text-left sm:font-extrabold sm:text-[56px] sm:leading-[61.6px]">Because they love us</h2>
                <div>|--    --|</div>
            </div>
            <div className="fourth-bg sm:mx-10 sm:mt-10 relative sm:h-[300px] h-[275px] -z-1">
                <div className="w-full sm:-m-10 overflow-x-auto  absolute top-5 sm:top-20 z-30 ">
                    <div className="flex justify-start gap-4 sm:gap-6 -mx-20  whitespace-nowrap">
                        {
                            customersList.map((item, index) =>
                                <div key={index} className="p-6 sm:p-8 grid flex-col h-[300px] gap-4 sm:gap-6 bg-white min-w-[325px] sm:w-[384px] border rounded-[20px] card-shadow">
                                    <div className="flex gap-2 items-center">
                                        <img src={item.companyIcon} alt="" />
                                        {item.company}
                                    </div>
                                    <p className="text-wrap">
                                        {item.descriptino}
                                    </p>
                                    <div className="flex gap-2 items-center">
                                        <img src={item.userImage} alt="" />
                                        <div className="flex flex-col">
                                            <span className="font-normal text-lg">{item.userName}</span>
                                            <span className="text-[#475569] text-base font-normal"> {item.userPosition}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FourthSection;