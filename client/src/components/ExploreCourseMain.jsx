import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StarRating from './StarRating'
import { useSelector } from "react-redux";
import { getCategory } from '../actions/category';
import { useDispatch } from "react-redux";
const ExploreCourseMain = ({ category }) => {
    const dispatch = useDispatch();
    const categoriesData = useSelector((state) => state.category.categories);
    const [data, setData] = useState([])
    const [currentCategory, setCurrentCategory] = useState([])
    useEffect(() => {
        setData(categoriesData);
        setCurrentCategory(categoriesData.find(item => item._id == category));

    }, [categoriesData]);

    const handleButtonPress = (id) => {

        dispatch(getCategory(id));
    };
    const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    const navigate = useNavigate();
    const handleClick = (id) => {
        window.scrollTo(0, 0);
        navigate(`/courseItem/${id}`)
    }
    return (
        <div className='w-full'>
            <div className='bg-[#1C1D1F] h-40 text-white font-bold w-full mb-10'>
                <h1 className='text-4xl text-left ml-40 pt-8 mb-10  '>Ucourses</h1>
                <div className='flex ml-40'>

                    {
                        data.map((item) => {
                            return (

                                <div onClick={() => {
                                    handleButtonPress(item._id)
                                    setCurrentCategory(item)
                                }} className={`${item._id === currentCategory._id ? 'border-white border-b-2 mr-8' : 'mr-8'}`}>
                                    <h3 className='pb-1 cursor-pointer' >{item.title}</h3>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
            <div className="flex flex-wrap w-3/4 mx-auto  ">
                {
                    currentCategory &&
                        currentCategory.course &&
                        currentCategory.course.length == 0 ? (
                        <div className="h-80 w-60 mr-10  ">

                        </div>
                    ) :
                        currentCategory &&
                        currentCategory.course &&
                        currentCategory.course.map((item) => {

                            return (

                                <div className="h-80 w-60 mr-10  " key={item._id}>


                                    <div onClick={() => {
                                        handleClick(item._id)
                                    }} className="flex flex-col items-start space-y-[1px] cursor-pointer text-left">

                                        <img src={item.image} className="h-40 w-full" alt="" />
                                        <h2 className='font-bold pt-1'>{item.title}</h2>
                                        <h2 className='text-xs text-gray-700'>{item.stageName}</h2>
                                        <div className='flex space-x-1'>
                                            <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
                                            <div className='flex items-center'>
                                                <StarRating rate={item.vote} />
                                            </div>
                                            <h3 className='text-xs'>{item.numberStart}</h3>
                                        </div>
                                        <div className='flex space-x-4 items-center'>
                                            <h3 className='text-black font-bold'>{formatter.format(item.rawPrice - item.discountValue)}</h3>
                                            <h3 className='text-gray-800 text-sm line-through'>{formatter.format(item.rawPrice)}</h3>
                                        </div>

                                    </div>

                                </div>

                            )





                        }

                        )


                }
            </div>
        </div>
    )
}

export default ExploreCourseMain