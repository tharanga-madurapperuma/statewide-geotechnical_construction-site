import React from "react";

const InfoSection = ({
    title,
    description,
    buttonText,
    buttonLink,
    imageSrc,
    reverse,
}) => {
    return (
        <section
            className={`flex flex-col md:flex-row items-center justify-between  gap-[56px] py-12 max-w-7xl mx-auto ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
            {/* Image Section */}
            <div className="flex-1 flex justify-left ">
                <img
                    src={imageSrc}
                    alt={title}
                    className=" md:h-[412px] w-[576px] sm:w-full rounded-3xl object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="flex-1 text-left">
                <h2
                    className={`text-2xl sm:text-3xl font-600  text-gray-900 mb-4 ${
                        reverse ? "md:text-[48px]" : " md:md:text-[48px]"
                    }`}
                >
                    {title}
                </h2>
                <p className="text-[18px] font-400  sm:text-lg text-gray-600 leading-relaxed text-justify mb-5">
                    {description}
                </p>
                {buttonText && (
                    <a
                        href={buttonLink}
                        className="text-[#0064FF] py-2 rounded-md text-base md:text-[18px] sm:text-lg font-medium transition duration-300 hover:text-blue-800 inline-block"
                    >
                        {buttonText} →
                    </a>
                )}
            </div>
        </section>
    );
};

export default InfoSection;
