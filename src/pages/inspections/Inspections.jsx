import React from "react";
import { InsHero, InsSecond, InsThird, WorkerHat } from "../../assets/assets";
import InfoSection from "../../components/info-section/InfoSection";
import TextSection from "../../components/text/TextSection";
import ButtonCard from "../../components/card/ButtonCard";
import CardIconTopLeft from "../../components/card-icon-top-left/CardIconTopLeft";

const Inspections = () => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Hero Component */}
            <div className="mt-4 sm:mt-6 px-3 sm:px-4">
                <ButtonCard
                    image={InsHero}
                    title="Earthwork Inspections & Testing Services"
                    description="When it comes to building foundations that last, quality earthwork is essential. Our comprehensive earthwork inspection and testing services ensure that every step of the process is handled with precision and in compliance with industry standards. From evaluating fill material to ensuring optimal compaction levels, our team provides datadriven insights to support strong, stable, and durable constructions. Here’s how our Earthwork Inspections & Testing services can support your project."
                    buttonText="Get in Touch"
                />
            </div>

            {/* Info Component */}
            <div className="mt-8 sm:mt-40 md:mt-[100px] mb-8 sm:mb-40 md:mb-[100px] md:px-[5%]">
                <InfoSection
                    title="Fill Material Assessment"
                    description={
                        <>
                            Our fill assessment services include thorough visual
                            inspections, sampling, and advanced testing of
                            proposed fill materials. We examine the suitability
                            and compliance of fill materials for your project's
                            specific earthwork requirements, assessing
                            engineering properties like particle size
                            distribution, Atterberg limits, compaction, and
                            California Bearing Ratio (CBR) values.
                            <br />
                            <br />
                            Each test is conducted in line with{" "}
                            <span className="text-gray-700 font-500">
                                AS 1289 material testing methods,
                            </span>{" "}
                            while overall material suitability is determined
                            based on{" "}
                            <span className="text-gray-700 font-500">
                                AS 3798 Guidelines on Earthworks for Commercial
                                and Residential Developments
                            </span>{" "}
                            or any project-specific requirements. We ensure that
                            only compliant and high-quality fill materials are
                            used, minimizing risks and enhancing the long-term
                            stability of your construction.
                        </>
                    }
                    buttonText="Contact Us for Fill Material Assessments"
                    buttonLink=""
                    imageSrc={InsSecond}
                    reverse={true}
                />
            </div>

            {/* Cards Component */}
            <div className="w-[90%] h-auto py-10 mb-[50px]">
                <div className="flex flex-col items-start w-full">
                    <h1 className="w-[80%] mb-4 font-inter text-28 sm:text-[36px] md:text-40 lg:text-48 font-600">
                        Level 1 Inspection & Testing
                    </h1>
                    <p className="font-inter font-400 text-14 mt-2 mb-4 md:text-18 text-gray-600">
                        Our{" "}
                        <span className="text-gray-900">
                            Level 1 inspection and testing
                        </span>
                        service provides full-time, onsite supervision by
                        experienced personnel during all earthwork operations,
                        in accordance with AS 3798 standards. This high-level
                        supervision service includes comprehensive monitoring of
                        each step in the earthwork process, ensuring strict
                        compliance with project specifications and industry
                        guidelines.
                    </p>
                </div>
                <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row mt-8">
                    <CardIconTopLeft
                        iconUrl={WorkerHat}
                        iconBackground="bg-white"
                        background="bg-blue-25"
                        stroke={true}
                        titleText="Topsoil Removal"
                        bodyText="Thorough inspection of topsoil removal to ensure a stable base for fill placement."
                        titleColor="text-gray-900"
                        bodyColor="text-gray-900"
                        padding={true}
                        backgroundHover={false}
                    />
                    <CardIconTopLeft
                        iconUrl={WorkerHat}
                        iconBackground="bg-white"
                        background="bg-blue-25"
                        stroke={true}
                        titleText="Fill Placement"
                        bodyText="Full supervision of imported or onsite fill material placement for accuracy and consistency."
                        titleColor="text-gray-900"
                        bodyColor="text-gray-900"
                        padding={true}
                        backgroundHover={false}
                    />
                    <CardIconTopLeft
                        iconUrl={WorkerHat}
                        iconBackground="bg-white"
                        background="bg-blue-25"
                        stroke={true}
                        titleText="Compaction & Moisture Adjustment"
                        bodyText="Monitoring of compaction and moisture adjustments to achieve optimal density and stability."
                        titleColor="text-gray-900"
                        bodyColor="text-gray-900"
                        padding={true}
                        backgroundHover={false}
                    />
                    <CardIconTopLeft
                        iconUrl={WorkerHat}
                        iconBackground="bg-white"
                        background="bg-blue-25"
                        stroke={true}
                        titleText="Trenching & Backfilling"
                        bodyText="Ensuring trenches are filled and compacted efectively (when applicable)."
                        titleColor="text-gray-900"
                        bodyColor="text-gray-900"
                        padding={true}
                        backgroundHover={false}
                    />
                    <CardIconTopLeft
                        iconUrl={WorkerHat}
                        iconBackground="bg-white"
                        background="bg-blue-25"
                        stroke={true}
                        titleText="Test Rolling"
                        bodyText="Comprehensive test rolling to evaluate surface stability."
                        titleColor="text-gray-900"
                        bodyColor="text-gray-900"
                        padding={true}
                        backgroundHover={false}
                    />
                    <CardIconTopLeft
                        iconUrl={WorkerHat}
                        iconBackground="bg-white"
                        background="bg-blue-25"
                        stroke={true}
                        titleText="Density Testing"
                        bodyText="Field density measurements using the Nuclear Gauge Method (AS 1289.5.8.1) compared to lab density values to verify compaction levels."
                        titleColor="text-gray-900"
                        bodyColor="text-gray-900"
                        padding={true}
                        backgroundHover={false}
                    />
                </div>
                <div className="w-full">
                    <p className="font-inter font-400 text-14 mb-4 md:text-18 text-gray-600 mt-8">
                        Once earthworks are completed, we provide a detailed
                        report with test results, inspection summaries, and a
                        formal statement of compliance to ensure that the fill
                        meets all specifications.
                    </p>
                </div>
                <div>
                    <p className="font-inter font-600 text-14 mt-8 mb-4 md:text-18 lg:text-24 text-blue-600">
                        Discover the Benefits of Level 1 Supervision →
                    </p>
                </div>
            </div>

            {/* Info Component */}
            <div className="mt-8 sm:mt-40 md:mt-[100px] mb-8 sm:mb-40 md:mb-[100px] md:px-[5%]">
                <InfoSection
                    title="Level 2 Testing Services"
                    description={
                        <>
                            Our{" "}
                            <span className="text-gray-700 font-500">
                                Level 2 Testing
                            </span>{" "}
                            service offers targeted testing of compacted fill as
                            requested by your site superintendent, following{" "}
                            <span className="text-gray-700 font-500">
                                AS 3798 standards. This service includes density
                                ratio testing using the Nuclear Gauge Method (AS
                                1289.5.8.1)
                            </span>{" "}
                            and is designed to verify compaction accuracy and
                            provide essential data for site reviews.
                            <br />
                            <br /> Unlike Level 1 Inspection, Level 2 Testing
                            does not include full-time supervision or a formal
                            compliance statement. However, it does offer
                            reliable and timely compaction testing results to
                            help guide your onsite quality control decisions.
                            Density ratios are measured according to{" "}
                            <span className="text-gray-700 font-500">
                                AS 1289.5.4.1 or 1289.5.7.1
                            </span>{" "}
                            methods, ensuring that the fill meets the required
                            density specifications for strength and stability.
                        </>
                    }
                    buttonText="Learn More About Level 2 Testing Options"
                    buttonLink=""
                    imageSrc={InsThird}
                    reverse={false}
                />
            </div>

            {/* Blue Component */}
            <div className="mb-8 px-4 sm:px-8 sm:mb-40 md:mb-58">
                <TextSection
                    title="Why Choose Us for Earthwork Testing?"
                    description="With industry-leading expertise and rigorous adherence to Australian Standards, our Earthwork Inspection and Testing services provide the precision and oversight needed for secure and durable projects. Whether you need comprehensive supervision, detailed testing, or reliable material assessments, we are here to help you build with confidence."
                    buttonText="Get in Touch to Ensure Quality Earthwork"
                    buttonLink="#"
                />
            </div>
        </div>
    );
};

export default Inspections;
