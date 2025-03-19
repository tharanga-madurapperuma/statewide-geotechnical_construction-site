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
            Statewide Geotechnical Pty Ltd is a Melbourne-based company
            established in the 1980s by David Alkemade under the name Statewide
            Geotechnical Services. In 1995, the company was rebranded as
            Statewide Geotechnical (Aust) Pty Ltd, and our soils laboratory was
            established at our Ringwood premises under the name Statewide
            Laboratories Pty Ltd.
            <br />
            <br /> Our approach is simple: deliver cost-effective, precise
            solutions, and consistently achieve outstanding results. <br />
            <br />
            With a team of experienced professionals and a commitment to
            continuous training and state-of-the-art equipment, we offer
            comprehensive geotechnical services to clients across the mining,
            geotechnical, and environmental industries throughout Victoria and
            Australia.
            <br />
            <br /> Our team boasts over 100 years of combined experience,
            providing innovative geotechnical consulting, testing, and design
            for infrastructure, energy, environmental, water, and resource
            management projects. We offer tailored consulting and construction
            services to both public and private sector clients, including
            construction companies, civil engineering firms, and solar
            developers.
            <br />
            <br /> We take pride in our fleet of industry-recognized rigs from
            leading manufacturers such as Comacchio, Geoprobe, Mobile, and EVH.
            Additionally, we utilize custom-built, tight-access rigs for
            projects in challenging locations.
            <br />
            <br />
            Safety and sustainability are central to everything we do. For every
            project, we develop site-specific Safety Management Plans to ensure
            we uphold the highest standards in both safety and environmental
            responsibility.
          </p>
        </div>

        <p className="font-inter font-500 text-16 sm:text-[20px] md:text-24 lg:text-28 xl:text-32 text-gray-900 mb-[56px]">
          Statewide Drilling maintain comprehensive insurance cover including:
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
