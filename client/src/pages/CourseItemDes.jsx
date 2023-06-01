import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import CourseCarousel from '../components/CourseCarousel'
import CourseInfo from '../components/CourseInfo'
import CourseContent from '../components/CourseContent'
import Footer from '../components/Footer'

const CourseItemDes = () => {

    const { id } = useParams();
    console.log("id: ", id)
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