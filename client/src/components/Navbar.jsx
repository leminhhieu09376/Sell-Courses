import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineGlobal } from 'react-icons/ai';

const Navbar = ({ addCart, removeAction }) => {
    const [visibleList, setVisibleList] = useState(false)
    const navigate = useNavigate();
    const [cartItemCount, setCartItemCount] = useState();
    const [cartData, setCartData] = useState([])
    const [input, setInput] = useState("")
    const [result, setResult] = useState([])
    useEffect(() => {
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
        setCartData(cart)
        setCartItemCount(cart.length)

    }, [addCart, removeAction])

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

    const handleSignUp = () => {
        navigate('/register');
    }
    const handleLogIn = () => {
        navigate('/login');
    }

    const fetchData = (value) => {

        fetch('http://localhost:5000/course').then((response) => {
            return response.json()
        }).then((json) => {
            const result = json.filter((course) => {
                return value && course && course.title && course.title.toLowerCase().includes(value)
            })

            setResult(result)
        })



    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    console.log(result)
    const handleClick = (_id) => {
        window.scrollTo(0, 0);
        navigate(`/courseItem/${_id}`)
    }
    return (
        <div>
            <div className="flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4">
                <GrMenu className='h-6 w-6 md:hidden' />
                <Link to="/">
                    <h2 className='text-3xl font-bold '>UCourse</h2>
                </Link>

                <h3 className='hidden text-sm md:block'>Categories</h3>
                <form className='hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center'>
                    <BsSearch className='h-5 w-5 mx-4 text-gray-400' />
                    <input

                        onFocus={() => {
                            setVisibleList(true)
                        }}

                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                        type='text'
                        placeholder='Search for anything'
                        className='bg-transparent text-sm outline-none w-11/12' />
                </form>

                <h3 className='hidden text-sm lg:block cursor-pointer'>Umdemy Bussiness</h3>
                <h3 className='hidden text-sm lg:block md:hidden cursor-pointer'>Teach on Umdemy</h3>
                <div className="flex">
                    <BsSearch className='h-6 w-6 text-gray-400 md:hidden' />
                    <AiOutlineShoppingCart onClick={handleShoppingCart} onMouseEnter={handleCartMouseEnter}
                        onMouseLeave={handleCartMouseLeave} className='h-6 w-6 cursor-pointer' />
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
                                            <p className='text-left text-gray-400'>{item.stageName}</p>
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
                        <div className="absolute top-3 right-[275px] bg-[#A435F0] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                            {cartItemCount}
                        </div>
                    )}
                </div>
                <div className='hidden md:flex pr-4 space-x-4 justify-end'>

                    <button className='border border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5] ml-4' onClick={handleLogIn}>Log In</button>

                    <button className='border bg-black text-white border-black h-10 text-sm font-bold w-20 ' onClick={handleSignUp}>Sign Up</button>
                    <button className='border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]'>
                        <AiOutlineGlobal className='h-5 w-5' />
                    </button>
                </div>
            </div>
            {
                result.length == 0 ?
                    null
                    :
                    <div className={`${visibleList === true ? ' bg-[white]  border border-gray ml-60 w-[45%] h-72 absolute top-15 z-30 overflow-scroll scrollbar-hide' : ' bg-[white] hidden  border border-gray ml-60 w-[45%] h-72 absolute top-15 z-30 overflow-scroll scrollbar-hide'}`}>
                        {result.map((course) => {
                            return (
                                <div onClick={() => { handleClick(course._id) }} key={course._id} className=' flex h-14  items-center hover:bg-[#F7F9FA] cursor-pointer'>
                                    <BsSearch className=' text-gray-400 mr-5 ml-3 ' />
                                    <img src={course.image} alt="" className='w-12 h-8 mr-4' />
                                    <p>{course.title}</p>

                                </div>
                            )
                        })}


                    </div>
            }


        </div>
    )
}

export default Navbar