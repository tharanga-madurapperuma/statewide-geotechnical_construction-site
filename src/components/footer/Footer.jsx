import React from "react";
import { DribbleLogo, InstaLogo, Logo, TwitterLogo } from "../../assets/assets";

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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="flex mt-10">
                            <img className="mr-2" src={InstaLogo} />
                            <img className="mr-2" src={DribbleLogo} />
                            <img className="mr-2" src={TwitterLogo} />
                        </div>
                    </div>
                    <div className="home__footer-links w-[17%] px-6">
                        <span className="home__footer-links-span">Company</span>
                        <div>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Terms & Conditions</p>
                            <p>Blog</p>
                            <p>Contact Us</p>
                            <p>Privacy Policy</p>
                            <p>Investors</p>
                        </div>
                    </div>
                    <div className="home__footer-links w-[17%] px-6">
                        <span className="home__footer-links-span">
                            Initiatives
                        </span>
                        <div>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="home__footer-links w-[17%] px-6">
                        <span className="home__footer-links-span">
                            Popular Services
                        </span>
                        <div>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="px-6">
                    <p>GIGHAVE 2024&copy;, All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
