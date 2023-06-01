import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AiTwotoneStar } from 'react-icons/ai'
const ShoppingCart = () => {
    const navigate = useNavigate();
    const handleCheckOut = () => {
        navigate("/check-out")
    }

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
            <Header />
            <div className='flex'>
                <div className=' w-2/3 mb-10 ml-40  '>
                    <h1 className='text-4xl text-left pt-8 mb-10  font-bold'>Shopping Cart</h1>
                    <h3 className='text-sm text-left font-bold mb-4'>{data.length} Courses in Cart</h3>
                    {
                        data.length == 0 ?
                            <div className='mt-20 font-serif'>Your cart is empty. Keep shopping to find a course!</div>
                            :
                            data.map((item) => {
                                return (
                                    <div key={item.id} className='w-3/4 border-t-2 p-4 flex h-36'>
                                        <img src={item.image} alt="" className='w-36 h-20 mr-4' />
                                        <div className='text-left mr-20'>
                                            <p className='font-bold'>
                                                {item.title}
                                            </p>
                                            <p className='text-xs'> {item.username}</p>
                                            <div className='flex space-x-1'>
                                                <h3 className='text-orange-800 font-bold text-sm'>{item.vote}</h3>
                                                <div className='flex items-center'>
                                                    <AiTwotoneStar className='w-4 text-orange-400' />
                                                    <AiTwotoneStar className='w-4 text-orange-400' />
                                                    <AiTwotoneStar className='w-4 text-orange-400' />
                                                    <AiTwotoneStar className='w-4 text-orange-400' />
                                                    <AiTwotoneStar className='w-4 text-orange-400' />
                                                </div>
                                                <h3 className='text-xs'>{item.students}</h3>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <button className='mb-10 text-[#A435F0] mr-10'>Remove</button>
                                            <p className='text-[#A435F0] mt-6'>${item.price}</p>
                                        </div>

                                    </div>
                                )
                            })
                    }

                </div>
                {
                    data.length == 0 ?
                        <div className='w-1/4 mb-10 mt-20  p-8 mr-20 h-72' ></div> :
                        <div className='w-1/4 mb-10 mt-20 border-b-2 border-gray p-8 mr-20 h-72'>
                            <h1 className='text-xl text-left font-bold mt-20 text-[#6A6F73]'>Total:</h1>
                            <h1 className='text-3xl text-left font-bold mb-4'>${totalPrice(data)}</h1>
                            <button onClick={handleCheckOut} className='bg-[#8710D8] w-72 h-14 text-white font-bold'>Checkout</button>
                        </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default ShoppingCart