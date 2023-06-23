import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import CourseCarousel from '../components/CourseCarousel'
import CourseInfo from '../components/CourseInfo'
import CourseContent from '../components/CourseContent'
import Footer from '../components/Footer'
import Header from '../components/Header';
import { useDispatch } from "react-redux";
import { getCourseDetail } from '../actions/course';
import { useSelector } from "react-redux";

const CourseItemDes = () => {

    const [userData, setUserData] = useState(
        localStorage.getItem("profile") != null
            ? JSON.parse(localStorage.getItem("profile")).result
            : undefined
    );

    const { id } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCourseDetail(id));
    }, [dispatch, id]);



    const [addCart, setAddCart] = useState([])
    const [isExist, setIsExist] = useState()


    const desiredCourse = useSelector((state) => state.course.course);

    useEffect(() => {

        const storedCart = localStorage.getItem('cart');
        const parsedCart = storedCart ? JSON.parse(storedCart) : []
        const isProductInCart = parsedCart.some((item) => item._id === id)

        setIsExist(isProductInCart)

    }, [])
    const addToCart = () => {

        const storedCart = localStorage.getItem('cart');
        const parsedCart = storedCart ? JSON.parse(storedCart) : []

        // Kiểm tra xem desiredCourse đã tồn tại trong giỏ hàng hay chưa
        const isProductInCart = parsedCart.some((item) => item._id === desiredCourse._id)

        if (isProductInCart) {
            // Nếu desiredCourse đã tồn tại trong giỏ hàng, không thêm vào

            setIsExist(true)
        } else {
            // Nếu desiredCourse chưa tồn tại trong giỏ hàng, thêm vào
            const updatedCart = [...parsedCart, { ...desiredCourse, isExist: true }];
            setAddCart(updatedCart);
            setIsExist(true)

            // Lưu giỏ hàng vào Local Storage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }

    };

    console.log(isExist)
    return (
        <div>
            {
                userData ? (<Header userData={userData} addCart={addCart} />) : (<Navbar addCart={addCart} />)
            }

            <CourseCarousel data={desiredCourse} addToCart={addToCart} isExist={isExist} />
            <CourseInfo data={desiredCourse} />
            <CourseContent data={desiredCourse} />
            <Footer />
        </div>
    )
}

export default CourseItemDes