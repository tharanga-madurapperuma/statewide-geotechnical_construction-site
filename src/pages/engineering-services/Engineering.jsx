import React from "react"
import HeroSection from "../../components/hero-section/HeroSection"
import EngineeringServicesSection from "../../components/engineering-section/EngineeringServicesSection"
import GeotechnicalReport from "../../components/engineering-section/GeotechnicalReport"
import CardIconTextCenter from "../../components/card-icon-text-center/CardIconTextCenter";
import ButtonCard from "../../components/card/ButtonCard"
import { DrillingSecond, DiamondCoring, } from "../../assets/assets"

const Engineering = () => {
  return (
    <div className="md:mt-[108px]">
     
          <ButtonCard 
            title="Engineering Assessment Services"
            description="Our highly experienced engineering team is committed to delivering the most reliable & cost-efficient solution for geotechnical challenges."
              buttonText="Get in Touch"
              image={DrillingSecond}
            />
         

          
          <div className="w-full bg-white py-40 md:py-[64px] max-w-[1920px] px-[32px] sm:px-[70px] md:px-80 lg:px-[100px] xl:px-[110px]">
            <p>
            Results of the geotechnical investigation will be presented in a comprehensive report which describes the field investigation & testing undertaken, presents the factual findings and provides comment on the following items considered relevant in the proposed works:
            </p>
            <div className="w-full grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-3 md:mt-6 lg:mt-8">
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Subsurface fill, soil, rock, and groundwater conditions;"
                bodyTextPresent={true}
                
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Site classification to AS 2870"
                bodyTextPresent={true}
                
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Subsoil classification to AS1170.4-2011 (earthquake code);"
                bodyTextPresent={true}
                
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Excavation conditions, including temporary batter slopes;"
                bodyTextPresent={true}
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Suitable foundation systems including spread footing and piled foundations, and options for rigid raft or piled raft;"
                bodyTextPresent={true}
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Estimated settlements of foundation systems based on the provided loads;"
                bodyTextPresent={true}
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Preliminary comments regarding groundwater management, groundwater inflow rates into basement excavation and recommendations on dewatering (if groundwater is encountered within basement interval);"
                bodyTextPresent={true}
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Basement design and construction, including lateral earth pressures, preliminary retaining wall design parameters and suitable retention systems;"
                bodyTextPresent={true}
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Founding levels and allowable bearing pressure for spread footings, and unit stresses (end bearing, skin friction) and geotechnical strength reduction factor for piles;"
                bodyTextPresent={true}
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Parameters for the design of floor slabs, including CBR and modulus values;"
                bodyTextPresent={true}
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Subgrade preparation beneath basement slabs;"
                bodyTextPresent={true}
              />
              <CardIconTextCenter
                iconUrl={DiamondCoring}
                titleText="Anticipated construction difficulties and mitigation measures;"
                bodyTextPresent={true}
              />
              
              
            </div>
          </div>
    </div>
  )
}

export default Engineering
