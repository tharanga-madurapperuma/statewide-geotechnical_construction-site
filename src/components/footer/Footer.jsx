import React from "react";
import {
    DribbleLogo,
    InstaLogo,
    Logo,
    TwitterLogo,
    LocationIcon,
    PhoneIcon,
    MailIcon,
} from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-slate-100 w-full h-auto flex justify-center items-center font-inter text-gray-900">
            <div className="w-full px-8 sm:px-[70px] md:px-[80px] lg:px-[100px] xl:px-[110px] max-w-[1920px] mt-48 flex flex-col md:mt-72 lg:mt-[100px]">
                {/* <div className="w-full flex flex-col md:flex-row justify-between items-start">
                    <div className="w-full md:w-2/4">
                        <Link to={"/"}>
                            <div className="w-full">
                                <img src={Logo} />
                            </div>
                        </Link>

                        <div>
                            <p className="md:w-[70%] font-inter font-400 text-14 mt-8 mb-4 md:text-16">
                                Statewide Geotechnical (Aust) Pty Ltd delivers
                                reliable geotechnical solutions with in-house
                                drilling, testing, and reporting, ensuring
                                efficiency and quality across every project.
                            </p>
                        </div>
                        <div className="flex mb-40 mt-8">
                            <img className="mr-2" src={InstaLogo} />
                            <img className="mr-2" src={DribbleLogo} />
                            <img className="mr-2" src={TwitterLogo} />
                        </div>
                    </div>
                    <div className="w-full flex md:w-2/4">
                        <div className="w-1/3 sm:w-1/2 md:w-1/2 md:pl-20">
                            <span className="font-poppins font-600 text-16 lg:text-18">
                                Quick Links
                            </span>
                            <div className="font-inter font-400 text-14 mt-8 lg:text-16">
                                <Link to={"/aboutus"}>
                                    <p className="mb-2">About us</p>
                                </Link>
                                <Link to={"/contact"}>
                                    <p className="mb-2">Contact Us</p>
                                </Link>
                                <Link to={"/resources"}>
                                    <p className="mb-2">Resources</p>
                                </Link>
                            </div>
                        </div>
                        <div className=" w-2/3 sm:w-1/2 md:w-2/2 px-6 md:pl-40 lg:flex lg:flex-col items-end">
                            <div>
                                <span className="font-poppins w-full font-600 text-16 lg:text-18">
                                    Get In Touch
                                </span>
                                <div className="flex items-center space-x-3 mt-8 w-full">
                                    <img
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                        src={LocationIcon}
                                        alt="Location Icon"
                                    />

                                    <div>
                                        <div className="">
                                            <p className=" font-inter font-400 text-12 sm:text-14 lg:text-16">
                                                17-20 Summer Lane <br />
                                                Ringwood, VIC 3134
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 mt-6 w-full">
                                    <img
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                        src={PhoneIcon}
                                        alt="Phone Icon"
                                    />

                                    <div className="">
                                        <div className="">
                                            <p className="font-inter font-400 text-12 sm:text-14 lg:text-16">
                                                phone: +61 3 9123 4567 <br />
                                                Fax: +61 3 9123 4568
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 mt-6 w-full">
                                    <img
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                        src={MailIcon}
                                        alt="Mail Icon"
                                    />

                                    <div className="">
                                        <div className="">
                                            <p className="font-inter font-400 text-12 sm:text-14 lg:text-16">
                                                info@statewide.com.au <br />
                                                support@statewide.com.au
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
                    <div className="w-full col-span-1 sm:col-span-3 md:col-span-1">
                        <Link to={"/"}>
                            <div className="w-full">
                                <img src={Logo} />
                            </div>
                        </Link>

                        <div>
                            <p className="md:w-full font-inter font-400 mt-8 mb-4 text-12 md:text-12 lg:text-14 xl:text-16">
                                Statewide Geotechnical (Aust) Pty Ltd delivers
                                reliable geotechnical solutions with in-house
                                drilling, testing, and reporting, ensuring
                                efficiency and quality across every project.
                            </p>
                        </div>
                        <div className="flex mb-40 mt-8">
                            <img className="mr-2" src={InstaLogo} />
                            <img className="mr-2" src={DribbleLogo} />
                            <img className="mr-2" src={TwitterLogo} />
                        </div>
                    </div>
                    <div className="w-full col-span-1 ">
                        <div className="w-full xs:pl-8 sm:pl-0">
                            <span className="font-poppins font-600 text-14 md:text-14 lg:text-16 xl:text-16">
                                Quick Links
                            </span>
                            <div className="font-inter font-400 mt-8 text-12 md:text-12 lg:text-14 xl:text-16">
                                <Link to={"/aboutus"}>
                                    <p className="mb-2">About us</p>
                                </Link>
                                <Link to={"#"}>
                                    <p className="mb-2">Services</p>
                                </Link>
                                <Link to={"/contact"}>
                                    <p className="mb-2">Contact Us</p>
                                </Link>
                                <Link to={"/resources"}>
                                    <p className="mb-2">Resources</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full col-span-1 ">
                        <div className="w-full">
                            <span className="font-poppins font-600 text-14 md:text-14 lg:text-16 xl:text-16">
                                Our Affiliations
                            </span>
                            <div className="font-inter font-400 mt-8 text-12 md:text-12 lg:text-14 xl:text-16">
                                <Link to={"#"}>
                                    <p className="mb-2">Engineers Australia</p>
                                </Link>
                                <Link to={"#"}>
                                    <p className="mb-2">
                                        Australian Geomechanics Society
                                    </p>
                                </Link>
                                <Link to={"#"}>
                                    <p className="mb-2">
                                        Australian Drilling Industry Association
                                    </p>
                                </Link>
                                <Link to={"#"}>
                                    <p className="mb-2">NATA</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full col-span-1 ">
                        <div className="w-full flex-col items-end xs:pl-8 sm:pl-0">
                            <span className="font-poppins w-full font-600 text-14 md:text-14 lg:text-16 xl:text-16">
                                Get In Touch
                            </span>
                            <div className="flex items-center space-x-3 mt-8 w-full">
                                <img
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                    src={LocationIcon}
                                    alt="Location Icon"
                                />

                                <div>
                                    <div className="">
                                        <p className=" font-inter font-400 text-12 md:text-12 lg:text-14 xl:text-16">
                                            17-20 Summer Lane <br />
                                            Ringwood, VIC 3134
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 mt-6 w-full">
                                <img
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                    src={PhoneIcon}
                                    alt="Phone Icon"
                                />

                                <div className="">
                                    <div className="">
                                        <p className="font-inter font-400 text-12 md:text-12 lg:text-14 xl:text-16">
                                            phone: +61 3 9123 4567 <br />
                                            Fax: +61 3 9123 4568
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 mt-6 w-full">
                                <img
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                    src={MailIcon}
                                    alt="Mail Icon"
                                />

                                <div className="w-full">
                                    <p className="w-full font-inter font-400 text-10 md:text-10 lg:text-14 xl:text-16 text-wrap">
                                        info@statewide.com.au <br />
                                        support@statewide.com.au
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <p className="w-[70%] font-inter font-400 text-12 md:text-14 lg:text-16 pt-40 md:pt-0 pb-20 md:pb-0 md:mb-72 lg:mb-[100px]">
                        Statewide Geotechnical 2025&copy;, All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
