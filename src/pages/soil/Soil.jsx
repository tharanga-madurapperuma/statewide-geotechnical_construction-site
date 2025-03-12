import React from "react";
import CardIconTopLeft from "../../components/card-icon-top-left/CardIconTopLeft";
import ButtonCard from "../../components/card/ButtonCard";
import TextSection from "../../components/text/TextSection";
import {
    Arrowup,
    WorkerHat,
    SoilHero,
    SoilTesting,
    CardIconSoil,
    Tube,
    RockTesting,
} from "../../assets/assets";
import { Link } from "react-router-dom";

const Soil = () => {
    return (
        <div className="w-full flex flex-col items-center bg-slate-background">
            {/* First Section */}
            <div>
                <ButtonCard
                    image={SoilTesting}
                    title="Soil, Rock & Aggregate Testing for Quality & Stability"
                    description="Our laboratory offers comprehensive soil, rock, and aggregate testing to ensure material quality, durability, and safety in construction. Using advanced technology and expert analysis, we assess suitability for foundations, pavements, and geotechnical projects. Our industry-standard methods provide accurate data for informed decision-making."
                    buttonText="Get in Touch"
                />
            </div>
            <div className="px-[30px] md:px-[110px] sm:px-[20px]">
                {/* Second Section */}
                <div className="soil__second-section py-[128px] w-full h-auto">
                    <div className="flex flex-col items-left justify-left w-full h-auto">
                        <h2 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-[32px] text-4xl text-center md:text-left">
                            Aggregate Testing Services
                        </h2>
                        <p className="text-base mb-[45px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                            Our aggregate testing services are essential for
                            understanding material characteristics, ensuring
                            quality for use in concrete, asphalt, and
                            foundational applications. Properly tested
                            aggregates contribute to the longevity and stability
                            of structures, roads, and other infrastructure.
                        </p>
                        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row mt-8">
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardIconTopLeft
                                    iconUrl={CardIconSoil}
                                    iconBackground="bg-white-100"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Particle Size Distribution (AS 1141.11)"
                                    bodyText="Achieving optimal particle sizing is key to creating stable, work-ready concrete and asphalt mixes. Our sieve analysis informs you about grading, enabling better performance and durability in heavy use applications."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={CardIconSoil}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Flakiness Index (AS 1141.15)"
                                    bodyText="High flakiness can reduce material stability. Our testing helps you select aggregates that enhance both durability and load-bearing capabilities for high-strength concrete structures."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={CardIconSoil}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Particle Density & Water Absorption (AS 1141.5)"
                                    bodyText="Understanding the density and absorption of aggregate particles ensures you’re working with materials that support strong, durable concrete, avoiding premature wear and degradation."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={CardIconSoil}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Aggregate Crushing Value (ACV) (AS 1141.21)"
                                    bodyText="High-quality aggregates withstand greater compressive loads, ideal for projects requiring high-strength concrete. Our ACV test helps you select robust materials for demanding environments."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={CardIconSoil}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="FAggregate Crushing Value (ACV) (AS 1141.21)"
                                    bodyText="High-quality aggregates withstand greater compressive loads, ideal for projects requiring high-strength concrete. Our ACV test helps you select robust materials for demanding environments."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={CardIconSoil}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Los Angeles (LA) Abrasion (AS 1141.23)"
                                    bodyText="Durability is key in aggregate selection. Our LA Abrasion test simulates real-world wear, making it suitable for applications in high-traffic areas like highways and airports."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={CardIconSoil}
                                    iconBackground="bg-white-100"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Aggregate Impact Value (AIV) (AS 1141.23)"
                                    bodyText="In dynamic load environments, impact resistance is crucial. Our AIV test identifies resilient aggregates that stand up to heavy-duty conditions."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={CardIconSoil}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Clay Lumps & Friable Particles (AS 1141.34)"
                                    bodyText="Reduce risks of weakened concrete with our tests for friable particles, ensuring aggregates meet standards for stability and longevity in construction."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={CardIconSoil}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Organic Impurities (AS 1141.35)"
                                    bodyText="Detect and control impurities to maintain the integrity of your mix, preventing weak spots and improving concrete strength and consistency."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>
                        </div>
                        <div className="flex mt-4 pt-[40px]">
                            <button
                                href="#"
                                className="flex text-[#4E61F6] font-medium text-center md:text-left text-base sm:text-lg border-b-2 border-transparent hover:border-blue-600 transition duration-300"
                            >
                                <Link to="/contact">
                                    <span>
                                        Learn More About Aggregate Testing
                                    </span>
                                </Link>
                                <img
                                    className="flex w-4 h-4 mt-2 ml-1"
                                    src={Arrowup}
                                    alt="Arrow up"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Third Section */}
                <div className="soil__second-section w-full h-auto">
                    <div className="flex flex-col items-left justify-left w-full h-auto">
                        <h2 className="text-24 sm:text-36 md:text-48 font-600 mb-[32px] text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left">
                            Soil Testing Services
                        </h2>
                        <p className="text-base mb-[56px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                            Soil testing helps you understand the ground beneath
                            your project, providing insight into moisture,
                            compaction, bearing capacity, and stability. These
                            properties are crucial for building strong
                            foundations and structures that endure.
                        </p>
                        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row mt-8">
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardIconTopLeft
                                    iconUrl={Tube}
                                    iconBackground="bg-white-100"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Moisture Content (AS 1289.2.1.1)"
                                    bodyText="Understand how water content affects soil strength, plasticity, and workability, critical for adjusting designs based on seasonal or environmental changes."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-2">
                                <img
                                    src={SoilHero}
                                    alt="Soil Hero"
                                    className="w-full h-full"
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={Tube}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Liquid & Plastic Limits (AS 1289.3.1.1, AS 1289.3.2.1)"
                                    bodyText="These key parameters define soil behavior under different moisture conditions, helping you classify soils for optimized handling and stability."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={Tube}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Plasticity Index & Linear Shrinkage (AS 1289.3.3.1, AS 1289.3.4.1)"
                                    bodyText="Our tests evaluate soil’s plasticity and shrinkage potential, providing essential insights for projects in clay-rich or expansive soils."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={Tube}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Soil Particle Density & Particle Size Distribution (AS 1289.3.5.1, AS 1289.3.6.1)"
                                    bodyText="Understand soil’s permeability and load-bearing potential, essential for subgrade and foundational stability in construction."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>
                        </div>
                        <div className="flex mt-4 pt-[40px]">
                            <button
                                href="#"
                                className="flex text-[#4E61F6] font-medium text-center md:text-left text-base sm:text-lg border-b-2 border-transparent hover:border-blue-600 transition duration-300"
                            >
                                <Link to="/contact">
                                    <span>Explore Soil Testing Options</span>
                                </Link>
                                <img
                                    className="flex w-4 h-4 mt-2 ml-1"
                                    src={Arrowup}
                                    alt="Arrow up"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Fourth Section */}
                <div className="py-[128px] w-full h-auto">
                    <div className="flex flex-col items-left justify-left w-full h-auto">
                        <h2 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left">
                            Rock Testing Services
                        </h2>
                        <p className="text-base mb-[56px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                            Our rock testing services analyze key properties of
                            rock material, providing data for safe excavation,
                            tunneling, and stability in construction. Reliable
                            testing supports the selection of suitable materials
                            for both structural and geotechnical applications.
                        </p>
                        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row mt-8">
                            <div className="col-span-1 row-span-1 sm:w-full ">
                                <CardIconTopLeft
                                    iconUrl={RockTesting}
                                    iconBackground="bg-white-100"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Moisture Content & Porosity (AS 4133.1.1.1, AS 4133.2.1.1)"
                                    bodyText="Moisture affects rock strength and stability; our tests ensure your material is prepared to withstand environmental challenges like freeze-thaw cycles."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={RockTesting}
                                    iconBackground="bg-white-100"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Point Load Index & Uniaxial Compressive Strength (AS 4133.4.1, AS 4133.4.2.1)"
                                    bodyText="Essential for structural rock assessments, these tests provide data on load-bearing capacity for rock foundations and tunnel linings."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>

                            <div className="col-span-1 row-span-1">
                                <CardIconTopLeft
                                    iconUrl={RockTesting}
                                    iconBackground="bg-white"
                                    background="bg-Primary-100"
                                    stroke={true}
                                    titleText="Thermal Resistivity (ASTM D5334)"
                                    bodyText="For geothermal or buried utility projects, our thermal resistivity test helps prevent overheating issues, supporting optimal performance and longevity."
                                    titleColor="text-gray-900"
                                    bodyColor="text-gray-900"
                                    padding={true}
                                    backgroundHover={false}
                                />
                            </div>
                        </div>
                        <div className="flex mt-4 pt-[40px]">
                            <button
                                href="#"
                                className="flex text-[#4E61F6] font-medium text-center md:text-left text-base sm:text-lg border-b-2 border-transparent hover:border-blue-600 transition duration-300"
                            >
                                <Link to="/contact">
                                    <span>See Rock Testing Details</span>
                                </Link>
                                <img
                                    className="flex w-4 h-4 mt-2 ml-1 sm:ml-5"
                                    src={Arrowup}
                                    alt="Arrow up"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth Section */}
            <div className="mb-8 px-8 sm:px-[70px] md:px-[80px] lg:px-[100px] xl:px-[110px] sm:mb-40 md:mb-58 w-full bg-[#EBF7FF] md:py-6">
                <TextSection
                    title="Partner with Us for Data-Driven Project Success"
                    description="Our laboratory is dedicated to precision and quality, adhering to rigorous standards to provide reliable, actionable data. We’re here to help you build safer, stronger, and more sustainable structures. Contact us today to learn how our soil, rock, and aggregate testing services can support your project’s unique needs and drive your construction success."
                    buttonText="Get in Touch with Our Team"
                    buttonLink="/contact"
                />
            </div>
        </div>
    );
};

export default Soil;
