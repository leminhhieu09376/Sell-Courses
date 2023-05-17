// import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="w-full h-80 bg-[#1C1D1F] pt-8  ">
            <div className='flex justify-between ml-8 mr-8'>
                <div className="flex text-gray-50 items-start ">
                    <div className="mr-28 text-left ">
                        <p>Udemy Business</p>
                        <p>Teach on Udemy</p>
                        <p>Get the app</p>
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>
                    <div className="mr-28 text-left ">
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Help and Support</p>
                        <p>Affiliate</p>
                        <p>Investors</p>
                    </div>
                    <div className="mr-28 text-left">
                        <p>Terms</p>
                        <p>Privacy policy</p>
                        <p>Cookie settings</p>
                        <p>Sitemap</p>
                        <p>Accessibility statement
                        </p>
                    </div>
                </div>
                <div className='text-gray-50 flex border border-gray-100 h-10 w-28 justify-center items-center'>
                    <AiOutlineGlobal />
                    <p>English</p>
                </div>
            </div>
            <div className='flex justify-between text-gray-50 mt-20'>
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" className='w-20 h-20 ml-8' />
                <p className='mr-8 text-xs mt-8 '>© 2023 Ucourse, Inc.</p>
            </div>
        </div>
    )
}

export default Footer