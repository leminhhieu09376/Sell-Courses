import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineGlobal, AiOutlineBell } from 'react-icons/ai';

const Header = () => {
    return (
        <div>
            <div className="flex space-x-4 bg-white h-[74px]  text-center justify-between items-center px-4">
                <GrMenu className='h-6 w-6 md:hidden' />
                <h2 className='text-3xl font-bold '>UCourse</h2>
                <h3 className='hidden text-sm md:block'>Categories</h3>
                <form className='hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center'>
                    <BsSearch className='h-5 w-5 mx-4 text-gray-400' />
                    <input type='text' placeholder='Search for anything' className='bg-transparent text-sm outline-none w-11/12' />
                </form>
                <h3 className='hidden text-sm lg:block'>Umdemy Bussiness</h3>
                <h3 className='hidden text-sm lg:block md:hidden'>Teach on Umdemy</h3>
                <div className="flex">
                    <BsSearch className='h-6 w-6 text-gray-400 md:hidden' />
                    <AiOutlineShoppingCart className='h-6 w-6 mr-4' />
                    <AiOutlineBell className='h-6 w-6' />
                </div>
                <div className=' flex rounded-full bg-[#1C1D1F] w-10 h-10 items-center justify-center '>
                    <p className='text-white'>LMH</p>
                </div>


            </div>
            <hr />
            <div className='flex justify-center w-full mx-auto mt-4 shadow-lg'>
                <p className='p-4 mr-10 cursor-pointer'>Python</p>
                <p className='p-4 mr-10 cursor-pointer'>Excel</p>
                <p className='p-4 mr-10 cursor-pointer'>Web Development</p>
                <p className='p-4 mr-10 cursor-pointer'>Javascript</p>
                <p className='p-4 mr-10 cursor-pointer'>Data Science</p>
                <p className='p-4 mr-10 cursor-pointer'>Amazon AWS</p>
                <p className='p-4 mr-10 cursor-pointer'>Drawing</p>
            </div>


        </div>
    )
}

export default Header