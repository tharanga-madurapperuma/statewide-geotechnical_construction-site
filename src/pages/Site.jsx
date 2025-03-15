import React from "react";
import ButtonCard from "../components/card/ButtonCard";
import CardIconTextCenter from "../components/card-icon-text-center/CardIconTextCenter";
import InfoSection from "../components/info-section/InfoSection";
import LicenseCard from "../components/card-icon-license/CardIconLicense";

import {
  InvestigationHero,
  Arm,
  Bell,
  DrillingBit,
  Hammer,
  SmallDosar,
  TopDrill,
  Well,
  Dosar,
  DCPTesting,
  DiamondCoring,
  SPTTesting,
  UndisturbedSampling,
  GroundwaterMonitoringBores,
  PermeabilityTesting,
  PressureMeterTesting,
  EnvSecond,
  Certificate,
  Card,
  Box,
} from "../assets/assets";

const Site = () => {
  return (
    <div className="flex flex-col w-full items-center bg-slate-background md:mt-[108px]">
      <div>
        <ButtonCard
          image={InvestigationHero}
          title="Site Investigations"
          description="At Statewide Geotechnical (Aust) Pty Ltd, we deliver comprehensive site investigation services that provide a thorough understanding of ground conditions, enabling safe and efficient project planning. From initial drilling to detailed reporting, our in-house team handles every step, ensuring unmatched consistency, quality, and reliability. Our all-in-one approach streamlines the investigation process and delivers high-quality insights to support your project’s success."
          buttonText="Get in Touch"
          imagePosition="right"
          className="mb-8"
        />
      </div>

      <div className="w-full bg-white py-40 md:py-[64px] max-w-[1920px] px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px]">
        <h1 className="font-inter font-600 text-28 md:text-40 lg:text-48 w-[80%] ">
          Our Comprehensive Drilling Services
        </h1>

        <div className="w-full grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 md:mt-6 lg:mt-8">
          <CardIconTextCenter
            iconUrl={DiamondCoring}
            titleText="Wash Bore & Diamond Coring"
            bodyTextPresent={true}
            bodyText=""
          />
          <CardIconTextCenter
            iconUrl={SPTTesting}
            titleText="Standard Penetration Testing"
            bodyTextPresent={false}
            bodyText="(Using a hydraulic auto hammer)"
          />
          <CardIconTextCenter
            iconUrl={UndisturbedSampling}
            titleText="Soil Sampling"
            bodyTextPresent={true}
            bodyText="(Undisturbed tube, Disturbed bag)"
          />
          <CardIconTextCenter
            iconUrl={GroundwaterMonitoringBores}
            titleText="Groundwater Monitoring Bores"
            bodyTextPresent={true}
            bodyText="for hydrogeological studies"
          />
          <CardIconTextCenter
            iconUrl={PermeabilityTesting}
            titleText="Permeability Testing"
            bodyTextPresent={true}
            bodyText="(Falling and constant head)"
          />
          <CardIconTextCenter
            iconUrl={PressureMeterTesting}
            titleText="Lightweight Deflectometer Testing"
            bodyTextPresent={true}
            bodyText=""
          />
          <CardIconTextCenter
            iconUrl={DCPTesting}
            titleText="Dynamic cone Penetrometer Testing"
            bodyTextPresent={false}
            bodyText="For on-site soil strength assessments"
          />
          <CardIconTextCenter
            iconUrl={GroundwaterMonitoringBores}
            titleText="Footing Exposures"
            bodyTextPresent={true}
            bodyText=""
          />
          <CardIconTextCenter
            iconUrl={PermeabilityTesting}
            titleText="Electrical & Thermal Resistivity Testing"
            bodyTextPresent={true}
            bodyText=""
          />
          <CardIconTextCenter
            iconUrl={PressureMeterTesting}
            titleText="Lightweight Deflectometer Testing"
            bodyTextPresent={true}
            bodyText=""
          />
          <CardIconTextCenter
            iconUrl={DCPTesting}
            titleText="Test Pits"
            bodyTextPresent={true}
            bodyText=""
          />
        </div>
      </div>

      {/* Left pic paragraph component */}
      <div className=" mt-8 sm:mt-40 md:mt-[100px] lg:mt-[128px] mb-8 sm:mb-40 md:mb-[100px] lg:mb-[64px] px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px]">
        <InfoSection
          title="Expert Drilling Equipment for Challenging Sites"
          description={
            <>
              We operate{" "}
              <span className="text-gray-700 font-500">
                Geoprobe, Comacchio,
              </span>{" "}
              and <span className="text-gray-700 font-500">Custom rigs,</span>{" "}
              designed for small footprint and low headroom applications—ideal
              for tight access and di(icult-to-reach) areas. Our drilling rigs
              are equipped with{" "}
              <span className="text-gray-700 font-500">
                industry-standard safety cages and emergency shut-off systems
              </span>{" "}
              to ensure maximum safety at all times.
            </>
          }
          buttonText=""
          buttonLink=""
          imageSrc={EnvSecond}
          reverse={false}
        />
      </div>

      <div className=" bg-white w-full max-w-[1920px] h-auto py-[64px] px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px]">
        <div className="flex flex-col items-start w-full">
          <h1 className="w-[80%] mb-4 font-inter text-28 sm:text-40 md:text-40 lg:text-48 font-600">
            Qualified & Experienced Drillers
          </h1>
          <p className="font-inter font-400 text-14 mt-2 mb-4 md:text-18 lg:text-24">
            Our team of highly qualified and experienced drillers hold
            certifications and competencies in key areas, including:
          </p>
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-col sm:flex-row justify-center">
          <LicenseCard
            image={Certificate}
            title="Water Bore Licenses (Class 1 & 2)"
          />
          <LicenseCard image={Card} title="Building Industry White Cards" />
          <LicenseCard image={Box} title="First Aid Certification" />
        </div>
      </div>
    </div>
  );
};

export default Site;
