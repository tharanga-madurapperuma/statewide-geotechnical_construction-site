import React from "react";
import {
    Arm,
    Bell,
    DocIcon,
    Dosar,
    DrillingBit,
    EnvHero,
    EnvSecond,
    Hammer,
    Map,
    SmallDosar,
    TopDrill,
    Well,
} from "../../assets/assets";
import CardIconTextCenter from "../../components/card-icon-text-center/CardIconTextCenter";
import ButtonCard from "../../components/card/ButtonCard";
import InfoSection from "../../components/info-section/InfoSection";
import TextSection from "../../components/text/TextSection";
import LicenseCard from "../../components/card-icon-license/CardIconLicense";

const EnvDrilling = () => {
    return (
        <div className="w-full flex flex-col items-center ">
            {/* Hero Component */}
            <div className="mt-4 sm:mt-6 px-3 sm:px-4">
                <ButtonCard
                    image={EnvHero}
                    title="Specialized Environmental & Geotechnical Drilling Services"
                    description="At Statewide Geotechnical, we o(er a wide range of specialized environmental and geotechnical drilling services. Equipped with advanced drilling rigs, from small, handheld units to heavy truck-mounted rigs, we can handle even the most complex site conditions."
                    buttonText="Request a Consultation"
                />
            </div>

            {/* Left pic paragraph component */}
            <div className="mt-8 sm:mt-40 md:mt-[100px] mb-8 sm:mb-40 md:mb-[100px] md:px-[5%]">
                <InfoSection
                    title="Expert Drilling Equipment for Challenging Sites"
                    description={
                        <>
                            We operate{" "}
                            <span className="text-gray-700 font-500">
                                Geoprobe, Comacchio,
                            </span>{" "}
                            and{" "}
                            <span className="text-gray-700 font-500">
                                Custom rigs,
                            </span>{" "}
                            designed for small footprint and low headroom
                            applications—ideal for tight access and
                            di(icult-to-reach) areas. Our drilling rigs are
                            equipped with{" "}
                            <span className="text-gray-700 font-500">
                                industry-standard safety cages and emergency
                                shut-off systems
                            </span>{" "}
                            to ensure maximum safety at all times.
                        </>
                    }
                    buttonText=""
                    buttonLink=""
                    imageSrc={EnvSecond}
                    reverse={false}
                />
            </div>

            {/* Middle image card component */}
            <div className="w-[90%] h-auto py-10 mb-[50px]">
                <div className="flex flex-col items-start w-full">
                    <h1 className="w-[80%] mb-4 font-inter text-28 sm:text-40 md:text-40 lg:text-48 font-600">
                        Qualified & Experienced Drillers
                    </h1>
                    <p className="font-inter font-400 text-14 mt-2 mb-4 md:text-18 lg:text-24">
                        Our team of highly qualified and experienced drillers
                        hold certifications and competencies in key areas,
                        including:
                    </p>
                </div>
                <div className="w-full h-full grid grid-cols-3 gap-2 flex-col sm:flex-row">
                    <LicenseCard
                        image={DocIcon}
                        title="Water Bore Licenses (Class 1 & 2)"
                    />
                    <LicenseCard
                        image={DocIcon}
                        title="Building Industry White Cards"
                    />
                    <LicenseCard
                        image={DocIcon}
                        title="First Aid Certification"
                    />
                </div>
            </div>

            {/* Map  */}
            <div className="w-[80%] mt-[50px] flex flex-col">
                <h1 className="font-inter font-600 text-24 sm:text-28 md:text-32 lg:text-40 xl:text-48">
                    Service Area
                </h1>
                <div className="w-full flex mt-8 relative">
                    <div className=" w-[60%] sm:w-[40%] md:w-[50%] lg:w-[40%] bg-blue-600 p-4 sm:p-6 lg:p-8 rounded-xl absolute right-[5%] top-0 z-20">
                        <p className="font-inter font-500 text-12 sm:text-16 md:text-24 lg:text-32 text-white ">
                            We proudly serve the Melbourne metropolitan area, as
                            well as regions across Victoria and Southern New
                            South Wales.
                        </p>
                    </div>
                    <img
                        className="w-[80%] absolute top-[70px] left-[5%] sm:w-[80%] md:w-[80%] lg:w-[70%] z-10"
                        src={Map}
                    />
                </div>
            </div>

            {/* Cards */}
            <div className="w-[90%] mb-[100px] mt-[60vw]">
                <h1 className="font-inter font-600 text-28 md:text-40 lg:text-48 w-[80%] ">
                    Our Comprehensive Drilling Services
                </h1>

                <div className="w-full grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 md:mt-6 lg:mt-8">
                    <CardIconTextCenter
                        iconUrl={DrillingBit}
                        titleText="Augering"
                        bodyTextPresent={true}
                        bodyText="Solid and hollow stem augering for a range of applications"
                    />
                    <CardIconTextCenter
                        iconUrl={Dosar}
                        titleText="Direct Push"
                        bodyTextPresent={false}
                        bodyText="Fast, efficient drilling for soil sampling and testing"
                    />
                    <CardIconTextCenter
                        iconUrl={Bell}
                        titleText="Rotary Air Blast (RAB)"
                        bodyTextPresent={true}
                        bodyText="Ideal for penetrating tough soil and rock formations"
                    />
                    <CardIconTextCenter
                        iconUrl={Hammer}
                        titleText="Rotary Down Hole Hammer (DHH)"
                        bodyTextPresent={true}
                        bodyText="For high-performance drilling in hard rock conditions"
                    />
                    <CardIconTextCenter
                        iconUrl={SmallDosar}
                        titleText="Pressure Injection"
                        bodyTextPresent={true}
                        bodyText="Techniques such as ORC (Oxygen Release Compound) and Regenox for soil remediation"
                    />
                    <CardIconTextCenter
                        iconUrl={Arm}
                        titleText="Groundwater Bore Installation"
                        bodyTextPresent={true}
                        bodyText="For monitoring wells and water extraction"
                    />
                    <CardIconTextCenter
                        iconUrl={TopDrill}
                        titleText="Soil Vapour Bore Installation"
                        bodyTextPresent={false}
                        bodyText="Essential for environmental contamination investigations"
                    />
                    <CardIconTextCenter
                        iconUrl={Well}
                        titleText="Well Decommissioning & Grouting"
                        bodyTextPresent={true}
                        bodyText="Safe and environmentally responsible decommissioning of wells and boreholes"
                    />
                </div>
            </div>
            {/* Blue background component */}
            <div className="mb-8 px-4 sm:px-8 sm:mb-40 md:mb-58">
                <TextSection
                    title="Why Choose Statewide Geotechnical for Your Environmental Drilling Needs?"
                    description="state-of-the-art equipment, experienced team, and commitment to safety and environmental responsibility make us the trusted choice for environmental and geotechnical drilling services."
                    buttonText="Get in Touch Today for Expert Drilling Solutions"
                    buttonLink="#"
                />
            </div>
        </div>
    );
};

export default EnvDrilling;
