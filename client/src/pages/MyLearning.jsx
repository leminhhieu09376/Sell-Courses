import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyLearningMain from '../components/MyLearningMain'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../actions/customer";
import { getCategories } from '../actions/category'

const MyLearning = () => {
    const [reload, setReload] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(
        localStorage.getItem("profile") != null
            ? JSON.parse(localStorage.getItem("profile")).result
            : undefined
    );

    useEffect(() => {
        if (!userData) {
            navigate('/')
            return
        }

        dispatch(getCategories());
        dispatch(
            getCustomer(JSON.parse(localStorage.getItem("profile")).result._id)
        );
    }, [dispatch, reload]);
    return (
        <div>
            {
                userData ? (
                    <div>
                        <Header userData={userData} setUserData={setUserData} />
                        <MyLearningMain reload={reload} setReload={setReload} />
                        <Footer />
                    </div>
                ) : navigate("/")
            }

        </div>
    )
}

export default MyLearning