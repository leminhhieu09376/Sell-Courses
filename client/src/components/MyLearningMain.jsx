import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AiTwotoneStar, AiFillCloseSquare } from 'react-icons/ai'
import { getCustomer } from '../actions/customer'
import StarRating from './StarRating';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyLearningMain = ({ reload, setReload }) => {

    const customer = useSelector((state) => state.customer.customer);

    const [category, setCategory] = useState([])

    const [currentCategory, setCurrentCategory] = useState('Python')
    const categoriesData = useSelector((state) => state.category.categories);
    const [currentCategoryID, setCurrentCategoryID] = useState()
    const [visible, setVisible] = useState(false)
    const [visibleId, setVisibleId] = useState()

    useEffect(() => {

        setCategory(categoriesData);
        if (categoriesData[0]) {
            setCurrentCategoryID(categoriesData[0]._id)
        }


    }, [categoriesData,]);

    console.log(category)
    const modalVisible = (id) => {
        setVisible(true)
        setVisibleId(id)
    }
    const modalUnvisible = () => {
        setRating(0)
        setVisible(false)
    }
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const handleRating = () => {
        console.log(visibleId)
        console.log(rating)
        console.log(customer._id)
        const url = `http://localhost:5000/course/${visibleId}`;
        const headers = {
            "Content-Type": "application/json"
        };
        const data = {
            numberStars: rating,
            idCustomer: customer._id
        };

        axios.patch(url, data, { headers })
            .then(response => {
                console.log(response.data)
                toast(`${response.data.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => console.log('error', error));
        setReload(!reload)
        console.log(reload)

    }
    return (
        <div className="w-full">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <ToastContainer />
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

                                            </div>
                                        </Link>
                                        <div onClick={() => { modalVisible(item._id) }} className="flex space-x-1">
                                            <h3 className="text-orange-800 font-bold text-sm">
                                                {item.numberStart}
                                            </h3>
                                            <div className="flex items-center">

                                                <StarRating rate={item.numberStart} />
                                            </div>
                                            <h3 className="text-xs cursor-pointer">Rating</h3>
                                        </div>

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
            {
                visible ?
                    <div className='fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center'>
                        <div className='bg-white p-2 rounded w-[500px] h-[300px] relative flex justify-center items-center'>

                            <div className='cursor-pointer absolute top-0 right-0 text-red-400 ' onClick={modalUnvisible}>
                                <AiFillCloseSquare className='w-8 h-8' />
                            </div>
                            <p className='absolute top-10 font-bold text-xl'>{rating == 1 && "Awful, not what I expected at all" || rating == 2 && "Poor, pretty disappointed" || rating == 3 && "Average, could be better" || rating == 4 && "Good, what I expected" || rating == 5 && "Amazing, above expectations!"}</p>
                            <div className='flex'>
                                {[...Array(5)].map((star, index) => {
                                    const currentRating = index + 1
                                    return (
                                        <label>
                                            <input class="hidden" type="radio" name='rating'
                                                value={currentRating}
                                                onClick={() => {
                                                    setRating(currentRating)
                                                }} />
                                            <AiTwotoneStar
                                                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                className='w-16 h-16 '
                                                onMouseEnter={() => { setHover(currentRating) }}
                                                onMouseLeave={() => { setHover(null) }}
                                            />

                                        </label>
                                    )
                                })}



                            </div>
                            <button onClick={handleRating}
                                className="w-40 border outline-none mb-4 p-3 font-bold bg-[#8710D8] text-white mt-4 absolute bottom-0">
                                Save
                            </button>
                        </div>

                    </div>
                    :
                    null
            }

        </div>
    );
}

export default MyLearningMain