import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Main from '../components/Main'
import Courses from '../components/Courses'
import BecomInstructor from '../components/BecomInstructor'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useDispatch } from "react-redux";
import { getCategories } from '../actions/category'

const HomePageUser = () => {

    const [userData, setUserData] = useState(
        localStorage.getItem("profile") != null
            ? JSON.parse(localStorage.getItem("profile")).result
            : undefined
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch, userData]);
    return (
        <div>
            {
                userData
                    ?
                    <div>
                        <Header userData={userData} setUserData={setUserData} />
                        <hr />
                        <div className='flex justify-center w-full mx-auto mt-4 shadow-lg'>
                            <Link to="/all-course/648d3c66a9acbfc17ee80462">
                                <p className='p-4 mr-10 cursor-pointer'>Python</p>
                            </Link>
                            <Link to="/all-course/648d3c7ea9acbfc17ee80464">
                                <p className='p-4 mr-10 cursor-pointer'>Excel</p>
                            </Link>
                            <Link to="/all-course/648d3c9ba9acbfc17ee80466">
                                <p className='p-4 mr-10 cursor-pointer'>Web Development</p>
                            </Link>
                            <Link to="/all-course/648d3cb7a9acbfc17ee80468">
                                <p className='p-4 mr-10 cursor-pointer'>JavaScript</p>
                            </Link>
                            <Link to="/all-course/648d3cd7a9acbfc17ee8046a">
                                <p className='p-4 mr-10 cursor-pointer'>Data Science</p>
                            </Link>
                            <Link to="/all-course/648d3cf6a9acbfc17ee8046c">
                                <p className='p-4 mr-10 cursor-pointer'>Amazon AWS</p>
                            </Link>
                            <Link to="/all-course/648d3d11a9acbfc17ee8046e">
                                <p className='p-4 mr-10 cursor-pointer'>Drawing</p>
                            </Link>





                        </div>
                    </div >
                    :

                    <Navbar />



            }

            {/* <Header /> */}
            <Main />

            <Courses />
            <BecomInstructor />
            <Footer />
        </div>
    )
}

export default HomePageUser