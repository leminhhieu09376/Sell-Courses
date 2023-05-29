import React from 'react'
import { Link } from 'react-router-dom'
import Courses from "../components/Courses"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BecomInstructor from "../components/BecomInstructor"
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Courses />
            <BecomInstructor />
            <Footer />

        </div>
    )
}

export default HomePage