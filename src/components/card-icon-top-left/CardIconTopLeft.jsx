import React from "react";

const CardIconTopLeft = ({
    iconUrl,
    iconBackground,
    background,
    stroke,
    titleText,
    bodyText,
    titleColor,
    bodyColor,
    padding,
    backgroundHover,
}) => {
    /* 
    iconUrl - image url of the icon | String or Variable
    iconBackground - Background color of the icon | class name - full class (bg-blue-100)
    background - Background color of the card | class name - full class (bg-blue-100)
    stroke - Whether stroke exist or not | True or False
    titleText - Title text of the card | String text
    bodyText - Body text of the card | String text
    titleColor - Color of the title text | class name - full class (bg-blue-100)
    bodyColor - Color of the body text | class name - full class (bg-blue-100)
    padding - Padding of the card | True or False for whether to apply padding
    backgroundHover - Background color of the card on hover | True or False - for blue color cards
    */
    return (
        <div className="w-full h-full">
            <div
                className={`w-full h-full flex flex-col items-center  transition duration-700 ${
                    padding ? `p-8 rounded-3xl ${background}` : "py-8"
                }  ${backgroundHover ? "hover:bg-blue-700 " : null} ${
                    stroke
                        ? "border border-blue-100 hover:border-blue-300"
                        : "none"
                }`}
            >
                <div className="w-full flex justify-start items-center">
                    <img
                        className={`${iconBackground} px-2 py-3 rounded-xl`}
                        src={iconUrl}
                    />
                </div>
                <div>
                    <h1
                        className={`font-inter text-24 font-500 spacing-28 mt-5 ${titleColor}`}
                    >
                        {titleText}
                    </h1>
                    <p
                        className={`font-inter text-16 font-400 spacing-24 mt-4 ${bodyColor}`}
                    >
                        {bodyText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardIconTopLeft;
