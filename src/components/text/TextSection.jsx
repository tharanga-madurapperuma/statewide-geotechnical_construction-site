import React from "react";

const TextSection = ({ title, description, buttonText, buttonLink }) => {
    return (
        <section className="bg-[#EBF7FF] py-12">
            <div className="mx-auto text-center md:text-left">
                <h2
                    s
                    className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4"
                >
                    {title}
                </h2>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify mx-auto md:mx-0">
                    {description}
                </p>

                {buttonLink && buttonText && (
                    <div className="mt-5">
                        <a
                            href={buttonLink}
                            className="text-[#4E61F6] font-medium text-base sm:text-lg border-b-2 border-transparent hover:border-blue-600 transition duration-300"
                        >
                            {buttonText}
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TextSection;
