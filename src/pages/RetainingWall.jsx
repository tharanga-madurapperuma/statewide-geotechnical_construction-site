import React from "react";
import ButtonCard from "../components/card/ButtonCard";
import CardIconTextCenter from "../components/card-icon-text-center/CardIconTextCenter";

const RetainingWall = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex items-center justify-center h-screen mt-0">
        <ButtonCard
          image="/getintouch.png"
          title="Retaining Walls and Excavation Services"
          description="At Statewide Geotechnical (Aust) Pty Ltd, we provide comprehensive retaining wall and excavation services designed to secure your site, optimize space, and ensure stability for your construction project. With expert knowledge of ground behavior and soil mechanics, our team delivers tailored solutions to meet the unique demands of each site, from sloped terrains to complex urban environments."
          buttonText="Get in Touch"
          imagePosition="right"
          className="mb-8"
        />
      </div>

      <div className="max-w-[1220px] mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Retaining Wall Solutions</h1>
        <div className="grid grid-cols-5 grid-rows-10 gap-[24px]">
          {/* Description Box */}
          <div className="col-span-2 row-span-4 bg-blue-100 p-6 rounded-lg">
            <p className="text-gray-700">
              Retaining walls play a critical role in managing soil stability,
              especially on sloped or uneven terrain. Our retaining wall
              services cover the full lifecycle of the project, from design and
              engineering to installation and inspection. We ensure that each
              wall is constructed to withstand soil pressures, manage drainage,
              and prevent erosion, providing long-term support and security for
              your site.
            </p>
          </div>

          {/* Retaining Wall Types */}
          <div className="col-span-3 row-span-2 col-start-3 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              Gravity Retaining Walls
            </h2>
            <p className="text-gray-600">
              Our gravity walls use mass and weight to resist lateral earth
              pressure, providing stability for low to medium-height walls.
              These walls are ideal for residential and landscaping applications
              where space is limited.
            </p>
          </div>

          <div className="col-span-3 row-span-2 col-start-3 row-start-3 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              Cantilever Retaining Walls
            </h2>
            <p className="text-gray-600">
              Designed for medium- to high-load conditions, cantilever walls use
              a reinforced concrete base and stem to support significant soil
              loads. They are an effective and economical choice for commercial
              and infrastructure projects where wall height and soil retention
              are critical.
            </p>
          </div>

          <div className="col-span-3 row-span-2 col-start-3 row-start-5 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              Sheet Pile Retaining Walls
            </h2>
            <p className="text-gray-600">
              Our sheet pile walls are ideal for deep excavation sites,
              especially in urban areas where space is tight. Using interlocking
              steel or concrete sheets, these walls provide sturdy support for
              excavation sites and prevent soil movement around construction
              areas.
            </p>
          </div>

          <div className="col-span-3 row-span-2 col-start-3 row-start-7 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              Anchored Retaining Walls
            </h2>
            <p className="text-gray-600">
              For high-load situations or sites with limited space, we offer
              anchored walls that use tensioned rods to provide additional
              support. Anchored walls are particularly useful in construction
              sites with deep excavations or heavy lateral loads.
            </p>
          </div>

          <div className="col-span-3 row-span-2 col-start-3 row-start-9 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              Segmental Retaining Walls
            </h2>
            <p className="text-gray-600">
              We offer segmental walls using modular blocks for projects
              requiring flexibility and aesthetic appeal, such as landscaping
              and light commercial applications. These walls are cost-effective
              and allow for easy customization to suit the project's layout and
              appearance.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-span-2 row-span-6 col-start-1 row-start-5">
            <img
              src="/Frame2263.png"
              alt="Retaining Wall"
              className="w-[494px] h-[556px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto p-8 mt-4">
        {/* Header Section */}
        <h1 className="text-3xl font-bold mb-6">Excavation Services</h1>
        <p className="text-gray-600">
          Our excavation services are designed to support safe, efficient site
          preparation for construction projects of any scale. We handle all
          types of excavation, from shallow earthworks for foundations to deep
          excavations for basements, infrastructure, and industrial facilities.
          With a commitment to safety and precision, we manage excavation
          projects with minimal disruption to surrounding areas.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-9 grid-rows-9 gap-[32px]">
          {/* Image Section */}
          <div className="col-span-3 row-span-4 col-start-1 row-start-2 border-[1px] border-[#D1EDFF] rounded-3xl">
            <img
              src="/Frame2219.png"
              alt="Excavation"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Bulk Excavation */}
          <div className="col-span-3 row-span-4 col-start-4 row-start-2 bg-[#F7FCFF] p-6 rounded-3xl border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">Bulk Excavation</h2>
            <p className="text-gray-600">
              Our bulk excavation services involve large-scale soil and rock
              removal to prepare sites for construction. Using state-of-the-art
              equipment, we ensure precise and efficient excavation, regardless
              of site complexity or soil type.
            </p>
          </div>

          {/* Detailed Excavation */}
          <div className="col-span-3 row-span-4 col-start-7 row-start-2 bg-[#F7FCFF] p-6 rounded-3xl border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Detailed Excavation
            </h2>
            <p className="text-gray-600">
              For projects that require precision, such as foundation or
              basement preparation, we offer detailed excavation services. Our
              team uses advanced techniques to create level, stable surfaces
              that meet project specifications exactly.
            </p>
          </div>

          {/* Trenching */}
          <div className="col-span-3 row-span-4 col-start-1 row-start-6 bg-[#F7FCFF] p-6 rounded-3xl border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">Trenching</h2>
            <p className="text-gray-600">
              We provide trenching services for utility installation, drainage
              systems, and other sub-surface requirements. Our trenching
              solutions are customized to meet depth, width, and safety
              standards, ensuring your site is ready for utilities and
              infrastructure installation.
            </p>
          </div>

          {/* Rock Breaking and Removal */}
          <div className="col-span-3 row-span-4 col-start-4 row-start-6 bg-[#F7FCFF] p-6 rounded-3xl border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Rock Breaking and Removal
            </h2>
            <p className="text-gray-600">
              For sites with rocky or challenging soil conditions, we provide
              specialized rock-breaking and removal services. Our equipment can
              handle tough materials, clearing the way for smooth excavation and
              efficient project progress.
            </p>
          </div>

          {/* Shoring & Site Stabilization */}
          <div className="col-span-3 row-span-4 col-start-7 row-start-6 bg-[#F7FCFF] p-6 rounded-3xl border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Shoring & Site Stabilization
            </h2>
            <p className="text-gray-600">
              Safety is our top priority in excavation. We provide shoring and
              stabilization solutions to prevent soil collapse, ensuring secure
              excavation walls for deep or complex urban projects. From sheet
              piling to bracing systems, we maintain site safety throughout.
            </p>
          </div>
        </div>
      </div>

      <CardIconTextCenter
        iconUrl="/arrow.png"
        titleText="Why Choose Statewide Geotechnical for Retaining Wall and Excavation Services?"
        bodyTextPresent="With our in-house expertise and comprehensive service offerings, Statewide Geotechnical ensures that your retaining wall and excavation needs are handled with precision and care. Our solutions are engineered to provide long-term stability, minimize environmental impact, and optimize the functionality and safety of your site. From the initial design to final excavation, we work closely with you to keep your project on track, on budget, and compliant with regulatory standards.

Choose Statewide Geotechnical (Aust) Pty Ltd for retaining wall and excavation services that deliver both structural integrity and peace of mind."
        bodyText="Get in Touch with Our Team"
      />
    </div>
  );
};

export default RetainingWall;
