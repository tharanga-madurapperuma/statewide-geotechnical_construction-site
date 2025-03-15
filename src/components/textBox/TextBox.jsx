import React from "react";

const TextBox = ({ topicText, description, author }) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[#1F2937] font-inter text-28 font-700">
                {topicText}
            </h1>
            <div className="mt-24">
                <p className="font-inter font-400 text-18 italic text-gray-600 leading-[24px] text-center">
                    <span className="text-40 font-inter font-400 italic leading-[24px]">
                        "
                    </span>
                    {description}
                    <span className="text-40 font-inter font-400 italic leading-[24px]">
                        "
                    </span>
                </p>
            </div>
            <div className="mt-24">
                <p className="font-inter font-500 text-18 text-slate-400">
                    {author}
                </p>
            </div>
        </div>
    );
};

export default TextBox;
