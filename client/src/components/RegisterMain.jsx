import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signin, signup } from "../actions/auth";
const RegisterMain = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    });
    const handleLogin = () => {
        if (userData.name === "") {
            alert("Chưa nhập tên");
            return;
        }
        if (userData.email === "") {
            alert("Chưa nhập mail");
            return;
        }
        if (userData.email === "") {
            alert("Chưa nhập mật khẩu");
            return;
        }
        if (userData.confirmPassword === "") {
            alert("Chưa nhập lại mật khẩu");
            return;
        }
        if (ValidateEmail(userData.email) === false) {
            return;
        }
        if (userData.password !== userData.confirmPassword) {
            alert("Mật khẩu không trùng khớp");
            return;
        }

        console.log(userData);

        dispatch(signup(userData, navigate));
    };
    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        alert("Email không đúng định dạng");
        return false;
    }
    return (
        <div className="w-full">
            <h1 className="mt-20 font-bold mb-4">Sign up and start learning</h1>
            <div className="mx-auto w-full">
                <input
                    className="w-96 border border-black outline-none mb-4 p-4 font-bold "
                    type="text"
                    placeholder="Full name"
                    onChange={(e) => {
                        setUserData({ ...userData, name: e.target.value });
                    }}
                />
                <br />
                <input
                    className="w-96 border border-black outline-none mb-4 p-4 font-bold"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                        setUserData({ ...userData, email: e.target.value });
                    }}
                />
                <br />
                <input
                    className="w-96 border border-black outline-none mb-4 p-4 font-bold"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setUserData({ ...userData, password: e.target.value });
                    }}
                />
                <br />
                <input
                    className="w-96 border border-black outline-none mb-4 p-4 font-bold"
                    type="password"
                    placeholder="Re-enter Password"
                    onChange={(e) => {
                        setUserData({ ...userData, confirmPassword: e.target.value });
                    }}
                />
                <br />
                <button className="w-96 border outline-none mb-4 p-3 font-bold bg-[#8710D8] text-white mt-4" onClick={handleLogin}>
                    Sign up
                </button>
            </div>

            <hr className="w-96 mx-auto mb-4" />
            <div className="mb-20">
                <span>Already have an account? </span>
                <Link to="/login">
                    <span className="font-bold text-[#401B9C] underline  ">
                        <a href=""> Log in</a>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default RegisterMain;
