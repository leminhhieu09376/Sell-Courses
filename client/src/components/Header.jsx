import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineGlobal, AiOutlineBell } from 'react-icons/ai';

const Header = () => {
    const navigate = useNavigate();
    const handleMylearningBtn = () => {
        navigate('/my-learning');
    }
    const handleShoppingCart = () => {
        navigate('/shopping-cart');
    }
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
                <h3 className='hidden text-sm lg:block cursor-pointer'>Instructor</h3>
                <h3 onClick={handleMylearningBtn} className='hidden text-sm lg:block md:hidden cursor-pointer'>My learning</h3>

                <div className="flex">
                    <BsSearch className='h-6 w-6 text-gray-400 md:hidden' />

                    <AiOutlineShoppingCart onClick={handleShoppingCart} className='h-6 w-6 mr-4 cursor-pointer' />
                    <AiOutlineBell className='h-6 w-6 cursor-pointer' />
                </div>
                <div className=' flex rounded-full bg-[#1C1D1F] w-10 h-10 items-center justify-center '>
                    <p className='text-white cursor-pointer'>LMH</p>
                </div>


            </div>



        </div>
    )
}

export default Header