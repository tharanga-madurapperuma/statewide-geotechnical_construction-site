import React from "react";
import ButtonCard from "../components/card/ButtonCard";
import CardIconTopLeft from "../components/card-icon-top-left/CardIconTopLeft";
import {
    InvestigationHero,
    InvestigationServices,
    InvestigationTech,
    InvestigationTech2,
} from "../assets/assets";

const SiteInvetigate = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center md:mt-[108px]">
            <div className="mt-2 sm:mt-2 px-3 sm:px-4">
                <ButtonCard
                    image={InvestigationHero}
                    title="Site Investigations"
                    description="At Statewide Geotechnical (Aust) Pty Ltd, we deliver comprehensive site investigation services that provide a thorough understanding of ground conditions, enabling safe and efficient project planning. From initial drilling to detailed reporting, our in-house team handles every step, ensuring unmatched consistency, quality, and reliability. Our all-in-one approach streamlines the investigation process and delivers high-quality insights to support your project’s success."
                    buttonText="Get in Touch"
                    imagePosition="right"
                    className="mb-8"
                />
            </div>

            <div className="max-w-[1300px] mx-auto mt-[94px]">
                {/* Header Section */}
                <h1 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-[32px] text-4xl text-center md:text-left">
                    Investigation Techniques
                </h1>
                <p className="text-base mb-[45px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                    Our team employs a diverse range of advanced investigation
                    techniques, customized to meet the unique requirements of
                    each site. With state-of-the-art equipment and tailored
                    methodologies, we offer accurate data and insights for
                    informed decision-making.
                </p>
                <p className="text-gray-600 mb-[24px]">
                    Our Site Investigation Techniques include:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-3 gap-4 pt-[35px] w-full">
                    {/* Row 1 */}
                    <div className="col-span-1 border-[1px] border-[#D1EDFF] rounded-3xl">
                        <img
                            src={InvestigationTech}
                            alt="Drilling work"
                            className="w-full aspect-square object-cover rounded-xl"
                        />
                    </div>

                    <div>
                        <CardIconTopLeft
                            iconUrl="/helmet.png"
                            iconBackground="bg-white-100"
                            background="bg-Primary-100"
                            stroke={true}
                            titleText="Wireline Diamond Core Drilling (HQ, NQ & PQ)"
                            bodyText="Our wireline diamond core drilling extracts high-quality core
              samples, offering precise geological data. With multiple available
              core sizes (HQ, NQ, PQ), we select the optimal diameter based on
              the project's specific needs and site conditions."
                            titleColor="text-gray-900"
                            bodyColor="text-gray-900"
                            padding={true}
                            backgroundHover={false}
                        />
                    </div>

                    <div>
                        <CardIconTopLeft
                            iconUrl="/helmet.png"
                            iconBackground="bg-white-100"
                            background="bg-Primary-100"
                            stroke={true}
                            titleText="Solid and Hollow Auger Borehole Drilling"
                            bodyText="Ideal for a broad range of ground conditions, our solid and hollow
              auger drilling methods obtain quality samples from both shallow
              and deeper boreholes. This versatile method is essential for
              understanding subsurface conditions."
                            titleColor="text-gray-900"
                            bodyColor="text-gray-900"
                            padding={true}
                            backgroundHover={false}
                        />
                    </div>

                    {/* Row 2 */}
                    <div>
                        <CardIconTopLeft
                            iconUrl="/helmet.png"
                            iconBackground="bg-white-100"
                            background="bg-Primary-100"
                            stroke={true}
                            titleText="Hand Auger Borehole Drilling"
                            bodyText="For sites with restricted access or those needing minimal
              disturbance, our hand auger borehole drilling provides a
              low-impact solution. This method is effective for shallow soil
              analysis in both urban and remote areas."
                            titleColor="text-gray-900"
                            bodyColor="text-gray-900"
                            padding={true}
                            backgroundHover={false}
                        />
                    </div>

                    <div>
                        <CardIconTopLeft
                            iconUrl="/helmet.png"
                            iconBackground="bg-white-100"
                            background="bg-Primary-100"
                            stroke={true}
                            titleText="Cone Penetrometer Tests (CPT)"
                            bodyText="Our CPT services provide essential in-situ soil data, including
              density, strength, and composition, with options to measure pore
              pressure. CPT is highly effective for soil profiling and layers,
              identifying soft zones, and detecting weak grounds."
                            titleColor="text-gray-900"
                            bodyColor="text-gray-900"
                            padding={true}
                            backgroundHover={false}
                        />
                    </div>

                    <div>
                        <CardIconTopLeft
                            iconUrl="/helmet.png"
                            iconBackground="bg-white-100"
                            background="bg-Primary-100"
                            stroke={true}
                            titleText="Backhoe and Hydraulic Excavator Test Pits and Trenches"
                            bodyText="Using backhoes and hydraulic excavators, we create test pits and
              trenches for direct soil inspection. This approach reveals the
              soil structure, fills, materials levels, and other factors
              critical to your project's foundation."
                            titleColor="text-gray-900"
                            bodyColor="text-gray-900"
                            padding={true}
                            backgroundHover={false}
                        />
                    </div>

                    {/* Row 3 */}
                    <div>
                        <CardIconTopLeft
                            iconUrl="/helmet.png"
                            iconBackground="bg-white-100"
                            background="bg-Primary-100"
                            stroke={true}
                            titleText="Bulldozer Costean Excavations"
                            bodyText="For broad, large-scale sampling, we perform costean excavations.
              This method is ideal for assessing large areas and provides
              insight into subsurface geology and structural stability."
                            titleColor="text-gray-900"
                            bodyColor="text-gray-900"
                            padding={true}
                            backgroundHover={false}
                        />
                    </div>

                    <div>
                        <CardIconTopLeft
                            iconUrl="/helmet.png"
                            iconBackground="bg-white-100"
                            background="bg-Primary-100"
                            stroke={true}
                            titleText="Geophysics"
                            bodyText="Our geophysics capabilities include penetrating radar (GPR) and
              electrical resistivity, offering non-invasive options for
              subsurface assessments. Geophysics provides rapid, large-area
              data, aiding in identifying ground stability and structural
              composition."
                            titleColor="text-gray-900"
                            bodyColor="text-gray-900"
                            padding={true}
                            backgroundHover={false}
                        />
                    </div>

                    <div className="col-span-1">
                        <img
                            src={InvestigationTech2}
                            alt="Site investigation"
                            className="w-full aspect-square object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-[1300px] mx-auto mt-[94px]">
                {/* Header */}
                <h1 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-[32px] text-4xl text-center md:text-left">
                    Our Site Investigation Services Include
                </h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-8 md:grid-rows-10 gap-4 pb-[128px]">
                    {/* Image */}
                    <div className="col-span-1 md:col-span-4 md:row-span-3 h-full rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
                        <img
                            src={InvestigationServices}
                            alt="Site Investigation"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Drilling */}
                    <div className="col-span-1 md:col-span-4 md:row-span-3 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
                        <div className="bg">
                            <img
                                src="/helmet3.png"
                                alt="helmet"
                                className="w-[50px] h-[50px]"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 mt-4">
                            Drilling
                        </h2>
                        <p className="text-gray-600">
                            Equipped with advanced technology, our drilling team
                            provides precise soil and rock samples from all
                            depths, even in challenging terrains. We adapt our
                            drilling approach to meet your project’s unique
                            requirements, ensuring dependable data on subsurface
                            conditions.
                        </p>
                    </div>

                    {/* Test Pits */}
                    <div className="col-span-1 md:col-span-4 md:row-span-3 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
                        <div className="bg">
                            <img
                                src="/helmet3.png"
                                alt="helmet"
                                className="w-[50px] h-[50px]"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 mt-4">
                            Test Pits
                        </h2>
                        <p className="text-gray-600">
                            Our test pit excavations allow for direct
                            observation of subsurface materials, providing
                            valuable insights into soil layers, groundwater
                            levels, and potential site challenges. Test pits are
                            a vital component for thorough site assessment and
                            planning.
                        </p>
                    </div>

                    {/* In-Situ Testing */}
                    <div className="col-span-1 md:col-span-4 md:row-span-3 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
                        <div className="bg">
                            <img
                                src="/helmet4.png"
                                alt="helmet"
                                className="w-[50px] h-[50px]"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 mt-4">
                            In-Situ Testing
                        </h2>
                        <p className="text-gray-600">
                            We conduct a variety of in-situ tests, such as
                            Standard Penetration Tests (SPT) and Cone
                            Penetration Testing (CPT), to measure soil
                            properties directly on-site. These methods ensure
                            highly accurate data without disturbing samples,
                            providing key insights into soil density, shear
                            strength, and compaction.
                        </p>
                    </div>

                    {/* Laboratory Investigations */}
                    <div className="col-span-1 md:col-span-4 md:row-span-3 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
                        <div className="bg">
                            <img
                                src="/helmet3.png"
                                alt="helmet"
                                className="w-[50px] h-[50px]"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 mt-4">
                            Laboratory Investigations
                        </h2>
                        <p className="text-gray-600">
                            Our in-house lab is fully equipped for detailed
                            analyses of soil, rock, and groundwater samples. Our
                            laboratory testing covers everything from moisture
                            content and grain size distribution to compaction
                            and Atterberg limits, delivering critical
                            information for engineering and planning.
                        </p>
                    </div>

                    {/* Reporting */}
                    <div className="col-span-1 md:col-span-4 md:row-span-3 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
                        <div className="bg">
                            <img
                                src="/helmet3.png"
                                alt="helmet"
                                className="w-[50px] h-[50px]"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2 mt-4">
                            Reporting
                        </h2>
                        <p className="text-gray-600">
                            We deliver detailed, actionable reports tailored to
                            industry standards and project-specific
                            requirements. Our reports provide a clear overview
                            of site conditions, potential challenges, and
                            engineering recommendations, empowering you with the
                            insights needed for confident, informed
                            decision-making.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="col-span-1 md:col-span-8 md:col-start-1 md:row-start-10 text-gray-600">
                        <p className="pt-[56px]">
                            Statewide Geotechnical’s end-to-end site
                            investigation services give you a clear picture of
                            site conditions from the outset, providing the data
                            and insights to drive successful project outcomes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteInvetigate;
