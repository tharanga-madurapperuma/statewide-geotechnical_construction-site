import React from "react"
import HeroSection from "../../components/hero-section/HeroSection"
import EngineeringServicesSection from "../../components/engineering-section/EngineeringServicesSection"
import GeotechnicalReport from "../../components/engineering-section/GeotechnicalReport"
import ButtonCard from "../../components/card/ButtonCard"
import { DrillingSecond } from "../../assets/assets"

const Engineering = () => {
  return (
    <div className="md:mt-[108px]">
     
          <ButtonCard 
            title="Engineering Assessment Services"
            description="Our highly experienced engineering team is committed to delivering the most reliable & cost-efficient solution for geotechnical challenges."
              buttonText="Get in Touch"
              image={DrillingSecond}
            />
          <EngineeringServicesSection />
          <GeotechnicalReport />
    </div>
  )
}

export default Engineering
