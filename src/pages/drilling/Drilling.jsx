import React from "react";
import CardIconTextCenter from "../../components/card-icon-text-center/CardIconTextCenter";
import {
    DocWhite,
    DrillingBit,
    FlaskWhite,
    Gas,
    Hand,
    DrillingSecond,
    Hero,
    ManWhite,
    TopDrill,
    WallDrill,
    Weight,
    WellAttaches,
    WellWall,
} from "../../assets/assets";
import CardIconTextCenterColored from "../../components/card-icon-text-center/CardIconTextCenterColored";
import ButtonCard from "../../components/card/ButtonCard";
import InfoSection from "../../components/info-section/InfoSection";
import TextSection from "../../components/text/TextSection";

const Drilling = () => {
    return (
        <div className="w-full flex flex-col items-center bg-slate-background">
            {/* Hero Hashan Component */}

            {/* Sevindu Component */}
            <div className="mt-4 sm:mt-6 px-3 sm:px-0">
                <ButtonCard
                    image={Hero}
                    title="Expert Geotechnical Drilling, Testing, and Consulting Services"
                    description="Statewide Geotechnical provides a full range of geotechnical services, including drilling, sampling, down-hole testing, and monitoring bore installation. We serve a wide variety of clients, including engineers, architects, government agencies, and developers, offering customized solutions for every project."
                    buttonText="Request a Consultation"
                />
            </div>
            {/* Sevindu Component */}
            <div className="mt-8 sm:mt-40 md:mt-[100px] mb-8 sm:mb-40 md:mb-[100px] md:px-[110px]">
                <InfoSection
                    title="Comprehensive Service Coverage"
                    description="Operating across Melbourne and throughout Victoria, we are equipped to handle a variety of challenging project requirements. Whether you're working with tight or difficult access sites, or need low-head clearance machinery, our specialized team and advanced equipment ensure the job is done efficiently and accurately."
                    buttonText=""
                    buttonLink=""
                    imageSrc={DrillingSecond}
                    reverse={false}
                />
            </div>

            {/* ANIMATION PART */}
            <div className="w-[90%] lg:w-full h-auto md:h-[300px] lg:h-[350px] xl:h-[350px] py-10 mb-[50px] lg:px-[110px]">
                <div className="flex items-start w-1\2">
                    <h1 className="w-[80%] mb-4 font-inter text-28 sm:text-40 md:text-40 lg:text-48 font-600">
                        Our Specialized Geotechnical Solutions Include:
                    </h1>
                </div>
                <div className="w-full h-full flex flex-col md:flex-row relative overflow-x-hidden rounded-3xl">
                    {/* 3 ANIMATED CARDS */}
                    <div className="drilling__animated-cards-1 w-full md:w-[50%] h-full p-8 bg-blue-800 rounded-3xl text-white z-10 mb-2 md:absolute md:top-0 md:left-0 transition duration-700">
                        <h1 className="font-inter font-700 text-28 sm:text-28 md:text-28">
                            #1
                        </h1>
                        <h2 className="md:w-[80%] font-inter font-500 text-18 sm:text-24 lg:text-32 md:text-24 mt-4 sm:mt-3 xl:mt-[40px] lg:mt-5 md:mt-3">
                            Tight & DiDicult Access Sites
                        </h2>
                        <p className="md:w-[80%] font-inter font-400 text-12 sm:text-18 lg:text-16 mt-2 xl:mt-6 md:text-14 lg:mt-3">
                            We have the expertise and equipment to operate in
                            even the most restricted locations.
                        </p>
                    </div>
                    <div className="drilling__animated-cards-2 w-full md:w-[50%] h-full p-8 bg-blue-250 rounded-3xl text-gray-900 z-20 mb-2 md:absolute md:top-0 md:left-[30%] transition duration-700">
                        <h1 className="font-inter font-700 text-28 sm:text-28 md:text-28">
                            #2
                        </h1>
                        <h2 className="md:w-[80%] font-inter font-500 text-18 sm:text-24 lg:text-32 md:text-24 mt-4 sm:mt-3 xl:mt-[40px] lg:mt-5 md:mt-3">
                            Comprehensive Laboratory Testing
                        </h2>
                        <p className="md:w-[80%] font-inter font-400 text-12 sm:text-18 lg:text-16 mt-2 xl:mt-6 md:text-14 lg:mt-3">
                            Our NATA-accredited lab provides quality-controlled
                            testing to meet all industry standards.
                        </p>
                    </div>
                    <div className="drilling__animated-cards-3 w-full md:w-[50%] h-full p-8 bg-blue-100 rounded-3xl text-gray-900 z-30 mb-2 md:absolute md:top-0 md:left-[60%] transition duration-700">
                        <h1 className="font-inter font-700 text-28 sm:text-28 md:text-28">
                            #3
                        </h1>
                        <h2 className="md:w-[80%] font-inter font-500 text-18 sm:text-24 lg:text-32 md:text-24 mt-4 sm:mt-3 xl:mt-[40px] lg:mt-5 md:mt-3">
                            Geotechnical Engineering & Consultancy
                        </h2>
                        <p className="md:w-[80%] font-inter font-400 text-12 sm:text-18 lg:text-16 mt-2 xl:mt-6 md:text-14 lg:mt-3">
                            We offer expert advice and analysis to ensure your
                            project is supported by accurate geotechnical data.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="w-[90%] lg:w-full px-[110px] md:mt-[200px] mb-[100px]">
                <h1 className="font-inter font-600 text-28 md:text-40 lg:text-48 w-[80%] ">
                    Our Comprehensive Geotechnical Services
                </h1>
                <h4 className="font-inter font-500 text-18 mt-2 md:text-28 lg:text-32">
                    Drill-Only Services
                </h4>
                <p className="font-inter font-400 text-14 mt-2 md:text-18 lg:text-24">
                    For clients requiring 'drill only' services, we provide a
                    variety of drilling and testing techniques:
                </p>
                <div className="w-full grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 md:mt-6 lg:mt-8">
                    <CardIconTextCenter
                        iconUrl={DrillingBit}
                        titleText="Auger Drilling"
                        bodyTextPresent={true}
                        bodyText="(Solid & Hollow)"
                    />
                    <CardIconTextCenter
                        iconUrl={TopDrill}
                        titleText="Mud Rotary & Diamond Coring"
                        bodyTextPresent={false}
                        bodyText="(Solid & Hollow)"
                    />
                    <CardIconTextCenter
                        iconUrl={WellWall}
                        titleText="SPT Testing"
                        bodyTextPresent={true}
                        bodyText="(Using a hydraulic auto hammer)"
                    />
                    <CardIconTextCenter
                        iconUrl={Hand}
                        titleText="Undisturbed Sampling"
                        bodyTextPresent={true}
                        bodyText="(U-tube, Shelby, Continuous Push)"
                    />
                    <CardIconTextCenter
                        iconUrl={WallDrill}
                        titleText="Groundwater Monitoring Bores"
                        bodyTextPresent={true}
                        bodyText="for hydrological studies"
                    />
                    <CardIconTextCenter
                        iconUrl={WellAttaches}
                        titleText="Permeability Testing"
                        bodyTextPresent={true}
                        bodyText="(Falling and constant head)"
                    />
                    <CardIconTextCenter
                        iconUrl={Gas}
                        titleText="Pressure Meter Testing"
                        bodyTextPresent={false}
                        bodyText="(Solid & Hollow)"
                    />
                    <CardIconTextCenter
                        iconUrl={Weight}
                        titleText="DCP Testing & In-Situ CBR Evaluation"
                        bodyTextPresent={true}
                        bodyText="For on-site soil strength assessments"
                    />
                </div>
                <h4 className="w-[80%] font-inter font-500 text-18 mt-8 md:text-28 lg:text-32">
                    Complete Geotechnical Investigations
                </h4>
                <p className="w-[90%] font-inter font-400 text-14 mt-2 md:text-18 lg:text-24">
                    For complete geotechnical investigations, we o;er end-to-end
                    solutions, including:
                </p>
                <div className="w-full grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 md:mt-6 lg:mt-8">
                    <CardIconTextCenterColored
                        iconUrl={FlaskWhite}
                        titleText="Laboratory Testing"
                        bodyTextPresent={true}
                        bodyText="Our in-house lab conducts a wide range of soil and rock tests."
                    />
                    <CardIconTextCenterColored
                        iconUrl={ManWhite}
                        titleText="Engineering Assessments"
                        bodyTextPresent={false}
                        bodyText="Our expert engineers analyze geotechnical
conditions and provide detailed recommendations."
                    />
                    <CardIconTextCenterColored
                        iconUrl={DocWhite}
                        titleText="Comprehensive Reporting"
                        bodyTextPresent={true}
                        bodyText="We deliver complete reports with actionable insights to guide project decisions."
                    />
                </div>
            </div>

            {/* Blue text */}
            <div className="mb-8 px-4 sm:px-0 sm:mb-40 md:mb-58">
                <TextSection
                    title="Why Choose Statewide Geotechnical?"
                    description="Operating across Melbourne and throughout Victoria, we are equipped to handle a variety of challenging project requirements. Whether you're working with tight or difficult access sites, or need low-head clearance machinery, our specialized team and advanced equipment ensure the job is done efficiently and accurately."
                    buttonText="Get in Touch Today for Expert Geotechnical Services"
                    buttonLink="#"
                />
            </div>
        </div>
    );
};

export default Drilling;
