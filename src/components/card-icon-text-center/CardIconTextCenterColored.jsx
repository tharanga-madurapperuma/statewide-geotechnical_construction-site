import React from "react";

const CardIconTextCenterColored = ({
    iconUrl,
    titleText,
    bodyTextPresent,
    bodyText,
}) => {
    return (
        <div className="w-full h-full flex flex-col items-center bg-blue-600 text-white rounded-2xl p-6 hover:bg-blue-700 transition duration-500">
            {/* Icon */}
            <div className="flex items-center justify-center w-[140px] h-[140px]">
                <img
                    src={iconUrl}
                    alt="Icon"
                   
                />
            </div>

            {/* Title */}
            <h2 className="font-inter text-lg md:text-xl lg:text-2xl font-semibold text-center mt-4">
                {titleText}
            </h2>

            {/* Body/Description */}
            {bodyTextPresent && (
                <p className="font-inter text-sm md:text-base text-center mt-2 text-gray-100">
                    {bodyText}
                </p>
            )}
        </div>
    );
};

export default CardIconTextCenterColored;
