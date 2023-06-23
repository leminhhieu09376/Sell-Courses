import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineGlobal, AiOutlineBell } from 'react-icons/ai';
import { Button } from 'react-scroll';

const Header = ({ addCart, userData, setUserData, removeAction }) => {
    const [cartItemCount, setCartItemCount] = useState();
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
        setCartData(cart)
        setCartItemCount(cart.length)

    }, [addCart, removeAction])

    const navigate = useNavigate();
    const [isCartHovered, setIsCartHovered] = useState(false);
    const [isProfile, setIsProfile] = useState(false);

    const handleCartMouseEnter = () => {
        setIsCartHovered(true);
    };

    const handleCartMouseLeave = () => {
        setIsCartHovered(false);
    };
    const handleProfileMouseEnter = () => {
        setIsProfile(true);
    };

    const handleProfileMouseLeave = () => {
        setIsProfile(false);
    };
    const handleMylearningBtn = () => {
        navigate('/my-learning');
    }
    const handleShoppingCart = () => {
        navigate('/shopping-cart');
    }
    const handleShoppingCartButton = () => {
        navigate('/shopping-cart');
    }
    const handleLogout = () => {
        localStorage.removeItem('profile');
        setUserData(localStorage.getItem("profile") != null
            ? JSON.parse(localStorage.getItem("profile")).result
            : undefined)
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

    return (
        <div>
            <div className="flex space-x-4 bg-white h-[74px]  text-center justify-between items-center px-4">
                <GrMenu className='h-6 w-6 md:hidden' />
                <Link to='/'>
                    <h2 className='text-3xl font-bold '>UCourse</h2>
                </Link>
                <form className='hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center'>
                    <BsSearch className='h-5 w-5 mx-4 text-gray-400' />
                    <input type='text' placeholder='Search for anything' className='bg-transparent text-sm outline-none w-11/12 ' />
                </form>
                <h3 className='hidden text-sm lg:block cursor-pointer'>Instructor</h3>
                <h3 onClick={handleMylearningBtn} className='hidden text-sm lg:block md:hidden cursor-pointer'>My learning</h3>

                <div className="flex">
                    <BsSearch className='h-6 w-6 text-gray-400 md:hidden' />

                    <AiOutlineShoppingCart onClick={handleShoppingCart} onMouseEnter={handleCartMouseEnter}
                        onMouseLeave={handleCartMouseLeave} className='h-6 w-6 mr-4 cursor-pointer' />
                    {isCartHovered && (
                        <div onMouseEnter={handleCartMouseEnter} onMouseLeave={handleCartMouseLeave} className="absolute right-24 mt-6 shadow-lg rounded-md w-80 z-50 bg-white ">

                            {
                                cartData.map((item) => (
                                    <div className='flex text-[12px] w-full border-b border-gray-200'>
                                        <img src={item.image} alt="" className=' mb-4 mr-2 ml-4 mt-3 h-16 w-24' />
                                        <div className='mt-3'>
                                            <div className='text-left'>
                                                <p className='font-bold'>
                                                    {item.title}
                                                </p>

                                            </div>
                                            <p className='text-left text-gray-400'>{item.author}</p>
                                            <div className='flex'>
                                                <p className='text-left font-bold mb-4 mr-4'>
                                                    {formatter.format(item.rawPrice - item.discountValue)}
                                                </p>
                                                <p className='text-left line-through text-gray-400 mb-4'>
                                                    {formatter.format(item.rawPrice)}
                                                </p>
                                            </div>


                                        </div>

                                    </div>
                                ))
                            }
                            <div>
                                <div className='mt-4'>
                                    <span className='font-bold mr-4'>Total: {formatter.format(totalPrice(cartData))} </span>
                                    <span className='line-through text-gray-400'>{formatter.format(totalRawPrice(cartData))}</span>
                                </div>
                                <button onClick={handleShoppingCartButton} className='text-white bg-[#1C1D1F] w-72 font-bold mb-4 mt-2 p-3'>Go to cart</button>
                            </div>
                        </div>

                    )}
                    {cartItemCount > 0 && (
                        <div className="absolute top-3 right-24 bg-[#A435F0] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                            {cartItemCount}
                        </div>
                    )}
                    <AiOutlineBell className='h-6 w-6 cursor-pointer' />
                </div>
                <div onMouseEnter={handleProfileMouseEnter}
                    onMouseLeave={handleProfileMouseLeave} className=' flex rounded-full bg-[#1C1D1F] w-10 h-10 items-center justify-center ' >
                    <p className='text-white cursor-pointer'>{userData.name.split(" ")[0]}</p>
                    {isProfile && (
                        <div onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave} className="absolute right-10 top-5 mt-9 shadow-lg rounded-md w-60 z-50 bg-white pt-4 ">
                            <p className='font-bold'>{userData.name}</p>
                            <p className='text-gray-500 text-xs mb-2'>{userData.email}</p>
                            <hr className='mb-4' />
                            <Link to='/changepassword'>
                                <p className='text-left text-sm mb-4 ml-5 hover:text-blue-500'>Change Password</p>
                            </Link>
                            <p onClick={handleLogout} className='text-left text-sm mb-4 ml-5 cursor-pointer hover:text-blue-500'>Log out</p>


                        </div>

                    )}
                </div>


            </div>



        </div>
    )
}

export default Header