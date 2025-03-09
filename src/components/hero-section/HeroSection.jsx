import React from "react"
import {HomeHero} from "../../assets/assets"
import ContactSection from "../contacts/ContactSection"
import { GoArrowUpRight } from "react-icons/go"

const HeroSection = ({title, description, buttonLink, buttonText}) => {
  return (
    <section className=" my-[15%] md:py-10 font-inter md:px-[0.5rem] md:m-[2rem]">
      <div
        className={` md:h-[900px] md:w-full flex items-center bg-cover p-48 bg-center md:rounded-xl hue-rotate-15 saturate-150`}
        style={{backgroundImage: `url(${HomeHero})`}}
      >
        <div className=" p-6 md:p-15 ">
          <h2 className="text-4xl md:text-[62px] max-w-[702px] font-bold text-textDark">
            {title}
          </h2>

          <p className="text-base md:text-[22px] max-w-[702px] text-gray-600 mt-3">
            {description}
          </p>

          {buttonLink && buttonText && (
            <div className="mt-6 md:w-[198px]">
              <a
                href={buttonLink}
                className="bg-[#0064FF] border-2 border-[#0064FF] text-white py-2 px-5 rounded-lg font-medium text-sm md:text-[20px] inline-flex items-center gap-2 shadow-md hover:bg-transparent hover:text-[#0064FF] hover:border-2 hover:border-[#0064FF] transition duration-300"
              >
                {buttonText } <GoArrowUpRight />
              </a>
            </div>
          )}
          <div className="lg:block hidden">
            {!buttonLink && !buttonText && <ContactSection />}
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
