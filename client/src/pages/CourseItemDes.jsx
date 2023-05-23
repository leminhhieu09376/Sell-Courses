import React from 'react'
import Navbar from '../components/Navbar'
import CourseCarousel from '../components/CourseCarousel'
import CourseInfo from '../components/CourseInfo'
import CourseContent from '../components/CourseContent'
import Footer from '../components/Footer'
const CourseItemDes = () => {
    return (
        <div>
            <Navbar />
            <CourseCarousel />
            <CourseInfo />
            <CourseContent />
            <Footer />
        </div>
    )
}

export default CourseItemDes