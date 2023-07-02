import React from 'react'
import { SiAirplayvideo } from 'react-icons/si';
import { BiMessageDetail } from 'react-icons/bi';
import { BsBarChartFill, BsTools, BsQuestionCircleFill } from 'react-icons/bs';

const LeftBar = () => {
    return (
        <div className='w-72 h-screen bg-[#1C1D1F] text-white text-left'>
            <h2 className='text-3xl font-bold ml-4 pt-4 cursor-pointer '>UCourse</h2>
            <div className='flex h-16 font-bold items-center mt-4 cursor-pointer hover:bg-[#3E4143] text-[16px]'>
                <SiAirplayvideo className='mr-4 ml-4 w-5 h-5' />
                <p>Courses</p>
            </div>
            <div className='flex h-16 font-bold items-center mt-4 cursor-pointer hover:bg-[#3E4143] text-[16px]'>
                <BiMessageDetail className='mr-4 ml-4 w-5 h-5' />
                <p>Communication</p>
            </div>
            <div className='flex h-16 font-bold items-center mt-4 cursor-pointer hover:bg-[#3E4143] text-[16px]'>
                <BsBarChartFill className='mr-4 ml-4 w-5 h-5' />
                <p>Performance</p>
            </div>
            <div className='flex h-16 font-bold items-center mt-4 cursor-pointer hover:bg-[#3E4143] text-[16px]'>
                <BsTools className='mr-4 ml-4 w-5 h-5' />
                <p>Tools</p>
            </div>
            <div className='flex h-16 font-bold items-center mt-4 cursor-pointer hover:bg-[#3E4143] text-[16px]'>
                <BsQuestionCircleFill className='mr-4 ml-4 w-5 h-5' />
                <p>Resources</p>
            </div>
        </div>
    )
}

export default LeftBar