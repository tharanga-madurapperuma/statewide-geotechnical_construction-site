import React from "react";
import ButtonCard from "../components/card/ButtonCard";

import TextSection from "../components/text/TextSection";
import CardIconTopLeft from "../components/card-icon-top-left/CardIconTopLeft";

const FoundationBuilt = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex items-center justify-center mt-0">
        <ButtonCard
          image="/Rectangle647.png"
          title="Foundations Built for Reliability"
          description="At Statewide Geotechnical (Aust) Pty Ltd, we understand that a project’s success starts from the ground up. That’s why we offer fully customized foundation solutions for residential, infrastructure, and commercial projects of all sizes. Our experienced team combines advanced geotechnical engineering expertise with a comprehensive range of in-house capabilities, ensuring safe, dependable, and cost-effective foundations tailored to your specific needs. From site assessments to design and recommendations, our team supports every phase to make your vision a reality."
          buttonText="Get in Touch"
          imagePosition="right"
          className="mb-8"
        />
      </div>

      <div className="max-w-[1300px] mx-auto mt-[94px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 font-inter mb-6 md:mb-[32px] text-center md:text-left">
          Foundation Solutions for Every Project
        </h1>

        {/* Responsive Grid Layout */}
        <div>
          {/* Desktop Layout (lg and up) - Original 9-column layout */}
          <div className="hidden lg:grid grid-cols-9 grid-rows-5 gap-4 mt-[56px]">
            <div className="col-span-3 row-span-5">
              <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Residential Foundations"
                bodyText="Our foundation solutions for residential developments prioritize stability and longevity. We assess soil properties, groundwater levels, and potential settlement factors to recommend foundation types best suited for your site. From shallow footings and slab-on-grade to deep foundations for challenging conditions, we deliver foundations that will stand the test of time."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
            <div className="col-span-3 row-span-5 col-start-4">
              <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Infrastructure Foundations"
                bodyText="Infrastructure projects require a deep understanding of complex ground conditions. We partner with project engineers to design foundations for roads, bridges, pipelines, and more. With advanced testing and analysis, we ensure your infrastructure foundations withstand heavy loads, environmental challenges, and decades of use."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
            <div className="col-span-3 row-span-5 col-start-7">

              <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Commercial Foundations"
                bodyText="For commercial and industrial projects, we provide robust foundation solutions that meet the unique demands of high-load structures. From warehouses to office buildings, our team recommends foundation types to meet load-bearing requirements and handle soil-structure interaction. Our foundation expertise brings security and stability to your commercial investments."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
          </div>

          {/* Tablet Layout (md) - 2-column layout */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 px-4">
            <div className="col-span-1">
            <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Residential Foundations"
                bodyText="Our foundation solutions for residential developments prioritize stability and longevity. We assess soil properties, groundwater levels, and potential settlement factors to recommend foundation types best suited for your site. From shallow footings and slab-on-grade to deep foundations for challenging conditions, we deliver foundations that will stand the test of time."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
            <div className="col-span-1">
            <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Infrastructure Foundations"
                bodyText="Infrastructure projects require a deep understanding of complex ground conditions. We partner with project engineers to design foundations for roads, bridges, pipelines, and more. With advanced testing and analysis, we ensure your infrastructure foundations withstand heavy loads, environmental challenges, and decades of use."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
            <div className="col-span-2">
            <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Commercial Foundations"
                bodyText="For commercial and industrial projects, we provide robust foundation solutions that meet the unique demands of high-load structures. From warehouses to office buildings, our team recommends foundation types to meet load-bearing requirements and handle soil-structure interaction. Our foundation expertise brings security and stability to your commercial investments."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
          </div>

          {/* Small Tablet Layout (sm) - 2-column but different arrangement */}
          <div className="hidden sm:grid md:hidden grid-cols-2 gap-4 px-4">
            <div className="col-span-2">
            <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Residential Foundations"
                bodyText="Our foundation solutions for residential developments prioritize stability and longevity. We assess soil properties, groundwater levels, and potential settlement factors to recommend foundation types best suited for your site. From shallow footings and slab-on-grade to deep foundations for challenging conditions, we deliver foundations that will stand the test of time."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
            <div className="col-span-1">
            <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Infrastructure Foundations"
                bodyText="Infrastructure projects require a deep understanding of complex ground conditions. We partner with project engineers to design foundations for roads, bridges, pipelines, and more. With advanced testing and analysis, we ensure your infrastructure foundations withstand heavy loads, environmental challenges, and decades of use."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
            <div className="col-span-1">
            <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Commercial Foundations"
                bodyText="For commercial and industrial projects, we provide robust foundation solutions that meet the unique demands of high-load structures. From warehouses to office buildings, our team recommends foundation types to meet load-bearing requirements and handle soil-structure interaction. Our foundation expertise brings security and stability to your commercial investments."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
          </div>

          {/* Mobile Layout (xs) - Single column stacked */}
          <div className="block sm:hidden px-4 space-y-6">
            <div>
            <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Residential Foundations"
                bodyText="Our foundation solutions for residential developments prioritize stability and longevity. We assess soil properties, groundwater levels, and potential settlement factors to recommend foundation types best suited for your site. From shallow footings and slab-on-grade to deep foundations for challenging conditions, we deliver foundations that will stand the test of time."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
            <div>
            <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Infrastructure Foundations"
                bodyText="Infrastructure projects require a deep understanding of complex ground conditions. We partner with project engineers to design foundations for roads, bridges, pipelines, and more. With advanced testing and analysis, we ensure your infrastructure foundations withstand heavy loads, environmental challenges, and decades of use."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
            <div>
            <CardIconTopLeft
                iconUrl="/Frame2218.png"
                iconBackground="bg-white-100"
                background="bg-blue-600"
                stroke={true}
                titleText="Commercial Foundations"
                bodyText="For commercial and industrial projects, we provide robust foundation solutions that meet the unique demands of high-load structures. From warehouses to office buildings, our team recommends foundation types to meet load-bearing requirements and handle soil-structure interaction. Our foundation expertise brings security and stability to your commercial investments."
                titleColor="text-white"
                bodyColor="text-white"
                padding={true}
                backgroundHover={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto mt-[94px]">
        {/* Heading */}
        <h1 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-[32px] text-4xl text-center md:text-left">
          Foundation Design and Analysis
        </h1>
        <p className="text-base mb-[45px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
          Our expertise goes beyond standard solutions, providing added value
          with comprehensive support:
        </p>

        {/* Grid Layout - Responsive Version */}
        <div className="mt-10">
          {/* Desktop and Tablet View (md and larger) */}
          <div className="hidden md:grid grid-cols-9 grid-rows-8 gap-4">
            {/* Left Column */}
            <div className="col-span-3 row-span-4 flex flex-col justify-center items-start  text-left">
              <CardIconTopLeft
                iconUrl="/helmet.png"
                iconBackground="bg-white-100"
                background="bg-Primary-100"
                stroke={true}
                titleText="Soil Bearing Capacity Assessments"
                bodyText="We evaluate soil strength and load-bearing capacity to design the
        most effective, efficient foundation for your project."
                titleColor="text-gray-900"
                bodyColor="text-gray-900"
                padding={true}
                backgroundHover={false}
              />
            </div>

            <div className="col-span-3 row-span-4 col-start-1 row-start-5 flex flex-col justify-center items-start pl-6 text-left">
              <CardIconTopLeft
                iconUrl="/helmet.png"
                iconBackground="bg-white-100"
                background="bg-Primary-100"
                stroke={true}
                titleText="Settlement Analysis"
                bodyText="Through in-situ and lab testing, we assess potential settlement
        risks, recommending adjustments to protect against long-term
        issues."
                titleColor="text-gray-900"
                bodyColor="text-gray-900"
                padding={true}
                backgroundHover={false}
              />
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
              <CardIconTopLeft
                iconUrl="/helmet.png"
                iconBackground="bg-white-100"
                background="bg-Primary-100"
                stroke={true}
                titleText="Slope Stability and Retaining Structures"
                bodyText="For sites with slopes, our team offers expert analysis and design
        recommendations for retaining walls and slope stabilization,
        ensuring safe, secure construction."
                titleColor="text-gray-900"
                bodyColor="text-gray-900"
                padding={true}
                backgroundHover={false}
              />
            </div>

            <div className="col-span-3 row-span-4 col-start-7 row-start-5 flex flex-col justify-center items-start pl-6">
              <CardIconTopLeft
                iconUrl="/helmet.png"
                iconBackground="bg-white-100"
                background="bg-Primary-100"
                stroke={true}
                titleText="Piling and Deep Foundation Solutions"
                bodyText=" When shallow foundations aren't feasible, we provide solutions for
        piling and deep foundations, perfect for sites with weak or
        compressible soils."
                titleColor="text-gray-900"
                bodyColor="text-gray-900"
                padding={true}
                backgroundHover={false}
              />
            </div>
          </div>

          {/* Tablet View (sm to md) */}
          <div className="hidden sm:block md:hidden">
            {/* Top Section - Image */}
            <div className="mb-6 px-4">
              <img
                src="/Frame2237.png"
                alt="Foundation Analysis"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>

            {/* Bottom Section - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-6 px-4">
              <div className="flex flex-col justify-center items-start pl-6 text-left mb-6">
                <CardIconTopLeft
                  iconUrl="/helmet.png"
                  iconBackground="bg-white-100"
                  background="bg-Primary-100"
                  stroke={true}
                  titleText="Soil Bearing Capacity Assessments"
                  bodyText="We evaluate soil strength and load-bearing capacity to design the
          most effective, efficient foundation for your project."
                  titleColor="text-gray-900"
                  bodyColor="text-gray-900"
                  padding={true}
                  backgroundHover={false}
                />
              </div>

              <div className="flex flex-col justify-center items-start pl-6 text-left mb-6">
                <CardIconTopLeft
                  iconUrl="/helmet.png"
                  iconBackground="bg-white-100"
                  background="bg-Primary-100"
                  stroke={true}
                  titleText="Settlement Analysis"
                  bodyText="Through in-situ and lab testing, we assess potential settlement
          risks, recommending adjustments to protect against long-term
          issues."
                  titleColor="text-gray-900"
                  bodyColor="text-gray-900"
                  padding={true}
                  backgroundHover={false}
                />
              </div>

              <div className="flex flex-col justify-center items-start pl-6 text-left mb-6">
                <CardIconTopLeft
                  iconUrl="/helmet.png"
                  iconBackground="bg-white-100"
                  background="bg-Primary-100"
                  stroke={true}
                  titleText="Slope Stability and Retaining Structures"
                  bodyText="For sites with slopes, our team offers expert analysis and design
          recommendations for retaining walls and slope stabilization,
          ensuring safe, secure construction."
                  titleColor="text-gray-900"
                  bodyColor="text-gray-900"
                  padding={true}
                  backgroundHover={false}
                />
              </div>

              <div className="flex flex-col justify-center items-start pl-6 text-left mb-6">
                <CardIconTopLeft
                  iconUrl="/helmet.png"
                  iconBackground="bg-white-100"
                  background="bg-Primary-100"
                  stroke={true}
                  titleText="Piling and Deep Foundation Solutions"
                  bodyText=" When shallow foundations aren't feasible, we provide solutions for
          piling and deep foundations, perfect for sites with weak or
          compressible soils."
                  titleColor="text-gray-900"
                  bodyColor="text-gray-900"
                  padding={true}
                  backgroundHover={false}
                />
              </div>
            </div>
          </div>

          {/* Mobile View (xs to sm) */}
          <div className="block sm:hidden">
            {/* Top Image */}
            <div className="mb-6 px-4">
              <img
                src="/Frame2237.png"
                alt="Foundation Analysis"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>

            {/* Stacked Cards */}
            <div className="space-y-6 px-4">
              <div className="flex flex-col justify-center items-start pl-4 text-left">
                <CardIconTopLeft
                  iconUrl="/helmet.png"
                  iconBackground="bg-white-100"
                  background="bg-Primary-100"
                  stroke={true}
                  titleText="Soil Bearing Capacity Assessments"
                  bodyText="We evaluate soil strength and load-bearing capacity to design the
          most effective, efficient foundation for your project."
                  titleColor="text-gray-900"
                  bodyColor="text-gray-900"
                  padding={true}
                  backgroundHover={false}
                />
              </div>

              <div className="flex flex-col justify-center items-start pl-4 text-left">
                <CardIconTopLeft
                  iconUrl="/helmet.png"
                  iconBackground="bg-white-100"
                  background="bg-Primary-100"
                  stroke={true}
                  titleText="Settlement Analysis"
                  bodyText="Through in-situ and lab testing, we assess potential settlement
          risks, recommending adjustments to protect against long-term
          issues."
                  titleColor="text-gray-900"
                  bodyColor="text-gray-900"
                  padding={true}
                  backgroundHover={false}
                />
              </div>

              <div className="flex flex-col justify-center items-start pl-4 text-left">
                <CardIconTopLeft
                  iconUrl="/helmet.png"
                  iconBackground="bg-white-100"
                  background="bg-Primary-100"
                  stroke={true}
                  titleText="Slope Stability and Retaining Structures"
                  bodyText="For sites with slopes, our team offers expert analysis and design
          recommendations for retaining walls and slope stabilization,
          ensuring safe, secure construction."
                  titleColor="text-gray-900"
                  bodyColor="text-gray-900"
                  padding={true}
                  backgroundHover={false}
                />
              </div>

              <div className="flex flex-col justify-center items-start pl-4 text-left">
                <CardIconTopLeft
                  iconUrl="/helmet.png"
                  iconBackground="bg-white-100"
                  background="bg-Primary-100"
                  stroke={true}
                  titleText="Piling and Deep Foundation Solutions"
                  bodyText=" When shallow foundations aren't feasible, we provide solutions for
          piling and deep foundations, perfect for sites with weak or
          compressible soils."
                  titleColor="text-gray-900"
                  bodyColor="text-gray-900"
                  padding={true}
                  backgroundHover={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto mt-[94px]">
        {/* Header Section */}
        <h1 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-[32px] text-4xl text-center md:text-left">
          Pile Foundations
        </h1>
        <p className="text-base mb-[45px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
          When a project demands deep foundations to handle heavy loads or
          complex ground conditions, Statewide Geotechnical’s pile foundation
          solutions deliver strength and durability. Pile foundations are
          essential for infrastructure, commercial, and residential projects on
          sites where shallow foundations simply won’t cut it.
        </p>
        <p className="text-gray-600 mb-[24px]">
          Our Pile Foundation Services Include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[35px] w-full">
          {/* Row 1 */}
          <div className="col-span-1 row-span-1 sm:w-full border-[1px] border-[#D1EDFF] rounded-3xl">
            <img
              src="/Frame2219.png"
              alt="Drilling work"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Driven Piles"
              bodyText="Our driven piles are ideal for supporting heavy loads in both
              loose and cohesive soils. This low-disturbance option is perfect
              for sites that need stability without significant ground
              disruption."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Bored Piles"
              bodyText="For urban projects or areas sensitive to vibration, our bored
              piles oAer deep, reinforced support. Bored piles are an excellent
              choice for high-rise buildings, bridges, and structures with
              complex foundation needs."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          {/* Row 2 */}
          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Screw Piles"
              bodyText="Our screw piles install quickly and work in diverse soil types,
              making them ideal for light to moderate loads in residential and
              smaller commercial projects."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Micropiles"
              bodyText="For confined spaces or difficult ground conditions, our micropiles
              provide high-capacity support with minimal space requirements.
              Perfect for retrofit applications and underpinning, micropiles
              reinforce existing foundations safely and efficiently."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Piling Analysis and Testing"
              bodyText="We conduct rigorous load-bearing assessments and pile load
              testing, including static and dynamic testing, to validate design
              assumptions and ensure foundations perform to spec."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
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

      <div className="max-w-[1300px] mx-auto mt-[94px]">
        {/* Header Section */}
        <h1 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-[32px] text-4xl text-center md:text-left">
          Shallow Foundations
        </h1>
        <p className="text-base mb-[45px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
          For stable ground projects, our shallow foundation solutions provide
          an efficient, cost-effective choice. Shallow foundations work well for
          low- to medium-load structures, offering stability, durability, and
          ease of installation for a wide range of applications.
        </p>
        <p className="text-gray-600 mb-[24px]">
          Our Shallow Foundation Services Include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[35px] w-full">
          {/* Row 1 */}
          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Spread Footings"
              bodyText="Spread footings distribute structural loads evenly, reducing
              stress on soil while enhancing stability. They’re a top choice for
              both residential and commercial buildings on stable sites."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Strip Footings"
              bodyText="Designed to support linear structures, strip footings work well
              for load-bearing walls and retaining structures, delivering
              continuous support along the length of the wall."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          <div className="border-[1px] border-[#D1EDFF] rounded-3xl   ">
            <img
              src="/Frame2258.png"
              alt="Drilling work"
              className="w-full aspect-square object-cover rounded-xl"
            />
          </div>

          {/* Row 2 */}
          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Raft (Mat) Foundations"
              bodyText="For variable soil conditions or structures with high-load
              requirements, our raft foundations provide distributed support
              across the building footprint, ideal for uneven load distribution."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Pad Footings"
              bodyText="Pad footings support individual columns or posts in light
              structures like small buildings or garages, ensuring direct load
              transfer and cost-effective support."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>

          <div className="col-span-1 row-span-1">
            <CardIconTopLeft
              iconUrl="/helmet.png"
              iconBackground="bg-white-100"
              background="bg-Primary-100"
              stroke={true}
              titleText="Shallow Foundation Design and Analysis"
              bodyText="We conduct in-depth site assessments to design shallow foundations
              that meet load-bearing and settlement requirements. By evaluating
              soil stability, water tables, and site-specific factors, we
              deliver safe, long-lasting solutions."
              titleColor="text-gray-900"
              bodyColor="text-gray-900"
              padding={true}
              backgroundHover={false}
            />
          </div>
        </div>
      </div>

      <div className="mb-8 px-8 sm:px-[70px] md:px-[80px] lg:px-[100px] xl:px-[110px] sm:mb-40 md:mb-58 w-full bg-[#EBF7FF] md:py-6 mt-[64px]">
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
