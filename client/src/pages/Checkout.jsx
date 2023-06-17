import React from 'react'
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineGlobal, AiFillCreditCard } from 'react-icons/ai';

const Checkout = () => {
    const navigate = useNavigate();
    const totalPrice = (arr) => {
        let total = 0
        for (var i = 0; i < arr.length; i++) {
            total += Number(arr[i].price);
        }
        return total.toFixed(2)
    }
    const data = [
        {
            id: '1',
            title: 'The Complete JavaScript Course: From Zero to Expert!',
            username: 'Jonas Schmedman',
            vote: '4.7',
            students: '(175,987)',
            price: "15.99",
            oldPrice: '89.99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '2',
            title: 'Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '14.99',
            oldPrice: '89.99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },
        {
            id: '3',
            title: 'The Complete Full-Stack JavaScript Course',
            username: 'Jonas Schmedman',
            vote: '4.3',
            students: '(175,987)',
            price: '14.99',
            oldPrice: '89.99',
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png'
        },





    ]
    return (
        <div>
            <div className="flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4">
                <GrMenu className='h-6 w-6 md:hidden' />
                <Link to='/'>
                    <h2 className='text-3xl font-bold '>UCourse</h2>
                </Link>

            </div>
            <div className='flex mt-4 h-[650px]'>
                <div className='w-1/2 text-left ml-52 '>
                    <h1 className='font-bold text-4xl font-serif mb-8'>Checkout</h1>
                    <h3 className='font-bold text-xl font-serif mb-10'>Payment method</h3>
                    <div className='flex h-8 items-center justify-start bg-[#F7F9FA] w-3/4 font-bold p-6 border border-gay  '>
                        <input type="radio" className='mr-4' name='pay' />
                        <AiFillCreditCard className='mr-4' />
                        <p className='mr-4'>Credit/Debit Card</p>
                    </div>
                    <div className='flex h-8 items-center justify-start bg-[#F7F9FA] w-3/4 font-bold p-6 border border-gray mb-20'>
                        <input type="radio" className='mr-4' name='pay' />
                        <AiFillCreditCard className='mr-4' />
                        <p className='mr-4'>PayPal</p>
                    </div>
                    <div>
                        <h3 className='font-bold text-xl font-serif mb-4'>Order details</h3>
                        {
                            data.map((item) => {
                                return (
                                    <div className='flex text-[12px] w-full h-10'>
                                        <img src={item.image} alt="" className=' mb-4 mr-2' />
                                        <div className='text-left mr-20 w-3/4'>
                                            <p className='font-bold'>
                                                {item.title}
                                            </p>

                                        </div>
                                        <div className='mr-10'>
                                            ${item.price}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <div className='w-1/2 bg-[#F7F9FA] mr-52 pt-20 text-left pl-10 '>
                    <h3 className='font-bold text-xl font-serif mb-4'>Summary</h3>
                    <p className='font-bold text-xm font-serif mb-4'>Total :
                        {totalPrice(data)}</p>
                    <p className='text-xs text-[#9B9FA2] mb-10'>By completing your purchase you agree to these Terms of Service.</p>
                    <button className='bg-[#8710D8] w-72 h-14 text-white font-bold'>Checkout</button>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Checkout