import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { BiDownArrow } from "react-icons/bi";
import { AiFillVideoCamera, AiOutlineArrowDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail } from "../actions/course";
import { useNavigate } from 'react-router-dom';
const Learning = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const dispatch = useDispatch();
    const data = useSelector((state) => state.course.course);
    const [currentVideo, setCurrentVideo] = useState();


    const [userData, setUserData] = useState(
        localStorage.getItem("profile") != null
            ? JSON.parse(localStorage.getItem("profile")).result
            : undefined
    );
    const [courses, setCourses] = useState(userData.course)
    console.log(courses)
    useEffect(() => {
        if (!userData) {
            navigate('/')
            return
        }
        setCourses(userData.course)
        console.log(courses)
        if (courses.includes(id) == false) {
            navigate('/')
            return
        }
        dispatch(getCourseDetail(id))



    }, [dispatch]);
    useEffect(() => {
        if (data && data.contentMaster && data.contentMaster[0] && data.contentMaster[0].contentDetails && data.contentMaster[0].contentDetails[0]) {
            setCurrentVideo(data.contentMaster[0].contentDetails[0].url);
        }

    }, [data]);


    return (
        <div>
            <div className="flex space-x-4 bg-[#1C1D1F] h-[74px] shadow-lg text-center justify-between items-center px-4 text-white">
                <Link to="/">
                    <h2 className="text-3xl font-bold ">UCourse</h2>
                </Link>
            </div>
            <div className="flex">
                <div className="w-3/4 flex">
                    <div className="w-1/12 bg-gray-800"></div>
                    <ReactPlayer width="80%" height="600px" url={currentVideo} controls />
                    <div className="w-1/12 bg-gray-800"></div>
                </div>

                <div className="w-1/4 text-left overflow-scroll h-[600px] scrollbar-hide">
                    <h1 className="w-full h-20 bg-white pl-6 pt-6 font-bold">
                        Course content
                    </h1>
                    {data &&
                        data.contentMaster !== undefined && data.contentMaster.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="flex w-full h-20 bg-[#F7F9FA] pt-6 pl-6 font-bold justify-between">
                                        <h3 className="">{item.title}</h3>
                                        <BiDownArrow className="mr-10" onClick={() => { }} />
                                    </div>

                                    {item.contentDetails.map((chapter) => {

                                        return (
                                            <div
                                                key={chapter._id}
                                                onClick={() => {
                                                    setCurrentVideo(chapter.url);
                                                }}
                                                className={`${chapter.url == currentVideo ? "bg-[#D1D7DC] cursor-pointer w-full h-28 pl-6 pt-6" : "hover:bg-[#D1D7DC] cursor-pointer w-full h-28 pl-6 pt-6"}`}
                                            >
                                                <p> {chapter.title}</p>

                                                <div className="flex">
                                                    <AiFillVideoCamera className="text-gray-400 mt-2 mr-2" />
                                                    <p className="text-sm mt-1"> {chapter.subTitle}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                </div>
            </div>

            <div className="bg-[#1F2937] h-1"></div>
            <Footer />
        </div>
    );
};

export default Learning;
