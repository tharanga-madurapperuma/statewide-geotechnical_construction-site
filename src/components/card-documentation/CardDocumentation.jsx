import React from "react";

const DocumentCard = ({ image, title, number, link }) => {
  return (
    <div className="relative w-full h-[300px] lg:h-[368px] sm:h-[400px] md:h-[500px] sm:pb-[20px] bg-blue-600 rounded-2xl flex flex-col items-left justify-between text-white px-6 py-4 shadow-lg overflow-hidden">
      
      <div className="absolute top-[-130px] right-[-130px] w-[400px] h-[400px] bg-white/10 rounded-full blur-1xl"></div>
      
      {/* Card Content */}
      <div className="flex flex-col h-full">
        {/* Row 1: Number */}
        <div
          className="flex items-start"
          style={{
            minHeight: "40px", 
          }}
        >
          <span className="text-4xl font-bold">#{number}</span>
        </div>

        {/* Row 2: Title */}
        <div
          className="flex items-start"
          style={{
            minHeight: "72px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h2 className="md:text-[28px] sm:text-[20px] text-[20px] text-left leading-tight mt-[60px]">
            {title}
          </h2>
        </div>

        {/* Row 3: Button */}
        <div className="flex items-start mt-auto">
          <a href={link} download>
            <button className="mt-6 flex items-center gap-2 border border-white px-6 py-2 w-[160px] rounded-lg hover:bg-[#004BFF] transition">
              Download
              <img
                src={image}
                alt={title}
                className="w-[100px] h-[26px]"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
