import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChangePassWordMain from '../components/ChangePasswordMain'
import { useNavigate } from 'react-router-dom';
const ChangePassword = () => {
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


    }, [userData]);
    return (
        <div>
            {
                userData ? (
                    <div>
                        <Header userData={userData} setUserData={setUserData} />
                        <ChangePassWordMain userDataLogin={userData} />
                        <Footer />
                    </div>
                ) : navigate("/")
            }

        </div>
    )
}

export default ChangePassword