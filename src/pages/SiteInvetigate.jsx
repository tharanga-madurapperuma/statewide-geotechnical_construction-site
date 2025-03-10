import React from "react";
import ButtonCard from "../components/card/ButtonCard";

const SiteInvetigate = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex items-center justify-center h-screen mt-0">
        <ButtonCard
          image="/Rectangle646.png"
          title="Site Investigations"
          description="At Statewide Geotechnical (Aust) Pty Ltd, we deliver comprehensive site investigation services that provide a thorough understanding of ground conditions, enabling safe and efficient project planning. From initial drilling to detailed reporting, our in-house team handles every step, ensuring unmatched consistency, quality, and reliability. Our all-in-one approach streamlines the investigation process and delivers high-quality insights to support your project’s success."
          buttonText="Get in Touch"
          imagePosition="right"
          className="mb-8"
        />
      </div>

      <div className="max-w-7xl mx-[110px] mt-[128px]">
        {/* Header Section */}
        <h1 className="text-[48px] font-semibold mb-4">Investigation Techniques</h1>
        <p className="text-gray-600 mb-8">
          Our team employs a diverse range of advanced investigation techniques,
          customized to meet the unique requirements of each site. With
          state-of-the-art equipment and tailored methodologies, we offer
          accurate data and insights for informed decision-making.
        </p>
        <p className="text-gray-600 mb-[24px]">
          Our Site Investigation Techniques include:
        </p>

        <div className="grid grid-cols-3 gap-[32px]">
          {/* Row 1 */}
          <div className="col-span-1 border-[1px] border-[#D1EDFF] rounded-3xl">
            <img
              src="/Rectangle646.png"
              alt="Drilling work"
              className="w-full aspect-square object-cover rounded-xl"
            />
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF] hover:bg-blue-50 hover:border-blue-300 transition duration-700">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="font-inter text-[17px] sm:text-[22px] md:text-24 font-500 spacing-28 mb-2 mt-5">
              Wireline Diamond Core Drilling (HQ, NQ & PQ)
            </h2>
            <p className="font-inter text-14 sm:text-16 lg:text-18 font-400 spacing-24">
              Our wireline diamond core drilling extracts high-quality core
              samples, offering precise geological data. With multiple available
              core sizes (HQ, NQ, PQ), we select the optimal diameter based on
              the project's specific needs and site conditions.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF] hover:bg-blue-50 hover:border-blue-300 transition duration-700">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="font-inter text-[17px] sm:text-[22px] md:text-24 font-500 spacing-28 mb-2 mt-5">
              Solid and Hollow Auger Borehole Drilling
            </h2>
            <p className="font-inter text-14 sm:text-16 lg:text-18 font-400 spacing-24">
              Ideal for a broad range of ground conditions, our solid and hollow
              auger drilling methods obtain quality samples from both shallow
              and deeper boreholes. This versatile method is essential for
              understanding subsurface conditions.
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-gray-50 p-8 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF] hover:bg-blue-50 hover:border-blue-300 transition duration-700">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="font-inter text-[17px] sm:text-[22px] md:text-24 font-500 spacing-28 mb-2 mt-5">
              Hand Auger Borehole Drilling
            </h2>
            <p className="font-inter text-14 sm:text-16 lg:text-18 font-400 spacing-24">
              For sites with restricted access or those needing minimal
              disturbance, our hand auger borehole drilling provides a
              low-impact solution. This method is effective for shallow soil
              analysis in both urban and remote areas.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF] hover:bg-blue-50 hover:border-blue-300 transition duration-700">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="font-inter text-[17px] sm:text-[22px] md:text-24 font-500 spacing-28 mb-2 mt-5">
              Cone Penetrometer Tests (CPT)
            </h2>
            <p className="font-inter text-14 sm:text-16 lg:text-18 font-400 spacing-24">
              Our CPT services provide essential in-situ soil data, including
              density, strength, and composition, with options to measure pore
              pressure. CPT is highly effective for soil profiling and layers,
              identifying soft zones, and detecting weak grounds.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF] hover:bg-blue-50 hover:border-blue-300 transition duration-700">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="font-inter text-[17px] sm:text-[22px] md:text-24 font-500 spacing-28 mb-2 mt-5">
              Backhoe and Hydraulic Excavator Test Pits and Trenches
            </h2>
            <p className="font-inter text-14 sm:text-16 lg:text-18 font-400 spacing-24">
              Using backhoes and hydraulic excavators, we create test pits and
              trenches for direct soil inspection. This approach reveals the
              soil structure, fills, materials levels, and other factors
              critical to your project's foundation.
            </p>
          </div>

          {/* Row 3 */}
          <div className="bg-gray-50 p-8 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF] hover:bg-blue-50 hover:border-blue-300 transition duration-700">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="font-inter text-[17px] sm:text-[22px] md:text-24 font-500 spacing-28 mb-2 mt-5">
              Bulldozer Costean Excavations
            </h2>
            <p className="font-inter text-14 sm:text-16 lg:text-18 font-400 spacing-24">
              For broad, large-scale sampling, we perform costean excavations.
              This method is ideal for assessing large areas and provides
              insight into subsurface geology and structural stability.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF] hover:bg-blue-50 hover:border-blue-300 transition duration-700">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="font-inter text-[17px] sm:text-[22px] md:text-24 font-500 spacing-28 mb-2 mt-5">Geophysics</h2>
            <p className="font-inter text-14 sm:text-16 lg:text-18 font-400 spacing-24">
              Our geophysics capabilities include penetrating radar (GPR) and
              electrical resistivity, offering non-invasive options for
              subsurface assessments. Geophysics provides rapid, large-area
              data, aiding in identifying ground stability and structural
              composition.
            </p>
          </div>

          <div className="col-span-1">
            <img
              src="/Rectangle646.png"
              alt="Site investigation"
              className="w-full aspect-square object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1220px] mt-[128px] mx-[110px]">
        {/* Header */}
        <h1 className="text-[48px] font-semibold  mb-6">
          Our Site Investigation Services Include
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-8 md:grid-rows-10 gap-4">
          {/* Image */}
          <div className="col-span-1 md:col-span-4 md:row-span-3 max-h-[270px] rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <img
              src="/Frame2248.png"
              alt="Site Investigation"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Drilling */}
          <div className="col-span-1 md:col-span-4 md:row-span-3 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div className="bg">
              <img
                src="/helmet3.png"
                alt="helmet"
                className="w-[50px] h-[50px]"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-4">Drilling</h2>
            <p className="text-gray-600">
              Equipped with advanced technology, our drilling team provides
              precise soil and rock samples from all depths, even in challenging
              terrains. We adapt our drilling approach to meet your project’s
              unique requirements, ensuring dependable data on subsurface
              conditions.
            </p>
          </div>

          {/* Test Pits */}
          <div className="col-span-1 md:col-span-4 md:row-span-3 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div className="bg">
              <img
                src="/helmet3.png"
                alt="helmet"
                className="w-[50px] h-[50px]"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-4">Test Pits</h2>
            <p className="text-gray-600">
              Our test pit excavations allow for direct observation of
              subsurface materials, providing valuable insights into soil
              layers, groundwater levels, and potential site challenges. Test
              pits are a vital component for thorough site assessment and
              planning.
            </p>
          </div>

          {/* In-Situ Testing */}
          <div className="col-span-1 md:col-span-4 md:row-span-3 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div className="bg">
              <img
                src="/helmet4.png"
                alt="helmet"
                className="w-[50px] h-[50px]"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-4">In-Situ Testing</h2>
            <p className="text-gray-600">
              We conduct a variety of in-situ tests, such as Standard
              Penetration Tests (SPT) and Cone Penetration Testing (CPT), to
              measure soil properties directly on-site. These methods ensure
              highly accurate data without disturbing samples, providing key
              insights into soil density, shear strength, and compaction.
            </p>
          </div>

          {/* Laboratory Investigations */}
          <div className="col-span-1 md:col-span-4 md:row-span-3 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div className="bg">
              <img
                src="/helmet3.png"
                alt="helmet"
                className="w-[50px] h-[50px]"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-4">
              Laboratory Investigations
            </h2>
            <p className="text-gray-600">
              Our in-house lab is fully equipped for detailed analyses of soil,
              rock, and groundwater samples. Our laboratory testing covers
              everything from moisture content and grain size distribution to
              compaction and Atterberg limits, delivering critical information
              for engineering and planning.
            </p>
          </div>

          {/* Reporting */}
          <div className="col-span-1 md:col-span-4 md:row-span-3 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div className="bg">
              <img
                src="/helmet3.png"
                alt="helmet"
                className="w-[50px] h-[50px]"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-4">Reporting</h2>
            <p className="text-gray-600">
              We deliver detailed, actionable reports tailored to industry
              standards and project-specific requirements. Our reports provide a
              clear overview of site conditions, potential challenges, and
              engineering recommendations, empowering you with the insights
              needed for confident, informed decision-making.
            </p>
          </div>

          {/* Footer */}
          <div className="col-span-1 md:col-span-8 md:col-start-1 md:row-start-10  text-gray-600">
            <p>
              Statewide Geotechnical’s end-to-end site investigation services
              give you a clear picture of site conditions from the outset,
              providing the data and insights to drive successful project
              outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteInvetigate;
