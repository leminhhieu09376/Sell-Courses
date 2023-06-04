import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExploreCourseMain from '../components/ExploreCourseMain'
const ExploreCourse = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <Header />
            <ExploreCourseMain category={id} />
            <Footer />
        </div>
    )
}

export default ExploreCourse