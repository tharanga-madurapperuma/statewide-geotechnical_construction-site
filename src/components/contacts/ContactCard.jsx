import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const ContactCard = ({ icon, title, children }) => {
  return (
    <div className="flex items-start bg-white gap-[10px] px-5 md:px-[72px] lg:p-[42px] rounded-xl  w-auto  lg:max-w-[500px]">
      {/* Icon */}
      <div className="  bg-blue-600 text-white rounded-full md:text-4xl p-3">
       {icon}
      </div>

      {/* Content */}
      <div className="ml-4">
        <h3 className="md:text-[18px] font-semibold text-textDark">{title}</h3>
        <div className="text-16  md:text-base">{children}</div>
      </div>
    </div>
  );
};

export default ContactCard;
