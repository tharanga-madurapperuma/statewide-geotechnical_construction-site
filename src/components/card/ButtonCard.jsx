import React from "react";

const ButtonCard = ({ image, title, description, buttonText }) => {
    return (
    <div className="flex items-center bg-[#EBF7FF] shadow-lg rounded-3xl p-6 max-w-7xl">
      {/* Left Section - Text Content */}
      <div className="flex-1 ml-[35px]">
        <h2 className="text-4xl font-bold text-[#062465]">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 px-5 py-2 bg-blue-600 text-white font-normal rounded-lg flex items-center hover:bg-blue-700 transition duration-300">
          {buttonText}
          <img src="/arrow.png" alt="Arrow" className="ml-2 w-3 h-3" />
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="ml-4 w-1/3 mr-[35px]">
        <img
          src={image}
          alt="Testing Image"
          className="rounded-3xl shadow-md w-full "
        />
      </div>
    </div>    
  );
};

export default ButtonCard;
