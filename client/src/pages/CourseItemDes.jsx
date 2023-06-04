import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import CourseCarousel from '../components/CourseCarousel'
import CourseInfo from '../components/CourseInfo'
import CourseContent from '../components/CourseContent'
import Footer from '../components/Footer'
import Header from '../components/Header';

const CourseItemDes = () => {
    const token = true
    const { id } = useParams();
    console.log("id: ", id)
    return (
        <div>
            {
                token == true ? <Header /> : <Navbar />
            }

            <CourseCarousel />
            <CourseInfo />
            <CourseContent />
            <Footer />
        </div>
    )
}

export default CourseItemDes