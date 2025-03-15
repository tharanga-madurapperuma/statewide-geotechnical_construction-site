import React from "react";
import ButtonCard from "../components/card/ButtonCard";
import CardIconTextCenter from "../components/card-icon-text-center/CardIconTextCenter";

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
    </div>
  );
};

export default Site;
