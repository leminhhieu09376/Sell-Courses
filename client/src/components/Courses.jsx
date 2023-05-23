// import React from 'react'
import Course from "./Course"


function Courses() {
    const data = [
        {
            id: '1',
            title: 'The Complete JavaScript Course: From Zero to Expert!',
            username: 'Jonas Schmedman',
            vote: '4.7',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js'
        },
        {
            id: '2',
            title: 'Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js'
        },
        {
            id: '3',
            title: 'The Complete Full-Stack JavaScript Course',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js'
        },
        {
            id: '4',
            title: 'JavaScript - Basics to Advanced step by step [2023]',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js'
        },
        {
            id: '5',
            title: 'Learn JavaScript - For Beginners',
            username: 'Jonas Schmedman',
            vote: '4.2',
            students: '(175,987)',
            price: '$14,99',
            oldPrice: '$89,99',
            category: 'js'
        },
    ]
    return (
        <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
            <h2 className="text-3xl font-bold">A broad selection of courses</h2>
            <h3 className="text-xl">Choose from 183,000 online video courses with new new addtion published every month</h3>
            <div className="text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
                <h3>Python</h3>
                <h3>Excel</h3>
                <h3>Web Development</h3>
                <h3 className="text-black">JavaScript</h3>
                <h3>Data Science</h3>
                <h3>Amazon AWS</h3>
                <h3>Drawing</h3>
            </div>
            <div className="text-left w-full border border-gray-300 p-7">
                <h2 className="text-2xl font-bold mb-2">Grow your software development skills with JavaScript</h2>
                <h3>JavaScript is a text-based computer programming language used to make dynamic web pages.
                    A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels,
                    displaying countdowns and timers,
                    and playing media on a webpage. With JavaScript online classes, you can learn to build...
                </h3>
                <button className="border border-black font-bold text-sm p-2 mt-4 mb-8">Explore JavaScript</button>
                <div className="flex gap-4 flex-wrap lg:flex-nowrap">
                    {
                        data.map((item) =>
                        (
                            <div className="h-80 w-60" key={item.id}>
                                <Course item={item} />
                            </div>
                        )

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Courses