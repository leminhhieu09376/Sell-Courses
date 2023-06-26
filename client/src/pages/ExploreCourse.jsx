import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExploreCourseMain from '../components/ExploreCourseMain'
import Navbar from '../components/Navbar';
const ExploreCourse = () => {
    const { id } = useParams();
    console.log(id)
    const [userData, setUserData] = useState(
        localStorage.getItem("profile") != null
            ? JSON.parse(localStorage.getItem("profile")).result
            : undefined
    );
    return (
        <div>
            {
                userData
                    ?

                    <Header userData={userData} setUserData={setUserData} />

                    :
                    <Navbar />
            }

            <ExploreCourseMain category={id} />
            <Footer />
        </div>
    )
}

export default ExploreCourse