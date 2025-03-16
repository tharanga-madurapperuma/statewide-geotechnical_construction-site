import React from "react";
import { AboutHero, HomeHero, HomeOnly } from "../../assets/assets";
import ContactSection from "../contacts/ContactSection";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const HeroSection = ({
    title,
    description,
    buttonLink,
    buttonText,
    hasBookButton,
}) => {
    return (
        <section className=" my-[5%] md:my-0 px-2 md:px-4 ">
            <div
                className={` md:h-[720px]   w-full flex items-center bg-cover py-[60px]  px-6 sm:px-[64px] md:px-[74px] lg:px-[94px] xl:px-[94px] bg-center rounded-xl `}
                style={{ backgroundImage: `url(${HomeOnly})` }}
            >
                <div className="">
                    <h2 className="text-4xl md:text-[62px] max-w-[702px] lg:mb-24 lg:leading-[76px] font-bold text-[#062465]">
                        {title}
                    </h2>

                    <p className="text-base md:text-[22px] max-w-[702px] text-gray-600 mt-3">
                        {description}
                    </p>

                    {buttonLink && buttonText && (
                        <div className="mt-8 md:w-[198px]">
                            <Link
                                to="/contact"
                                className="bg-[#0064FF] border-2 border-[#0064FF] text-white py-2 px-5 rounded-lg font-medium text-sm md:text-[20px] inline-flex items-center gap-2 shadow-md  hover:bg-blue-700 transition duration-300"
                            >
                                {buttonText} <GoArrowUpRight />
                            </Link>
                        </div>
                    )}
                    <div className="xl:block hidden">
                        {!buttonLink && !buttonText && <ContactSection />}
                    </div>
                    {hasBookButton && (
                        <div className="xl:hidden block">
                            <div className="mt-8 md:w-[198px]">
                                <a
                                    href="#appointment"
                                    className="bg-[#0064FF]  text-white py-2 px-5 rounded-lg font-medium text-sm md:text-[20px] inline-flex items-center gap-2  hover:bg-blue-700 transition duration-300"
                                >
                                    Book appt. <GoArrowUpRight />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
