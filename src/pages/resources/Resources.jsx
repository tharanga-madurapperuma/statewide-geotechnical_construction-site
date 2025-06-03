import React from "react";
import PolicyText from "../../components/text/PolicyText";
import CardDocumentation from "../../components/card-documentation/CardDocumentation";
import { DownloadIcon, ResourcesHero } from "../../assets/assets";
import HeroSection from "../../components/hero-section/HeroSection";
import ContactPage from "../contactUs/ContactPage";
import Drill from "/Documents/Drill Rig Induction.pdf";
import Drug from "/Documents/Drug and Alcohol Policy.pdf";
import Environmental from "/Documents/Environmental Policy.pdf";
import Health from "/Documents/Health and Safety Policy.pdf";
import Human from "/Documents/Human Rights Policy.pdf";
import Personal from "/Documents/Personal Protective Clothing and Equipment Policy.pdf";
import Seat from "/Documents/Seat Belt Policy.pdf";
import { Link } from "react-router-dom";

const Resources = () => {
    return (
        <div className="w-full flex flex-col md:mt-[108px] mt-[60px] sm:mt-[70px]">
            {/* First Section*/}
            <div className="w-full h-auto">
                <HeroSection
                    title="Resources"
                    description="We are committed to maintaining the highest standards of quality, safety, and compliance in all our operations. Our policies and documentation are designed to guide our practices and ensure the integrity of our services. Below are key policies that govern our operations."
                    buttonLink={"#"}
                    buttonText="Get in Touch"
                    heroImage={ResourcesHero}
                />
            </div>
            {/* second Section*/}

            <div className="-px-50 mt-[128px] md:px-0 w-full h-auto">
                <div>
                    <PolicyText
                        title="1. Quality Assurance Policy"
                        description="We strive for excellence in our engineering services. Our Quality Assurance Policy ensures that all projects are delivered to the highest standards, with thorough reviews conducted at every stage. Key aspects include:"
                        bulletText={[
                            "Comprehensive project planning and documentation",
                            "Regular internal audits and reviews",
                            "Client feedback mechanisms to continuously improve our services",
                        ]}
                    />
                    <div className="py-[56px] px-[95px]">
                        <hr className="mt-4 border-[#D1D5DB]" />
                    </div>
                </div>
                <div>
                    <PolicyText
                        title="2. Safety Policy"
                        description="The safety of our employees, clients, and the public is our top priority. Our Safety Policy encompasses:"
                        bulletText={[
                            "Compliance with all relevant health and safety regulations.",
                            "Regular training and safety drills for staff.",
                            "Implementation of risk management strategies on all job sites.",
                        ]}
                    />
                    <div className="py-[56px] px-[95px]">
                        <hr className="mt-4 border-[#D1D5DB]" />
                    </div>
                </div>
                <div>
                    <PolicyText
                        title="3. Environmental Policy"
                        description="We recognise the importance of sustainable practices in geotechnical engineering. Our Environmental Policy includes:"
                        bulletText={[
                            "Commitment to reducing our environmental impact.",
                            "Sustainable resource management and waste reduction strategies.",
                            "Compliance with environmental regulations and standards.",
                        ]}
                    />
                    <div className="py-[56px] px-[95px]">
                        <hr className="mt-4 border-[#D1D5DB]" />
                    </div>
                </div>
                <div>
                    <PolicyText
                        title="4. Confidentiality Policy"
                        description="We understand the importance of confidentiality in our client relationships. Our Confidentiality Policy covers:"
                        bulletText={[
                            "Protection of client information and project details.",
                            "Non-disclosure agreements for sensitive information.",
                            "Secure handling of all documents and data.",
                        ]}
                    />
                    <div className="py-[56px] px-[95px]">
                        <hr className="mt-4 border-[#D1D5DB]" />
                    </div>
                </div>
                <div>
                    <PolicyText
                        title="5. Complaints and Feedback Policy"
                        description="We welcome feedback and are committed to addressing any concerns. Our Complaints and Feedback Policy outlines:"
                        bulletText={[
                            "A straightforward process for submitting complaints or suggestions.",
                            "Timely responses to all feedback received.",
                            "Regular reviews of complaints to improve our services.",
                        ]}
                    />
                    <div className="py-[56px] px-[95px]">
                        <hr className="mt-4 border-[#D1D5DB]" />
                    </div>
                </div>
                <div>
                    <PolicyText
                        title="6. Data Protection and Privacy Policy"
                        description="We prioritise the privacy of our clients and employees. Our Data Protection and Privacy Policy ensures:"
                        bulletText={[
                            "Compliance with all applicable data protection laws.",
                            "Secure storage and processing of personal information.",
                            "Transparency in how we collect, use, and store data.",
                        ]}
                    />
                    <div className="py-[56px] px-[95px]">
                        <hr className="mt-4 border-[#D1D5DB]" />
                    </div>
                </div>
                <div>
                    <PolicyText
                        title="7. Insurance and Liability Documentation"
                        description="To protect our clients and employees, we maintain comprehensive insurance coverage, including:"
                        bulletText={[
                            "Professional Indemnity Insurance",
                            "Public Liability Insurance",
                            "Fleet and Equipment Insurance",
                            "WorkCover Insurance",
                        ]}
                    />
                </div>

                {/* Third Section*/}
                <div className="soil__second-section p-[45px] sm:p-[85px] w-full h-auto">
                    <div className="flex flex-col items-left justify-left w-full h-auto">
                        <h2 className="text-24 pb-[32px] sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left">
                            Document Resources
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                            For your convenience, we provide access to essential
                            documents related to our policies and practices.
                            Please find the following documents available for
                            download:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[35px] w-full">
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Personal Protective Clothing and Equipment Policy"
                                    number={1}
                                    link={Personal}
                                />
                            </div>
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Seat Belt Policy"
                                    number={2}
                                    link={Seat}
                                />
                            </div>
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Human Rights Policy"
                                    number={3}
                                    link={Human}
                                />
                            </div>
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Health and Safety Policy"
                                    number={4}
                                    link={Health}
                                />
                            </div>
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Drill Rig Induction"
                                    number={5}
                                    link={Drill}
                                />
                            </div>
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Drug and Alcohol Policy"
                                    number={6}
                                    link={Drug}
                                />
                            </div>
                            <div className="col-span-1 row-span-1 sm:w-full">
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Environmental Policy"
                                    number={7}
                                    link={Environmental}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-[45px] -mt-[60px] mb-[50px] sm:p-[85px] w-full h-auto">
                    <div className="flex flex-col items-left justify-left w-full h-auto">
                        <h2 className="text- pb-[32px] sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left">
                            Contact Us
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                            If you have any questions about our policies or
                            require further information, please feel free to{" "}
                            <Link
                                to="/contact"
                                className="text-blue-600 hover:underline"
                            >
                                contact us
                            </Link>
                        </p>

                        <div className="mt-6 text-left text-gray-500 text-sm sm:px-0">
                            © 2024 Statewide Geotechnical. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
