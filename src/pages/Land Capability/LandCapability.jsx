import React from 'react';
import ButtonCard from '../../components/card/ButtonCard';
import CardIconTopLeft from '../../components/card-icon-top-left/CardIconTopLeft';
import TextSection from '../../components/text/TextSection';
import { WorkerHat, Mapping, Arrowup } from '../../assets/assets';

const LandCapability = () => {
    return (
        <div className='w-full flex flex-col items-center bg-slate-background'>
            {/* First Section */}
           <div className="mt-4 sm:mt-4 px-3 sm:px-4">
              <ButtonCard
                image={Mapping}
                title="Land Capability Assessment"
                description="At Statewide Geotechnical (Aust) Pty Ltd, we provide expert Land Capability Assessment (LCA) services to evaluate the suitability of land for specific uses, ensuring sustainable development and regulatory compliance. Our assessments are designed to support a wide range of projects, including residential, commercial, agricultural, and infrastructure developments. By understanding soil, water, and environmental factors, we deliver valuable insights that guide project planning and minimize environmental impacts."
                buttonText="Get in Touch"
              />
            </div>
            <div className='px-[30px] md:px-[110px] sm:px-[20px]'>

             {/* Second Section */}
             <div className='soil__second-section py-[128px] w-full h-auto'>
                <div className='flex flex-col items-left justify-left w-full h-auto'>
                    <h2 className='text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-[32px] text-4xl text-center md:text-left'>
                    Our Land Capability Assessment Services
                    </h2>
                    <p className='text-base mb-[45px] sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0'>
                    Land Capability Assessments are essential for determining the viability of a site for its intended use, whether that’s residential development, wastewater treatment, agriculture, or industrial facilities. Our in-depth LCA services provide clients with a clear understanding of land constraints and opportunities, allowing for informed, sustainable decisions.
                    </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[35px] w-full">
                          <div className='col-span-1 row-span-1 sm:w-full'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white-100'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Soil and Geotechnical Analysis'
                                bodyText='Our team conducts thorough soil testing to analyze soil type, structure, permeability, and load-bearing capacity. This analysis helps determine whether the land is suitable for construction, agriculture, or other uses and identifies any potential limitations in soil composition.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Hydrological Assessment'
                                bodyText='We evaluate groundwater levels, drainage patterns, and surface water behavior to understand how water interacts with the site. Effective water management is essential for preventing flooding, erosion, and waterlogging, particularly for developments in areas with high water tables or challenging drainage conditions.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Environmental and Ecological Considerations'
                                bodyText='Our LCA services include assessing the impact of development on local ecosystems and biodiversity. We evaluate vegetation cover, slope stability, erosion risk, and other environmental factors, ensuring the project aligns with environmental regulations and minimizes ecological disturbance.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Wastewater and Septic System Feasibility'
                                bodyText='For sites requiring on-site wastewater management, we assess soil suitability for septic systems, effluent disposal, and wastewater treatment. Our team provides recommendations for sustainable wastewater solutions that comply with local health and environmental standards.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Slope and Erosion Risk Assessment'
                                bodyText='We assess slope gradients and erosion risks to identify areas vulnerable to soil movement or degradation. For sloped sites, our team recommends stabilization measures to prevent soil erosion, maintain site integrity, and ensure long-term sustainability.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Land Use Planning and Zoning Compliance'
                                bodyText='Our LCA includes a review of zoning and land use regulations, helping you navigate compliance requirements efficiently. We provide tailored advice on how to optimize land use within regulatory frameworks, ensuring your project aligns with local and state guidelines.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>
 
                        </div>
                </div>

            </div>
            </div>

           {/*Third Section*/}
           <div className='mb-8 px-4 sm:px-0 sm:mb-40 md:mb-58 w-full bg-[#EBF7FF] md:py-6'>
            <TextSection
                title="Why Choose Statewide Geotechnical for Land Capability Assessment?"
                description="With Statewide Geotechnical, you gain a trusted partner who understands the complexities of land capability and development feasibility. Our team combines geotechnical expertise, environmental insight, and regulatory knowledge to deliver comprehensive assessments that support sustainable, compliant project outcomes. We provide clear, actionable recommendations that guide project planning and help clients make informed, responsible land use decisions. Whether for residential subdivision, agricultural expansion, commercial development, or wastewater management, our Land Capability Assessment services deliver the knowledge and support you need for successful, sustainable site development."
                buttonText="Get a Land Capability Assessment Today"
                buttonLink="#"
            />
          </div>

            <div className='px-[30px] md:px-[110px] sm:px-[20px]'>


            {/* Fourth Section */}
                <div className='flex w-full h-auto bg-white-100 py-21'>
                    <div className='flex flex-col items-left justify-left w-full h-auto'>
                        <h2 className='text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left'>
                        Statewide Geotechnical (Aust) Pty Ltd – Your Partner in Sustainable Land Use
            
                        </h2>
                        <p className='text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0'>
                        Let Statewide Geotechnical help you unlock the full potential of your land. With our commitment to accuracy, sustainability, and regulatory compliance, we provide the insights needed to bring your project to life while respecting and preserving the natural environment.
                        </p>
            
                        <div className='text-left text-[15px] font-medium mt-4 text-blue-600 pt-40 '>
                            <a href='#' className='flex items-center'>
                                <span className='mr-1'>
                                    Get a Consultation
                                </span>
                                     <img className=' pl-1 flex w-4 h-4 pl-1' src={Arrowup} alt='Arrow up' />
                            </a>
                        </div>
                    </div>
                            
            
                </div>
               </div>
           
        </div>
    );
};

export default LandCapability;