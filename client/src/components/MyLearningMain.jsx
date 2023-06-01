import React from 'react'
import { Link } from 'react-router-dom'

import { AiTwotoneStar } from 'react-icons/ai'
const MyLearningMain = () => {
    const data = [
        {
            id: '1',
            title: 'The Complete JavaScript Course: From Zero to Expert!',
            username: 'Jonas Schmedman',
            vote: '4.7',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '2',
            title: 'Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '3',
            title: 'The Complete Full-Stack JavaScript Course',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '4',
            title: 'JavaScript - Basics to Advanced step by step [2023]',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '5',
            title: 'Learn JavaScript - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '6',
            title: 'Learn JavaScript - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '7',
            title: 'Learn JavaScript - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '8',
            title: 'Learn JavaScript - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '9',
            title: 'Learn JavaScript - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '10',
            title: 'Learn JavaScript - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '11',
            title: 'Learn JavaScript - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '12',
            title: 'Learn JavaScript - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '13',
            title: 'END Learn JavaScript - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },



    ]
    return (
        <div className='w-full'>
            <div className='bg-[#1C1D1F] h-40 text-white font-bold w-full mb-10'>
                <h1 className='text-4xl text-left ml-40 pt-8 mb-10  '>My learning</h1>
                <div className='flex ml-40'>
                    <div className='mr-8  border-white border-b-2'>
                        <h3 className='pb-1 cursor-pointer' >All courses</h3>
                    </div>
                    <div className='mr-8'>
                        <h3 className='pb-1 cursor-pointer' >Python</h3>
                    </div>
                    <div className='mr-8'>
                        <h3 className='pb-1 cursor-pointer' >Excel</h3>
                    </div>
                    <div className='mr-8'>
                        <h3 className='pb-1 cursor-pointer' >Web Development</h3>
                    </div>
                    <div className='mr-8'>
                        <h3 className='pb-1 cursor-pointer' >Javascript</h3>
                    </div>
                    <div className='mr-8'>
                        <h3 className='pb-1 cursor-pointer' >Data Science</h3>
                    </div>
                    <div className='mr-8'>
                        <h3 className='pb-1 cursor-pointer' >Amazon AWS</h3>
                    </div>
                    <div className='mr-8'>
                        <h3 className='pb-1 cursor-pointer' >Drawing</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-3/4 mx-auto  ">
                {
                    data.map((item) =>
                    (
                        <div className="h-80 w-60 mr-10  " key={item.id}>

                            <Link to={`/learning/${item.id}`}>
                                <div className="flex flex-col items-start space-y-[1px] cursor-pointer text-left">

                                    <img src={item.image} className="h-40 w-full" alt="" />
                                    <h2 className='font-bold pt-1'>{item.title}</h2>
                                    <h2 className='text-xs text-gray-700'>{item.username}</h2>
                                    <div className='flex space-x-1'>
                                        <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
                                        <div className='flex items-center'>
                                            <AiTwotoneStar className='w-4 text-orange-400' />
                                            <AiTwotoneStar className='w-4 text-orange-400' />
                                            <AiTwotoneStar className='w-4 text-orange-400' />
                                            <AiTwotoneStar className='w-4 text-orange-400' />
                                            <AiTwotoneStar className='w-4 text-orange-400' />
                                        </div>
                                        <h3 className='text-xs'>{item.students}</h3>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    )

                    )
                }
            </div>
        </div>
    )
}

export default MyLearningMain