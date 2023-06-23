import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChangePassWordMain from '../components/ChangePasswordMain'
const ChangePassword = () => {
    const [userData, setUserData] = useState(
        localStorage.getItem("profile") != null
            ? JSON.parse(localStorage.getItem("profile")).result
            : undefined
    );
    return (
        <div>
            <Header userData={userData} />
            <ChangePassWordMain />
            <Footer />
        </div>
    )
}

export default ChangePassword