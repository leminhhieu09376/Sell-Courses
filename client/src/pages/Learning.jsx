import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { BiDownArrow } from 'react-icons/bi';
import { AiFillVideoCamera, AiOutlineArrowDown } from 'react-icons/ai';
const Learning = () => {
    const { id } = useParams();
    const [currentVideo, setCurrentVideo] = useState('')
    const data = [
        {
            section: [
                {
                    id: 1,
                    sectionName: 'Welcome 1',
                    chapter: [
                        {
                            id: 1,
                            chapterName: 'Welcome to this course',
                            chapterLink: 'https://www.youtube.com/watch?v=NODnEBMgpPU',
                            time: '01:04:10'
                        },
                        {
                            id: 2,
                            chapterName: 'Welcome to this course 2',
                            chapterLink: 'https://www.youtube.com/watch?v=NODnEBMgpPU',
                            time: '01:04:10'
                        },
                        {
                            id: 3,
                            chapterName: 'Welcome to this course 3',
                            chapterLink: 'https://www.youtube.com/watch?v=NODnEBMgpPU',
                            time: '01:04:10'
                        }

                    ]
                },
                {
                    id: 2,
                    sectionName: 'Welcome 2',
                    chapter: [
                        {
                            id: 1,
                            chapterName: '2 Welcome to this course',
                            chapterLink: 'https://www.youtube.com/watch?v=ndaTETa6YjI',
                            time: '01:39:42'

                        },
                        {
                            id: 2,
                            chapterName: '2 Welcome to this course 2',
                            chapterLink: 'https://www.youtube.com/watch?v=ndaTETa6YjI',
                            time: '01:39:42'
                        },
                        {
                            id: 3,
                            chapterName: '2 Welcome to this course 3',
                            chapterLink: 'https://www.youtube.com/watch?v=ndaTETa6YjI',
                            time: '01:39:42'
                        }

                    ]
                }
            ]


        }
    ]



    return (
        <div>
            <div className="flex space-x-4 bg-[#1C1D1F] h-[74px] shadow-lg text-center justify-between items-center px-4 text-white">
                <Link to="/home">
                    <h2 className='text-3xl font-bold '>UCourse</h2>
                </Link>

            </div>
            <div className='flex'>
                <div className='w-3/4 flex'>
                    <div className='w-1/12 bg-gray-800'></div>
                    <ReactPlayer width="80%" height="600px" url={currentVideo} controls />
                    <div className='w-1/12 bg-gray-800'></div>
                </div>

                <div className='w-1/4 text-left overflow-scroll h-[600px] scrollbar-hide'>
                    <h1 className='w-full h-20 bg-white pl-6 pt-6 font-bold' >Course content</h1>
                    {
                        data[0].section.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className='flex w-full h-20 bg-[#F7F9FA] pt-6 pl-6 font-bold justify-between'>
                                        <h3 className=''>Section {item.id}: {item.sectionName}</h3>
                                        <BiDownArrow className='mr-10' onClick={() => {

                                        }} />

                                    </div>


                                    {
                                        item.chapter.map((chapter) => {
                                            return (
                                                <div key={chapter.id} onClick={() => {
                                                    setCurrentVideo(chapter.chapterLink)
                                                }} className='hover:bg-[#D1D7DC] cursor-pointer w-full h-20 pl-6 pt-6'>
                                                    <p >{chapter.id}. {chapter.chapterName}</p>

                                                    <div className='flex'>
                                                        <AiFillVideoCamera className='text-gray-400 mt-2 mr-2' />
                                                        <p className='text-sm mt-1'> {chapter.time}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            )
                        })
                    }



                    {/* <p>Welcome 2</p>
                    <p>Welcome 3</p> */}
                </div>
            </div>

            <div className='bg-[#1F2937] h-1'></div>
            <Footer />
        </div>
    )
}

export default Learning