import React from 'react'
import { Link } from 'react-router-dom'
const LoginMain = () => {
    return (
        <div className='w-full'>
            <h1 className='mt-20 font-bold mb-4'>Log in to your Umdemy account</h1>
            <div className='mx-auto w-full'>
                <input className='w-96 border border-black outline-none mb-4 p-4 font-bold ' type="text" placeholder='Email' />
                <br />
                <input className='w-96 border border-black outline-none mb-4 p-4 font-bold' type="password" placeholder='Password' />
                <br />
                <button className='w-96 border outline-none mb-4 p-3 font-bold bg-[#8710D8] text-white mt-4'>Log in</button>
            </div>
            <div className='mb-4 mt-10'>
                <span>or </span>
                <Link to="/forgotPassword">
                    <span className='font-bold text-[#401B9C] underline '><a href=""> Forgot Password</a></span>
                </Link>
            </div>
            <hr className='w-96 mx-auto mb-4' />
            <div className='mb-20'>
                <span>Don't have an account? </span>
                <Link to="/register">
                    <span className='font-bold text-[#401B9C] underline  '><a href=""> Sign up</a></span>
                </Link>
            </div>
        </div>
    )
}

export default LoginMain