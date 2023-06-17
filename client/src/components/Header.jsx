import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineGlobal, AiOutlineBell } from 'react-icons/ai';

const Header = ({ addCart }) => {
    const [cartItemCount, setCartItemCount] = useState();
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
        setCartData(cart)
        setCartItemCount(cart.length)

    }, [addCart])

    const navigate = useNavigate();
    const [isCartHovered, setIsCartHovered] = useState(false);

    const handleCartMouseEnter = () => {
        setIsCartHovered(true);
    };

    const handleCartMouseLeave = () => {
        setIsCartHovered(false);
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

    const totalRawPrice = (arr) => {
        let total = 0
        for (var i = 0; i < arr.length; i++) {
            total += Number(arr[i].rawPrice);
        }
        return total.toFixed(2)
    }
    const totalPrice = (arr) => {
        let total = 0
        for (var i = 0; i < arr.length; i++) {
            total += Number(arr[i].discountValue);
        }
        return total.toFixed(2)
    }

    return (
        <div>
            <div className="flex space-x-4 bg-white h-[74px]  text-center justify-between items-center px-4">
                <GrMenu className='h-6 w-6 md:hidden' />
                <Link to='/'>
                    <h2 className='text-3xl font-bold '>UCourse</h2>
                </Link>

                <h3 className='hidden text-sm md:block'>Categories</h3>


                <form className='hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center'>
                    <BsSearch className='h-5 w-5 mx-4 text-gray-400' />
                    <input type='text' placeholder='Search for anything' className='bg-transparent text-sm outline-none w-11/12' />
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
                                                    ${item.discountValue}
                                                </p>
                                                <p className='text-left line-through text-gray-400 mb-4'>
                                                    ${item.rawPrice}
                                                </p>
                                            </div>


                                        </div>

                                    </div>
                                ))
                            }
                            <div>
                                <div className='mt-4'>
                                    <span className='font-bold mr-4'>Total: ${totalPrice(cartData)} </span>
                                    <span className='line-through text-gray-400'>${totalRawPrice(cartData)}</span>
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
                <div className=' flex rounded-full bg-[#1C1D1F] w-10 h-10 items-center justify-center '>
                    <p className='text-white cursor-pointer'>LMH</p>
                </div>


            </div>



        </div>
    )
}

export default Header