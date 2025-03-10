import React from "react";
import { Link } from "react-router-dom";

const CTAComponent = () => {
  return (
    <div className="my-[64px] md:my-[128px] bg-[#062465] z-2 w-full mx-auto text-white rounded-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[297px] items-center relative px-4 md:px-2">
      {/* Circle on the left */}
      <div
        className="absolute -z-1 -left-16 md:-left-29 top-1/2 transform -translate-y-1/2 w-36 md:w-150 h-36 md:h-150 rounded-full bg-[#0A2D6F]"
        aria-hidden="true"
      ></div>

      {/* Left section */}
      <div className="flex-1 md:px-[8px] py-2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-[28px] md:pl-[55px] pl-[1px] sm:text-[36px] md:text-[45px] lg:text-[58px] leading-[36px] sm:leading-[46px] md:leading-[68px] font-bold">
          Start your journey <br />
          with us now
        </h1>
      </div>

      {/* Right section */}
      <div className="flex-1 text-center md:text-left pr-2 md:pr-40">
        <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 mb-4 md:mb-3">
          Need expert drilling solutions? Contact us today for a consultation or
          request a quote. Our team is ready to assist with your geotechnical
          and environmental drilling needs. Fill out the form below, or reach us
          directly via phone or email. We proudly serve clients across Victoria
          and Southern NSW.
        </p>
        <Link to="/contact" className="text-blue-600 hover:underline">
        <button className="text-[#fff] font-semibold pt-7 pb-5 px-6 md:px-1 rounded-full transition duration-300">
          Request a Quote Now →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CTAComponent;
