import React from "react";
import { InsHero, InsSecond, InsThird } from "../../assets/assets";

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
                    title="Comprehensive Service Coverage"
                    description="Operating across Melbourne and throughout Victoria, we are equipped to handle a variety of challenging project requirements. Whether you're working with tight or difficult access sites, or need low-head clearance machinery, our specialized team and advanced equipment ensure the job is done efficiently and accurately."
                    buttonText=""
                    buttonLink=""
                    imageSrc={InsSecond}
                    reverse={false}
                />
            </div>

            {/* Cards Component */}
            <div></div>

            {/* Info Component */}
            <div className="mt-8 sm:mt-40 md:mt-[100px] mb-8 sm:mb-40 md:mb-[100px] md:px-[5%]">
                <InfoSection
                    title="Comprehensive Service Coverage"
                    description="Operating across Melbourne and throughout Victoria, we are equipped to handle a variety of challenging project requirements. Whether you're working with tight or difficult access sites, or need low-head clearance machinery, our specialized team and advanced equipment ensure the job is done efficiently and accurately."
                    buttonText=""
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
