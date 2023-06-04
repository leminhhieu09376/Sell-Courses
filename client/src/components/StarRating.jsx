
import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai'

const StarRating = ({ rate }) => {
    const fullStars = Math.floor(rate); // Số ngôi sao đầy đủ
    const decimal = rate - fullStars; // Phần thập phân



    return (
        <div className='flex' >
            {[...Array(5)].map((_, index) => {
                if (index < fullStars) {
                    // Hiển thị ngôi sao đầy đủ
                    return <AiTwotoneStar key={index} className="star text-yellow-400" />;
                } else if (index === fullStars && decimal !== 0) {
                    // Hiển thị ngôi sao với background màu tương ứng với phần thập phân
                    const decimalPercentage = decimal * 100;
                    return (
                        <div key={index} className="">
                            <AiTwotoneStar className="" style={{ color: 'gray' }}
                            />



                        </div>
                    );
                } else {
                    // Hiển thị ngôi sao không có màu
                    return <AiTwotoneStar key={index} className="star" style={{ color: 'gray' }} />;
                }
            })}

        </div>
    );
};

export default StarRating;
