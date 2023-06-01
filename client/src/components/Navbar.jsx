import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineGlobal } from 'react-icons/ai';

const Navbar = () => {
    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate('/register');
    }
    const handleLogIn = () => {
        navigate('/login');
    }
    return (
        <div>
            <div className="flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4">
                <GrMenu className='h-6 w-6 md:hidden' />
                <h2 className='text-3xl font-bold '>UCourse</h2>
                <h3 className='hidden text-sm md:block'>Categories</h3>
                <form className='hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center'>
                    <BsSearch className='h-5 w-5 mx-4 text-gray-400' />
                    <input type='text' placeholder='Search for anything' className='bg-transparent text-sm outline-none w-11/12' />
                </form>
                <h3 className='hidden text-sm lg:block cursor-pointer'>Umdemy Bussiness</h3>
                <h3 className='hidden text-sm lg:block md:hidden cursor-pointer'>Teach on Umdemy</h3>
                <div className="flex">
                    <BsSearch className='h-6 w-6 text-gray-400 md:hidden' />
                    <AiOutlineShoppingCart className='h-6 w-6 cursor-pointer' />
                </div>
                <div className='hidden md:flex pr-4 space-x-4 justify-end'>

                    <button className='border border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5]' onClick={handleLogIn}>Log In</button>

                    <button className='border bg-black text-white border-black h-10 text-sm font-bold w-20 ' onClick={handleSignUp}>Sign Up</button>
                    <button className='border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]'>
                        <AiOutlineGlobal className='h-5 w-5' />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Navbar