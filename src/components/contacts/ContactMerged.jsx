import React from "react"
import {FaMapMarkedAlt} from "react-icons/fa"

const ContactMerged = ({components}) => {
  return (
    <div className="flex items-start flex-col lg:flex-row bg-white gap-[25px] lg:mb-0 mb-5  rounded-xl w-auto md:max-w-[900px]">
      {/* Icon */}
          {components[0]}
          {components[1]}
    </div>
  )
}

export default ContactMerged
