import React from 'react'

const CourseContent = ({ data }) => {
    return (
        <div key={data.id} className='w-1/2 mb-4 h-96 overflow-scroll scrollbar-hide '>
            <h1 className='text-3xl font-bold mb-4'>
                Course content
            </h1>
            <div className='border border-gray ml-40 w-[73%]'>

                {
                    React.Children.toArray(
                        data.contentMaster.map((value) => {
                            return (
                                <div className='text-left border-b border-gray p-4  bg-[#F7F9FA] flex justify-between'>
                                    <p className='font-bold'>{value.title}</p>
                                    <p className='text-sm'>{value.subTitle}</p>
                                </div>
                            )
                        }

                        )
                    )

                }
            </div>
        </div>
    )
}

export default CourseContent