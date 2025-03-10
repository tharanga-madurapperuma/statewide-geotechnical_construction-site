import React from "react";

const DocumentCard = ({ image, title, number }) => {
  return (
    <div className="relative w-full h-[300px] lg:h-[368px] sm:h-[400px] md:h-[500px] sm:pb-[20px] bg-blue-600 rounded-2xl flex flex-col items-left justify-between text-white px-6 py-4 shadow-lg overflow-hidden">
      {/* White Circular Shadow Effect */}
      <div className="absolute top-[-130px] right-[-130px] w-[400px] h-[400px] bg-white/10 rounded-full blur-1xl"></div>
      {/* Card Content */}
      <div className="flex flex-col h-full justify-between">
        {/* Row 1: Number */}
        <div className="flex items-start mt-7">
          <span className="text-4xl font-bold">#{number}</span>
        </div>
        {/* Row 2: Title */}
        <div className="flex items-start">
          <h2 className="md:text-[32px] sm:text-[20px] text-[20px] text-left">
            {title}
          </h2>
        </div>
        {/* Row 3: Button */}
        <div className="flex items-start">
          <button className="mt-6 flex items-center gap-2 border border-white px-6 py-2 w-[160px] rounded-lg hover:bg-[#004BFF] transition">
            Download
            <img
              src={image}
              alt={title}
              className="w-[100px] h-[26px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
