import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AiTwotoneStar } from 'react-icons/ai'
import { getCustomer } from '../actions/customer'
import StarRating from './StarRating';
const MyLearningMain = () => {

    const customer = useSelector((state) => state.customer.customer);
    const [category, setCategory] = useState([])

    const [currentCategory, setCurrentCategory] = useState('Python')
    const categoriesData = useSelector((state) => state.category.categories);
    const [currentCategoryID, setCurrentCategoryID] = useState()

    useEffect(() => {
        setCategory(categoriesData);
        if (categoriesData[0]) {
            setCurrentCategoryID(categoriesData[0]._id)
        }


    }, [categoriesData]);

    console.log(category)

    return (
        <div className="w-full">
            <div className="bg-[#1C1D1F] h-40 text-white font-bold w-full mb-10">
                <h1 className="text-4xl text-left ml-40 pt-8 mb-10  ">My learning</h1>
                <div className="flex ml-40">
                    {
                        category.map((item) => {
                            return (
                                <div className={`${item.title === currentCategory ? 'border-white border-b-2 mr-8' : 'mr-8'}`} >
                                    <h3 onClick={() => {
                                        setCurrentCategory(item.title)
                                        setCurrentCategoryID(item._id)

                                    }} className={'pb-1 cursor-pointer'}  >{item.title}</h3>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            {/* <div className="flex flex-wrap w-3/4 mx-auto  ">
                {
                    customer && customer.course &&

                    customer.course && customer.course.map((item) => {
                        let hasNoCourse = false;
                        if (item && item.category == currentCategoryID) {
                            return (
                                <div className="h-80 w-60 mr-10  " key={item._id}>
                                    <Link to={`/learning/${item._id}`}>
                                        <div className="flex flex-col items-start space-y-[1px] cursor-pointer text-left">
                                            <img src={item.image} className="h-40 w-full" alt="" />
                                            <h2 className="font-bold pt-1">{item.title}</h2>
                                            <h2 className="text-xs text-gray-700">{item.stageName}</h2>
                                            <div className="flex space-x-1">
                                                <h3 className="text-orange-800 font-bold text-sm">
                                                    {item.numberStart}
                                                </h3>
                                                <div className="flex items-center">

                                                    <StarRating rate={item.numberStart} />
                                                </div>
                                                <h3 className="text-xs">{item.numberStudents}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                        else {
                            if (!hasNoCourse) {
                                hasNoCourse = true;
                                return (
                                    <div className="flex items-center justify-center  h-72 w-full">
                                        <h3 className='mx-auto'>Bạn chưa có khóa học nào thuộc danh mục này cả !!!</h3>
                                    </div>
                                )
                            }
                            return
                        }

                    })


                }
            </div> */}
            <div className="flex flex-wrap w-3/4 mx-auto">
                {customer && customer.course &&
                    (customer.course.some((item) => item.category === currentCategoryID) ?
                        customer.course.map((item) => {
                            if (item.category === currentCategoryID) {
                                return (
                                    <div className="h-80 w-60 mr-10" key={item._id}>
                                        <Link to={`/learning/${item._id}`}>
                                            <div className="flex flex-col items-start space-y-[1px] cursor-pointer text-left">
                                                <img src={item.image} className="h-40 w-full" alt="" />
                                                <h2 className="font-bold pt-1">{item.title}</h2>
                                                <h2 className="text-xs text-gray-700">{item.stageName}</h2>
                                                <div className="flex space-x-1">
                                                    <h3 className="text-orange-800 font-bold text-sm">
                                                        {item.numberStart}
                                                    </h3>
                                                    <div className="flex items-center">

                                                        <StarRating rate={item.numberStart} />
                                                    </div>
                                                    <h3 className="text-xs">{item.numberStudents}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            }
                            return null;
                        }) :
                        <div className="items-center justify-center h-72 w-full">
                            <h3 className="mx-auto mt-20">You don't have any courses in this category yet!!!</h3>

                            <Link to={`/all-course/${currentCategoryID}`}>
                                <button className="border border-black font-bold text-sm p-2 mt-4 mb-8">Explore {currentCategory}</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default MyLearningMain