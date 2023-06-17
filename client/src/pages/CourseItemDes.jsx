import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import CourseCarousel from '../components/CourseCarousel'
import CourseInfo from '../components/CourseInfo'
import CourseContent from '../components/CourseContent'
import Footer from '../components/Footer'
import Header from '../components/Header';

const CourseItemDes = () => {
    const token = true
    const { id } = useParams()
    const [addCart, setAddCart] = useState([])
    const [isExist, setIsExist] = useState()

    const data = [
        {
            id: '1',
            title: 'The Complete Python Course: From Zero to Expert!',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.7',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '2',
            title: 'Complete Excel from zero to Expert-2023',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.3',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Excel',
            image: 'https://tenten.vn/help/wp-content/uploads/2022/12/excel-tenten.png',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '3',
            title: 'The Complete Full-Stack Web Development Course',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',

            vote: '4.3',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Web Development',
            image: 'https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/01/30160819/Tuyen-dung-python-1-1024x682.jpeg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '4',
            title: 'JavaScript - Basics to Advanced step by step [2023]',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.3',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'JavaScript',
            image: 'https://static.stringee.com/blog/images/javascript.png',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '5',
            title: 'Learn JavaScript - For Beginners',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'JavaScript',
            image: 'https://static.stringee.com/blog/images/javascript.png',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '6',
            title: 'Learn Python - For Beginners',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '7',
            title: 'Learn Amazon AWS - For Beginners',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Amazon AWS',
            image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_aws.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '8',
            title: 'Learn Drawingt - For Beginners',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Drawing',
            image: 'https://previews.123rf.com/images/helloweenn/helloweenn1701/helloweenn170100007/69472923-pencil-drawing-logo-design.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '9',
            title: 'Learn Data Science - For Beginners',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Data Science',
            image: 'https://images.careerbuilder.vn/content/images/data-science-la-gi-careerbuilder-1.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '10',
            title: 'Learn Data Science',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Data Science',
            image: 'https://images.careerbuilder.vn/content/images/data-science-la-gi-careerbuilder-1.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '11',
            title: 'Learn JavaScript - For Beginners 2',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'js',
            image: 'https://static.stringee.com/blog/images/javascript.png',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '12',
            title: 'Learn Web Development - For Beginners',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Web Development',
            image: 'https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/01/30160819/Tuyen-dung-python-1-1024x682.jpeg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '13',
            title: 'The Complete Python Course: From Zero to Expert!',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },
        {
            id: '14',
            title: 'The Complete Python Course: From Zero to Expert!',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },

        {
            id: '15',
            title: 'The Complete Python Course: From Zero to Expert!',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },

        {
            id: '16',
            title: 'The Complete Python Course: From Zero to Expert!',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },

        {
            id: '17',
            title: 'The Complete Python Course: From Zero to Expert!',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },

        {
            id: '18',
            title: 'The Complete Python Course: From Zero to Expert!',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },

        {
            id: '19',
            title: 'The Complete Python Course: From Zero to Expert!',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },

        {
            id: '20',
            title: 'END Complete Python Course: From Zero to Expert!',
            subTitle: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
            author: 'Jonas Schmedman',
            vote: '4.2',
            numberStudents: 175,
            discountValue: 14,
            rawPrice: 89,
            discountRate: 70,
            category: 'Python',
            image: 'https://whitepat.com/wp-content/uploads/2023/03/python-curso-1-1024x576.jpg',
            mainContent: [
                "Use Python for Data Science and Machine Learning",
                "Implement Machine Learning Algorithms",
                "Learn to use Pandas for Data Analysis"
            ],
            contentMaster: [
                {
                    _id: "64738ea223bf96b115fa36c2",
                    title: "AWS Introduction",
                    subTitle: "4 bài giảng - 28 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 0,
                    contentDetails: [
                        {
                            _id: "64738b7a2f703467b6190455",
                            title: "Course Introduction",
                            subTitle: "01:01",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 61,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738d701b01c1339742dd46",
                            title: "Billing Alarm Lab and Documents",
                            subTitle: "06:36",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 396,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738dbc1b01c1339742dd48",
                            title: "AWS Introduction",
                            subTitle: "06:50",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 410,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        },
                        {
                            _id: "64738def1b01c1339742dd4a",
                            title: "Global Infra, Region, AZ, Edge Location, Local Zone",
                            subTitle: "13:18",
                            image: "",
                            url: "https://www.youtube.com/watch?v=6S0_rNYzcPs",
                            length: 798,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T03:31:01.185Z",
                            creator: "nqc",
                            __v: 0,
                            contentMaster: "64738ea223bf96b115fa36c2"
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T03:35:31.090Z",
                    __v: 0
                },
                {
                    _id: "6474c58e9fead1998544383b",
                    title: "Identity Access Management",
                    subTitle: "4 Bài giảng - 44 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 2,
                    contentDetails: [
                        {
                            _id: "6474d18478c0c6ee8fd72bb1",
                            title: "IAM Introduction",
                            subTitle: "10:51",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gsgdAyGhV0o",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 651,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d23778c0c6ee8fd72bc2",
                            title: "How to access AWS",
                            subTitle: "13:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 782,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        },
                        {
                            _id: "6474d26f78c0c6ee8fd72bc9",
                            title: "IAM Lab",
                            subTitle: "07:02",
                            image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                            url: "https://www.youtube.com/watch?v=gUaNRNjLkcM",
                            contentMaster: "6474c58e9fead1998544383b",
                            length: 422,
                            index: 0,
                            isActive: true,
                            createAt: "2023-05-29T16:11:05.758Z",
                            __v: 0
                        }
                    ],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c5f69fead19985443846",
                    title: "S3",
                    subTitle: "16 Bài giảng - 56 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 3,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c65a9fead1998544384d",
                    title: "EC2",
                    subTitle: "15 Bài giảng - 1 giờ 27 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 4,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T14:36:46.201Z",
                    __v: 0
                },
                {
                    _id: "6474c712b283763b6c6ab2d4",
                    title: "Database on AWS",
                    subTitle: "10 Bài giảng - 57 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 5,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:38:13.326Z",
                    __v: 0
                },
                {
                    _id: "6474c777dc35a62b7a8419f1",
                    title: "Route 53",
                    subTitle: "10 Bài giảng - 40 phút",
                    image: "https://img-b.udemycdn.com/course/240x135/4598418_af4b_7.jpg",
                    courseCode: "aws-saa-c02-cloudnut-vietnam",
                    index: 6,
                    contentDetails: [],
                    isActive: true,
                    createAt: "2023-05-29T15:39:45.262Z",
                    __v: 0
                }
            ],
            isActive: false

        },






    ]

    const desiredCourse = data.find(course => course.id === id);

    useEffect(() => {

        const storedCart = localStorage.getItem('cart');
        const parsedCart = storedCart ? JSON.parse(storedCart) : []
        const isProductInCart = parsedCart.some((item) => item.id === desiredCourse.id)
        setIsExist(isProductInCart)

    }, [])
    const addToCart = () => {

        const storedCart = localStorage.getItem('cart');
        const parsedCart = storedCart ? JSON.parse(storedCart) : []

        // Kiểm tra xem desiredCourse đã tồn tại trong giỏ hàng hay chưa
        const isProductInCart = parsedCart.some((item) => item.id === desiredCourse.id)

        if (isProductInCart) {
            // Nếu desiredCourse đã tồn tại trong giỏ hàng, không thêm vào
            console.log('Sản phẩm đã tồn tại trong giỏ hàng');
            setIsExist(true)
        } else {
            // Nếu desiredCourse chưa tồn tại trong giỏ hàng, thêm vào
            const updatedCart = [...parsedCart, { ...desiredCourse, isExist: true }];
            setAddCart(updatedCart);
            setIsExist(true)

            // Lưu giỏ hàng vào Local Storage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }

    };


    return (
        <div>
            {
                token == true ? <Header addCart={addCart} /> : <Navbar />
            }

            <CourseCarousel data={desiredCourse} addToCart={addToCart} isExist={isExist} />
            <CourseInfo data={desiredCourse} />
            <CourseContent data={desiredCourse} />
            <Footer />
        </div>
    )
}

export default CourseItemDes