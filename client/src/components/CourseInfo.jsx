import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
const CourseInfo = () => {
    return (
        <div className='border border-gray-200 w-2/5 mt-4 ml-40 h-80 p-4 mb-10'>
            <h1 className='mb-4 font-bold text-2xl text-left p-3'>What you'll learn</h1>
            <div className='flex'>
                <div className='w-1/2 text-left text-sm'>
                    <div className='flex space-x-4 items-center mb-4 ml-2'>
                        <AiOutlineCheck className='w-6' />
                        <p>Become an advanced, confident, and modern JavaScript developer from scratch</p>
                    </div>
                    <div className='flex space-x-4 items-center mb-4 ml-2'>
                        <AiOutlineCheck className='w-6' />
                        <p>Become an advanced, confident, and modern JavaScript developer from scratch</p>
                    </div>
                    <div className='flex space-x-4 items-center mb-4 ml-2'>
                        <AiOutlineCheck className='w-6' />
                        <p>Become an advanced, confident, and modern JavaScript developer from scratch</p>
                    </div>
                </div>
                <div className='w-1/2 text-left text-sm'>
                    <div className='flex space-x-4 items-center mb-4 ml-2'>
                        <AiOutlineCheck className='w-6' />
                        <p>Become an advanced, confident, and modern JavaScript developer from scratch</p>
                    </div>
                    <div className='flex space-x-4 items-center mb-4 ml-2'>
                        <AiOutlineCheck className='w-6' />
                        <p>Become an advanced, confident, and modern JavaScript developer from scratch</p>
                    </div>
                    <div className='flex space-x-4 items-center mb-4 ml-2'>
                        <AiOutlineCheck className='w-6' />
                        <p>Become an advanced, confident, and modern JavaScript developer from scratch</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseInfo