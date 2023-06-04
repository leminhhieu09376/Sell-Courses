import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
const ExploreCourseMain = ({ category }) => {
    const data = [
        {
            id: '1',
            title: 'The Complete Python Course: From Zero to Expert!',
            username: 'Jonas Schmedman',
            vote: '4.7',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg'
        },
        {
            id: '2',
            title: 'Complete Excel from zero to Expert-2023',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'Excel',
            image: 'https://tenten.vn/help/wp-content/uploads/2022/12/excel-tenten.png'
        },
        {
            id: '3',
            title: 'The Complete Full-Stack Web Development Course',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'Web Development',
            image: 'https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/01/30160819/Tuyen-dung-python-1-1024x682.jpeg'
        },
        {
            id: '4',
            title: 'JavaScript - Basics to Advanced step by step [2023]',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'JavaScript',
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
            category: 'JavaScript',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '6',
            title: 'Learn Python - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg'
        },
        {
            id: '7',
            title: 'Learn Amazon AWS - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'Amazon AWS',
            image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_aws.jpg'
        },
        {
            id: '8',
            title: 'Learn Drawingt - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'Drawing',
            image: 'https://previews.123rf.com/images/helloweenn/helloweenn1701/helloweenn170100007/69472923-pencil-drawing-logo-design.jpg'
        },
        {
            id: '9',
            title: 'Learn Data Science - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'Data Science',
            image: 'https://images.careerbuilder.vn/content/images/data-science-la-gi-careerbuilder-1.jpg'
        },
        {
            id: '10',
            title: 'Learn Data Science',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'Data Science',
            image: 'https://images.careerbuilder.vn/content/images/data-science-la-gi-careerbuilder-1.jpg'
        },
        {
            id: '11',
            title: 'Learn JavaScript - For Beginners 2',
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
            title: 'Learn Web Development - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'Web Development',
            image: 'https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/01/30160819/Tuyen-dung-python-1-1024x682.jpeg'
        },
        {
            id: '13',
            title: 'The Complete Python Course: From Zero to Expert!',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg'
        },

    ]
    const [currentCategory, setCurrentCategory] = useState(category)
    return (
        <div className='w-full'>
            <div className='bg-[#1C1D1F] h-40 text-white font-bold w-full mb-10'>
                <h1 className='text-4xl text-left ml-40 pt-8 mb-10  '>Ucourses</h1>
                <div className='flex ml-40'>
                    <Link to="/all-course/All courses">
                        <div className={`${'All courses' === currentCategory ? 'border-white border-b-2 mr-8' : 'mr-8'}`} >
                            <h3 onClick={() => {
                                setCurrentCategory('All courses')
                            }} className={'pb-1 cursor-pointer'}  >All courses</h3>
                        </div>
                    </Link>
                    <Link to="/all-course/Python">
                        <div onClick={() => {
                            setCurrentCategory('Python')
                        }} className={`${'Python' === currentCategory ? 'border-white border-b-2 mr-8' : 'mr-8'}`}>
                            <h3 className='pb-1 cursor-pointer' >Python</h3>
                        </div>
                    </Link>



                    <Link to="/all-course/Excel">
                        <div onClick={() => {
                            setCurrentCategory('Excel')
                        }} className={`${'Excel' === currentCategory ? 'border-white border-b-2 mr-8' : 'mr-8'}`}>
                            <h3 className='pb-1 cursor-pointer' >Excel</h3>
                        </div>
                    </Link>
                    <Link to="/all-course/Web Development">
                        <div onClick={() => {
                            setCurrentCategory('Web Development')
                        }} className={`${'Web Development' === currentCategory ? 'border-white border-b-2 mr-8' : 'mr-8'}`}>
                            <h3 className='pb-1 cursor-pointer' >Web Development</h3>
                        </div>
                    </Link>
                    <Link to="/all-course/JavaScript">
                        <div onClick={() => {
                            setCurrentCategory('JavaScript')
                        }} className={`${'JavaScript' === currentCategory ? 'border-white border-b-2 mr-8' : 'mr-8'}`}>
                            <h3 className='pb-1 cursor-pointer' >JavaScript</h3>
                        </div>
                    </Link>
                    <Link to="/all-course/Data Science">
                        <div onClick={() => {
                            setCurrentCategory('Data Science')
                        }} className={`${'Data Science' === currentCategory ? 'border-white border-b-2 mr-8' : 'mr-8'}`}>
                            <h3 className='pb-1 cursor-pointer' >Data Science</h3>
                        </div>
                    </Link>
                    <Link to="/all-course/Amazon AWS">
                        <div onClick={() => {
                            setCurrentCategory('Amazon AWS')
                        }} className={`${'Amazon AWS' === currentCategory ? 'border-white border-b-2 mr-8' : 'mr-8'}`}>
                            <h3 className='pb-1 cursor-pointer' >Amazon AWS</h3>
                        </div>
                    </Link>
                    <Link to="/all-course/Drawing">
                        <div onClick={() => {
                            setCurrentCategory('Drawing')
                        }} className={`${'Drawing' === currentCategory ? 'border-white border-b-2 mr-8' : 'mr-8'}`}>
                            <h3 className='pb-1 cursor-pointer' >Drawing</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap w-3/4 mx-auto  ">
                {
                    currentCategory == 'All courses'
                        ?
                        data.map((item) => {

                            return (

                                <div className="h-80 w-60 mr-10  " key={item.id}>

                                    <Link to={`/courseItem/${item.id}`}>
                                        <div className="flex flex-col items-start space-y-[1px] cursor-pointer text-left">

                                            <img src={item.image} className="h-40 w-full" alt="" />
                                            <h2 className='font-bold pt-1'>{item.title}</h2>
                                            <h2 className='text-xs text-gray-700'>{item.username}</h2>
                                            <div className='flex space-x-1'>
                                                <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
                                                <div className='flex items-center'>
                                                    <StarRating rate={item.vote} />
                                                </div>
                                                <h3 className='text-xs'>{item.students}</h3>
                                            </div>

                                        </div>
                                    </Link>
                                </div>

                            )




                        }
                        )
                        :
                        data.map((item) => {
                            if (item.category == currentCategory) {
                                return (

                                    <div className="h-80 w-60 mr-10  " key={item.id}>

                                        <Link to={`/courseItem/${item.id}`}>
                                            <div className="flex flex-col items-start space-y-[1px] cursor-pointer text-left">

                                                <img src={item.image} className="h-40 w-full" alt="" />
                                                <h2 className='font-bold pt-1'>{item.title}</h2>
                                                <h2 className='text-xs text-gray-700'>{item.username}</h2>
                                                <div className='flex space-x-1'>
                                                    <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
                                                    <div className='flex items-center'>
                                                        <StarRating rate={item.vote} />
                                                    </div>
                                                    <h3 className='text-xs'>{item.students}</h3>
                                                </div>

                                            </div>
                                        </Link>
                                    </div>

                                )
                            }



                        }
                        )

                }
            </div>
        </div>
    )
}

export default ExploreCourseMain