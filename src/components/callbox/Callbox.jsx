import React from "react";

const CallToAction = () => {
    return (
        <div className=" py-10 px-4 w-full mt-26">
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl overflow-hidden flex h-[297px]">
                {/* Left Section - Headline */}
                <div className="w-1/2 p-6 md:p-10 flex items-center justify-center">
                    <h2 className="text-3xl md:text-6xl font-bold text-left">
                        start your journey <br /> with us now
                    </h2>
                </div>
                {/* Right Section - Text and Button */}
                <div className="w-1/2 p-6 md:p-10 flex flex-col justify-between">
                    <p className="text-sm md:text-base leading-relaxed">
                        Need expert drilling solutions? Contact us today for a
                        consultation or request a quote. Our team is ready to
                        assist with your geotechnical and environmental drilling
                        needs. Fill out the form below, or reach us directly via
                        phone or email. We proudly serve clients across Victoria
                        and Southern NSW.
                    </p>
                    <a
                        href="#"
                        className="inline-block  text-white-900 font-medium px-6 py-3 rounded-full hover:bg-blue-900 transition-all text-sm w-max"
                    >
                        Request a Quote Now →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
