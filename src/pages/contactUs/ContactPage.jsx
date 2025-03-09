import React from "react"
import ContactSection from "../../components/contacts/ContactSection"
import HeroSection from "../../components/hero-section/HeroSection"
import LicenseCard from "../../components/card-icon-license/CardIconLicense"
import {DocIcon} from "../../assets/assets"
import AppointmentRequestForm from "../../components/form/AppointmentRequestForm"
import {BsDribbble, BsInstagram} from "react-icons/bs"
import {RiTwitterLine} from "react-icons/ri"

const ContactPage = () => {
  return (
    <div>
      <HeroSection
        title={"Contact Us"}
        description={
          "We’re here to help! Whether you’re ready to start your next project or just have a question, the team at Statewide Geotechnical (Aust) Pty Ltd is always available to assist. Let’s connect and see how we can help you with your geotechnical, geological, and engineering needs."
        }
      />

      <div className="lg:hidden block ">
        <ContactSection />
      </div>

      <AppointmentRequestForm />

      <div className="lg:px-[70px]  p-3">
        <h2 className="lg:text-[48px]  text-2xl py-[2rem] font-600 text-gray-900">
          Why Choose Us
        </h2>
        <div className="w-full h-full lg:px-0  flex gap-5 lg:gap-[10rem] flex-col  md:flex-row">
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

      <div className="lg:px-[70px] p-3">
        <h2 className="lg:text-48 text-2xl font-600 text-gray-900">
          Follow Us
        </h2>
        <p className="text-gray-600 text-18 font-400 py-[2rem]">
          Stay updated on the latest projects, tips, and company news. Follow us
          on our social media channels:
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

      <div className="lg:px-[70px] p-3">
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
      <div className="lg:px-[70px]  p-3">
        <h2 className="lg:text-48 text-2xl font-600 text-gray-900">
          Have a Question?
        </h2>
        <p className="text-gray-600 text-18 font-400 py-[2rem]">
          Drop us a message, and we’ll respond promptly!
        </p>
      </div>
    </div>
  )
}

export default ContactPage
