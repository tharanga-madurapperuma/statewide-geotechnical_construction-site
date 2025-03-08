import React from "react"
import {HomeHero} from "../../assets/assets"

const HeroSection = ({title, description, buttonLink, buttonText}) => {
  return (
    <section className=" my-[15%] md:py-10 md:px-[0.5rem] md:m-[2rem]">
      <div
        className={` md:h-[900px] md:w-full flex items-center bg-cover p-48 bg-center md:rounded-xl hue-rotate-15 saturate-150`}
        style={{backgroundImage: `url(${HomeHero})`}}
      >
        <div className="max-w-[802px] w-full p-6 md:p-15 ">
          <h2 className="text-2xl md:text-[62px]  font-bold text-textDark">
            {title}
          </h2>

          <p className="text-base md:text-[22px] text-gray-600 mt-3 text-justify">
            {description}
          </p>

          <div className="mt-6 md:w-[198px]">
            <a
              href={buttonLink}
              className="bg-[#0064FF] border-2 border-[#0064FF] text-white py-2 px-5 rounded-lg font-medium text-sm md:text-[20px] inline-flex items-center gap-2 shadow-md hover:bg-transparent hover:text-[#0064FF] hover:border-2 hover:border-[#0064FF] transition duration-300"
            >
              {buttonText} &#8599;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
