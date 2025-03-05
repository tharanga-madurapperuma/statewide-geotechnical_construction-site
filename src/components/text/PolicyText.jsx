import React from "react";

const PolicyText = ({ title, description, bulletText }) => {
  return (
    <div className="bg-[#EBF7FF] p-8 rounded-lg">
      <h2 className="text-4xl font-bold text-gray-900 mb-7">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        {bulletText.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr className="mt-4 border-gray-300" />
    </div>
  );
};

export default PolicyText;
