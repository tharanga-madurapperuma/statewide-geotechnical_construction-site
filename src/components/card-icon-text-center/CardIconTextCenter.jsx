import React from "react";

const CardIconTextCenter = ({
    iconUrl,
    titleText,
    bodyTextPresent,
    bodyText,
}) => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex flex-col items-center rounded-2xl bg-blue-25 border hover:bg-blue-50 border-blue-100 hover:border-blue-300 transition duration-700 pb-8 px-2 sm:px-4 lg:px-8">
                <div className="mt-1 md:mt-2 lg:mt-6 w-full flex justify-center items-center">
                    <img
                        src={iconUrl}
                        className="w-[50px] sm:w-[55px] md:w-[62px] lg:w-[70px]"
                    />
                </div>
                <h2 className="font-inter text-[14px] font-normal text-center md:text-[18px] lg:text-[18px] mt-5">
                    {titleText}
                </h2>
                {bodyTextPresent && (
                    <p className="font-inter text-12 font-400 mt-2 sm:text-12 text-center md:text-14 lg:text-16 lg:mb-6 lg:w-[70%] ">
                        {bodyText}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CardIconTextCenter;
