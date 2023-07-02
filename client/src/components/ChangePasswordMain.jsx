import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signin, signup, changepassword } from "../actions/auth";
const ChangePassWordMain = ({ userDataLogin }) => {



    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: userDataLogin.email,
        password: "",
        newPassword: "",
        confirmNewPassword: "",
    });
    console.log(userData)
    const handleChangePassword = () => {


        if (userData.password === "") {
            alert("Chưa nhập mật khẩu");
            return;
        }

        if (userData.newPassword === "") {
            alert("Chưa nhập mật khẩu mới");
            return;
        }
        if (userData.confirmNewPassword === "") {
            alert("Chưa nhập lại mật khẩu");
            return;
        }

        if (userData.newPassword !== userData.confirmNewPassword) {
            alert("Mật khẩu không trùng khớp");
            return;
        }

        console.log(userData);

        dispatch(changepassword(userData, navigate));
    };
    return (
        <div className="w-full h-[352px]">
            <h1 className="mt-14 font-bold mb-4 text-3xl">Change password</h1>
            <div className="mx-auto w-full">
                <input
                    className="w-96 border border-black outline-none mb-4 p-4 font-bold "
                    type="text"
                    placeholder="Password"
                    onChange={(e) => {
                        setUserData({ ...userData, password: e.target.value });
                    }}
                />
                <br />
                <input
                    className="w-96 border border-black outline-none mb-4 p-4 font-bold"
                    type="password"
                    placeholder="New password"
                    onChange={(e) => {
                        setUserData({ ...userData, newPassword: e.target.value });
                    }}
                />
                <br />
                <input
                    className="w-96 border border-black outline-none mb-4 p-4 font-bold"
                    type="password"
                    placeholder="Re-enter new password"
                    onChange={(e) => {
                        setUserData({ ...userData, confirmNewPassword: e.target.value });
                    }}
                />
                <br />
                <button
                    className="w-96 border outline-none mb-4 p-3 font-bold bg-[#8710D8] text-white mt-4"
                    onClick={handleChangePassword}
                >
                    Change
                </button>
            </div>


        </div>
    )
}

export default ChangePassWordMain