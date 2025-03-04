import React from "react";
import {
    boreInstallation,
    environmental,
    geotechnical,
    HomeHero,
    HomeSecondWhatWe,
    HomeSecondWhatWe2,
    HomeSecondWhoWe,
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    ProfilePics,
    rightArrow,
    soilTesting,
    SuccessWorker,
} from "../../assets/assets";
import Card from "../../components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
    const services = [
        {
            image: geotechnical,
            title: "Geotechnical Drilling",
            description:
                "Precision drilling for soil and rock investigations to support construction and engineering projects.",
        },
        {
            image: environmental,
            title: "Environmental Drilling",
            description:
                "Specialized drilling for groundwater studies, contamination assessments, and environmental compliance.",
        },
        {
            image: soilTesting,
            title: "Soil & Rock Testing",
            description:
                "Advanced lab testing to analyze soil and rock properties for stability and safety.",
        },
        {
            image: boreInstallation,
            title: "Monitoring Bore Installation",
            description:
                "Reliable bore installation for groundwater monitoring and site assessments.",
        },
        {
            image: geotechnical,
            title: "Geotechnical Drilling",
            description:
                "Precision drilling for soil and rock investigations to support construction and engineering projects.",
        },
        {
            image: environmental,
            title: "Environmental Drilling",
            description:
                "Specialized drilling for groundwater studies, contamination assessments, and environmental compliance.",
        },
        {
            image: soilTesting,
            title: "Soil & Rock Testing",
            description:
                "Advanced lab testing to analyze soil and rock properties for stability and safety.",
        },
        {
            image: boreInstallation,
            title: "Monitoring Bore Installation",
            description:
                "Reliable bore installation for groundwater monitoring and site assessments.",
        },
    ];
    return (
        <div className="flex flex-col w-full">
            {/* HOME - FIRST SECTION */}
            <div className="home__first-section h-[916px] p-5">
                <div className="w-full h-full ">
                    <div className="home__first-section h-full w-full relative flex flex-col justify-between">
                        <img className="rounded-xl" src={HomeHero} />
                        <div className="absolute w-[70%] m-[5%]">
                            <h1 className="home__first-section-header text-blue-950">
                                Building the Future on Solid Foundations.
                            </h1>
                            <p className="home__first-section-text w-[60%] my-5">
                                We provide custom geotechnical engineering
                                solutions designed to support your project's
                                success.
                            </p>
                            <div className="flex items-center">
                                <button className="w-[168px] h-[56px] bg-blue-600 text-white rounded-xl">
                                    Get a Quote
                                </button>
                                <div className="w-[234px] h-[52px] bg-transparent text-blue-600 outline-2 outline-solid outline-blue-600  rounded-xl home__first-section_explore-btn ml-5 flex items-center justify-center">
                                    <p className="mr-2 font-medium">
                                        Explore Services
                                    </p>
                                    <img src={rightArrow} />
                                </div>
                            </div>
                        </div>
                        <div className="w-[835px] h-[224px] absolute bottom-0 flex m-[5%]">
                            <div className="bg-white mr-5 w-[571px] h-full rounded-2xl">
                                <div className="p-5 flex h-full">
                                    <div className="flex h-full w-1/3">
                                        <img
                                            className="object-cover h-full w-full rounded-md"
                                            src={SuccessWorker}
                                        />
                                    </div>
                                    <div className="home___first-section-hero_bottom-card h-full w-2/3 ml-5 flex flex-col justify-center">
                                        <h3 className="text-gray-950">
                                            See How We Deliver Geotechnical
                                            Success
                                        </h3>
                                        <p className="text-gray-700 mt-4">
                                            From soil investigations to
                                            foundation solutions, explore how
                                            our expertise drives successful
                                            projects with stability and
                                            precision.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white w-[248px] h-full rounded-2xl">
                                <div className="home___first-section-hero_right-card flex items-center justify-center flex-col h-full w-full">
                                    <img src={ProfilePics} />
                                    <h1>1K+</h1>
                                    <span>Customers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* HOME - SECOND SECTION */}
            <div className="home__second-section p-26 w-full h-auto">
                {/* WHO WE ARE */}
                <div className="home__second-section_first-part w-full h-[412px] flex">
                    <div className="h-full w-1/2">
                        <img
                            className="object-cover h-full rounded-xl"
                            src={HomeSecondWhoWe}
                        />
                    </div>
                    <div className="w-1/2 ml-12">
                        <div className="flex flex-col items-start">
                            <h1 className="text-gray-900">Who We Are</h1>
                            <p className="mt-6 text-gray-600">
                                At Statewide Geotechnical, we specialize in
                                delivering expert geotechnical drilling,
                                testing, and consulting services across
                                Melbourne, Victoria, and Southern New South
                                Wales. With advanced equipment and a team of
                                highly qualified professionals, we provide
                                precise site assessments, environmental
                                drilling, and geotechnical solutions tailored to
                                your project needs. Our commitment to safety,
                                accuracy, and efficiency makes us the trusted
                                partner for engineers, developers, and
                                government agencies.
                            </p>
                            <div className="w-[272px] h-[52px] bg-transparent text-blue-600 outline-2 outline-solid outline-blue-600  rounded-xl home__first-section_explore-btn mt-5 flex items-center justify-center">
                                <p className="mr-2">Learn More About Us</p>
                                <img src={rightArrow} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* WHAT WE OFFER */}
                <div className="home__second-section_second-part">
                    <div className="w-full h-auto mt-26">
                        <div className="w-full flex justify-between items-center">
                            <h1>What We Offer</h1>
                            <p className="text-blue-800">SEE ALL SERVICES</p>
                        </div>
                        <div className="flex justify-between w-full h-auto my-10">
                            <div className="h-auto w-[49%]">
                                <img
                                    className="object-cover w-full"
                                    src={HomeSecondWhatWe}
                                />
                            </div>
                            <div className="h-auto w-[49%]">
                                <img
                                    className="object-cover w-full"
                                    src={HomeSecondWhatWe2}
                                />
                            </div>
                        </div>
                        {/* CAROUSEL - SWIPER JS */}
                        <div className="w-full">
                            <div className="">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                    navigation={true}
                                    modules={[Keyboard, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    {services.map((service, index) => (
                                        <SwiperSlide key={index}>
                                            <Card {...service} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                {/* WHY CHOOSE US */}
                <div className="w-full home__second-section_third-part mt-26">
                    <div className="w-full">
                        <div className="text-center">
                            <h1>Why Choose Us?</h1>
                        </div>
                        <div className="w-full flex justify-evenly mt-20">
                            <div className="w-25% flex flex-col justify-center items-center">
                                <img src={Icon1} />
                                <p className="text-center mt-4">
                                    Advanced Drilling<br></br>Technology
                                </p>
                            </div>
                            <div className="w-25% flex flex-col justify-center items-center">
                                <img src={Icon2} />
                                <p className="text-center mt-4">
                                    Certified & Experienced<br></br>Team
                                </p>
                            </div>
                            <div className="w-25% flex flex-col justify-center items-center">
                                <img src={Icon3} />
                                <p className="text-center mt-4">
                                    Comprehensive<br></br>Geotechnical Solutions
                                </p>
                            </div>
                            <div className="w-25% flex flex-col justify-center items-center">
                                <img src={Icon4} />
                                <p className="text-center mt-4">
                                    Commitment to Safety<br></br>& Compliance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PROJECTS */}
                <div></div>
                {/* START JOURNEY */}
                <div></div>
            </div>
        </div>
    );
};

export default Home;
