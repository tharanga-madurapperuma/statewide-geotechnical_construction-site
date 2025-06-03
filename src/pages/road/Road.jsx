import React from "react";
import CardIconTopLeft from "../../components/card-icon-top-left/CardIconTopLeft";
import ButtonCard from "../../components/card/ButtonCard";
import TextSection from "../../components/text/TextSection";
import {
  Arrowup,
  WorkerHat,
  RoadHero,
  Road1,
  Road2,
  RoadIcon,
  roadpaw
} from "../../assets/assets";
import { Link } from "react-router-dom";

const Road = () => {
    return (
      <div className="w-full flex flex-col items-center bg-slate-background md:mt-[108px]">
        {/* First Section */}
        <div>
          <ButtonCard
            image={roadpaw}
            title="Road Pavement Design"
            description="At Statewide Geotechnical (Aust), we provide tailored road pavement design solutions that ensure durability, cost-efficiency, and compliance with regulatory standards. With extensive experience in geotechnical engineering, we design pavements to withstand traffic loads, local environmental conditions, and long-term wear, delivering solutions for residential streets, highways, commercial areas, and infrastructure projects."
            buttonText="Request a Consultation"
          />
        </div>

        {/* Third Section */}
        <div className="mb-8 mt-[64px] px-8 sm:px-[70px] md:px-[80px] lg:px-[100px] xl:px-[110px] sm:mb-40 md:mb-58 w-full bg-[#EBF7FF] md:py-6">
          <TextSection
            title="Why Choose Statewide Geotechnical for Road Pavement Design?"
            description="Statewide Geotechnical combines geotechnical expertise with industry-leading analysis to deliver road pavement designs that maximize durability, safety, and cost-efficiency. Our approach is grounded in thorough site assessment, precise material selection, and a commitment to regulatory compliance, ensuring each project meets or exceeds industry standards."
          />
        </div>

        <div className="px-[30px] md:px-[110px] sm:px-[20px]">
          {/* Fourth Section */}
          <div className="flex w-full -mt-[64px] h-auto bg-white-100 py-21">
            <div className="flex flex-col items-left justify-left w-full h-auto">
              <h2 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left">
                Statewide Geotechnical (Aust) – Your Partner for Resilient Road
                Infrastructure
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                From local access roads to high-capacity highways, trust
                Statewide Geotechnical to provide road pavement design solutions
                that stand the test of time. With our experience and dedication
                to quality, we deliver safe, sustainable, and high-performance
                pavements for all types of infrastructure projects.
              </p>

              <div className="flex mt-4 pt-[40px]">
                <a
                  href="#"
                  className="flex text-[#4E61F6] font-medium text-center md:text-left text-base sm:text-lg border-b-2 border-transparent hover:border-blue-600 transition duration-300"
                >
                  <Link to="/contact">
                    <span className="mr-1 text-[18px]">Get a Consultation</span>
                  </Link>
                  <img
                    className=" pl-1 flex w-4 h-4"
                    src={Arrowup}
                    alt="Arrow up"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Road;
