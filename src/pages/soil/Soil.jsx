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
    Liquid, Linear, Sieve, Hydro, Ucssoil, Uutriaxial, Compaction, Cbr, Shrink, Direct,
} from "../../assets/assets";
import { Link } from "react-router-dom";

const Soil = () => {
    return (
        <div className="w-full flex flex-col items-center bg-slate-background md:mt-[108px]">
            {/* First Section */}
            <div>
                <ButtonCard
                    image={SoilTesting}
                    title="NATA Accredited Laboratory Testing Services"
                    description="Our Ringwood laboratory offers comprehensive soil, rock, and aggregate testing to ensure material quality, durability, and safety in construction earthworks. Our laboratory is extensively equipped with technologically advanced equipment to cater for demands of modern construction industry with efficient & reliable testing."
                    buttonText="Get in Touch"
                />
            </div>
            <div className="px-[30px] md:px-[110px] sm:px-[20px]">

                {/* Second Section */}
                <div className="soil__second-section w-full h-auto mt-[100px]">
                    <div className="flex flex-col items-left justify-left w-full h-auto">
                        <h2 className="text-24 sm:text-36 md:text-48 font-600 mb-[32px] text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left">
                            Soil Testing Services
                        </h2>
                        <p className="text-base mb-[30px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                        Our test methods are comply with current Australian standards and international standards such as American Society of Testing & Materials (ASTM). Our testing include:
                        </p>
                        <div className="font-medium text-[25px] md:text-[34px] -mb-[60px]">
                            <h3>
                            Soil Classification Testing
                            </h3>
                        </div>
                        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row mt-8">
                            <div className="col-span-1 row-span-1 sm:w-full mt-[45px]">
                                <img
                                        src={Liquid}
                                        alt="Liquid & Plastic Limit"
                                        className="w-full h-full rounded-3xl"
                                    />
                                <div className="text-center text-[14px] md:text-[18px] mt-[10px]">
                                    <p>
                                    Liquid & Plastic Limit
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-1 row-span-1 sm:w-full mt-[45px]">
                                <img
                                    src={Linear}
                                    alt="Linear Shrinkage"
                                    className="w-full h-full rounded-3xl"
                                />
                                <div className="text-center text-[14px] md:text-[18px] mt-[10px]">
                                    <p>
                                    Linear Shrinkage
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-1 row-span-1 sm:w-full mt-[45px]">
                                <img
                                        src={Sieve}
                                        alt="Sieve Analysis"
                                        className="w-full h-full rounded-3xl"
                                    />
                                <div className="text-center text-[14px] md:text-[18px] mt-[10px]">
                                    <p>
                                    Sieve Analysis
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-1 row-span-1 sm:w-full mt-[45px]">
                                <img
                                        src={Hydro}
                                        alt="Hydrometer Analysis"
                                        className="w-full h-full rounded-3xl"
                                />
                                <div className="text-center text-[14px] md:text-[18px] mt-[10px]">
                                    <p>
                                      Hydrometer Analysis
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="mt-[75px]">

                            <div className="font-medium text-[25px] md:text-[32px] -mb-[60px]">
                                <h3>
                                Soil Strength / Compaction Testing
                                </h3>
                            </div>
                            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row mt-8">
                                <div className="col-span-1 row-span-1 sm:w-full mt-[45px]">
                                    <img
                                            src={Ucssoil}
                                            alt="Soil UCS Test"
                                            className="w-full h-full rounded-3xl"
                                        />
                                    <div className="text-center text-[14px] md:text-[18px] mt-[10px]">
                                        <p>
                                         Soil UCS Test
                                        </p>
                                    </div>
                                </div>

                                <div className="col-span-1 row-span-1 sm:w-full mt-[45px]">
                                    <img
                                        src={Uutriaxial}
                                        alt="UU Triaxial Test"
                                        className="w-full h-full rounded-3xl"
                                    />
                                    <div className="text-center text-[14px] md:text-[18px] mt-[10px]">
                                        <p>
                                          UU Triaxial Test
                                        </p>
                                    </div>
                                </div>

                                <div className="col-span-1 row-span-1 sm:w-full mt-[45px]">
                                    <img
                                            src={Compaction}
                                            alt="Compaction Test"
                                            className="w-full h-full rounded-3xl"
                                        />
                                    <div className="text-center text-[14px] md:text-[18px] mt-[10px]">
                                        <p>
                                          Compaction Test 
                                        </p>
                                    </div>
                                </div>

                                <div className="col-span-1 row-span-1 sm:w-full mt-[45px]">
                                    <img
                                            src={Cbr}
                                            alt="CBR Test"
                                            className="w-full h-full rounded-3xl"
                                    />
                                    <div className="text-center text-[14px] md:text-[18px] mt-[10px]">
                                        <p>
                                         CBR Test
                                        </p>
                                    </div>
                                </div>

                                <div className="col-span-1 row-span-1 sm:w-full mt-[45px]">
                                    <img
                                            src={Shrink}
                                            alt="Shrink-Swell Test"
                                            className="w-full h-full rounded-3xl"
                                    />
                                    <div className="text-center text-[14px] md:text-[18px] mt-[10px]">
                                        <p>
                                            Shrink-Swell Test
                                        </p>
                                    </div>
                                </div>

                                <div className="col-span-1 row-span-1 sm:w-full mt-[45px]">
                                    <img
                                            src={Direct}
                                            alt="Direct Shear Test"
                                            className="w-full h-full rounded-3xl"
                                    />
                                    <div className="text-center text-[14px] md:text-[18px] mt-[10px]">
                                        <p>
                                            Direct Shear Test
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                       
                    </div>
                </div>

                {/* Third Section */}
                <div className="py-[128px] w-full h-auto">
                    <div className="flex flex-col items-left justify-left w-full h-auto">
                        <h2 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left">
                            Rock Testing Services
                        </h2>
                        <p className="text-base mb-[56px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                        Our rock testing services analyse key properties of rock material, providing data for safe excavation, tunnelling, and stability in construction. Reliable testing supports the selection of suitable materials for both structural and geotechnical applications.
                        </p>
                        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row mt-8">
                            <div className="col-span-1 row-span-1 sm:w-full ">
                                <CardIconTopLeft
                                    iconUrl={RockTesting}
                                    iconBackground="bg-white"
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
                                    iconBackground="bg-white"
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
                       
                    </div>
                </div>

                {/* Fourth Section */}
                <div className="soil__second-section mb-[64px] w-full h-auto">
                    <div className="flex flex-col items-left justify-left w-full h-auto">
                        <h2 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-[32px] text-4xl text-center md:text-left">
                            Aggregate Testing Services
                        </h2>
                        <p className="text-base mb-[45px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                        Our aggregate testing services are essential for understanding material characteristics, ensuring quality for use in concrete, asphalt, and foundational applications. Properly tested aggregates contribute to the longevity and stability of structures, roads, and other infrastructure.
                        </p>
                        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 flex-col sm:flex-row mt-8">
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardIconTopLeft
                                    iconUrl={CardIconSoil}
                                    iconBackground="bg-white"
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
                                    titleText="Wet Dry Strength (ACV) (AS 1141.21) Variation (AS 1141.22)"
                                    bodyText="High-quality aggregates withstand greater compressive loads, ideal for projects."
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
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Soil;
