import React, { useState, useEffect } from 'react'
import LeftBar from '../../components/LeftBar'
import Topbar from '../../components/Topbar'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
const CreateCourse = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(
        localStorage.getItem("profile") != null
            ? JSON.parse(localStorage.getItem("profile")).result
            : undefined
    );
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className='flex'>
            <LeftBar />
            <div className='rightCourses w-full '>
                <Topbar userData={userData} />

                <div className='h-[600px] w-[80%] mx-auto bg-[#F1F5F9] shadow-lg'>
                    <div className='flex items-center text-red-600  pt-3 pl-3 mb-2'>
                        <AiOutlineArrowLeft />
                        <p className='ml-1 cursor-pointer font-bold text-xs' onClick={() => {
                            navigate('/teacher/courses')
                        }}>Back To Courses</p>
                    </div>

                    <div className='border border-black h-96 w-[98%] mx-auto mb-2'>
                        <p className='text-left font-bold text-xs ml-3 mt-3 mb-3'>General information</p>
                        <div className=' flex justify-around'>
                            <div className='text-left'>
                                <div className='mb-5'>
                                    <label className='text-xs text-blue-500 font-bold' htmlFor="title">Title : </label>
                                    <br />
                                    <input type="text" id='title' className='outline-none w-80 text-xs h-8 pl-2' />

                                </div>

                                <div className='mb-6'>
                                    <label className='text-xs text-blue-500 font-bold ' htmlFor="subTitle">SubTitle : </label>
                                    <br />
                                    <input type="text" id='subTitle' className='outline-none w-80 text-xs h-8 pl-2' />
                                </div>

                                <div className='mb-5'>
                                    <label className='text-xs text-blue-500 font-bold' htmlFor="mainContent">Main Content : </label>
                                    <br />
                                    <textarea name="" id="mainContent" cols="30" rows="8" className='w-80 outline-none text-xs pl-2 pt-2'></textarea>
                                </div>

                            </div>
                            <div className='text-left'>
                                <div className='mb-5'>
                                    <label className='text-xs text-blue-500 font-bold' htmlFor="Description">Description : </label>
                                    <br />
                                    <textarea name="" id="Description" cols="30" rows="8" className='w-80 outline-none text-xs pl-2 pt-2'></textarea>
                                </div>
                                <div className='mb-5'>

                                    <label className='text-xs text-blue-500 font-bold' htmlFor="category">Category:</label>
                                    <br />
                                    <select id="category" className='outline-none w-80 text-xs h-8' value={selectedOption} onChange={handleChange}>
                                        <option value="">Select category</option>
                                        <option value="option1">Python</option>
                                        <option value="option2">Web Development</option>
                                        <option value="option3">JavaScript</option>
                                        <option value="option4">Data Science</option>
                                        <option value="option3">Amazon AWS</option>
                                        <option value="option3">Drawing</option>
                                    </select>

                                </div>
                                <div className='mb-5'>
                                    <label className='text-xs text-blue-500 font-bold' htmlFor="Image">Image : </label>
                                    <br />
                                    <input type="text" id='Image' className='outline-none w-80 text-xs h-8 pl-2' />
                                </div>
                            </div>

                            <div className='text-left'>
                                <div className='mb-2'>
                                    <label className='text-xs text-blue-500 font-bold' htmlFor="rawprice">Raw Price : </label>
                                    <br />
                                    <input type="text" id='rawprice' className='outline-none w-80 text-xs h-8 pl-2' />
                                </div>
                                <div className=''>
                                    <label className='text-xs text-blue-500 font-bold' htmlFor="discountRate">Discount Rate : </label>
                                    <br />
                                    <input type="text" id='discountRate' className='outline-none w-80 text-xs h-8 pl-2' />
                                </div>
                                <div className='mb-2'>
                                    <label className='text-xs text-blue-500 font-bold' htmlFor="discountValue">Discount Value : </label>
                                    <br />
                                    <input type="text" id='discountValue' className='outline-none w-80 text-xs h-8 pl-2' />
                                </div>
                                <div className='mb-10'>
                                    <label className='text-xs text-blue-500 font-bold' htmlFor="visible">Visible : </label>
                                    <br />
                                    <select id="visible" className='outline-none w-80 text-xs h-8' >
                                        <option value="">Select an option</option>
                                        <option value="option1">True</option>
                                        <option value="option2">False</option>

                                    </select>
                                </div>
                                <button onClick={() => {

                                }}
                                    className=" border outline-none bg-[#8710D8] text-white w-80  font-bold h-7 mt-2 "

                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border border-black h-40 w-[98%] mx-auto '>
                        <p className='text-left font-bold text-xs ml-3 mt-3 mb-3'>Main Content</p>
                        <div className='text-left border border-gray-300 h-10 flex items-center bg-white'>
                            <button onClick={() => {
                            }}
                                className=" border outline-none bg-red-400 text-white w-52 font-bold text-xs h-7 rounded "
                            >
                                Add Main Content
                            </button>
                        </div>
                        <div className='flex border border-gray-300 '>
                            <div className='font-bold text-xs ml-3 mt-3  w-96  h-10 flex items-center justify-start'>Content Detail</div>
                            <div className='font-bold text-xs ml-3 mt-3  w-96  h-10 flex items-center justify-start'>Description</div>
                            <div className='font-bold text-xs ml-3 mt-3  w-96 h-10 flex items-center justify-start'>Feature</div>
                        </div>
                        <div className='text-xs text-gray-400 pt-2 '>
                            No records available
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateCourse