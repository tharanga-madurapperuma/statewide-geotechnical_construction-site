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

      <div className="max-w-6xl mx-auto p-8">
        {/* Header Section */}
        <h1 className="text-3xl font-bold mb-4">Investigation Techniques</h1>
        <p className="text-gray-600 mb-8">
          Our team employs a diverse range of advanced investigation techniques,
          customized to meet the unique requirements of each site. With
          state-of-the-art equipment and tailored methodologies, we offer
          accurate data and insights for informed decision-making.
        </p>
        <p className="text-gray-600 mb-12">
          Our Site Investigation Techniques include:
        </p>

        <div className="grid grid-cols-3 gap-6">
          {/* Row 1 */}
          <div className="col-span-1">
            <img
              src="/Frame2219.png"
              alt="Drilling work"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Wireline Diamond Core Drilling (HQ, NQ & PQ)
            </h2>
            <p className="text-gray-600 mt-5">
              Our wireline diamond core drilling extracts high-quality core
              samples, offering precise geological data. With multiple available
              core sizes (HQ, NQ, PQ), we select the optimal diameter based on
              the project's specific needs and site conditions.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Solid and Hollow Auger Borehole Drilling
            </h2>
            <p className="text-gray-600">
              Ideal for a broad range of ground conditions, our solid and hollow
              auger drilling methods obtain quality samples from both shallow
              and deeper boreholes. This versatile method is essential for
              understanding subsurface conditions.
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Hand Auger Borehole Drilling
            </h2>
            <p className="text-gray-600">
              For sites with restricted access or those needing minimal
              disturbance, our hand auger borehole drilling provides a
              low-impact solution. This method is effective for shallow soil
              analysis in both urban and remote areas.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Cone Penetrometer Tests (CPT)
            </h2>
            <p className="text-gray-600">
              Our CPT services provide essential in-situ soil data, including
              density, strength, and composition, with options to measure pore
              pressure. CPT is highly effective for soil profiling and layers,
              identifying soft zones, and detecting weak grounds.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Backhoe and Hydraulic Excavator Test Pits and Trenches
            </h2>
            <p className="text-gray-600">
              Using backhoes and hydraulic excavators, we create test pits and
              trenches for direct soil inspection. This approach reveals the
              soil structure, fills, materials levels, and other factors
              critical to your project's foundation.
            </p>
          </div>

          {/* Row 3 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Bulldozer Costean Excavations
            </h2>
            <p className="text-gray-600">
              For broad, large-scale sampling, we perform costean excavations.
              This method is ideal for assessing large areas and provides
              insight into subsurface geology and structural stability.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">Geophysics</h2>
            <p className="text-gray-600">
              Our geophysics capabilities include penetrating radar (GPR) and
              electrical resistivity, offering non-invasive options for
              subsurface assessments. Geophysics provides rapid, large-area
              data, aiding in identifying ground stability and structural
              composition.
            </p>
          </div>

          <div className="col-span-1">
            <img
              src="/Frame2219.png"
              alt="Site investigation"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="font-inter text-gray-900 p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Our Site Investigation Services Include
      </h1>

      {/* Main Content - Two-Column Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column - Large Image */}
        <div className="col-span-1 row-span-2">
          <img
            src="/Frame2248.png" // Replace with actual image (e.g., worker-site.jpg or similar from your project)
            alt="Worker at construction site with helmet and excavator"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Column - Service Cards */}
        <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Drilling Card */}
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <img
              src="/src/assets/helmet-icon.png" // Replace with actual blue helmet icon path
              alt="Drilling Icon"
              className="w-12 h-12 mx-auto mb-4 text-blue-600"
            />
            <h3 className="text-lg font-bold">Drilling</h3>
            <p className="text-sm text-gray-700 mt-2">
              Equipped with advanced technology, our drilling team provides
              precise soil and rock samples from all depths, even in challenging
              terrains. We adapt our drilling approach to meet your project’s
              unique requirements, ensuring dependable data on subsurface
              conditions.
            </p>
          </div>

          {/* Test Pits Card */}
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <img
              src="/src/assets/helmet-icon.png" // Replace with actual blue helmet icon path
              alt="Test Pits Icon"
              className="w-12 h-12 mx-auto mb-4 text-blue-600"
            />
            <h3 className="text-lg font-bold">Test Pits</h3>
            <p className="text-sm text-gray-700 mt-2">
              Test pits excavations allow for direct observation of subsurface
              materials, providing valuable insights into soil layers,
              groundwater levels, and potential site challenges. Test pits are a
              vital component for thorough site assessment and planning.
            </p>
          </div>

          {/* Laboratory Investigations Card */}
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <img
              src="/src/assets/helmet-icon.png" // Replace with actual blue helmet icon path
              alt="Laboratory Investigations Icon"
              className="w-12 h-12 mx-auto mb-4 text-blue-600"
            />
            <h3 className="text-lg font-bold">Laboratory Investigations</h3>
            <p className="text-sm text-gray-700 mt-2">
              Our in-house lab is fully equipped for detailed analyses of soil,
              rock, and groundwater samples. Our laboratory testing covers
              everything from moisture content and grain size distribution to
              compaction and Atterberg limits, delivering critical information
              for engineering and planning.
            </p>
          </div>

          {/* In-Situ Testing Card */}
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <img
              src="/src/assets/helmet-icon.png" // Replace with actual blue helmet icon path
              alt="In-Situ Testing Icon"
              className="w-12 h-12 mx-auto mb-4 text-blue-600"
            />
            <h3 className="text-lg font-bold">In-Situ Testing</h3>
            <p className="text-sm text-gray-700 mt-2">
              We conduct a variety of in-situ tests, such as Standard
              Penetration Tests (SPT) and Cone Penetration Testing (CPT), to
              measure soil properties directly on-site. These methods ensure
              highly accurate data without disturbing samples, providing key
              insights into soil density, shear strength, and compaction.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-gray-700 mt-6 text-center">
        Statewide Geotechnical’s end-to-end site investigation services give you
        a clear picture of site conditions from the outset, providing the data
        and insights to drive successful project outcomes.
      </p>
    </div>
    </div>
  );
};

export default SiteInvetigate;
