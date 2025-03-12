import React from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import LicenseCard from "../../components/card-icon-license/CardIconLicense";
import { DocIcon } from "../../assets/assets";
import AppointmentRequestForm from "../../components/form/AppointmentRequestForm";
import { BsDribbble, BsInstagram } from "react-icons/bs";
import { RiTwitterLine } from "react-icons/ri";
import ContactCard from "../../components/contacts/ContactCard";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const ContactPage = () => {
    return (
        <div className="md:mt-[108px]">
            <HeroSection
                title={"Contact Us"}
                description={
                    "We’re here to help! Whether you're ready to start your next project or just have a question, the team at Statewide Geotechnical (Aust) Pty Ltd is always available to assist. Let’s connect and see how we can help you with your geotechnical, geological, and engineering needs."
                }
                hasBookButton={true}
            />

            <div className="lg:block xl:hidden hidden px-8 md:px-[100px]">
                <div className="flex flex-row place-content-between gap-4">
                    <ContactCard icon={<FaMapMarkerAlt />} title="Email Us">
                        <p>info@statewide.com.au</p>
                        <p>support@statewide.com.au</p>
                    </ContactCard>{" "}
                    <ContactCard icon={<FaMapMarkerAlt />} title="Call us">
                        <p>phone: +61 3 9123 4567</p>
                        <p>Fax: +61 3 9123 4568</p>
                    </ContactCard>
                    <ContactCard
                        icon={<FaMapMarkerAlt />}
                        title="Statewide Geotechnical (Aust) Pty Ltd"
                    >
                        <p>17-20 Summer Lane</p>
                        <p>Ringwood, VIC 3134</p>
                    </ContactCard>
                </div>
            </div>

            <div className="sm:block lg:hidden hidden px-8 sm:px-[80px]">
                <div className="flex flex-row place-content-between gap-4">
                    <ContactCard icon={<IoIosMail />} title="Email Us">
                        <p>info@statewide.com.au</p>
                        <p>support@statewide.com.au</p>
                    </ContactCard>{" "}
                    <ContactCard icon={<IoCall />} title="Call us">
                        <p>phone: +61 3 9123 4567</p>
                        <p>Fax: +61 3 9123 4568</p>
                    </ContactCard>
                </div>
                <div className="flex justify-center pt-40 mb-48">
                    <ContactCard
                        icon={<FaMapMarkerAlt />}
                        title="Statewide Geotechnical (Aust) Pty Ltd"
                    >
                        <p>17-20 Summer Lane</p>
                        <p>Ringwood, VIC 3134</p>
                    </ContactCard>
                </div>
            </div>

            <div className="sm:hidden  flex justify-center  my-8 ">
                <div className="flex flex-col  gap-8">
                    <ContactCard icon={<IoIosMail />} title="Email Us">
                        <p>info@statewide.com.au</p>
                        <p>support@statewide.com.au</p>
                    </ContactCard>{" "}
                    <ContactCard icon={<IoCall />} title="Call us">
                        <p>phone: +61 3 9123 4567</p>
                        <p>Fax: +61 3 9123 4568</p>
                    </ContactCard>
                    <ContactCard
                        icon={<FaMapMarkerAlt />}
                        title="Statewide Geotechnical (Aust) Pty Ltd"
                    >
                        <p>17-20 Summer Lane</p>
                        <p>Ringwood, VIC 3134</p>
                    </ContactCard>
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
                <AppointmentRequestForm />
            </div>

            <div className="flex flex-col items-center">
                <div className="sm:px-[70px] md:px-[80px] lg:px-[100px] xl:px-[110px] mb-[3rem] px-8 py-3 max-w-[1920px]">
                    <h2 className="lg:text-[48px]  text-2xl py-[2rem] font-600 text-gray-900 ">
                        Why Choose Us
                    </h2>
                    <div className="w-full h-full lg:px-0  flex space-b place-content-between gap-[40px] lg:gap-[68px] flex-col  md:flex-row">
                        <LicenseCard
                            image={DocIcon}
                            title="Expertise You Can Trust"
                            description={
                                "With years of experience in geotechnical engineering and a dedicated team, we’re equipped to tackle projects of any scale."
                            }
                        />
                        <LicenseCard
                            image={DocIcon}
                            title="Comprehensive Services"
                            description={
                                "We handle everything from drilling and soil testing to full-scale foundation design and site assessment."
                            }
                        />
                        <LicenseCard
                            image={DocIcon}
                            title="Customer-Centric Approach"
                            description={
                                "Your project is unique, and we’re here to provide personalized solutions that meet your specific requirements."
                            }
                        />
                    </div>
                </div>

                <div className="md:px-[80px] lg:px-[100px] xl:px-[110px] mb-[3rem] px-8 lg:mt-[64px] py-3 w-full max-w-[1920px]">
                    <h2 className="lg:text-48 text-2xl font-600 text-gray-900">
                        Follow Us
                    </h2>
                    <p className="text-gray-600 text-18 font-400 py-[2rem]">
                        Stay updated on the latest projects, tips, and company
                        news. Follow us on our social media channels:
                    </p>
                    <div className="flex items-start flex-row gap-4">
                        <div className=" bg-[#003ED7] text-white rounded-full md:text-4xl p-3">
                            <BsInstagram />
                        </div>
                        <div className=" bg-[#003ED7] text-white rounded-full md:text-4xl p-3">
                            <BsDribbble />
                        </div>
                        <div className=" bg-[#003ED7] text-white rounded-full md:text-4xl p-3">
                            <RiTwitterLine />
                        </div>
                    </div>
                </div>

                <div className="md:px-[80px] lg:px-[100px] xl:px-[110px] mb-[3rem] px-8 lg:mt-[64px] p-3 w-full max-w-[1920px]">
                    <h2 className="lg:text-48 text-2xl font-600 text-gray-900">
                        Visit Our Office
                    </h2>
                    <p className="text-gray-600 text-18 font-400 py-[2rem]">
                        Want to meet in person? Use the map below to find us!
                    </p>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.5903570187356!2d145.21634007662803!3d-37.82306303457078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad639673e0ffe31%3A0xeeb32b27991fbcd0!2sStatewide%20Geotechnical%20(Aust)%20Pty%20Ltd!5e0!3m2!1sen!2slk!4v1741437523054!5m2!1sen!2slk"
                        className="w-full md:w-[100%] h-[250px] md:h-[500px] rounded-lg shadow-lg"
                        style={{
                            border: "0",
                            borderRadius: "10px",
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="lg:px-[110px] lg:mt-[64px] p-3 w-full max-w-[1920px] mb-[64px]">
                    <h2 className="lg:text-48 text-2xl font-600 text-gray-900">
                        Have a Question?
                    </h2>
                    <p className="text-gray-600 text-18 font-400 py-[2rem]">
                        Drop us a message, and we’ll respond promptly!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
