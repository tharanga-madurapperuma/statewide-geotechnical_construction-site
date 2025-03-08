import React from "react";

const DocumentCard = ({ image, title }) => {
    return (
        <div className="relative w-full h-[368px] bg-blue-600 rounded-2xl flex flex-col items-left justify-center text-white px-6 shadow-lg overflow-hidden">
            {/* White Circular Shadow Effect */}
            <div className="absolute top-[-130px] right-[-130px] w-[400px] h-[400px] bg-white/10 rounded-full blur-1xl"></div>


      {/* Card Content */}
      <span className="text-4xl font-bold text-left py-3">#{number}</span>
      <h2 className="text-4xl font-semibold text-left mt-2 pb-9">
        {title}
      </h2>
      <button className="mt-6 flex items-center gap-2 border border-white px-6 py-2 w-[160px] rounded-lg hover:bg-[#004BFF] transition">
        Download
        <img
          src={image}
          alt={title}
          className="w-[100px] h-[26px]"
        />
      </button>
    </div>
  );
};

export default DocumentCard;
