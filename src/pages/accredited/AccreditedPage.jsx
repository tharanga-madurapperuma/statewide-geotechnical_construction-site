import React from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import AccreditedFacilitySection from "../../components/hero-section/AccreditedFacilitySection";

const AccreditedPage = () => {
    return (
        <div className="md:mt-[108px] mt-[60px] sm:mt-[70px]">
            <HeroSection
                title={"Your Trusted NATA-Accredited Testing Facility"}
                description={
                    "Delivering high-precision testing services with industry-leading expertise."
                }
                buttonText={"Get in Touch "}
                buttonLink={"/"}
                hasBookButton={false}
            />

            <AccreditedFacilitySection />
        </div>
    );
};

export default AccreditedPage;
