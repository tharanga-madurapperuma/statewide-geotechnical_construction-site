import React from "react";
import {
    Arm,
    Bell,
    Dosar,
    DrillingBit,
    Hammer,
    Map,
    SmallDosar,
    TopDrill,
    Well,
} from "../../assets/assets";
import CardIconTextCenter from "../../components/card-icon-text-center/CardIconTextCenter";

const EnvDrilling = () => {
    return (
        <div className="w-full flex flex-col items-center ">
            {/* Hero Component */}
            <div></div>

            {/* Left pic paragraph component */}
            <div></div>

            {/* Middle image card component */}
            <div></div>

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
                        className="w-[80%] absolute top-[70px] left-[5%] sm:w-[90%] md:w-[80%] lg:w-[70%] z-10"
                        src={Map}
                    />
                </div>
            </div>

            {/* Cards */}
            <div className="w-[90%] mb-[100px] mt-[350px] sm:mt-[550px] md:mt-[650px] lg:mt-[700px] xl:mt-[800px]">
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
            <div className=""></div>
        </div>
    );
};

export default EnvDrilling;
