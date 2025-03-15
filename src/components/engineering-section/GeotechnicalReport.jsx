import React from "react"
import { GeotechnicalReportImg } from "../../assets/assets"

const GeotechnicalReport = () => {
  const reportItems = [
    "Subsurface fill, soil, rock, and groundwater conditions;",
    "Site classification to AS 2870",
    "Subsoil classification to AS1170.4-2011 (earthquake code);",
    "Excavation conditions, including temporary batter slopes;",
    "Suitable foundation systems including spread footing and piled foundations, and options for rigid raft or piled raft;",
    "Founding levels and allowable bearing pressure for spread footings, and unit stresses (end bearing, skin friction) and geotechnical strength reduction factor for piles;",
    "Estimated settlements of foundation systems based on the provided loads;",
    "Basement design and construction, including lateral earth pressures, preliminary retaining wall design parameters and suitable retention systems;",
    "Preliminary comments regarding groundwater management, groundwater inflow rates into basement excavation and recommendations on dewatering (if groundwater is encountered within basement interval);",
    "Parameters for the design of floor slabs, including CBR and modulus values;",
    "Subgrade preparation beneath basement slabs;",
    "Anticipated construction difficulties and mitigation measures;",
  ]

  return (
    <div className="w-full px-[110px] mx-auto py-[64px] ">
      <p className="text-gray-900 text-base leading-6">
        Results of the geotechnical investigation will be presented in a
        comprehensive report which describes the field investigation & testing
        undertaken, presents the factual findings and provides comment on the
        following items considered relevant in the proposed works:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          {reportItems.map((item, index) => (
            <div key={index} className={`${index !== 11 ? "border-b border-gray-300": ""} py-8`}>
                  <p className="text-gray-900">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src={GeotechnicalReportImg}
            alt="Geotechnical Illustration"
            className="w-full "
          />
        </div>
      </div>
    </div>
  )
}

export default GeotechnicalReport
