import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom"; // Import for React Router

const ButtonCard = ({ image, title, description, buttonText, link }) => {
    return (
        <div className="flex font-inter items-center bg-[#EBF7FF] rounded-3xl ml-[16px] mr-[16px]">
            {/* Left Section - Text Content */}
            <div className="flex-1 ml-[94px]">
                <h2 className="text-[62px] font-inter leading-[76px] font-semibold text-[#062465]">
                    {title}
                </h2>
                <p className="text-gray-600 text-[22px] leading-[32px] mt-6">
                    {description}
                </p>

                {/* Button with Link */}
                <Link to={link} className="mt-[32px] inline-block">
                    <button className="px-5 py-2 bg-blue-600 text-white font-normal mb-[8px] rounded-lg flex items-center hover:bg-blue-700 transition duration-300 cursor-pointer">
                        {buttonText}
                        <div className="ml-[5px]">
                            <GoArrowUpRight />
                        </div>
                    </button>
                </Link>
            </div>

            {/* Right Section - Image */}
            <div className="w-1/3 ml-[24px] mr-[94px] mb-[40px] mt-[40px]">
                <img src={image} alt="Testing Image" className="rounded-3xl" />
            </div>
        </div>
    );
};

export default ButtonCard;
