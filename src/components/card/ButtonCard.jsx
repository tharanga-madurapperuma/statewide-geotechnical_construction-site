import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const ButtonCard = ({ image, title, description, buttonText }) => {
  const navigate = useNavigate();
  const buttonLink = "/contact";

  return (
    <div className="font-inter bg-[#EBF7FF] rounded-xl sm:rounded-2xl md:rounded-3xl mx-4 sm:mx-6 md:mx-8 lg:mx-16 mt-[8px] md:mt-[16px]">
      {/* Mobile layout - Image on top, text below */}
      <div className="block md:hidden p-6 sm:p-2">
        {/* Top Image for Mobile */}
        <div className="w-full mb-6">
          <img 
            src={image} 
            alt={title || "Feature Image"} 
            className="rounded-xl sm:rounded-2xl w-full h-auto object-cover"
          />
        </div>
        
        {/* Text Content for Mobile */}
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-inter leading-tight sm:leading-snug font-semibold text-[#062465] text-center">
            {title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4 text-center">
            {description}
          </p>
          
          {/* Centered Button for Mobile */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate(buttonLink)}
              className="px-4 sm:px-5 py-2 text-sm sm:text-base bg-blue-600 text-white font-normal rounded-lg flex items-center hover:bg-blue-700 transition duration-300"
            >
              {buttonText}
              <div className="ml-2">
                <GoArrowUpRight />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop layout - Maintains original spacing */}
      <div className="hidden md:flex items-center justify-between">
        {/* Left Section - Text Content with exact 94px margin */}
        <div className="flex-1 ml-[94px] py-[40px]">
          <h2 className="text-4xl lg:text-5xl xl:text-[62px] font-inter leading-snug lg:leading-[76px] font-semibold text-[#062465]">
            {title}
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl xl:text-[22px] leading-[32px] mt-6">
            {description}
          </p>

          {/* Button with Link */}
          <button
            onClick={() => navigate(buttonLink)}
            className="mt-8 px-5 py-2 text-base bg-blue-600 text-white font-normal rounded-lg flex items-center hover:bg-blue-700 transition duration-300"
          >
            {buttonText}
            <div className="ml-2">
              <GoArrowUpRight />
            </div>
          </button>
        </div>

        {/* Right Section - Image with exact spacing */}
        <div className="w-1/3 ml-6 mr-[94px] my-[40px]">
          <img 
            src={image} 
            alt={title || "Feature Image"} 
            className="rounded-3xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;