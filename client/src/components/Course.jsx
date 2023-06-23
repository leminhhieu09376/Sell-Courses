import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiTwotoneStar } from 'react-icons/ai'
import CourseItemDes from '../pages/CourseItemDes';
import StarRating from './StarRating';
const Course = (props) => {
    const { item, id } = props;
    console.log("item:", item)
    const navigate = useNavigate();
    const handleClick = () => {
        window.scrollTo(0, 0);
        navigate(`/courseItem/${id}`)
    }
    return (

        <div onClick={handleClick} className="flex flex-col items-start space-y-[1px] cursor-pointer">

            <img src={item.image} className="h-40 w-full" alt="" />
            <h2 className='font-bold pt-1'>{item.title}</h2>
            <h2 className='text-xs text-gray-700'>{item.author}</h2>
            <div className='flex space-x-1'>
                <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
                <div className='flex items-center'>
                    <StarRating rate={item.numberStart} />
                </div>
                <h3 className='text-xs'>({item.numberStudents})</h3>
            </div>
            <div className='flex space-x-4 items-center'>
                <h3 className='text-black font-bold'>${item.rawPrice - item.discountValue}</h3>
                <h3 className='text-gray-800 text-sm line-through'>${item.rawPrice}</h3>
            </div>
        </div>

    )
}

export default Course