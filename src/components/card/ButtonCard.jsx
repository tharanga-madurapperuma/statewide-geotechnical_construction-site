import React from "react";

const ButtonCard = ({ image, title, description, buttonText }) => {
    return (
    <div className="flex items-center bg-[#EBF7FF]  rounded-3xl p-6 max-w-[1408px]">
      {/* Left Section - Text Content */}
      <div className="flex-1 ml-[35px]">
        <h2 className="text-5xl font-semibold text-[#062465]">{title}</h2>
        <p className="text-gray-600 mt-6">{description}</p>
        <button className="mt-5 px-5 py-2 bg-blue-600 text-white font-normal mb-[8px] rounded-lg flex items-center hover:bg-blue-700 transition duration-300">
          {buttonText}
          <img src="/arrow.png" alt="Arrow" className="ml-2 w-3 h-3" />
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="ml-4 w-1/3 mr-[35px]">
        <img
          src={image}
          alt="Testing Image"
          className="rounded-3xl w-full "
        />
      </div>
    </div>    
  );
};

export default ButtonCard;
