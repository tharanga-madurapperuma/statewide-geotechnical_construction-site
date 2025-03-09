import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import TextSection from "../components/text/TextSection";
import InfoSection from "../components/info-section/InfoSection";
import CardIconTextCenter from "../components/card-icon-text-center/CardIconTextCenter";

const TrustedLeaders = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className='w-full h-auto'>
        <HeroSection
          title="Trusted Leaders in Geotechnical & Geological Services"
          description="Over 30,000 successful ground investigation projects completed."
          buttonLink="www.google.com"
          buttonText="Get in Touch"
        />

        <InfoSection
          title="About Us"
          description="Statewide Geotechnical (Aust) Pty Ltd, a trusted leader in geotechnical and geological services. With over 30,000 successful ground investigation projects completed, our expert team of Geotechnical Engineers, Engineering Geologists, and Soil and Laboratory Technicians delivers top-tier services across a variety of industries.

We proudly serve a diverse range of clients, including consulting engineers, commercial and residential builders, utility companies, local authorities, and government organizations. Our comprehensive suite of geotechnical services is offered under one roof, ensuring a streamlined, efficient process from start to finish."
          buttonLink="Get in Touch"
          buttonText="Contact Us to Learn More About Our Services"
          imageSrc="/Frame2283.png"
          reverse=""
        />

        <div className="mt-[42px] mb-[48px]">
          <TextSection
            title="Why Choose Us?"
            description="At Statewide Geotechnical, we set ourselves apart with our unique ability to provide all drilling, laboratory testing, and reporting in-house. This integrated approach ensures faster turnaround times, consistent quality, and unmatched reliability throughout every phase of your project. By controlling every aspect of the process, we maintain high standards and offer exceptional value—all while keeping costs lower than larger competitors.

Our team is dedicated to providing accurate, cost-effective geotechnical solutions tailored to your needs. Whether you're involved in residential, commercial, or industrial projects, we support your design process, ensure compliance with regulations, and help mitigate risks associated with ground conditions."
            buttonText="Get in Touch with Our Team"
            buttonLink="www.google.com"
          />
        </div>
      </div>

      <div className="max-w-[1408px] mx-auto p-8">
        <h2 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4">
          What We Offer
        </h2>

        <div className="grid grid-cols-12 grid-rows-4 gap-4">
          <div className="col-span-3 row-span-4">
            <CardIconTextCenter
              iconUrl="/helmet.png"
              titleText="Comprehensive
Services"
              bodyTextPresent="Drilling, soil sampling, laboratory testing, and reporting-all performed in-house."
              bodyText="Drilling, soil sampling, laboratory testing, and reporting-all performed in-house."
            />
          </div>
          <div className="col-span-3 row-span-4 col-start-4">
            <CardIconTextCenter
              iconUrl="/helmet.png"
              titleText="Fast, Efficient Process"
              bodyTextPresent="Streamlined workflows reduce timelines and enhance project delivery."
              bodyText="Streamlined workflows reduce timelines and enhance project delivery."
            />
          </div>
          <div className="col-span-3 row-span-4 col-start-7">
            <CardIconTextCenter
              iconUrl="/helmet.png"
              titleText="Expert Team"
              bodyTextPresent="Skilled engineers and technicians dedicated to providing high-quality results."
              bodyText="Skilled engineers and technicians dedicated to providing high-quality results."
            />
          </div>
          <div className="col-span-3 row-span-4 col-start-10">
            <CardIconTextCenter
              iconUrl="/helmet.png"
              titleText="Cost-Effective Solutions"
              bodyTextPresent="We pass savings on to you by minimizing overheads, offering affordable services without compromising quality."
              bodyText="We pass savings on to you by minimizing overheads, offering affordable services without compromising quality."
            />
          </div>
        </div>
        {/* Footer */}
        <div className="text-gray-600 mt-[32px] ">
          <p>
            Choose Statewide Geotechnical (Aust) Pty Ltd for your next project,
            and experience the benefits of seamless, reliable, and
            cost-effective geotechnical services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedLeaders;
