import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Main from '../components/Main'
import Courses from '../components/Courses'
import BecomInstructor from '../components/BecomInstructor'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const HomePageUser = () => {
    const token = true

    return (
        <div>
            {
                token == true
                    ?
                    <div>
                        <Header />
                        <hr />
                        <div className='flex justify-center w-full mx-auto mt-4 shadow-lg'>
                            <Link to="/all-course/Python">
                                <p className='p-4 mr-10 cursor-pointer'>Python</p>
                            </Link>
                            <Link to="/all-course/Excel">
                                <p className='p-4 mr-10 cursor-pointer'>Excel</p>
                            </Link>
                            <Link to="/all-course/Web Development">
                                <p className='p-4 mr-10 cursor-pointer'>Web Development</p>
                            </Link>
                            <Link to="/all-course/JavaScript">
                                <p className='p-4 mr-10 cursor-pointer'>JavaScript</p>
                            </Link>
                            <Link to="/all-course/Data Science">
                                <p className='p-4 mr-10 cursor-pointer'>Data Science</p>
                            </Link>
                            <Link to="/all-course/Amazon AWS">
                                <p className='p-4 mr-10 cursor-pointer'>Amazon AWS</p>
                            </Link>
                            <Link to="/all-course/Drawing">
                                <p className='p-4 mr-10 cursor-pointer'>Drawing</p>
                            </Link>





                        </div>
                    </div >
                    :

                    <Navbar />



            }

            {/* <Header /> */}
            <Main />

            <Courses token={token} />
            <BecomInstructor />
            <Footer />
        </div>
    )
}

export default HomePageUser