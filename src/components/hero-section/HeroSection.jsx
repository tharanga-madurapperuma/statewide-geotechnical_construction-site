import React from "react";
import heroBg from "../../assets/backgrounds/hero-bg.jpeg";

const HeroSection = ({title,description,buttonLink,buttonText}) => {
  return (
      <section className="px-10 py-10" >
        <div className={` md:h-[900px] md:w-full flex items-center bg-cover p-48 bg-center rounded-xl brightness-125`} style={{ backgroundImage: `url(${heroBg})` }} >
        <div className="max-w-[702px] w-full p-6 md:p-10 ">
        
        <h2 className="text-2xl md:text-[62px] font-bold text-textDark">
         {title}
        </h2>

        <p className="text-base md:text-lg text-textLight mt-3 text-justify">
           {description}
        </p>

        <div className="mt-6 md:w-[198px]">
          <a 
            href={buttonLink}
            className="bg-[#0064FF] text-white py-2 px-5 rounded-lg font-medium text-sm md:text-base inline-flex items-center gap-2 shadow-md hover:bg-white hover:text-[#0064FF] transition duration-300"
          >
           {buttonText}
          </a>
        </div>
          </div>    
        </div>
          
    </section>
  );
};

export default HeroSection;
