import React from "react"

const LicenseCard = ({image, title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-suto md:bg-blue-50 rounded-2xl lg:p-8">
      <div className="my-[30px] mx-[20px] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-[140px] md:w-[168px] md:h-[168px] h-[140px] bg-blue-600 rounded-4xl">
          <img
            src={image}
            alt={title}
            className="text-white w-[75px] h-[75px] md:w-[95.87px] md:h-[95.87px]"
          />
        </div>
        <p className="mt-4 lg:text-[24px] text-lg md:font-500 font-600 text-gray-900 text-center">
          {title}
        </p>
        {description && (
          <p className="mt-2 text-[16px] mx-3 font-400 text-gray-600 text-center">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default LicenseCard
