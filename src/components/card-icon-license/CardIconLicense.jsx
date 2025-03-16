import React from "react";

const LicenseCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full md:bg-blue-50 rounded-2xl lg:p-8">
      <div className="flex flex-col items-center">
        {/* Ensure icon container has a fixed height */}
        <div className="flex items-center justify-center w-[140px] h-[140px] md:w-[168px] md:h-[168px] bg-blue-600 rounded-4xl">
          <img
            src={image}
            alt={title}
            className="w-[75px] h-[75px] md:w-[95.87px] md:h-[95.87px]"
          />
        </div>
        {/* Title */}
        <p className="mt-4 lg:text-[24px] text-lg font-semibold text-gray-900 text-center">
          {title}
        </p>
      </div>
      {/* Description */}
      <p className="mt-2 text-[16px] mx-3 font-medium text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
};

export default LicenseCard;
