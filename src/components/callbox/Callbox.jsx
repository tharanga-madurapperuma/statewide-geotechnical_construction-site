import React from "react";

const CTAComponent = () => {
  return (
    <div className="my-[128px] bg-[#062465] z-1 max-w-7xl mx-auto text-white rounded-2xl overflow-hidden flex h-[297px] items-center relative">
      {/* Circle on the left */}
      <div
        className="absolute -z-1 -left-29 top-1/2 transform -translate-y-1/2 w-150 h-150 rounded-full bg-[#0A2D6F]"
        aria-hidden="true"
      ></div>

      {/* Left section */}
      <div className="flex-1 px-10">
        <h1 className="text-5xl font-bold px-15">
          start your journey <br />
          with us now
        </h1>
      </div>

      {/* Right section */}
      <div className="flex-1 pr-40">
        <p className="text-lg leading-7 mb-5">
          Need expert drilling solutions? Contact us today for a consultation or
          request a quote. Our team is ready to assist with your geotechnical
          and environmental drilling needs. Fill out the form below, or reach
          us directly via phone or email. We proudly serve clients across
          Victoria and Southern NSW.
        </p>
        <button className="text-[#fff] font-semibold py-3 rounded-full">
          Request a Quote Now →
        </button>
      </div>
    </div>
  );
};

export default CTAComponent;
