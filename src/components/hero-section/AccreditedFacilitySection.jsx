import { GoArrowUpRight } from "react-icons/go";
import { GroupTalk } from "../../assets/assets";

const AccreditedFacilitySection = () => {
  return (
    <section className="bg-white w-full  h-auto  mx-auto md:px-35 mb-[3rem] px-5 py-10">
        <h2 className="text-2xl md:text-[54px] font-600  text-textDark leading-snug">
            Statewide Laboratories Pty Ltd – Your Trusted   <br/>
            NATA-Accredited Testing Facility
        </h2>
       
          <div className=" flex flex-col lg:flex-row items-center  md:gap-25">
          <div className="lg:w-[50%]  ">
            

            <p className="text-base md:text-[20px] text-textLight mt-4 text-justify">
            Statewide Laboratories Pty Ltd is proudly <span className="font-semibold">accredited for compliance with ISO/IEC 17025 (NATA Accreditation Number: 20648)</span>, ensuring that we meet the highest standards in testing accuracy, quality, and reliability. Our team, led by an experienced laboratory manager, includes skilled technicians supported by in-house geotechnical engineers and geologists, delivering industry-leading expertise across all testing services.
            </p>

            <p className="text-base md:text-lg text-textLight mt-4 text-justify">
            At our <span className="font-semibold">state-of-the-art laboratory in Ringwood, VIC</span>, we are equipped with the latest technology to meet the demands of the modern construction industry. Our facility is designed to deliver efficient and precise testing results, providing clients with confidence and assurance in every project. Additionally, with access to our in-house workshop, we continually develop innovative testing techniques to improve productivity and streamline processes.
            </p>

         </div>

            {/* Right Image */}
            <div className="lg:w-[40%] ">
                <img
                src={GroupTalk}
                alt="Facility"
                className="w-full h-auto lg:h-[400px] object-cover md:block hidden rounded-3xl shadow-lg"
                />
            </div>
        
          
          </div> 
        
          <div className="font-400 ">
            <div className="mt-6">
                <p className="text-base md:text-lg text-textDark ">Address:</p>
                <p className="text-base md:text-lg text-textLight">17-20 Summer Lane</p>
                <p className="text-base md:text-lg text-textLight">Ringwood, VIC 3134</p>
            </div>

            <p className="mt-6 text-base md:text-lg text-textDark ">
                Partner with Us for Accredited Testing Services You Can Trust
            </p>

            <div className="mt-4">
                <a
                    href="#"
                    className="text-[#0064FF] font-600 text-base md:text-lg inline-flex items-center gap-1 hover:text-blue-700 transition duration-300"
                >
                    Contact Us to Learn More About Our Services <GoArrowUpRight />
                </a>
            </div>
        </div>
          
    </section>
  );
};

export default AccreditedFacilitySection;