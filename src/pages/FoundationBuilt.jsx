import React from "react";
import ButtonCard from "../components/card/ButtonCard";

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

    
    </div>
  );
};

export default FoundationBuilt;
