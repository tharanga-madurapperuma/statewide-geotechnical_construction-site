import React from "react";

const CardIconTextCenter = ({
    iconUrl,
    titleText,
    bodyTextPresent,
    bodyText,
}) => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex flex-col items-center justify-center rounded-3xl bg-blue-25 border border-blue-100 hover:border-blue-300 transition duration-700 p-[30px]">
                <div className="mb-8">
                    <img src={iconUrl} />
                </div>
                <h2 className="font-inter text-24 font-500 text-center">
                    {titleText}
                </h2>
                {bodyTextPresent && (
                    <p className="font-inter text-16 font-400 mt-1 text-center">
                        {bodyText}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CardIconTextCenter;
