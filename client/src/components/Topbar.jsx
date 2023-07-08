import React from 'react'
import { Link } from 'react-router-dom';
import {
    AiOutlineShoppingCart, AiOutlineGlobal, AiOutlineBell,
    AiOutlineHeart
} from 'react-icons/ai';
const Topbar = ({ userData }) => {
    return (
        <div className='w-full flex justify-end items-center mt-5'>
            <Link to='/'>
                <p className='mr-4 text-sm'>Student</p>
            </Link>

            <AiOutlineBell className='h-6 w-6 cursor-pointer mr-4' />
            <div className=' flex rounded-full bg-[#1C1D1F] w-10 h-10 items-center justify-center mr-4'>
                <p className='text-white cursor-pointer'>{userData.name.split(" ")[0]}</p>
            </div>

        </div>
    )
}

export default Topbar