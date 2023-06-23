import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { resetpassword2 } from "../actions/auth";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const ResetPassMain = () => {

    const [enterBtn, setEnterBtn] = useState(false)


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    const [userData, setUserData] = useState({
        newPassword: "",
        confirmNewPassword: "",
        token: token
    });
    console.log(userData)
    const handleChangePassword = () => {

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
        setEnterBtn(true)
        dispatch(resetpassword2(userData, navigate));
    };
    return (
        <div>

            <div className="w-full h-[328px]">
                <h1 className="mt-20 font-bold mb-4">Reset your pass</h1>
                <div className="mx-auto w-full">

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



        </div>

    )
}

export default ResetPassMain