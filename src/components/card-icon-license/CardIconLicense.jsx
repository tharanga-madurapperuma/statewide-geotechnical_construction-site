import React from "react";
import { FileIcon } from "../../assets/assets";

const LicenseCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[368px] h-[416px] bg-blue-50 rounded-2xl shadow-md p-4">
      <div className="flex items-center justify-center w-[168px] h-[168px] bg-blue-500 rounded-4xl">
         <img
            src={FileIcon} alt="File Icon"
            className="text-white w-[95.87px] h-[95.87px]" />
      </div>
      <p className="mt-4 text-lg font-medium text-gray-900 text-center">
        Water Bore Licenses <br />
        (Class 1 & 2)
      </p>
    </div>
  );
};

export default LicenseCard;
