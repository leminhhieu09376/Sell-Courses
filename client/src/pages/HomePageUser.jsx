import React, { useState } from 'react'
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
                            <p className='p-4 mr-10 cursor-pointer'>Python</p>
                            <p className='p-4 mr-10 cursor-pointer'>Excel</p>
                            <p className='p-4 mr-10 cursor-pointer'>Web Development</p>
                            <p className='p-4 mr-10 cursor-pointer'>Javascript</p>
                            <p className='p-4 mr-10 cursor-pointer'>Data Science</p>
                            <p className='p-4 mr-10 cursor-pointer'>Amazon AWS</p>
                            <p className='p-4 mr-10 cursor-pointer'>Drawing</p>
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