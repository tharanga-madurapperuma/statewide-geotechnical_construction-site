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

const Footer = () => {
    return (
        <div className="bg-slate-100 w-full h-[712px] flex justify-center items-center">
            <div className="flex flex-col mx-20 ">
                <div className="w-full flex justify-between items-start">
                    <div className="w-[32%] px-6">
                        <div className="w-full">
                            <img src={Logo} />
                        </div>
                        <div>
                            <p className="mt-10 pr-20">
                                Statewide Geotechnical (Aust) Pty Ltd delivers
                                reliable geotechnical solutions with in-house
                                drilling, testing, and reporting, ensuring
                                efficiency and quality across every project.
                            </p>
                        </div>
                        <div className="flex mt-10">
                            <img className="mr-2" src={InstaLogo} />
                            <img className="mr-2" src={DribbleLogo} />
                            <img className="mr-2" src={TwitterLogo} />
                        </div>
                    </div>

                    <div className="footer-links w-[17%] px-6">
                        <span className="footer-links-span">Quick Links</span>
                        <div>
                            <p>About us</p>
                            <p>Services</p>
                            <p>Contact Us</p>
                            <p>Resources</p>
                        </div>
                    </div>
                    <div className="footer-links w-[29%] px-6 py-0.02">
                        <span className="footer-links-span font-bold">
                            Get In Touch
                        </span>
                        <div className="flex items-center space-x-3 mt-2">
                            <img
                                className="w-6 h-6"
                                src={LocationIcon}
                                alt="Location Icon"
                            />

                            <div>
                                <div className="leading-tight">
                                    <p className=" font-medium">
                                        17-20 Summer Lane <br />
                                        Ringwood, VIC 3134
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 mt-2">
                            <img
                                className="w-6 h-6"
                                src={PhoneIcon}
                                alt="Phone Icon"
                            />

                            <div className="py-5">
                                <div className="leading-tight">
                                    <p className="font-medium">
                                        phone: +61 3 9123 4567 <br />
                                        Fax: +61 3 9123 4568
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 mt-2">
                            <img
                                className="w-6 h-6"
                                src={MailIcon}
                                alt="Mail Icon"
                            />

                            <div className="py-1">
                                <div className="leading-tight">
                                    <p className="font-medium">
                                        info@statewide.com.au <br />
                                        support@statewide.com.au
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-10">
                    <p>
                        Statewide Geotechnical 2025&copy;, All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
