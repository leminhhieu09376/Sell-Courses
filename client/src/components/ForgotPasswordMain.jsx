import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from 'react-icons/ai';
const ForgotPasswordMain = () => {
    const [enterBtn, setEnterBtn] = useState(false)
    const handleReset = () => {
        setEnterBtn(true)
    }
    return (
        <div>
            {
                enterBtn == false ?
                    <div className='w-full'>
                        <h1 className='mt-20 font-bold mb-4'>Forgot Password</h1>
                        <div className='mx-auto w-full'>
                            <input className='w-96 border border-black outline-none mb-4 p-4 font-bold ' type="text" placeholder='Email' />
                            <br />

                            <button onClick={handleReset} className='w-96 border outline-none mb-4 p-3 font-bold bg-[#8710D8] text-white mt-4'>Reset Password</button>
                        </div>
                        <div className='mb-4 mt-10'>
                            <span>or </span>
                            <Link to="/login">
                                <span className='font-bold text-[#401B9C] underline '><a href=""> Log in</a></span>
                            </Link>
                        </div>

                    </div>
                    :
                    <div className='w-full mt-20 h-72'>

                        <div className='mx-auto w-96 h-32 bg-[#ACD2CC] text-left flex '>
                            <div className='mt-3 ml-4 mr-4'>
                                <AiFillCheckCircle className='h-10 w-10' />
                            </div>
                            <div className='mt-3'>
                                <h3 className='font-bold'>Reset password email sent</h3>
                                <p className='text-sm'>You should soon receive an email allowing you to reset your password.
                                    Please make sure to check your spam and trash if you can't find the email.</p>
                            </div>
                        </div>
                    </div>
            }


        </div>
    )
}

export default ForgotPasswordMain