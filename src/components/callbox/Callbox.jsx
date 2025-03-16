import React from "react";
import { Link } from "react-router-dom";

const CTAComponent = () => {
  return (
    <div className="my-[64px] md:my-[128px] py-4 bg-[#062465] z-2 w-full mx-auto text-white rounded-2xl overflow-hidden flex flex-col md:flex-row h-auto items-center relative px-4 md:px-2">
      {/* Circle on the left */}
      <div
        className="absolute -z-1 -left-16 md:-left-29 top-1/2 transform -translate-y-1/2 w-36 md:w-150 h-36 md:h-150 rounded-full bg-[#0A2D6F]"
        aria-hidden="true"
      ></div>

      {/* Left section */}
      <div className="flex py-2 text-left my-6 px-[36px] md:pl-[55px]">
        <h1 className="text-[32px] sm:text-[36px] md:text-[45px] lg:text-[58px] leading-[36px] sm:leading-[46px] md:leading-[68px] font-bold">
          Start your journey <br />
          with us now
        </h1>
      </div>

      {/* Right section */}
      <div className="mt-3 py-5 flex-1 text-center md:text-left px-[36px] md:pr-40">
        <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 mb-4 md:mb-3">
          Need expert drilling solutions? Contact us today for a consultation or
          request a quote. Our team is ready to assist with your geotechnical
          and environmental drilling needs. Fill out the form below, or reach us
          directly via phone or email. We proudly serve clients across Victoria, Southern Australian and New South Wales.
        </p>
        <Link to="/contact" className="text-blue-600 hover:underline">
        <a href="#" className="text-[#fff] font-semibold pt-7 pb-5 px-6 md:px-1 rounded-full transition duration-300">
          Request a Quote Now →
        </a>
        </Link>
      </div>
    </div>
  );
};

export default CTAComponent;
