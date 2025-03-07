import React from "react";
import { InsHero, InsSecond, InsThird } from "../../assets/assets";
import InfoSection from "../../components/info-section/InfoSection";
import TextSection from "../../components/text/TextSection";
import ButtonCard from "../../components/card/ButtonCard";

const Inspections = () => {
    return (
        <div className="w-full">
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
                    description="Our fill assessment services include thorough visual inspections, sampling, and advanced testing of proposed fill materials. We examine the suitability and compliance of fill materials for your project’s specific earthwork requirements, assessing engineering properties like particle size distribution, Atterberg limits, compaction, and California Bearing Ratio (CBR) values.<br> Each test is conducted in line with AS 1289 material testing methods, while overall material suitability is determined based on AS 3798 Guidelines on Earthworks for Commercial and Residential Developments or any project-specific requirements. We ensure that only compliant and high-quality fill materials are used, minimizing risks and enhancing the long-term stability of your construction."
                    buttonText="Contact Us for Fill Material Assessments"
                    buttonLink=""
                    imageSrc={InsSecond}
                    reverse={true}
                />
            </div>

            {/* Cards Component */}
            <div></div>

            {/* Info Component */}
            <div className="mt-8 sm:mt-40 md:mt-[100px] mb-8 sm:mb-40 md:mb-[100px] md:px-[5%]">
                <InfoSection
                    title="Level 2 Testing Services"
                    description="Our Level 2 Testing service offers targeted testing of compacted fill as requested by your site superintendent, following AS 3798 standards. This service includes density ratio testing using the Nuclear Gauge Method (AS 1289.5.8.1) and is designed to verify compaction accuracy and provide essential data for site reviews.<br>

Unlike Level 1 Inspection, Level 2 Testing does not include full-time supervision or a formal compliance statement. However, it does offer reliable and timely compaction testing results to help guide your onsite quality control decisions. Density ratios are measured according to AS 1289.5.4.1 or 1289.5.7.1 methods, ensuring that the fill meets the required density specifications for strength and stability."
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
