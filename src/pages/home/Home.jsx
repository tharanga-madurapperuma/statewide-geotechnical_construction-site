import React, { useEffect, useRef, useState } from "react";
import Callbox from "../../components/callbox/Callbox";
import Card from "../../components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import InfoSection from "../../components/info-section/InfoSection";
import { useNavigate } from "react-router-dom";
import {
    Check,
    EnvironmentalDrilling,
    GeotechnicalDrillingTesting,
    HomeOnly,
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    LandCapabilityAssessment,
    ProfilePics,
    rightArrow,
    RoadPavementDesign,
    SiteInvestigations,
    SoilRockTesting,
    WhatWeOffer,
    WhoWeAre,
} from "../../assets/assets";
import TextBox from "../../components/textBox/TextBox";

const Home = () => {
    const navigate = useNavigate();

    const swiperRef = useRef(null);
    const mainDivRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isAtEdge, setIsAtEdge] = useState(false);
    const swiperRefText = React.useRef(null);

    // Home top
    useEffect(() => {
        const element = document.getElementById("hero");
        if (element) {
            window.scrollBy({ top: -100, behavior: "smooth" });
        }
    }, []);

    const services = [
        {
            image: SiteInvestigations,
            title: "Site Investigations",
            description:
                "Comprehensive on-site assessments to identify ground conditions, potential risks, and construction feasibility.",
            link: "site",
        },
        {
            image: EnvironmentalDrilling,
            title: "Environmental Drilling",
            description:
                "Specialised drilling for groundwater studies, contamination assessments, and environmental compliance.",
            link: "envdrilling",
        },
        {
            image: SoilRockTesting,
            title: "Soil & Rock Testing",
            description:
                "NATA Accredited Laboratory facilities analysing soil and rock properties for sustainability and safety.",
            link: "nata-accredited",
        },
        {
            image: RoadPavementDesign,
            title: "Road Pavement Design",
            description:
                "Engineering-based pavement solutions designed for durability, load-bearing capacity, and long-term performance.",
            link: "road",
        },
        {
            image: LandCapabilityAssessment,
            title: "Engineering Assessment",
            description:
                "Expert geotechnical assessments and innovative engineering solutions for stable, cost-effective construction projects.",
            link: "engineering-services",
        },
        // {
        //     image: GeotechnicalDrillingTesting,
        //     title: "Geotechnical Drilling & Testing",
        //     description:
        //         "Precision drilling for soil and rock investigations to support construction and engineering projects.",
        //     link: "drilling",
        // },
        // {
        //     image: EarthworkInspections,
        //     title: "Earthwork Inspections",
        //     description:
        //         "Comprehensive testing and inspections to ensure soil compaction, stability, and compliance with construction standards.",
        //     link: "inspections",
        // },

        // {
        //     image: SlopeStabilityAssessment,
        //     title: "Slope Stability Assessment",
        //     description:
        //         "Detailed evaluation of slopes to prevent landslides, erosion, and structural failures in various terrains.",
        //     link: "slopes",
        // },

        // {
        //     image: RetainingWallsExcavation,
        //     title: "Retaining Walls & Excavation",
        //     description:
        //         "Geotechnical assessments for safe excavation and retaining wall design to prevent soil movement and structural damage.",
        //     link: "retaining",
        // },

        // {
        //     image: FoundationEngineering,
        //     title: "Foundation Engineering",
        //     description:
        //         "Expert analysis and design of strong, stable foundations for residential, commercial, and industrial structures.",
        //     link: "foundationbuilt",
        // },
    ];

    // Text Carousel
    const textCarousel = [
        {
            topicText:
                "Ensuring Every Challenge is Met with Effective Solutions",
            description: (
                <>
                    We have used Statewide Geotechnical for many different and
                    varying projects, ranging from domestic construction to high
                    rise towers and industrial facilities. Their team of skilled
                    engineers and geologists brings a deep understanding of soil
                    mechanics, foundation engineering, and risk assessment,
                    ensuring that every challenge is met with a well-thought-out
                    and effective solution. Their ability to assess complex
                    ground conditions and provide clear, practical guidance can
                    make a positive impact on a project's success.
                </>
            ),
            author: " - Stuart Sellars - Farrard Engineering",
        },
        {
            topicText:
                "Expertise in Local Geotechnical Conditions is Second to None",
            description: (
                <>
                    I have been working with David Alkemade and the Statewide
                    Team for over 10 years. Statewide continually provide the
                    highest quality geotechnical reports and detailed, reliable
                    recommendations that enable us to maximise the efficiency of
                    our structural foundation designs. Always professional and a
                    pleasure to deal with, their expertise in local geotechnical
                    conditions is second to none.
                </>
            ),
            author: " - Mark Janus, MRM Group",
        },
        {
            topicText:
                "Clear, Well-Considered Geotechnical Advice That Mitigates Risks",
            description: (
                <>
                    We've had the pleasure of working with Statewide
                    Geotechnical on multiple projects over the last decade, and
                    their responsiveness, collaborative approach, and practical
                    approach have been invaluable. They consistently deliver
                    clear, well-considered geotechnical advice that respond to
                    our structural design and mitigate risks early.
                </>
            ),
            author: " - Elliot Smith, Matter",
        },
        {
            topicText: "Dependable Expertise for Every Build",
            description: (
                <>
                    2MH Consulting has been working with Statewide Geotechnical
                    for over 10 years now. We design and project manage new
                    sports facility builds across Victoria, utilising Statewide
                    for pavement design advice, and inspections and approvals of
                    sub-grade constructions. We depend upon the Statewide teams'
                    experience and knowledge to assist us through every build.
                </>
            ),
            author: " - Mick Hassett, 2MH Consulting",
        },
    ];

    // Carousel constraints
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div
            className="flex flex-col w-full bg-slate-background md:mt-[108px] mt-[45px] sm:mt-[70px]"
            id="hero"
            ref={mainDivRef}
        >
            {/* HOME - FIRST SECTION */}
            <div className="h-auto w-full">
                <div className="w-full h-auto flex flex-col items-center">
                    <div className="h-full w-full p-2 pt-4 sm:pt-[24px] md:pt-0 sm:p-[16px] flex flex-col items-center ">
                        {/* <img className="rounded-xl top-0" src={HomeHero} /> */}
                        <div
                            className="w-full h-auto rounded-2xl p-6 xl:pl-[94px] xl:pt-[96px] xl:pb-[96px] sm:p-[54px] md:p-[64px] lg:p-[84px] xl:p-[94px] flex flex-col justify-between sm:relative"
                            style={{
                                background: `url(${HomeOnly})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >
                            <div>
                                <h1 className=" text-blue-950 w-full font-inter font-700 text-28 sm:text-40 md:text-48 lg:text-[64px] xl:text-[76px] lg:leading-[70px] xl:leading-[91px] leading-8 sm:leading-[44px] md:leading-[56px]">
                                    Building the Future
                                    <br /> on Solid Foundations.
                                </h1>
                                <p className="w-[90%] lg:w-[60%] mt-[14px] font-poppins font-400 text-gray-600 text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24">
                                    Established, Reliable, Multi-Disciplinary,
                                    Accredited
                                </p>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:mt-[32px] mt-8">
                                    <button
                                        onClick={() => {
                                            navigate("/contact");
                                        }}
                                        className="w-auto text-nowrap h-40 md:h-[44px] lg:h-[48px] xl:h-[50px] bg-blue-600 hover:bg-blue-700  text-white rounded-xl font-inter font-600 text-12 md:text-14 lg:text-16 xl:text-18 px-4 md:px-8 transition duration-500 cursor-pointer"
                                    >
                                        Get a Quote
                                    </button>
                                    <div className="w-auto hidden h-[38px] md:h-[42px] lg:h-[46px] xl:h-[48px] text-nowrap bg-transparent hover:bg-blue-transparent  text-blue-600 hover:text-blue-700 outline-2 hover:outline-blue-800 outline-solid outline-blue-600 font-inter font-600 text-12 md:text-14 lg:text-16 xl:text-18 rounded-lg items-center justify-center px-4 md:px-8 mt-2 sm:mt-0 sm:ml-4  transition duration-500 cursor-pointer">
                                        <p className="mr-2 font-medium">
                                            Explore Services
                                        </p>
                                        <img src={rightArrow} />
                                    </div>
                                </div>
                            </div>

                            {/* 2 boxes for below xl screens */}
                            <div className="w-full xl:hidden">
                                <div className="w-full h-[150px] md:w-[80%] xl:w-[65%] sm:h-[170px] md:h-[200px] xl:h-[220px] mt-15 md:mt-[100px] lg:mt-[150px] xl:mt-[142px] mb-2 xl:mb-[] lg:mb-0 sm:flex sm:relative bottom-0">
                                    <div className="bg-white w-full sm:w-2/3 h-full rounded-3xl">
                                        <div className="flex h-full cursor-pointer items-center">
                                            <div className="h-full w-2/5 flex items-center justify-center">
                                                <img
                                                    className="object-cover h-[80%] w-[80%] rounded-2xl"
                                                    src={
                                                        GeotechnicalDrillingTesting
                                                    }
                                                />
                                            </div>
                                            <div className="h-full w-3/5 pr-4 flex flex-col justify-center font-inter font-600 text-14 md:text-18 lg:text-[20px] xl:text-24">
                                                <h3 className="text-gray-950">
                                                    Laying Strong Foundations
                                                    for Tomorrow's Structures
                                                </h3>
                                                <p className="text-gray-700 mt-4 font-inter font-400 text-[11px] md:text-14 lg:text-14">
                                                    Our expert geotechnical team
                                                    provides precise drilling,
                                                    testing, and reporting to
                                                    ensure stability, safety,
                                                    and efficiency for every
                                                    project.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white hidden sm:block w-1/3 h-full rounded-3xl ml-5">
                                        <div className="flex items-center justify-center flex-col h-full w-full">
                                            <img src={ProfilePics} />
                                            <h1 className="font-inter font-600 text-32 lg:text-40">
                                                1K+
                                            </h1>
                                            <span className="font-inter font-400 text-24 ">
                                                Clients
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero section white bg cards for above xl screens */}
                            <div className="w-full hidden mt-[64px] xl:flex">
                                <div className="w-1/2 flex">
                                    <div className="bg-white w-3/5 h-full rounded-3xl">
                                        <div className="flex flex-col p-[24px] h-full cursor-pointer items-center">
                                            <div className="h-full  flex items-center justify-center">
                                                <img
                                                    className="object-cover rounded-2xl"
                                                    src={
                                                        GeotechnicalDrillingTesting
                                                    }
                                                />
                                            </div>
                                            <div className="h-full flex flex-col mt-[20px] justify-center font-inter font-600 text-14 md:text-18 lg:text-[20px] xl:text-24">
                                                <h3 className="text-gray-950">
                                                    Laying Strong Foundations
                                                    for Tomorrow's Structures
                                                </h3>
                                                <p className="text-gray-700 mt-4 font-inter font-400 text-[11px] md:text-14 lg:text-14">
                                                    Our expert geotechnical team
                                                    provides precise drilling,
                                                    testing, and reporting to
                                                    ensure stability, safety,
                                                    and efficiency for every
                                                    project.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white hidden sm:block h-full rounded-3xl ml-5 w-2/5">
                                        <div className="flex items-center justify-center flex-col h-full w-full">
                                            <img src={ProfilePics} />
                                            <h1 className="font-inter font-600 text-32 lg:text-40">
                                                1K+
                                            </h1>
                                            <span className="font-inter font-400 text-24 ">
                                                Clients
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* New Update | Text carousel */}
                                <div className="w-1/2 bg-white rounded-3xl ml-5 flex items-center p-[32px]">
                                    <div
                                        className="w-full"
                                        onMouseEnter={() => {
                                            if (
                                                swiperRefText.current &&
                                                swiperRefText.current.swiper
                                            ) {
                                                swiperRefText.current.swiper.autoplay.stop();
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            if (
                                                swiperRefText.current &&
                                                swiperRefText.current.swiper
                                            ) {
                                                swiperRefText.current.swiper.autoplay.start();
                                            }
                                        }}
                                    >
                                        <Swiper
                                            ref={swiperRefText}
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            keyboard={{
                                                enabled: true,
                                            }}
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: false,
                                            }}
                                            loopAdditionalSlides={1}
                                            speed={2500}
                                            loop={true}
                                            navigation={true}
                                            modules={[
                                                Autoplay,
                                                Keyboard,
                                                Pagination,
                                                Navigation,
                                            ]}
                                            className="textSwiper"
                                        >
                                            {textCarousel.map((text, index) => (
                                                <SwiperSlide key={index}>
                                                    <TextBox {...text} />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Carousel for below xl screens */}
            <div className="pb-[50px] xl:hidden sm:pb-[100px] md:pb-40 xl:pb-[64px] pt-[70px] md:pt-[100px] sm:pt-[100px] xl:pt-[128px] w-full">
                <div
                    className="px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px] w-full"
                    onMouseEnter={() => {
                        if (
                            swiperRefText.current &&
                            swiperRefText.current.swiper
                        ) {
                            swiperRefText.current.swiper.autoplay.stop();
                        }
                    }}
                    onMouseLeave={() => {
                        if (
                            swiperRefText.current &&
                            swiperRefText.current.swiper
                        ) {
                            swiperRefText.current.swiper.autoplay.start();
                        }
                    }}
                >
                    <Swiper
                        ref={swiperRefText}
                        slidesPerView={1}
                        spaceBetween={10}
                        keyboard={{
                            enabled: true,
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loopAdditionalSlides={1}
                        speed={2500}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Keyboard, Pagination, Navigation]}
                        className="textSwiper"
                    >
                        {textCarousel.map((text, index) => (
                            <SwiperSlide key={index}>
                                <TextBox {...text} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* HOME - SECOND SECTION */}
            <div className="w-full">
                {/* WHO WE ARE */}
                <div className="mt-[0px] sm:mt-[0px] md:mt-40 xl:mt-[64px] px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px]">
                    <InfoSection
                        title="Who We Are"
                        description="At Statewide Geotechnical, we specialise in delivering expert geotechnical drilling, testing, and consulting services across Melbourne, Victoria, South Australia, and New South Wales. With advanced equipment and a team of highly qualified professionals, we provide precise site assessments, environmental drilling, and geotechnical solutions tailored to your project needs. Our commitment to safety, accuracy, and efficiency makes us the trusted partner for engineers, developers, and government agencies."
                        buttonText="Learn More About Us"
                        buttonLink="/aboutus"
                        imageSrc={WhoWeAre}
                        reverse={false}
                    />
                </div>

                {/* WHAT WE OFFER */}
                <div className="w-full flex flex-col items-center">
                    <div className="overflow-x-hidden w-full px-[32px] md:px-80 sm:px-[70px] lg:px-[100px] xl:px-[110px] xl:mt-[128px]  max-w-[1920px]">
                        <div className="w-full h-auto mt-[20vw] sm:mt-62 xl:mt-0 flex flex-col items-center">
                            <div className="w-full flex justify-between items-center sm:px-0 xl:px-0">
                                <h1 className="font-inter font-600 text-28 sm:text-32 md:text-40 lg:text-56 xl:text-62">
                                    What We Offer
                                </h1>
                                {/* <p className="text-blue-700 hover:text-blue-900 transition duration-500 cursor-pointer font-inter font-600 text-16 sm:text-18 md:text-24 text-right">
                                SEE ALL SERVICES
                            </p> */}
                            </div>
                            <div className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-3 lg:gap-8 justify-between w-full h-full mt-10 mb-10 md:mb-1 sm:px-0 xl:px-0">
                                <div className="h-full lg:w-full ">
                                    <img
                                        className="object-cover h-full w-full rounded-3xl"
                                        src={WhatWeOffer}
                                    />
                                </div>
                                <div className="h-full w-full bg-blue-200 rounded-3xl mt-2 sm:mt-0">
                                    <div className="flex flex-col h-full justify-between p-8 xl:p-[50px]">
                                        <div className="font-inter font-500 w-auto text-blue-700 text-12 md:text-14 lg:text-18 rounded-xl text-center">
                                            <p className="bg-blue-300 w-[80px] lg:w-[100px] py-1 rounded-2xl">
                                                Services
                                            </p>
                                        </div>
                                        <h2 className="font-inter font-600 text-24 md:text-3 lg:text-40 text-gray-900">
                                            Site Investigation
                                        </h2>
                                        <p className="font-inter font-400 text-gray-600 text-14 md:text-16 lg:text-18">
                                            Our consultancy services provide
                                            precise and efficient solutions for
                                            geotechnical and laboratory testing.
                                            Using advanced drilling techniques,
                                            we ensure accurate soil and rock
                                            sampling, groundwater monitoring,
                                            and site assessments for safe and
                                            stable construction.
                                        </p>
                                        <div className="flex flex-col md:flex-row items-center justify-start w-full mt-4 md:mt-0">
                                            <div className="flex items-center justify-left w-full">
                                                <div className="p-1 rounded-3xl bg-blue-300">
                                                    <img src={Check} />
                                                </div>
                                                <div className="font-inter font-600 text-gray-900 text-24 md:text-28 lg:text-32 pl-2 ">
                                                    30000+
                                                </div>
                                                <div className="font-inter font-400 text-gray-600 text-12 md:text-14 lg:text-18 pl-2">
                                                    Successful
                                                    <br />
                                                    Projects
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-left w-full md:ml-3 mt-2 md:mt-0">
                                                <div className="p-1 rounded-3xl bg-blue-300">
                                                    <img src={Check} />
                                                </div>
                                                <div className="font-inter font-600 text-gray-900 text-24 md:text-28 lg:text-32 pl-2 ">
                                                    30+
                                                </div>
                                                <div className="font-inter font-400 text-gray-600 text-12 md:text-14 lg:text-18 pl-2">
                                                    Years of
                                                    <br />
                                                    Excellence
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CAROUSEL - SWIPER JS */}
                            <div className="w-full flex flex-col items-center lg:mt-48 sm:px-0">
                                <div className="sm:hidden w-full">
                                    {/* Small screen */}
                                    <Swiper
                                        slidesPerView={2}
                                        spaceBetween={10}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[
                                            Keyboard,
                                            Pagination,
                                            Navigation,
                                        ]}
                                        className="mySwiper"
                                    >
                                        {services.map((service, index) => (
                                            <SwiperSlide key={index}>
                                                <Card {...service} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className="hidden sm:block md:hidden w-full">
                                    {/* Small screen */}
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[
                                            Keyboard,
                                            Pagination,
                                            Navigation,
                                        ]}
                                        className="mySwiper"
                                    >
                                        {services.map((service, index) => (
                                            <SwiperSlide key={index}>
                                                <Card {...service} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div
                                    className="hidden md:block sm:w-full md:w-full md:mt-2 xl:w-full sm:px-0"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => {
                                        setIsHovering(false);
                                        setIsAtEdge(false); // 🔥 Reset this when mouse leaves
                                    }}
                                >
                                    <Swiper
                                        ref={swiperRef}
                                        slidesPerView={4}
                                        spaceBetween={32}
                                        keyboard={{ enabled: true }}
                                        navigation={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        onSlideChange={() => {
                                            const swiper =
                                                swiperRef.current.swiper;
                                            setIsAtEdge(
                                                swiper.isBeginning ||
                                                    swiper.isEnd
                                            );
                                        }}
                                        modules={[
                                            Keyboard,
                                            Pagination,
                                            Navigation,
                                        ]}
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
                </div>

                {/* WHY CHOOSE US */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-full mt-8 sm:mt-80 xl:py-[64px] flex flex-col items-center bg-white  max-w-[1920px]">
                        <div className="w-full px-[10%] sm:px-full md:px-80 lg:px-[100px] xl:px-[110px]">
                            <div className="text-center">
                                <h1 className="font-inter font-600 text-gray-800 text-28 sm:text-32 md:text-40 lg:text-56 xl:text-62">
                                    Why Choose Us?
                                </h1>
                                <p className="text-gray-900 pt-40 font-inter font-400 text-14 sm:text-16 md:text-18 lg:text-24">
                                    Comprehensive ground investigations,
                                    NATA-accredited soil and rock testing, and
                                    technical reporting—all under one roof for
                                    seamless, reliable results.
                                </p>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-4 justify-evenly mt-8 md:mt-48 lg:mt-62 xl:mt-80">
                                <div className="flex flex-col justify-start items-center">
                                    <img
                                        className="w-80 h-80 md:h-auto md:w-auto"
                                        src={Icon1}
                                    />
                                    <p className="text-center mt-1 md:mt-3 lg:mt-4 xl:mt-8 font-inter font-500 text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24">
                                        Advanced Drilling<br></br>Technology
                                    </p>
                                </div>
                                <div className="flex flex-col justify-start items-center">
                                    <img
                                        className="w-80 h-80 md:h-auto md:w-auto"
                                        src={Icon2}
                                    />
                                    <p className="text-center mt-1 md:mt-3 lg:mt-4 xl:mt-8 font-inter font-500 text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24">
                                        Certified & Experienced<br></br>Team
                                    </p>
                                </div>
                                <div className="flex flex-col justify-start items-center">
                                    <img
                                        className="w-80 h-80 md:h-auto md:w-auto"
                                        src={Icon3}
                                    />
                                    <p className="text-center mt-1 md:mt-3 lg:mt-4 xl:mt-8 font-inter font-500 text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24">
                                        Comprehensive<br></br>Geotechnical
                                        Solutions
                                    </p>
                                </div>
                                <div className="flex flex-col justify-start items-center">
                                    <img
                                        className="w-80 h-80 md:h-auto md:w-auto"
                                        src={Icon4}
                                    />
                                    <p className="text-center mt-1 md:mt-3 lg:mt-4 xl:mt-8 font-inter font-500 text-12 sm:text-14 md:text-16 lg:text-18 xl:text-24">
                                        Commitment to Safety<br></br>&
                                        Compliance
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* START JOURNEY */}
                <div className="w-full flex flex-col items-center">
                    <div className="px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px] max-w-[1920px]">
                        <Callbox />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
