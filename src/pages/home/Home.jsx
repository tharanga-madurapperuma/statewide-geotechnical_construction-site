import React from "react";
import Callbox from "../../components/callbox/Callbox";
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
            <div className="h-auto w-full">
                <div className="w-full h-auto">
                    <div className="h-full w-[90%] flex flex-col justify-between ">
                        {/* <img className="rounded-xl top-0" src={HomeHero} /> */}
                        <div
                            className="w-full h-auto m-[5%] rounded-2xl px-8 py-4 md:p-15 lg:p-[70px] xl:p-[80px] flex flex-col justify-between sm:relative"
                            style={{
                                background: `url(${HomeHero})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >
                            <div>
                                <h1 className=" text-blue-950 w-[80%] font-inter font-700 text-24 md:text-40 lg:text-48 xl:text-72">
                                    Building the Future on Solid Foundations.
                                </h1>
                                <p className="w-[90%] lg:w-[60%] my-5 font-poppins font-400 text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24">
                                    We provide custom geotechnical engineering
                                    solutions designed to support your project's
                                    success.
                                </p>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:mt-15">
                                    <button className="w-auto text-nowrap h-40 md:h-[44px] lg:h-[48px] xl:h-[50px] bg-blue-600 hover:bg-blue-700  text-white rounded-lg font-inter font-600 text-12 md:text-14 lg:text-16 xl:text-18 px-4 md:px-8 transition duration-500 cursor-pointer">
                                        Get a Quote
                                    </button>
                                    <div className="w-auto h-[38px] md:h-[42px] lg:h-[46px] xl:h-[48px] text-nowrap bg-transparent hover:bg-blue-transparent  text-blue-600 hover:text-blue-700 outline-2 hover:outline-blue-800 outline-solid outline-blue-600 font-inter font-600 text-12 md:text-14 lg:text-16 xl:text-18 rounded-lg flex items-center justify-center px-4 md:px-8 mt-2 sm:mt-0 sm:ml-4  transition duration-500 cursor-pointer">
                                        <p className="mr-2 font-medium">
                                            Explore Services
                                        </p>
                                        <img src={rightArrow} />
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full md:w-[80%] xl:w-[70%] sm:h-[170px] md:h-[200px] hidden mt-15 md:mt-[100px] lg:mt-[150px] xl:mt-[200px] mb-2 lg:mb-0 sm:flex sm:relative bottom-0">
                                <div className="bg-white w-2/3 h-full rounded-2xl">
                                    <div className="flex h-full">
                                        <div className="h-full w-2/5 flex items-center justify-center">
                                            <img
                                                className="object-cover h-[80%] w-[80%] rounded-2xl"
                                                src={SuccessWorker}
                                            />
                                        </div>
                                        <div className="h-full w-3/5 pr-4 flex flex-col justify-center font-inter font-600 text-16 md:text-18 lg:text-24">
                                            <h3 className="text-gray-950">
                                                See How We Deliver Geotechnical
                                                Success
                                            </h3>
                                            <p className="text-gray-700 mt-4 font-inter font-400 text-12 md:text-14 lg:text-14">
                                                From soil investigations to
                                                foundation solutions, explore
                                                how our expertise drives
                                                successful projects with
                                                stability and precision.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white w-1/3 h-full rounded-2xl ml-5">
                                    <div className="flex items-center justify-center flex-col h-full w-full">
                                        <img src={ProfilePics} />
                                        <h1 className="font-inter font-600 text-32 lg:text-40">
                                            1K+
                                        </h1>
                                        <span className="font-inter font-400 text-24 ">
                                            Customers
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full h-[224px] bottom-0 sm:hidden m-[5%] flex flex-col">
                            <div className="bg-white  w-full h-full rounded-2xl">
                                <div className="flex h-full">
                                    <div className="h-full w-1/3">
                                        <img
                                            className="object-cover h-full w-full rounded-md"
                                            src={SuccessWorker}
                                        />
                                    </div>
                                    <div className="h-full w-2/3 ml-5 flex flex-col justify-center font-inter font-600 text-16">
                                        <h3 className="text-gray-950">
                                            See How We Deliver Geotechnical
                                            Success
                                        </h3>
                                        <p className="text-gray-700 mt-4 font-inter font-400 text-12">
                                            From soil investigations to
                                            foundation solutions, explore how
                                            our expertise drives successful
                                            projects with stability and
                                            precision.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white w-full h-[150px] rounded-2xl my-15">
                                <div className="flex items-center justify-center flex-col h-full w-full">
                                    <img src={ProfilePics} />
                                    <h1 className="font-inter font-600 text-32 ">
                                        1K+
                                    </h1>
                                    <span className="font-inter font-400 text-24 ">
                                        Customers
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* HOME - SECOND SECTION */}
            <div className="w-full">
                {/* WHO WE ARE */}
                {/* <div className="w-full h-[412px] flex">
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
                </div> */}
                {/* WHAT WE OFFER */}
                <div className="overflow-x-hidden w-full px-2 md:px-6 lg:px-8 xl:px-40">
                    <div className="w-full h-auto mt-[40vw] sm:mt-62 flex flex-col items-center">
                        <div className="w-full flex justify-between items-center px-6">
                            <h1 className="font-inter font-600 text-28 sm:text-32 md:text-40 lg:text-56 xl:text-62">
                                What We Offer
                            </h1>
                            <p className="text-blue-700 hover:text-blue-900 transition duration-500 cursor-pointer font-inter font-600 text-16 sm:text-18 md:text-24 text-right">
                                SEE ALL SERVICES
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between w-full h-auto my-10 px-6">
                            <div className="h-auto">
                                <img
                                    className="object-cover w-full"
                                    src={HomeSecondWhatWe}
                                />
                            </div>
                            <div className="h-auto ">
                                <img
                                    className="object-cover w-full mt-2 sm:mt-0 sm:pl-3"
                                    src={HomeSecondWhatWe2}
                                />
                            </div>
                        </div>
                        {/* CAROUSEL - SWIPER JS */}
                        <div className="w-full flex flex-col items-center">
                            <div className="sm:hidden w-[85%]">
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={10}
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
                            <div className="hidden sm:block sm:w-[93%] md:w-[95%] md:mt-2 xl:w-[96%]">
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
                <div className="w-full mt-80 sm:mt-[100px] xl:mt-[150px] flex flex-col items-center">
                    <div className="w-full px-[10%] sm:px-[15%] md:px-[10%] lg:px-[15%] xl:px-[20%] 2xl:px-[25%]">
                        <div className="text-center">
                            <h1 className="font-inter font-600 text-28 sm:text-32 md:text-40 lg:text-56 xl:text-62">
                                Why Choose Us?
                            </h1>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-4 justify-evenly mt-8 md:mt-48 lg:mt-62 xl:mt-80">
                            <div className="flex flex-col justify-start items-center">
                                <img
                                    className="w-80 h-80 md:h-auto md:w-auto"
                                    src={Icon1}
                                />
                                <p className="text-center mt-1 md:mt-3 lg:mt-4 font-inter font-500 text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24">
                                    Advanced Drilling<br></br>Technology
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-center">
                                <img
                                    className="w-80 h-80 md:h-auto md:w-auto"
                                    src={Icon2}
                                />
                                <p className="text-center mt-1 md:mt-3 lg:mt-4 font-inter font-500 text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24">
                                    Certified & Experienced<br></br>Team
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-center">
                                <img
                                    className="w-80 h-80 md:h-auto md:w-auto"
                                    src={Icon3}
                                />
                                <p className="text-center mt-1 md:mt-3 lg:mt-4 font-inter font-500 text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24">
                                    Comprehensive<br></br>Geotechnical Solutions
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-center">
                                <img
                                    className="w-80 h-80 md:h-auto md:w-auto"
                                    src={Icon4}
                                />
                                <p className="text-center mt-1 md:mt-3 lg:mt-4 font-inter font-500 text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24">
                                    Commitment to Safety<br></br>& Compliance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PROJECTS */}
                <div>
                    <div className="font-inter text-gray-900 p-6 sm:px-8 md:px-48 lg:px-72 xl:px-80 w-full h-auto mt-26">
                        {/* Header Section */}
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="font-inter font-600 text-28 sm:text-32 md:text-40 lg:text-56 xl:text-62">
                                Our Projects
                            </h1>
                            <p className="text-blue-700 hover:text-blue-900 transition duration-500 cursor-pointer font-inter font-600 text-16 sm:text-18 md:text-24 text-right">
                                SEE ALL SERVICES
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="grid h-[900px] grid-cols-2 grid-rows-4 sm:grid-cols-5 sm:grid-rows-2 gap-3 sm:gap-3 md:gap-4 sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                            <div className="col-span-2 sm:col-span-3 bg-blue-100 p-6 rounded-lg flex flex-col">
                                <h2 className="text-18 sm:text-18 md:text-24 lg:text-32 xl:text-40 font-bold mt-[5px]">
                                    Explore Our Proven Geotechnical Engineering
                                    Projects Portfolio
                                </h2>
                                <p className="text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24 text-gray-700 mb-2">
                                    Highlighting our commitment to excellence in
                                    geotechnical engineering and the lasting
                                    impact we've made on infrastructure and
                                    communities. Experience the difference we've
                                    built.
                                </p>
                            </div>

                            <div className="row-start-2 col-start-1 sm:row-start-1 sm:col-start-4 rounded-lg overflow-hidden">
                                <img
                                    src="/our-projects/Frame132.png"
                                    alt="Construction workers reviewing plans"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="row-start-2 col-start-2 sm:row-start-1 sm:col-start-5 rounded-lg overflow-hidden">
                                <img
                                    src="/our-projects/Frame133.png"
                                    alt="Worker with safety helmet"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="row-start-3 col-start-1 sm:row-start-2 rounded-lg overflow-hidden">
                                <img
                                    src="/our-projects/Frame134.png"
                                    alt="Worker in trench"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="row-start-3 col-start-2 sm:row-start-2 rounded-lg overflow-hidden">
                                <img
                                    src="/our-projects/Frame135.png"
                                    alt="Worker reviewing plans"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="row-start-4 h-auto col-start-1 col-span-2 sm:col-span-3 sm:row-start-2 sm:col-start-3 relative ">
                                <img
                                    src="/our-projects/Frame136.png"
                                    alt="Construction site"
                                    className="w-full h-auto sm:h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* START JOURNEY */}
                <div className="">
                    <Callbox />
                </div>
            </div>

            {/* START JOURNEY */}
            <div className="">
                <Callbox />
            </div>
        </div>
    );
};

export default Home;
