import React from "react";

const InfoSection = ({ title, description, buttonText, buttonLink, imageSrc, reverse }) => {
  return (
    <section 
      className={`flex flex-col md:flex-row items-center justify-between gap-10 px-5 py-12 max-w-7xl mx-auto ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img src={imageSrc} alt={title} className="w-full max-w-lg rounded-lg" />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify mb-5">
          {description}
        </p>
        <a 
          href={buttonLink} 
          className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-base sm:text-lg font-medium transition duration-300 hover:bg-blue-600 hover:text-white inline-block"
        >
          {buttonText} →
        </a>
      </div>
    </section>
  );
};

export default InfoSection;
