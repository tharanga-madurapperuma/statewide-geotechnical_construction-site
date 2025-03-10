import React from "react";
import ButtonCard from "../components/card/ButtonCard";
import CardIconTextCenter from "../components/card-icon-text-center/CardIconTextCenter";
import TextSection from "../components/text/TextSection";
import CardIconTopLeft from "../components/card-icon-top-left/CardIconTopLeft";

const RetainingWall = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="mt-2 sm:mt-2 px-3 sm:px-4">
        <ButtonCard
          image="/getintouch.png"
          title="Retaining Walls and Excavation Services"
          description="At Statewide Geotechnical (Aust) Pty Ltd, we provide comprehensive retaining wall and excavation services designed to secure your site, optimize space, and ensure stability for your construction project. With expert knowledge of ground behavior and soil mechanics, our team delivers tailored solutions to meet the unique demands of each site, from sloped terrains to complex urban environments."
          buttonText="Get in Touch"
          imagePosition="right"
          link="www.google.com"
          className="mb-8"
        />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 mt-8 md:mt-[94px]">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 font-inter mb-6 md:mb-[32px] text-center md:text-left">
    Retaining Wall Solutions
  </h1>
  
  {/* Mobile Layout (stacked) */}
  <div className="block md:hidden">
    <div className="bg-blue-100 p-4 md:p-6 rounded-xl md:rounded-3xl mb-6">
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">
        Retaining walls play a critical role in managing soil stability,
        especially on sloped or uneven terrain. Our retaining wall
        services cover the full lifecycle of the project, from design and
        engineering to installation and inspection. We ensure that each
        wall is constructed to withstand soil pressures, manage drainage,
        and prevent erosion, providing long-term support and security for
        your site.
      </p>
    </div>
    
    <div className="mb-6">
      <img
        src="/Frame2263.png"
        alt="Retaining Wall"
        className="w-full h-auto object-cover rounded-xl"
      />
    </div>
    
    <div className="space-y-6">
      {/* Wall Types - Mobile */}
      <div className="p-4 border-b border-[#D1D5DB]">
        <h2 className="text-lg font-semibold mb-2">
          Gravity Retaining Walls
        </h2>
        <p className="text-sm text-gray-600">
          Our gravity walls use mass and weight to resist lateral earth
          pressure, providing stability for low to medium-height walls.
          These walls are ideal for residential and landscaping applications
          where space is limited.
        </p>
      </div>
      
      <div className="p-4 border-b border-[#D1D5DB]">
        <h2 className="text-lg font-semibold mb-2">
          Cantilever Retaining Walls
        </h2>
        <p className="text-sm text-gray-600">
          Designed for medium- to high-load conditions, cantilever walls use
          a reinforced concrete base and stem to support significant soil
          loads. They are an effective and economical choice for commercial
          and infrastructure projects where wall height and soil retention
          are critical.
        </p>
      </div>
      
      <div className="p-4 border-b border-[#D1D5DB]">
        <h2 className="text-lg font-semibold mb-2">
          Sheet Pile Retaining Walls
        </h2>
        <p className="text-sm text-gray-600">
          Our sheet pile walls are ideal for deep excavation sites,
          especially in urban areas where space is tight. Using interlocking
          steel or concrete sheets, these walls provide sturdy support for
          excavation sites and prevent soil movement around construction
          areas.
        </p>
      </div>
      
      <div className="p-4 border-b border-[#D1D5DB]">
        <h2 className="text-lg font-semibold mb-2">
          Anchored Retaining Walls
        </h2>
        <p className="text-sm text-gray-600">
          For high-load situations or sites with limited space, we offer
          anchored walls that use tensioned rods to provide additional
          support. Anchored walls are particularly useful in construction
          sites with deep excavations or heavy lateral loads.
        </p>
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          Segmental Retaining Walls
        </h2>
        <p className="text-sm text-gray-600">
          We offer segmental walls using modular blocks for projects
          requiring flexibility and aesthetic appeal, such as landscaping
          and light commercial applications. These walls are cost-effective
          and allow for easy customization to suit the project's layout and
          appearance. Each retaining wall is engineered to meet the specific
          load, drainage, and aesthetic requirements of the site, ensuring
          that your project stays secure and visually appealing.
        </p>
      </div>
    </div>
  </div>
  
  {/* Tablet and Desktop Layout */}
  <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
    {/* Description Box */}
    <div className="md:col-span-3 lg:col-span-2 md:row-span-2 bg-blue-100 p-4 md:p-6 rounded-xl md:rounded-3xl flex items-center">
      <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-left">
        Retaining walls play a critical role in managing soil stability,
        especially on sloped or uneven terrain. Our retaining wall
        services cover the full lifecycle of the project, from design and
        engineering to installation and inspection. We ensure that each
        wall is constructed to withstand soil pressures, manage drainage,
        and prevent erosion, providing long-term support and security for
        your site.
      </p>
    </div>

    {/* Wall Types - Desktop */}
    <div className="md:col-span-3 lg:col-start-3 lg:col-span-3 p-4 md:p-6 border-b border-[#D1D5DB]">
      <h2 className="text-lg md:text-xl font-semibold mb-2">
        Gravity Retaining Walls
      </h2>
      <p className="text-sm md:text-base text-gray-600">
        Our gravity walls use mass and weight to resist lateral earth
        pressure, providing stability for low to medium-height walls.
        These walls are ideal for residential and landscaping applications
        where space is limited.
      </p>
    </div>

    <div className="md:col-span-3 lg:col-start-3 lg:col-span-3 p-4 md:p-6 border-b border-[#D1D5DB]">
      <h2 className="text-lg md:text-xl font-semibold mb-2">
        Cantilever Retaining Walls
      </h2>
      <p className="text-sm md:text-base text-gray-600">
        Designed for medium- to high-load conditions, cantilever walls use
        a reinforced concrete base and stem to support significant soil
        loads. They are an effective and economical choice for commercial
        and infrastructure projects where wall height and soil retention
        are critical.
      </p>
    </div>

    <div className="md:col-span-3 lg:col-start-3 lg:col-span-3 p-4 md:p-6 border-b border-[#D1D5DB]">
      <h2 className="text-lg md:text-xl font-semibold mb-2">
        Sheet Pile Retaining Walls
      </h2>
      <p className="text-sm md:text-base text-gray-600">
        Our sheet pile walls are ideal for deep excavation sites,
        especially in urban areas where space is tight. Using interlocking
        steel or concrete sheets, these walls provide sturdy support for
        excavation sites and prevent soil movement around construction
        areas.
      </p>
    </div>

    <div className="md:col-span-3 lg:col-start-3 lg:col-span-3 p-4 md:p-6 border-b border-[#D1D5DB]">
      <h2 className="text-lg md:text-xl font-semibold mb-2">
        Anchored Retaining Walls
      </h2>
      <p className="text-sm md:text-base text-gray-600">
        For high-load situations or sites with limited space, we offer
        anchored walls that use tensioned rods to provide additional
        support. Anchored walls are particularly useful in construction
        sites with deep excavations or heavy lateral loads.
      </p>
    </div>

    <div className="md:col-span-3 lg:col-start-3 lg:col-span-3 p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-2">
        Segmental Retaining Walls
      </h2>
      <p className="text-sm md:text-base text-gray-600">
        We offer segmental walls using modular blocks for projects
        requiring flexibility and aesthetic appeal, such as landscaping
        and light commercial applications. These walls are cost-effective
        and allow for easy customization to suit the project's layout and
        appearance. Each retaining wall is engineered to meet the specific
        load, drainage, and aesthetic requirements of the site, ensuring
        that your project stays secure and visually appealing.
      </p>
    </div>

    {/* Image Section */}
    <div className="md:col-span-3 lg:col-span-2 lg:row-span-4 md:row-start-3 lg:row-start-3">
      <img
        src="/Frame2263.png"
        alt="Retaining Wall"
        className="w-full h-full object-cover rounded-xl md:rounded-3xl"
      />
    </div>
  </div>
</div>

      <div className="max-w-[1300px] mx-auto mt-[94px]">
        {/* Header Section */}
        <h1 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-[32px] text-4xl text-center md:text-left">
          Excavation Services
        </h1>
        <p className="text-base mb-[45px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
          Our excavation services are designed to support safe, efficient site
          preparation for construction projects of any scale. We handle all
          types of excavation, from shallow earthworks for foundations to deep
          excavations for basements, infrastructure, and industrial facilities.
          With a commitment to safety and precision, we manage excavation
          projects with minimal disruption to surrounding areas.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[35px] w-full">
          {/* Image Section */}
          <div className="col-span-1 row-span-1 sm:w-full border-[1px] border-[#D1EDFF] rounded-3xl">
            <img
              src="/Frame2219.png"
              alt="Excavation"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Bulk Excavation */}
          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Bulk Excavation"
              bodyText="Our bulk excavation services involve large-scale soil and rock
              removal to prepare sites for construction. Using state-of-the-art
              equipment, we ensure precise and efficient excavation, regardless
              of site complexity or soil type."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          {/* Detailed Excavation */}
          <div className="col-span-1 row-span-1">
          
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Detailed Excavation"
              bodyText="For projects that require precision, such as foundation or
              basement preparation, we offer detailed excavation services. Our
              team uses advanced techniques to create level, stable surfaces
              that meet project specifications exactly."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          {/* Trenching */}
          <div className="col-span-1 row-span-1">
            

            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Trenching"
              bodyText="We provide trenching services for utility installation, drainage
              systems, and other sub-surface requirements. Our trenching
              solutions are customized to meet depth, width, and safety
              standards, ensuring your site is ready for utilities and
              infrastructure installation."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          {/* Rock Breaking and Removal */}
          <div className="col-span-1 row-span-1">
            
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Rock Breaking and Removal"
              bodyText="For sites with rocky or challenging soil conditions, we provide
              specialized rock-breaking and removal services. Our equipment can
              handle tough materials, clearing the way for smooth excavation and
              efficient project progress."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          {/* Shoring & Site Stabilization */}
          <div className="col-span-1 row-span-1 ">
            
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Shoring & Site Stabilization"
              bodyText="Safety is our top priority in excavation. We provide shoring and
              stabilization solutions to prevent soil collapse, ensuring secure
              excavation walls for deep or complex urban projects. From sheet
              piling to bracing systems, we maintain site safety throughout."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>
        </div>
      </div>

      <div className="mb-8 px-8 sm:px-[70px] md:px-[80px] lg:px-[100px] xl:px-[110px] sm:mb-40 md:mb-58 w-full bg-[#EBF7FF] md:py-6">
        <TextSection
          title="Why Choose Statewide Geotechnical for Retaining Wall and Excavation Services?"
          description="With our in-house expertise and comprehensive service offerings, Statewide Geotechnical ensures that your retaining wall and excavation needs are handled with precision and care. Our solutions are engineered to provide long-term stability, minimize environmental impact, and optimize the functionality and safety of your site. From the initial design to final excavation, we work closely with you to keep your project on track, on budget, and compliant with regulatory standards.

Choose Statewide Geotechnical (Aust) Pty Ltd for retaining wall and excavation services that deliver both structural integrity and peace of mind."
          buttonText="Get in Touch with Our Team"
          buttonLink="www.google.com"
        />
      </div>
    </div>
  );
};

export default RetainingWall;
