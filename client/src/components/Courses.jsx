import React, { useState, useEffect } from 'react'
import Course from "./Course"
import { Link } from 'react-router-dom'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

function Courses({ token }) {
    const category = [
        { id: '1', categoryName: 'Python', title: 'Expand your career opportunities with Python', categoryDes: 'Take one of Udemy range of Python courses and learn how to code using this incredibly useful language. ' },
        { id: '2', categoryName: 'Excel', title: 'Analyze and visualize data with Excel', categoryDes: 'Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. ' },
        { id: '3', categoryName: 'Web Development', title: 'Build websites and applications with Web Development', categoryDes: 'The world of web development is as wide as the internet itself. ' },
        { id: '4', categoryName: 'JavaScript', title: 'Grow your software development skills with JavaScript', categoryDes: 'JavaScript is a text-based computer programming language used to make dynamic web pages. ' },
        { id: '5', categoryName: 'Data Science', title: 'Lead data-driven decisions with Data Science', categoryDes: 'Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking.' },
        { id: '6', categoryName: 'Amazon AWS', title: 'Become an expert in cloud computing with AWS Certification', categoryDes: 'Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services.' },
        { id: '7', categoryName: 'Drawing', title: 'Expand your creative skillset with Drawing', categoryDes: 'Want to start drawing for fun or take your craft to the next level?' },
    ]

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
    const [visibleLeft, setVisibleLeft] = useState();
    const [visibleRight, setVisibleRight] = useState();
    const [currentCategory, setCurrentCategory] = useState(
        {
            id: '1',
            categoryName: 'Python',
            title: 'Expand your career opportunities with Python',
            categoryDes: 'Take one of Udemy range of Python courses and learn how to code using this incredibly useful language. '
        },
    )
    const [activeButton, setActiveButton] = useState('Python');
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('content');
            if (element) {
                const scrollLeft = element.scrollLeft;
                const scrollWidth = element.scrollWidth;
                const clientWidth = element.clientWidth;

                setVisibleLeft(scrollLeft > 0);
                setVisibleRight(scrollLeft + clientWidth < scrollWidth);

            }
        };


        const contentElement = document.getElementById('content');
        if (contentElement) {
            contentElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (contentElement) {
                contentElement.removeEventListener('scroll', handleScroll);
                setVisibleRight(contentElement.scrollWidth > contentElement.clientWidth);
            }
        };
    }, [currentCategory]);
    console.log(token)
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 1000
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 1000
    }



    const handleButtonPress = (buttonName) => {
        setActiveButton(buttonName);
    };


    return (
        <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
            <h2 className="text-3xl font-bold">A broad selection of courses</h2>
            <h3 className="text-xl">Choose from 183,000 online video courses with new new addtion published every month</h3>
            <div className="text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
                {
                    category.map((item) => {
                        return (
                            <button className={`${activeButton === item.categoryName ? 'text-black' : ''}`} onClick={() => {
                                handleButtonPress(item.categoryName)
                                setCurrentCategory(item)

                            }} key={item.id}>{item.categoryName}</button>
                        )
                    })
                }

            </div>
            <div className="text-left w-full border border-gray-300 p-7">
                <h2 className="text-2xl font-bold mb-2"> {currentCategory.title}</h2>
                <h3>
                    {currentCategory.categoryDes}
                </h3>
                <Link to={`/all-course/${currentCategory.categoryName}`}>
                    <button className="border border-black font-bold text-sm p-2 mt-4 mb-8">Explore {currentCategory.categoryName}</button>
                </Link>


                <div id='content' className=" w-11/12 mx-auto flex gap-4 flex-wrap lg:flex-nowrap  items-center justify-start overflow-x-auto scrollbar-hide scroll-smooth">
                    <div >
                        <button onClick={scrollLeft} className={`${visibleLeft == true ? 'absolute left-24 rounded-full  bg-gray-200 text-white font-bold w-8 h-8' : 'hidden'
                            }`}>
                            <AiOutlineLeft className='w-5 h-5 mx-auto ' />
                        </button>

                        <button onClick={scrollRight} className={`${visibleRight ? 'absolute right-20 rounded-full bg-gray-200 text-white font-bold w-8 h-8' : 'hidden'
                            }`}>
                            <AiOutlineRight className='w-5 h-5 mx-auto' />
                        </button>
                    </div>




                    {
                        data.map((item) => {
                            if (item.category == currentCategory.categoryName) {
                                return (

                                    <div className="h-80 w-60 flex-shrink-0" key={item.id}>

                                        <Course id={item.id} token={token} item={item} />

                                    </div>

                                )
                            }
                        }


                        )
                    }
                </div>




            </div>
        </div>
    )
}

export default Courses