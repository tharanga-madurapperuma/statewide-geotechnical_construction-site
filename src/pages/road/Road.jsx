import React from "react";
import CardIconTopLeft from "../../components/card-icon-top-left/CardIconTopLeft";
import ButtonCard from "../../components/card/ButtonCard";
import TextSection from "../../components/text/TextSection";
import {
    Arrowup,
    WorkerHat,
    RoadHero,
    Road1,
    Road2,
    RoadIcon,
} from "../../assets/assets";
import { Link } from "react-router-dom";

const Road = () => {
    return (
        <div className="w-full flex flex-col items-center bg-slate-background md:mt-[108px]">
            {/* First Section */}
            <div>
                <ButtonCard
                    image={RoadHero}
                    title="Road Pavement Design"
                    description="At Statewide Geotechnical (Aust) Pty Ltd, we provide tailored road pavement design solutions that ensure durability, cost-efficiency, and compliance with regulatory standards. With extensive experience in geotechnical engineering, we design pavements to withstand traffic loads, local environmental conditions, and long-term wear, delivering solutions for residential streets, highways, commercial areas, and infrastructure projects."
                    buttonText="Request a Consultation"
                />
            </div>
            <div className="px-[30px] md:px-[110px] sm:px-[20px]">
                {/* Second Section */}
                <div className="soil__second-section py-[128px] w-full h-auto">
                    <div className="flex flex-col items-left justify-left w-full h-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[35px] w-full">
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardIconTopLeft
                                    iconUrl={RoadIcon}
                                    iconBackground="bg-white-100"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Pavement Type Selection and Design"
                                    bodyText="We evaluate site-specific conditions, traffic volume, and load requirements to determine the most suitable pavement type-whether flexible, rigid, or composite. Our design process includes selecting materials and layer thicknesses that provide the best balance of strength, durability, and cost-effectiveness."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1 h-[450px]">
                                <img
                                    src={Road1}
                                    alt="Engineers"
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={RoadIcon}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Geotechnical Site Investigations"
                                    bodyText="Thorough site investigation is critical to successful pavement design. We conduct geotechnical surveys, soil sampling, and in-situ testing to assess soil properties, subgrade stability, and drainage conditions. This data forms the foundation of our design approach, ensuring each pavement structure is customized to the unique characteristics of the site."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={RoadIcon}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Drainage and Erosion Control"
                                    bodyText="Proper drainage design is key to preventing pavement degradation and extending its lifespan. We integrate effective drainage solutions into our pavement designs to manage surface water, reduce erosion risks, and maintain the structural integrity of the pavement over the long term."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <img
                                    src={Road2}
                                    alt="Roller"
                                    className="w-full object-cover rounded-3xl"
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={RoadIcon}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Material Selection and Layer Design"
                                    bodyText="We carefully select high-quality materials for each pavement layer, including the base, subbase, and surface layers. By considering factors like climate, loadbearing requirements, and project budget, we design layered pavement structures that deliver the best performance over time."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={RoadIcon}
                                    iconBackground="bg-white-100"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Subgrade Analysis and Improvement"
                                    bodyText="Subgrade stability is essential for pavement performance. Our team evaluates subgrade strength and recommends stabilization or improvement methods where needed. By optimizing the subgrade’s load-bearing capacity, we enhance the pavement’s durability and reduce future maintenance requirements."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={RoadIcon}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Traffic Load Analysis and Design Life Assessment"
                                    bodyText="Using traffic load modeling and design life projections, we ensure that each pavement is engineered to withstand current and future traffic demands. Our designs consider anticipated vehicle loads, environmental factors, and maintenance cycles, resulting in pavements that are both resilient and sustainable."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={RoadIcon}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Pavement Rehabilitation and Strengthening"
                                    bodyText="For existing roads, we provide assessment and rehabilitation solutions to extend pavement life and enhance performance. Our team conducts condition assessments and recommends resurfacing, strengthening, or reconstruction as necessary to restore pavement integrity and reduce lifecycle costs."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>
                        </div>
                        <div className="ms:mt-20">
                            <h2 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left pt-22">
                                Our Road Pavement Design Services
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                                Effective pavement design requires a deep
                                understanding of soil mechanics, material
                                properties, and structural requirements. Our
                                team utilizes advanced analysis and
                                industry-standard methods to develop pavement
                                designs that offer optimal performance and
                                longevity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className="mb-8 -mt-[64px] px-8 sm:px-[70px] md:px-[80px] lg:px-[100px] xl:px-[110px] sm:mb-40 md:mb-58 w-full bg-[#EBF7FF] md:py-6">
                <TextSection
                    title="Why Choose Statewide Geotechnical for Road Pavement Design?"
                    description="Statewide Geotechnical combines geotechnical expertise with industry-leading analysis to deliver road pavement designs that maximize durability, safety, and cost-efficiency. Our approach is grounded in thorough site assessment, precise material selection, and a commitment to regulatory compliance, ensuring each project meets or exceeds industry standards."
                />
            </div>

            <div className="px-[30px] md:px-[110px] sm:px-[20px]">
                {/* Fourth Section */}
                <div className="flex w-full -mt-[64px] h-auto bg-white-100 py-21">
                    <div className="flex flex-col items-left justify-left w-full h-auto">
                        <h2 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left">
                            Statewide Geotechnical (Aust) Pty Ltd – Your Partner
                            for Resilient Road Infrastructure
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                            From local access roads to high-capacity highways,
                            trust Statewide Geotechnical to provide road
                            pavement design solutions that stand the test of
                            time. With our experience and dedication to quality,
                            we deliver safe, sustainable, and high-performance
                            pavements for all types of infrastructure projects.
                        </p>

                        <div className="text-left text-[15px] font-medium mt-4 text-blue-600 -pb-15 ">
                            <a href="#" className="flex items-center">
                                <Link to="/contact">
                                    <span className="mr-1 text-[18px]">
                                        Get a Consultation
                                    </span>
                                </Link>
                                <img
                                    className=" pl-1 flex w-4 h-4 pl-1"
                                    src={Arrowup}
                                    alt="Arrow up"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Road;
