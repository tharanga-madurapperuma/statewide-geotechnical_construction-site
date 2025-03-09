import React from "react";
import ButtonCard from "../components/card/ButtonCard";
import CardIconTextCenterColored from "../components/card-icon-text-center/CardIconTextCenterColored";
import TextSection from "../components/text/TextSection";

const FoundationBuilt = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex items-center justify-center h-screen mt-0">
        <ButtonCard
          image="/Rectangle647.png"
          title="Foundations Built for Reliability"
          description="At Statewide Geotechnical (Aust) Pty Ltd, we understand that a project’s success starts from the ground up. That’s why we offer fully customized foundation solutions for residential, infrastructure, and commercial projects of all sizes. Our experienced team combines advanced geotechnical engineering expertise with a comprehensive range of in-house capabilities, ensuring safe, dependable, and cost-effective foundations tailored to your specific needs. From site assessments to design and recommendations, our team supports every phase to make your vision a reality."
          buttonText="Get in Touch"
          imagePosition="right"
          className="mb-8"
        />
      </div>

      <div className="max-w-[1220px] mx-auto p-8 mt-[48px]">
        <h1 className="text-[48px] font-semibold mb-9">
          Foundation Solutions for Every Project
        </h1>

        <div className="grid grid-cols-9 grid-rows-5 gap-4">
          <div className="col-span-3 row-span-5">
            <CardIconTextCenterColored
              iconUrl="/Frame2218.png"
              titleText="Residential Foundations"
              bodyTextPresent="Our foundation solutions for residential developments prioritize stability and longevity. We assess soil properties, groundwater levels, and potential settlement factors to recommend foundation types best suited for your site. From shallow footings and slab-on-grade to deep foundations for challenging conditions, we deliver foundations that will stand the test of time."
              bodyText="Our foundation solutions for residential developments prioritize stability and longevity. We assess soil properties, groundwater levels, and potential settlement factors to recommend foundation types best suited for your site. From shallow footings and slab-on-grade to deep foundations for challenging conditions, we deliver foundations that will stand the test of time."
            />
          </div>
          <div className="col-span-3 row-span-5 col-start-4">
            <CardIconTextCenterColored
              iconUrl="/Frame2218.png"
              titleText="Infrastructure Foundations"
              bodyTextPresent="Infrastructure projects require a deep understanding of complex ground conditions. We partner with project engineers to design foundations for roads, bridges, pipelines, and more. With advanced testing and analysis, we ensure your infrastructure foundations withstand heavy loads, environmental challenges, and decades of use."
              bodyText="Infrastructure projects require a deep understanding of complex ground conditions. We partner with project engineers to design foundations for roads, bridges, pipelines, and more. With advanced testing and analysis, we ensure your infrastructure foundations withstand heavy loads, environmental challenges, and decades of use."
            />
          </div>
          <div className="col-span-3 row-span-5 col-start-7">
            <CardIconTextCenterColored
              iconUrl="/Frame2218.png"
              titleText="Commercial Foundations"
              bodyTextPresent="For commercial and industrial projects, we provide robust foundation solutions that meet the unique demands of high-load structures. From warehouses to office buildings, our team recommends foundation types to meet load-bearing requirements and handle soil-structure interaction. Our foundation expertise brings security and stability to your commercial investments."
              bodyText="For commercial and industrial projects, we provide robust foundation solutions that meet the unique demands of high-load structures. From warehouses to office buildings, our team recommends foundation types to meet load-bearing requirements and handle soil-structure interaction. Our foundation expertise brings security and stability to your commercial investments."
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto  p-12 mt-[48px]">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-[32px]">
          Foundation Design and Analysis
        </h1>
        <p className="text-gray-600  mt-2  mb-[64px]">
          Our expertise goes beyond standard solutions, providing added value
          with comprehensive support:
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-9 grid-rows-8 gap-4 mt-10">
          {/* Left Column */}
          <div className="col-span-3 row-span-4 flex flex-col justify-center items-start pl-6 text-left">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <hr className="mt-10 border-gray-300" />
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Soil Bearing Capacity Assessments
            </h2>
            <p className="text-gray-600 mt-5">
              We evaluate soil strength and load-bearing capacity to design the
              most effective, efficient foundation for your project.
            </p>
          </div>

          <div className="col-span-3 row-span-4 col-start-1 row-start-5 flex flex-col justify-center items-start pl-6 text-left">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <hr className="mt-10 border-gray-300" />
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Settlement Analysis
            </h2>
            <p className="text-gray-600 mt-5">
              Through in-situ and lab testing, we assess potential settlement
              risks, recommending adjustments to protect against long-term
              issues.
            </p>
          </div>

          {/* Center Image */}
          <div className="col-span-3 row-span-8 col-start-4 flex justify-center items-center">
            <img
              src="/Frame2237.png"
              alt="Foundation Analysis"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Right Column */}
          <div className="col-span-3 row-span-4 col-start-7 row-start-1 flex flex-col justify-center items-start pl-6">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <hr className="mt-10 border-gray-300" />
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Slope Stability and Retaining Structures
            </h2>
            <p className="text-gray-600 mt-5">
              For sites with slopes, our team offers expert analysis and design
              recommendations for retaining walls and slope stabilization,
              ensuring safe, secure construction.
            </p>
          </div>

          <div className="col-span-3 row-span-4 col-start-7 row-start-5 flex flex-col justify-center items-start pl-6">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Piling and Deep Foundation Solutions
            </h2>
            <p className="text-gray-600 mt-5">
              When shallow foundations aren’t feasible, we provide solutions for
              piling and deep foundations, perfect for sites with weak or
              compressible soils.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto p-8 mt-[48px]">
        {/* Header Section */}
        <h1 className="text-[48px] font-semibold mb-4">Pile Foundations</h1>
        <p className="text-gray-600 mb-8">
          When a project demands deep foundations to handle heavy loads or
          complex ground conditions, Statewide Geotechnical’s pile foundation
          solutions deliver strength and durability. Pile foundations are
          essential for infrastructure, commercial, and residential projects on
          sites where shallow foundations simply won’t cut it.
        </p>
        <p className="text-gray-600 mb-[24px]">
          Our Pile Foundation Services Include:
        </p>

        <div className="grid grid-cols-3 gap-[32px]">
          {/* Row 1 */}
          <div className="col-span-1 border-[1px] border-[#D1EDFF] rounded-3xl">
            <img
              src="/Frame2219.png"
              alt="Drilling work"
              className="w-full aspect-square object-cover rounded-xl"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">Driven Piles</h2>
            <p className="text-gray-600 mt-5">
              Our driven piles are ideal for supporting heavy loads in both
              loose and cohesive soils. This low-disturbance option is perfect
              for sites that need stability without significant ground
              disruption.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">Bored Piles</h2>
            <p className="text-gray-600">
              For urban projects or areas sensitive to vibration, our bored
              piles oAer deep, reinforced support. Bored piles are an excellent
              choice for high-rise buildings, bridges, and structures with
              complex foundation needs.
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">Screw Piles</h2>
            <p className="text-gray-600">
              Our screw piles install quickly and work in diverse soil types,
              making them ideal for light to moderate loads in residential and
              smaller commercial projects.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">Micropiles</h2>
            <p className="text-gray-600">
              For confined spaces or difficult ground conditions, our micropiles
              provide high-capacity support with minimal space requirements.
              Perfect for retrofit applications and underpinning, micropiles
              reinforce existing foundations safely and efficiently.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Piling Analysis and Testing
            </h2>
            <p className="text-gray-600">
              We conduct rigorous load-bearing assessments and pile load
              testing, including static and dynamic testing, to validate design
              assumptions and ensure foundations perform to spec.
            </p>
          </div>
        </div>
        {/* Footer */}
        <div className="col-span-1 md:col-span-8 md:col-start-1 md:row-start-10  text-gray-600 mt-[32px]">
          <p>
            With precision engineering and tailored solutions, we deliver
            reliable pile foundations to support your most ambitious projects.
          </p>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto p-8 mt-[48px]">
        {/* Header Section */}
        <h1 className="text-[48px] font-semibold mb-4">Shallow Foundations</h1>
        <p className="text-gray-600 mb-8">
          For stable ground projects, our shallow foundation solutions provide
          an efficient, cost-effective choice. Shallow foundations work well for
          low- to medium-load structures, offering stability, durability, and
          ease of installation for a wide range of applications.
        </p>
        <p className="text-gray-600 mb-[24px]">
          Our Shallow Foundation Services Include:
        </p>

        <div className="grid grid-cols-3 gap-[32px]">
          {/* Row 1 */}
          <div className="col-span-1 bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">Spread Footings</h2>
            <p className="text-gray-600 mt-5">
              Spread footings distribute structural loads evenly, reducing
              stress on soil while enhancing stability. They’re a top choice for
              both residential and commercial buildings on stable sites.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">Strip Footings</h2>
            <p className="text-gray-600 mt-5">
              Designed to support linear structures, strip footings work well
              for load-bearing walls and retaining structures, delivering
              continuous support along the length of the wall.
            </p>
          </div>

          <div className="border-[1px] border-[#D1EDFF] rounded-3xl   ">
            <img
              src="/Frame2258.png"
              alt="Drilling work"
              className="w-full aspect-square object-cover rounded-xl"
            />
          </div>

          {/* Row 2 */}
          <div className="bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Raft (Mat) Foundations
            </h2>
            <p className="text-gray-600">
              For variable soil conditions or structures with high-load
              requirements, our raft foundations provide distributed support
              across the building footprint, ideal for uneven load distribution.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">Pad Footings</h2>
            <p className="text-gray-600">
              Pad footings support individual columns or posts in light
              structures like small buildings or garages, ensuring direct load
              transfer and cost-effective support.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-3xl bg-[#F7FCFF] border-[1px] border-[#D1EDFF]">
            <div>
              <img src="/helmet.png" alt="helmet" />
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-5">
              Shallow Foundation Design and Analysis
            </h2>
            <p className="text-gray-600">
              We conduct in-depth site assessments to design shallow foundations
              that meet load-bearing and settlement requirements. By evaluating
              soil stability, water tables, and site-specific factors, we
              deliver safe, long-lasting solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[42px] mb-[48px]">
        <TextSection
          title="Partner with Statewide Geotechnical for Reliable, Cost-Effective Foundations"
          description="With expertise in both shallow and deep foundation systems, Statewide Geotechnical is equipped to provide a foundation solution perfectly aligned with your project’s needs. Whether it’s residential, commercial, or infrastructure, our in-house team of experts ensures safety, reliability, and efficiency from the ground up. Make Statewide Geotechnical (Aust) Pty Ltd your foundation partner, and experience the assurance of quality and value at every stage."
          buttonText="Request a Consultation!"
          buttonLink="www.google.com"
        />
      </div>
    </div>
  );
};

export default FoundationBuilt;
