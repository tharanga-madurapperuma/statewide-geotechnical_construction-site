import React from "react";

const PolicyText = ({ title, description, bulletText }) => {
    return (
        <div className="pl-[110px] pr-[110px]">
            <h2 className="text-4xl font-bold text-gray-900 mb-7 mt-[20px]">{title}</h2>
            <p className="text-gray-700 mt-2">{description}</p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
                {bulletText.map((item, index) => (
                    <li key={index}>{item}</li>//need to add data as a array
                ))}
            </ul>
            
        </div>
    );
};

export default PolicyText;
