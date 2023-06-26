import React, { useState, useEffect } from 'react'
import Course from "./Course"
import { Link } from 'react-router-dom'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { useSelector } from "react-redux";
import { getCategory } from '../actions/category';
import { useDispatch } from "react-redux";
function Courses() {
    const dispatch = useDispatch();
    const categoriesData = useSelector((state) => state.category.categories);

    const [category, setCategory] = useState([]);
    const [currentCategory, setCurrentCategory] = useState();

    useEffect(() => {
        setCategory(categoriesData);
        setCurrentCategory(categoriesData[0]);

    }, [categoriesData]);



    const [visibleLeft, setVisibleLeft] = useState();
    const [visibleRight, setVisibleRight] = useState();


    const [activeButton, setActiveButton] = useState('Python');
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
    }, [currentCategory]);

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 1000
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 1000
    }



    const handleButtonPress = (buttonName, id) => {
        setActiveButton(buttonName);
        dispatch(getCategory(id));
    };


    return (
        <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
            <h2 className="text-3xl font-bold">A broad selection of courses</h2>
            <h3 className="text-xl">Choose from 183,000 online video courses with new new addtion published every month</h3>
            <div className="text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
                {
                    category.map((item) => {
                        return (
                            <button className={`${activeButton === item.title ? 'text-black' : ''}`} onClick={() => {
                                handleButtonPress(item.title, item._id)
                                setCurrentCategory(item)

                            }} key={item.id}>{item.title}</button>
                        )
                    })
                }

            </div>
            <div className="text-left w-full border border-gray-300 p-7">
                <h2 className="text-2xl font-bold mb-2"> {currentCategory &&
                    currentCategory.subTitle}</h2>
                <h3>
                    {currentCategory && currentCategory.subDescription}
                </h3>
                <Link to={`/all-course/${currentCategory && currentCategory._id}`}>
                    <button className="border border-black font-bold text-sm p-2 mt-4 mb-8">Explore {currentCategory && currentCategory.title}</button>
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
                        currentCategory &&
                        currentCategory.course.map((item) => {

                            return (

                                <div className="h-80 w-60 flex-shrink-0" key={item.id}>

                                    <Course id={item._id} item={item} />

                                </div>

                            )

                        }


                        )
                    }
                </div>




            </div>
        </div>
    )
}

export default Courses