import React from "react";

const TextBox = ({ topicText, description, author }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-[#1F2937] font-inter xl:text-28 md:text-24 sm:text-[20px] text-18 font-700">
                {topicText}
            </h1>
            <div className="mt-24">
                <p className="font-inter font-400 xl:text-18 md:text-16 sm:text-14 text-12 italic text-gray-600 leading-[24px] text-center ">
                    <span className="xl:text-40 md:text-[36px] sm:text-[30px] text-24 font-inter font-400 italic leading-[24px]">
                        "
                    </span>
                    {description}
                    <span className="xl:text-18 md:text-16 sm:text-14 text-12 font-inter font-400 italic">
                        "
                    </span>
                </p>
            </div>
            <div className="mt-24">
                <p className="font-inter font-500 xl:text-18 md:text-16 sm:text-14 text-12 text-slate-400">
                    {author}
                </p>
            </div>
        </div>
    );
};

export default TextBox;
