import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
const CourseInfo = ({ data }) => {

    return (
        <div key={data.id} className='border border-gray-200 w-2/5 mt-4 ml-40 h-80 p-4 mb-10 overflow-scroll scrollbar-hide'>
            <h1 className='mb-4 font-bold text-2xl text-left p-3'>What you'll learn</h1>



            {

                React.Children.toArray(
                    data.mainContent &&
                    data.mainContent.map((value) => {
                        return (
                            <div className='flex space-x-4 items-center mb-4 ml-2 text-left'>
                                <AiOutlineCheck className='w-6' />
                                <p>{value}</p>
                            </div>
                        )
                    }

                    )
                )
            }




        </div>
    )
}

export default CourseInfo