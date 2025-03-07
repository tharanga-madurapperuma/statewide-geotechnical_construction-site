import React from "react";

const CardIconTextCenterColored = ({
    iconUrl,
    titleText,
    bodyTextPresent,
    bodyText,
}) => {
    return (
        <div className="w-full h-full ">
            <div className="w-full h-full flex flex-col items-center rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition duration-700 pb-4 px-2 sm:px-4 xl:px-8">
                <div className="mt-1 md:mt-2 lg:mt-6">
                    <img className="text-white" src={iconUrl} />
                </div>
                <h2 className="font-inter text-14 font-500 text-center md:text-18 lg:text-24">
                    {titleText}
                </h2>
                {bodyTextPresent && (
                    <p className="font-inter text-12 font-400 mt-1 sm:text-12 text-center md:text-14 lg:text-16 lg:mb-6">
                        {bodyText}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CardIconTextCenterColored;
