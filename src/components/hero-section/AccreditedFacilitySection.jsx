import {GoArrowUpRight} from "react-icons/go"
import {GroupTalk} from "../../assets/assets"
import {Link} from "react-router-dom"

const AccreditedFacilitySection = () => {
  return (
    <section className="bg-white w-full  h-auto  mx-auto sm:px-[70px] md:px-[80px] lg:px-[100px] xl:px-[110px] mb-[128px] px-8 py-10 max-w-[1920px] mt-[128px]">
      <h2 className="text-xl sm:text-[32px] lg:text-[40px] xl:text-[54px] font-600 lg:mb-[56px] text-gray-900 leading-snug">
        Statewide Laboratories Pty Ltd – Your Trusted NATA-Accredited Testing
        Facility
      </h2>

      <div className=" flex flex-col lg:flex-row items-center text-gray-600 md:gap-6">
        <div className="lg:w-[70%] xl:w-[50%] leading-6  ">
          <p className="text-base md:text-lg text-gray-600 mt-4 ">
            Statewide Laboratories Pty Ltd is proudly{" "}
            <span className="font-semibold">
              accredited for compliance with ISO/IEC 17025 (NATA Accreditation
              Number: 20648)
            </span>
            , ensuring that we meet the highest standards in testing accuracy,
            quality, and reliability. Our team, led by an experienced laboratory
            manager, includes skilled technicians supported by in-house
            geotechnical engineers and geologists, delivering industry-leading
            expertise across all testing services.
          </p>

          <p className="text-base md:text-lg text-textLight mt-4 ">
            At our{" "}
            <span className="font-semibold">
              state-of-the-art laboratory in Ringwood, VIC
            </span>
            , we are equipped with the latest technology to meet the demands of
            the modern construction industry. Our facility is designed to
            deliver efficient and precise testing results, providing clients
            with confidence and assurance in every project. Additionally, with
            access to our in-house workshop, we continually develop innovative
            testing techniques to improve productivity and streamline processes.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-[30%] xl:w-[50%] lg:block  hidden">
          <img
            src={GroupTalk}
            alt="Facility"
            className="w-full h-auto lg:h-[360px]  m-auto object-cover  rounded-3xl shadow-lg"
          />
        </div>
      </div>

      <div className="font-400 lg:mt-48 text-gray-600">
        <div className="mt-6">
          <p className="text-base md:text-lg text-textDark ">Address:</p>
          <p className="text-base md:text-lg text-textLight">
            17-20 Summer Lane
          </p>
          <p className="text-base md:text-lg text-textLight">
            Ringwood, VIC 3134
          </p>
        </div>

        <p className="mt-32 text-base md:text-lg text-textDark ">
          Partner with Us for Accredited Testing Services You Can Trust
        </p>

        <div className="mt-4">
          <Link to="/contact" className="text-[#0064FF] font-600 text-base md:text-lg inline-flex items-center gap-1 hover:text-blue-700 transition duration-300">
            Contact Us to Learn More About Our Services ↗
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AccreditedFacilitySection
