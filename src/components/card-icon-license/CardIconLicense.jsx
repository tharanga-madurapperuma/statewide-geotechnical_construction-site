import React from "react"

const LicenseCard = ({image, title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center w-[368px] h-[416px] bg-blue-50 rounded-2xl p-4 lg:p-8">
      <div className="flex items-center justify-center w-[168px] h-[168px] bg-blue-600 rounded-4xl">
        <img
          src={image}
          alt={title}
          className="text-white lg:w-[95.87px] lg:h-[95.87px]"
        />
      </div>
      <p className="mt-4 lg:text-[24px] text-lg md:font-500 font-600 text-gray-900 text-center">
        {title}
      </p>
      {description && (
        <p className="mt-2 text-[16px] font-400 text-gray-600 text-center">
          {description}
        </p>
      )}
    </div>
  )
}

export default LicenseCard
