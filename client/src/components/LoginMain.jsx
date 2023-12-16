import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signin, signup } from "../actions/auth";
import ReCAPTCHA from 'react-google-recaptcha';
const LoginMain = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ email: "", password: "" });
    const authData = useSelector((state) => state.auth);
    const recaptchaRef = React.createRef();
    const handleLogin = () => {
        if (userData.email === "") {
            alert("Chưa nhập mail");
            return;
        }
        if (userData.email === "") {
            alert("Chưa nhập mật khẩu");
            return;
        }
        if (ValidateEmail(userData.email) === false) {
            return;
        }
        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            alert('Vui lòng xác minh reCAPTCHA.');
            return;
        }
        dispatch(signin(userData, navigate));
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
            <h1 className="mt-20 font-bold mb-4 text-xl">Log in to your Umdemy account</h1>
            <div className="mx-auto w-full">
                <input
                    className="w-96 border border-black outline-none mb-4 p-4 font-bold "
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
                <br />
                <input
                    className="w-96 border border-black outline-none mb-4 p-4 font-bold"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                    }
                />
                <br />
                {authData.errors && (
                    <div>
                        <span className="text-red-700 italic">{authData.errors}</span>
                    </div>
                )}

                <button
                    className="w-96 border outline-none mb-4 p-3 font-bold bg-[#8710D8] text-white mt-4"
                    onClick={handleLogin}
                >
                    Log in
                </button>
                <ReCAPTCHA className="ml-[600px]"
                    ref={recaptchaRef}
                    sitekey="6LevSr0oAAAAAP89_fprEFtzoqZxigUdddNWgBob"
                />
            </div>
            <div className="mb-4 mt-10">
                <span>or </span>
                <Link to="/forgotPassword">
                    <span className="font-bold text-[#401B9C] underline ">
                        <a href=""> Forgot Password</a>
                    </span>
                </Link>
            </div>
            <hr className="w-96 mx-auto mb-4" />
            <div className="mb-20">
                <span>Don't have an account? </span>
                <Link to="/register">
                    <span className="font-bold text-[#401B9C] underline  ">
                        <a href=""> Sign up</a>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default LoginMain;
