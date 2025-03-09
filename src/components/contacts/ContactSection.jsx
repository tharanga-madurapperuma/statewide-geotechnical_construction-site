import React from "react";
import ContactCard from "./ContactCard";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons
import ContactMerged from "./ContactMerged";

const ContactSection = () => {
    const contactComponents = [
        <ContactCard icon={<FaMapMarkerAlt /> } title="Email Us">
        <p>info@statewide.com.au</p>
        <p>support@statewide.com.au</p>
      </ContactCard>,
        <ContactCard icon={<FaMapMarkerAlt /> } title="Call us">
        <p>phone: +61 3 9123 4567</p>
        <p>Fax: +61 3 9123 4568</p>
      </ContactCard>
      ];
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-start gap-6 relative bg-transparent lg:px-0  mt-80 ">
      
      {/* Address Card */}
      
      <ContactCard icon={<FaMapMarkerAlt /> } title="Statewide Geotechnical (Aust) Pty Ltd">
        <p>17-20 Summer Lane</p>
        <p>Ringwood, VIC 3134</p>
      </ContactCard>
      
    <ContactMerged components={contactComponents} />

    </section>
  );
};

export default ContactSection;
