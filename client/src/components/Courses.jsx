import React, { useState, useEffect } from 'react'
import Course from "./Course"
import { Link } from 'react-router-dom'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

function Courses({ token }) {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('content');
            if (element) {
                const scrollLeft = element.scrollLeft;
                const scrollWidth = element.scrollWidth;
                const clientWidth = element.clientWidth;

                setVisibleLeft(scrollLeft > 0);
                setVisibleRight(scrollLeft + clientWidth < scrollWidth);

            }
        };


        const contentElement = document.getElementById('content');
        if (contentElement) {
            contentElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (contentElement) {
                contentElement.removeEventListener('scroll', handleScroll);
                setVisibleRight(contentElement.scrollWidth > contentElement.clientWidth);
            }
        };
    }, []);
    console.log(token)
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 1000
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 1000
    }

    const [activeButton, setActiveButton] = useState('Python');

    const handleButtonPress = (buttonName) => {
        setActiveButton(buttonName);
    };
    const category = [
        { id: '1', categoryName: 'Python', title: 'Expand your career opportunities with Python', categoryDes: 'Take one of Udemy range of Python courses and learn how to code using this incredibly useful language. ' },
        { id: '2', categoryName: 'Excel', title: 'Analyze and visualize data with Excel', categoryDes: 'Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. ' },
        { id: '3', categoryName: 'Web Development', title: 'Build websites and applications with Web Development', categoryDes: 'The world of web development is as wide as the internet itself. ' },
        { id: '4', categoryName: 'JavaScript', title: 'Grow your software development skills with JavaScript', categoryDes: 'JavaScript is a text-based computer programming language used to make dynamic web pages. ' },
        { id: '5', categoryName: 'Data Science', title: 'Lead data-driven decisions with Data Science', categoryDes: 'Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking.' },
        { id: '6', categoryName: 'Amazon AWS', title: 'Become an expert in cloud computing with AWS Certification', categoryDes: 'Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services.' },
        { id: '7', categoryName: 'Drawing', title: 'Expand your creative skillset with Drawing', categoryDes: 'Want to start drawing for fun or take your craft to the next level?' },
    ]
    const [currentCategory, setCurrentCategory] = useState(
        {
            id: '1',
            categoryName: 'Python',
            title: 'Expand your career opportunities with Python',
            categoryDes: 'Take one of Udemy range of Python courses and learn how to code using this incredibly useful language. '
        },
    )
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

    return (
        <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
            <h2 className="text-3xl font-bold">A broad selection of courses</h2>
            <h3 className="text-xl">Choose from 183,000 online video courses with new new addtion published every month</h3>
            <div className="text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
                {
                    category.map((item) => {
                        return (
                            <button className={`${activeButton === item.categoryName ? 'text-black' : ''}`} onClick={() => {
                                handleButtonPress(item.categoryName)
                                setCurrentCategory(item)
                            }} key={item.id}>{item.categoryName}</button>
                        )
                    })
                }

            </div>
            <div className="text-left w-full border border-gray-300 p-7">
                <h2 className="text-2xl font-bold mb-2"> {currentCategory.title}</h2>
                <h3>
                    {currentCategory.categoryDes}
                </h3>
                <Link to={`/all-course/${currentCategory.categoryName}`}>
                    <button className="border border-black font-bold text-sm p-2 mt-4 mb-8">Explore {currentCategory.categoryName}</button>
                </Link>


                <div id='content' className=" w-11/12 mx-auto flex gap-4 flex-wrap lg:flex-nowrap  items-center justify-start overflow-x-auto scrollbar-hide scroll-smooth">
                    <div >
                        <button onClick={scrollLeft} className={`${visibleLeft == true ? 'absolute left-24 rounded-full  bg-gray-200 text-white font-bold w-8 h-8' : 'hidden'
                            }`}>
                            <AiOutlineLeft className='w-5 h-5 mx-auto ' />
                        </button>

                        <button onClick={scrollRight} className={`${visibleRight ? 'absolute right-20 rounded-full bg-gray-200 text-white font-bold w-8 h-8' : 'hidden'
                            }`}>
                            <AiOutlineRight className='w-5 h-5 mx-auto' />
                        </button>
                    </div>




                    {
                        data.map((item) => {
                            if (item.category == currentCategory.categoryName) {
                                return (

                                    <div className="h-80 w-60 flex-shrink-0" key={item.id}>

                                        <Course id={item.id} token={token} item={item} />

                                    </div>

                                )
                            }
                        }


                        )
                    }
                </div>




            </div>
        </div>
    )
}

export default Courses