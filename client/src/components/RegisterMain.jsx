import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signin, signup } from "../actions/auth";
import ReCAPTCHA from 'react-google-recaptcha';
const RegisterMain = () => {
    const [authData, setAuthData] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z]).{8,}$/;

    const [userData, setUserData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    });
    const recaptchaRef = React.createRef();
    function sanitizeInput(input) {
        // Loại bỏ các thẻ HTML nguy hiểm
        const sanitizedInput = input.replace(/<[^>]*>/g, '');

        // Loại bỏ ký tự đặc biệt nguy hiểm
        const cleanInput = sanitizedInput.replace(/[&<>"'`=\/]/g, '');

        return cleanInput;
    }
    const handleLogin = () => {
        if (userData.name === "") {
            setAuthData("Chưa nhập tên");
            return;
        }
        if (userData.email === "") {
            setAuthData("Chưa nhập mail");
            return;
        }
        if (userData.email === "") {
            setAuthData("Chưa nhập mật khẩu");
            return;
        }
        if (!passwordRegex.test(userData.password)) {
            setAuthData("Mật khẩu phải có ít nhất 8 ký tự trong đó có ít nhất một ký tự viết hoa, một ký tự đặc biệt, một ký tự số và một ký tự chữ cái,");
            return;
        }
        if (userData.confirmPassword === "") {
            setAuthData("Chưa nhập lại mật khẩu");
            return;
        }
        if (ValidateEmail(userData.email) === false) {
            return;
        }
        if (userData.password !== userData.confirmPassword) {
            setAuthData("Mật khẩu không trùng khớp");
            return;
        }
        // Validate reCAPTCHA
        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            setAuthData('Vui lòng xác minh reCAPTCHA.');
            return;
        }
        console.log(userData);
        const cleanName = sanitizeInput(userData.name);
        setUserData({ ...userData, name: cleanName });
        console.log(userData)
        dispatch(signup(userData, navigate));
    };
    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        alert("Email không đúng định dạng");
        return false;
    }
    console.log(authData)
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

                <div>
                    <span className="text-red-700 italic">{authData}</span>
                </div>


                <button className="w-96 border outline-none mb-4 p-3 font-bold bg-[#8710D8] text-white mt-4" onClick={handleLogin}>
                    Sign up
                </button>
                <ReCAPTCHA className="ml-[600px]"
                    ref={recaptchaRef}
                    sitekey="6LevSr0oAAAAAP89_fprEFtzoqZxigUdddNWgBob"
                />
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
