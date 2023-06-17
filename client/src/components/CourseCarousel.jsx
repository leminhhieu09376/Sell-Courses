import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { AiTwotoneStar } from 'react-icons/ai'
import StarRating from './StarRating';
const CourseCarousel = ({ data, addToCart, isExist }) => {
    const [scrollPosition, setScrollPosition] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <div className='w-full h-96 bg-[#1C1D1F] text-[white] flex'>

            <div className='w-2/5 text-left ml-40 pt-9'>
                <h1 className='text-3xl font-bold mb-4'>{data.title}</h1>
                <h2 className='text-[18px] mb-4'>{data.subTitle}</h2>

                <h3 className='text-orange-100 font-bold text-sm'>{data.vote} ({data.numberStudents})</h3>

                <StarRating rate={data.vote} />

                <h2 className='text-xs'>{data.author}</h2>
            </div>
            <div className={`${scrollPosition > 200 && scrollPosition < 700 ? 'border w-80 border-white bg-[white] shadow-lg text-black h-[600px] fixed right-72 top-0' : 'border w-80 border-white bg-[white] shadow-lg text-black h-[550px] ml-40 '}`}>
                <img className="h-44 w-full" src={data.image} alt="" />
                <div className='flex space-x-4 items-center justify-center'>
                    <h3 className='text-black font-bold text-2xl '>${data.discountValue}</h3>
                    <h3 className='text-gray-800 text-sm line-through'>${data.rawPrice}</h3>
                </div>
                {
                    isExist == true
                        ?
                        <Link to="/shopping-cart">
                            <button className='block mx-auto mt-4  w-48 h-10 bg-[#8710D8] text-white font-bold '>Go to cart</button>
                        </Link>

                        :
                        <button onClick={addToCart} className='block mx-auto mt-4  w-48 h-10 bg-[#8710D8] text-white font-bold '>Add to cart</button>
                }


                <button className='block mx-auto  mt-4  border border-black w-48 h-10 font-bold '>Buy now</button>
                <p className='text-sm mt-4 mb-4'>30-Day Money-Back Guarantee</p>
                <hr />
                <h3 className='font-bold mt-4 mb-2'>Training 5 or more people?</h3>
                <p className='w-3/4 text-left mx-auto text-sm '>Get your team access to 22,000+ top Udemy courses anytime, anywhere.</p>
                <button className='block mx-auto  mt-4  border border-black w-48 h-10 font-bold '>Try Udemy Business</button>

            </div>

        </div>
    )
}

export default CourseCarousel