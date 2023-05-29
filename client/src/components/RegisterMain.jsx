import React from 'react'
import { Link } from 'react-router-dom'
const RegisterMain = () => {
    return (
        <div className='w-full'>
            <h1 className='mt-20 font-bold mb-4'>Sign up and start learning</h1>
            <div className='mx-auto w-full'>
                <input className='w-96 border border-black outline-none mb-4 p-4 font-bold ' type="text" placeholder='Full name' />
                <br />
                <input className='w-96 border border-black outline-none mb-4 p-4 font-bold' type="password" placeholder='Email' />
                <br />
                <input className='w-96 border border-black outline-none mb-4 p-4 font-bold' type="password" placeholder='Password' />
                <br />
                <input className='w-96 border border-black outline-none mb-4 p-4 font-bold' type="password" placeholder='Re-enter Password' />
                <br />
                <button className='w-96 border outline-none mb-4 p-3 font-bold bg-[#8710D8] text-white mt-4'>Sign up</button>
            </div>

            <hr className='w-96 mx-auto mb-4' />
            <div className='mb-20'>
                <span>Already have an account? </span>
                <Link to="/login">
                    <span className='font-bold text-[#401B9C] underline  '><a href=""> Log in</a></span>
                </Link>

            </div>
        </div>
    )
}

export default RegisterMain