import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { AiTwotoneStar } from 'react-icons/ai'
import StarRating from '../components/StarRating';
const ShoppingCart = () => {
    const [userData, setUserData] = useState(
        localStorage.getItem("profile") != null
            ? JSON.parse(localStorage.getItem("profile")).result
            : undefined
    );
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
        setCartData(cart)


    }, [cartData])

    const navigate = useNavigate();
    const handleCheckOut = () => {
        if (userData) {
            navigate("/check-out")
        } else {
            navigate("/login")
        }

    }
    const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    const totalRawPrice = (arr) => {
        let total = 0
        for (var i = 0; i < arr.length; i++) {
            total += Number(arr[i].rawPrice);
        }
        return total
    }
    const totalPrice = (arr) => {
        let total = 0
        for (var i = 0; i < arr.length; i++) {
            total += Number(arr[i].rawPrice - arr[i].discountValue);
        }
        return total
    }
    const handleRemove = (_id) => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        const newCart = cart.filter(item => item._id !== _id);
        localStorage.setItem('cart', JSON.stringify(newCart));

    }

    return (
        <div>
            {
                userData ? (<Header userData={userData} />) : (<Navbar />)
            }

            <div className='flex'>
                <div className=' w-2/3 mb-10 ml-40  '>
                    <h1 className='text-4xl text-left pt-8 mb-10  font-bold'>Shopping Cart</h1>
                    <h3 className='text-sm text-left font-bold mb-4'>{cartData.length} Courses in Cart</h3>
                    {
                        cartData.length == 0 ?
                            <div className='mt-20 font-serif'>Your cart is empty. Keep shopping to find a course!</div>
                            :
                            cartData.map((item) => {
                                return (
                                    <div key={item._id} className='w-11/12 border-t-2 p-4 flex h-36'>
                                        <img src={item.image} alt="" className='w-36  mr-4' />
                                        <div className='text-left mr-20 w-3/4'>
                                            <p className='font-bold'>
                                                {item.title}
                                            </p>
                                            <p className='text-xs'> {item.author}</p>
                                            <div className='flex space-x-1'>
                                                <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
                                                <div className='flex items-center'>
                                                    <StarRating rate={item.vote} />
                                                </div>
                                                <h3 className='text-xs'>{item.numberStudents}</h3>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <button onClick={() => { handleRemove(item._id) }} className='mb-10 text-[#A435F0] mr-10'>Remove</button>
                                            <p className='text-[#A435F0] mt-6 mr-4'>${formatter.format(item.rawPrice - item.discountValue)}</p>
                                            <p className='text-[#A435F0] mt-6 line-through'>{formatter.format(item.rawPrice)}</p>
                                        </div>

                                    </div>
                                )
                            })
                    }

                </div>
                {
                    cartData.length == 0 ?
                        <div className='w-1/4 mb-10 mt-20  p-8 mr-20 h-72' ></div> :
                        <div className='w-1/4 mb-10 mt-20 border-b-2 border-gray p-8 mr-20 h-72'>
                            <h1 className='text-xl text-left font-bold mt-20 text-[#6A6F73]'>Total:</h1>
                            <div className='flex'>
                                <h1 className='text-3xl text-left font-bold mb-4'>{formatter.format(totalPrice(cartData))}</h1>

                            </div>
                            <button onClick={handleCheckOut} className='bg-[#8710D8] w-72 h-14 text-white font-bold'>Checkout</button>
                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default ShoppingCart