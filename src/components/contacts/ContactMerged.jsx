import React from "react"
import {FaMapMarkedAlt} from "react-icons/fa"

const ContactMerged = ({components}) => {
  return (
    <div className="flex items-start flex-col sm:flex-row xl:bg-white gap-[5px] lg:mb-0 mb-5  rounded-xl w-auto md:max-w-[900px]">
      {/* Icon */}
          {components[0]}
          {components[1]}
    </div>
  )
}

export default ContactMerged
