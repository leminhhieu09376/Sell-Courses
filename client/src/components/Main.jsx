// import React from 'react'

const Main = () => {
    return (
        <div className="w-11/12 h-96 border border-gray-100 relative mx-auto ">
            <img src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/6375a779-139b-4151-b842-a29e9f0f665b.jpg" className="h-full w-full object-cover bg-no-repeat bg-bottom" alt="" />
            <div className=" absolute bg-white top-12 left-8 p-4  flex-col items-start justify-center shadow-lg h-40 w-[440px] ">
                <h2 className="text-3xl font-bold mb-2">Last day to save!</h2>
                <h3>Enjoy the freedom to learn the way you want (for less).</h3>
                <h3>Log in for special savings on courses.</h3>
            </div>
        </div>
    )
}

export default Main