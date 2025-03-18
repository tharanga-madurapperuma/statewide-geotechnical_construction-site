import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import TextSection from "../components/text/TextSection";
import InfoSection from "../components/info-section/InfoSection";
import CardIconTextCenter from "../components/card-icon-text-center/CardIconTextCenter";
import {
    AboutHero,
    AboutUsProfessionalIndemnity,
    AboutUsPublicLiability,
    AboutUsVehicleFleet,
    AboutUsWorkCover,
} from "../assets/assets";

const AboutUs = () => {
    return (
        <div className="md:mt-[108px] mt-[60px] sm:mt-[70px]">
            <HeroSection
                title={"About Statewide Geotechnical"}
                description={
                    "Providing precise geotechnical solutions, Statewide Geotechnical blends extensive expertise with advanced technology to support Victoria and Australia’s infrastructure, energy, and environmental projects-safely, sustainably, and affordably."
                }
                buttonLink={"#"}
                buttonText="Get in Touch"
            />
            <div className="max-w-[1920px] px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px] ">
                <div className="pb-[50px] sm:pb-[100px] md:pb-40 xl:pb-[64px] pt-[70px] md:pt-[100px] sm:pt-[100px] xl:pt-[128px] w-full">
                    <h2 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-[56px]">
                        About Us
                    </h2>
                    <p className="text-gray-600 font-inter font-400 text-12 sm:text-14 md:text-16 xl:text-18">
                        Statewide Geotechnical Pty Ltd is a Melbourne-based
                        company founded in 1980s by David Alkemade as Statewide
                        Geotechnical Services. In 1995, Statewide Geotechnical
                        Services was transformed into Statewide Geotechnical
                        (Aust) Pty Ltd and our soils laboratory was formed in
                        our Ringwood Premises as Statewide Laboratories Pty Ltd.
                        In 2025.
                        <br />
                        <br /> Our approach is simple: keep it affordable, keep
                        it precise, and always deliver excellent results. <br />
                        <br />
                        With a team of experienced professionals and a
                        commitment to ongoing training and upgrading of our
                        equipment, we provide comprehensive geotechnical
                        services to clients in mining, geotechnical, and
                        environmental industries across Victoria and Australia.
                        <br />
                        <br /> Our team brings extensive expertise to the table, offering innovative geotechnical consulting, testing, and design for infrastructure, energy, environmental, water, and resource management projects. We deliver tailored consulting and construction services for both public and private organizations, including construction companies, civil engineering firms, and solar developers.
                        <br />
                        <br /> We pride ourselves on our fleet of
                        industry-recognized rigs from top manufacturers like
                        Comacchio, Geoprobe, Mobile, and EVH. We also use
                        custom-built, tight-access rigs for more challenging
                        sites.
                        <br />
                        <br />
                        Safety and sustainability are at the heart of everything
                        we do. For every project, we develop site-specific
                        Safety Management Plans to ensure we meet the highest
                        standards in safety and environmental responsibility.
                    </p>
                </div>

                <p className="font-inter font-500 text-16 sm:text-[20px] md:text-24 lg:text-28 xl:text-32 text-gray-900 mb-[56px]">
                    Statewide Drilling maintain comprehensive insurance cover
                    including:
                </p>
                <div className="grid grid-cols-12 grid-rows-1 gap-6 pb-[50px] sm:pb-[100px] md:pb-40 xl:pb-[64px]">
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <CardIconTextCenter
                            iconUrl={AboutUsPublicLiability}
                            titleText="Public Liability $20m"
                            bodyTextPresent={false}
                            bodyText=""
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3 col-start-1 sm:col-start-7 md:col-start-4">
                        <CardIconTextCenter
                            iconUrl={AboutUsProfessionalIndemnity}
                            titleText="Professional Indemnity $10m"
                            bodyTextPresent={false}
                            bodyText=""
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3 col-start-1 sm:col-start-7 md:col-start-7">
                        <CardIconTextCenter
                            iconUrl={AboutUsVehicleFleet}
                            titleText="Vehicle Fleet"
                            bodyTextPresent={false}
                            bodyText=""
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3 col-start-1 sm:col-start-7 md:col-start-10">
                        <CardIconTextCenter
                            iconUrl={AboutUsWorkCover}
                            titleText="Work Cover"
                            bodyTextPresent={false}
                            bodyText=""
                        />
                    </div>
                </div>

                {/* Footer */}
                {/* <div className="text-gray-600 mt-[56px] mb-[96px] ">
                    <p>
                        Choose Statewide Geotechnical (Aust) Pty Ltd for your
                        next project, and experience the benefits of seamless,
                        reliable, and cost-effective geotechnical services.
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default AboutUs;
