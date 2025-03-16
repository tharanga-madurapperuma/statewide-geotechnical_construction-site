import React from "react";
import ButtonCard from "../../components/card/ButtonCard";
import CardIconTextCenter from "../../components/card-icon-text-center/CardIconTextCenter";
import InfoSection from "../../components/info-section/InfoSection";
import LicenseCard from "../../components/card-icon-license/CardIconLicense";
import CardIconTextCenterColored from "../../components/card-icon-text-center/CardIconTextCenterColored";
import TextSection from "../../components/text/TextSection";

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
  Map,
  TwoMen,
  FlaskWhite,
    ManWhite,
    Lightweight,
    Exposures,
    Test,
    Pavement,
    Thermal
} from "../../assets/assets";

const Site = () => {
  return (
    <div className="flex flex-col w-full items-center bg-slate-background md:mt-[108px]">
      <div>
        <ButtonCard
          image={InvestigationHero}
          title="Site Investigations"
          description="We boast a multi-disciplinary team of geologists, engineers, drillers, and field technicians, and an impressive fleet of state-of-the-art drill rigs. Together with our accreditations and in-house experience, we have the resources and capabilities to take on a variety of ground investigation projects, from simple residential investigations to major development projects."
          buttonText="Get in Touch"
          imagePosition="right"
          className="mb-8"
        />
      </div>

      <div className="w-full bg-white py-40 md:py-[64px] max-w-[1920px] px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px]">
        <h1 className="font-inter font-600 text-28 md:text-40 lg:text-48 w-[80%] ">
          Our Field Services Include:
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
            bodyText="(Using a hydraulic auto hammer)" //not showing this text in the card
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
            iconUrl={Lightweight}
            titleText="Lightweight Deflectometer Testing"
            bodyTextPresent={true}
            bodyText=""
          />
          <CardIconTextCenter
            iconUrl={DCPTesting}
            titleText="Dynamic cone Penetrometer Testing"
            bodyTextPresent={false}
            bodyText="For on-site soil strength assessments" //not showing the text in the card
          />
          <CardIconTextCenter
            iconUrl={Exposures}
            titleText="Footing Exposures"
            bodyTextPresent={true}
            bodyText=""
          />
          <CardIconTextCenter
            iconUrl={Thermal}
            titleText="Electrical & Thermal Resistivity Testing"
            bodyTextPresent={true}
            bodyText=""
          />
          <CardIconTextCenter
            iconUrl={Pavement}
            titleText="Pavement Exploration"
            bodyTextPresent={true}
            bodyText=""
          />
          <CardIconTextCenter
            iconUrl={Test}
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
          description="We operate Geoprobe, Comacchio, Hanjin, tight access rigs, designed for small footprint and low headroom applications—ideal for tight access and di(icult-to-reach areas. Our drilling rigs are equipped with industry-standard safety cages and emergency shut-off systems to ensure maximum safety at all times."
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

      {/* Map  */}
      <div className="w-full pt-[50px] md:pt-[64px] pb-[70vw] sm:pb-[55vw] lg:pb-[50vw] 2xl:pb-[45vw] flex flex-col max-w-[1920px] px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px]">
        <h1 className="font-inter font-600 text-24 sm:text-28 md:text-32 lg:text-40 xl:text-48">
          Service Area
        </h1>
        <div className="w-full flex mt-8 relative pb-[64px]">
          <div className=" w-[60%] sm:w-[40%] md:w-[50%] lg:w-[40%] bg-blue-600 p-4 sm:p-6 lg:p-8 rounded-xl absolute right-[5%] top-0 z-20">
            <p className="font-inter font-500 text-12 sm:text-16 md:text-24 lg:text-24 xl:text-32 text-white ">
              We proudly serve the Melbourne metropolitan area, as well as
              regions across Victoria and Southern New South Wales.
            </p>
          </div>
          <img
            className="w-[80%] absolute top-[70px] left-[5%] sm:w-[80%] md:w-[80%] lg:w-[70%] max-w-[800px] z-10"
            src={Map}
          />
        </div>
      </div>

      <div className="w-full lg:w-full bg-white flex flex-col items-center">
        <div className="w-full flex flex-col items-center bg-slate-50">
          <div className="w-full bg-slate-50 py-[64px] px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px] max-w-[1920px]">
            <h1 className="font-inter font-600 text-28 md:text-40 lg:text-48 w-full sm:w-[80%] ">
              Our Comprehensive Geotechnical Services
            </h1>
            <h4 className="w-[80%] font-inter font-500 text-18 md:text-28 lg:text-32 mt-[64px]">
              Complete Geotechnical Investigations
            </h4>
            <p className="w-[90%] font-inter font-400 text-14 mt-2 md:text-18 lg:text-24">
              For complete geotechnical investigations, we offer end-to-end
              solutions, including:
            </p>
            <div className="w-full grid grid-cols-1 gap-[24px] mt-4 sm:grid-cols-2 md:grid-cols-3 md:mt-6 lg:mt-8">
              <CardIconTextCenterColored
                iconUrl={TwoMen}
                titleText="Site Investigations"
                bodyTextPresent={true}
                bodyText="Our experts ensure precise geotechnical analysis, advanced drilling, and reliable site assessments for safe construction."
              />
              <CardIconTextCenterColored
                iconUrl={FlaskWhite}
                titleText="Laboratory Testing"
                bodyTextPresent={true}
                bodyText="Our in-house lab conducts a wide range of soil and rock tests, accredited by NATA."
              />
              <div className="sm:col-span-2 sm:px-[20%] md:col-span-1 md:px-0">
                <CardIconTextCenterColored
                  iconUrl={ManWhite}
                  titleText="Engineering Assessments"
                  bodyTextPresent={true}
                  bodyText="Our expert engineers analyse geotechnical
conditions and provide detailed recommendations."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blue text */}
      <div className="w-full flex flex-col items-center bg-[#EBF7FF] mb-[64px]">
        <div className="w-full bg-[#EBF7FF] py-6 md:py-[64px]  px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px] max-w-[1920px]">
          <TextSection
            title="Why Choose Statewide Geotechnical?"
            description="Operating across Melbourne and throughout Victoria, we are equipped to handle a variety of challenging project requirements. Whether you're working with tight or difficult access sites, or need low-head clearance machinery, our specialised team and advanced equipment ensure the job is done efficiently and accurately."
            buttonText="Get in Touch Today for Expert Geotechnical Services"
            buttonLink="/contact/#contactForm"
          />
        </div>
      </div>
    </div>
  );
};

export default Site;

// We operate Geoprobe, Comacchio, Hanjin, tight access rigs, designed for small footprint and low headroom applications—ideal for tight access and di(icult-to-reach areas. Our drilling rigs are equipped with industry-standard safety cages and emergency shut-off systems to ensure maximum safety at all times.
