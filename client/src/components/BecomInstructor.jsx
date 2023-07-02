import React from 'react'
import { Link } from 'react-router-dom'
const BecomInstructor = () => {
    return (
        <div>
            <div className='w-full bg-[#F7F9FA] h-60 pt-8'>
                <h1 className='text-3xl font-bold mb-4'>Trusted by over 13,400 great teams</h1>
                <h3 className='text-sm mb-4'>Leading companies use the same courses to help employees keep their skills fresh.</h3>
                <div className='flex justify-around mb-10'>
                    <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="" />
                    <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="" />
                    <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="" />
                    <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="" />
                    <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="" />
                    <img src="https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg" alt="" />
                </div>
            </div>
            <div className='flex justify-center align-middle mb-14 w-full h-96'>
                <img className='' src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="" />
                <div className='mt-32 w-1/4 text-left ml-20'>

                    <h1 className='text-3xl font-bold'>Become an instructor</h1>


                    <h3>
                        Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                    </h3>
                    <Link to='/teacher/courses'>
                        <button className='font-bold text-white bg-[#000000] p-4 mt-4'>Start teaching today</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BecomInstructor