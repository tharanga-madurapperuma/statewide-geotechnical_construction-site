import {FaBuilding, FaMountain, FaLandmark, FaRoad} from "react-icons/fa"
import CardIconTextCenter from "../card-icon-text-center/CardIconTextCenter"
import {Gas, WallDrill, Weight, WellAttaches} from "../../assets/assets"

const services = [
  {
    icon: WallDrill,
    title: "Geotechnical Investigation Report",
  },
  {
    icon: WellAttaches,
    title: "Slope Stability Assessment",
  },
  {
    icon: Gas,
    title: "Land Capability Assessment",
  },
  {
    icon: Weight,
    title: "Road Pavement Design",
  },
]

const EngineeringServicesSection = () => {
  return (
    <div className=" xl:px-[110px] lg:px-[110px] md:px-[110px] sm:px-[20px] px-[20px] pt-[128px] pb-[64px]">
      <h2 className="text-5xl font-600 text-gray-900 mb-8">
        Our Expertise Includes:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-[64px]">
        {services.map((service, index) => (
          <CardIconTextCenter
            key={index}
            iconUrl={service.icon}
            titleText={service.title}
            bodyTextPresent={false}
            bodyText="Our highly experienced engineering team is committed to delivering the most reliable & cost-efficient solution for geotechnical challenges."
          />
        ))}
      </div>
    </div>
  )
}

export default EngineeringServicesSection
