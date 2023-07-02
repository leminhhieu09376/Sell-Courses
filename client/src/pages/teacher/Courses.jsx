import React, { useState, useEffect } from 'react'
import LeftBar from '../../components/LeftBar'
import Topbar from '../../components/Topbar'
const Courses = () => {
    const [userData, setUserData] = useState(
        localStorage.getItem("profile") != null
            ? JSON.parse(localStorage.getItem("profile")).result
            : undefined
    );
    return (
        <div className='flex'>
            <LeftBar />
            <div className='rightCourses w-full '>
                <Topbar userData={userData} />
                <div>
                    <div className='border border-gray-300 h-36 shadow-lg rounded-md  w-11/12 mx-auto flex items-center justify-between'>
                        <p className='text-sm ml-10'>Jump Into Course Creation</p>
                        <button
                            className=" border outline-none bg-[#8710D8] text-white mt-4 h-14 w-80 mr-10 font-bold "

                        >
                            Create Your Course
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses