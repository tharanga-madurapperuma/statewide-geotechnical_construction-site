import React from 'react';
import CardIconTopLeft from '../../components/card-icon-top-left/CardIconTopLeft';
import ButtonCard from '../../components/card/ButtonCard';
import TextSection from '../../components/text/TextSection';
import { Engineers, WorkerHat, Arrowup, SoilTesting } from '../../assets/assets';

const Slopes = () => {
    return (
        <div className='w-full flex flex-col'>
          {/* First Section */}
          <div className="mt-4 sm:mt-6 px-3 sm:px-4">
              <ButtonCard
                image={SoilTesting}
                title="Slopes and Stability Assessment"
                description="At Statewide Geotechnical (Aust) Pvt Ltd, we offer comprehensive slope and stability assessment services designed to mitigate risks and enhance safety for construction projects on sloped or complex terrain. With our in-depth understanding of soil mechanics, ground behavior, and site-specific environmental factors, we provide precise evaluations and customized solutions to ensure stability for both natural and engineered slopes."
                buttonText="Get in Touch"
              />
            </div>
            {/* Second Section */}
            <div className='soil__second-section p-[45px] sm:p-[85px] w-full h-auto'>
                <div className='flex flex-col items-left justify-left w-full h-auto'>
                    <h2 className='text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left'>
                    Our Slope and Stability Assessment Services
                    </h2>
                    <p className='text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0'>
                    Slopes and embankments present unique challenges due to factors like soil composition, groundwater levels, and seasonal weather changes. Our team specializes in assessing these complexities, o8ering practical solutions to manage and prevent issues like erosion, landslides, and soil movement.
                    </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[35px] w-full">
                          <div className='col-span-1 row-span-1 sm:w-full'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white-100'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Geotechnical Site Assessment'
                                bodyText='We conduct a detailed site assessment to evaluate ground conditions, slope angles, and potential hazards. This assessment includes soil sampling, rock analysis, and in-situ testing to provide a comprehensive understanding of the site’s stability profile.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-2'>
                            <img src={Engineers} alt='Engineers' className='w-full h-full object-cover'/>
                          </div>

                          <div className='col-span-1 row-span-1'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Landslide Risk Evaluation'
                                bodyText='In areas prone to landslides or soil erosion, we o8er specialized risk evaluation to identify high-risk zones and recommend preventive measures. Our team considers geological, hydrological, and environmental factors to develop strategies that minimize landslide potential.'
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
                                titleText='Slope Stability Analysis'
                                bodyText='Using advanced modeling and analysis tools, our engineers perform slope stability calculations to determine the factor of safety and assess potential failure risks. By evaluating slip planes, slope geometry, and material properties, we ensure a thorough assessment that informs design and mitigation strategies.'
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
                                titleText='Drainage and Erosion Control'
                                bodyText='Poor drainage and uncontrolled surface water can significantly impact slope stability. We provide drainage analysis and design solutions, including surface and subsurface drainage systems, to manage water flow and prevent erosion. E8ective drainage solutions are crucial for reducing hydrostatic pressure and enhancing slope resilience.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white-100'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Retaining Structures for Slope Stabilization'
                                bodyText='For slopes requiring additional support, we design retaining structures such as retaining walls, soil nails, and reinforced earth systems. These structures are engineered to resist lateral earth pressures, improve slope stability, and provide long-lasting solutions for challenging terrain.'
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
                                titleText='Monitoring and Risk Management'
                                bodyText='To ensure long-term slope stability, we provide monitoring services to detect movement, settlement, or other changes in slope conditions. Our team uses advanced instrumentation and remote monitoring technology to track slope behavior over time, enabling early intervention if any stability issues arise.'
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
                                titleText='Ground Reinforcement and Soil Stabilization'
                                bodyText='In cases where soil reinforcement is needed, we o8er solutions such as geogrids, soil nailing, and grouting. These methods improve soil strength and cohesion, stabilizing slopes and enhancing load-bearing capacity. Our tailored reinforcement solutions help secure even the most complex slopes.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>
                          
                        </div>
                </div>

            </div>

            {/* Third Section */}
            <TextSection
                title='Why Choose Statewide Geotechnical for Slope Stability Assessment?'
                description='With our expert team and state-of-the-art analysis tools, Statewide Geotechnical provides reliable slope and stability assessments that empower you to make informed decisions about site design and safety. Our assessments o8er clear, actionable recommendations to help manage risk, maintain site integrity, and ensure regulatory compliance. Whether for residential, commercial, or infrastructure projects, we tailor our solutions to meet the unique demands of each site, enhancing safety and stability for years to come.'
                buttonText=""
                buttonLink="#"
            />   



            {/* Fourth Section */}
            <div className='flex w-full h-auto bg-white-100 p-21'>
                <div className='flex flex-col items-left justify-left w-full h-auto'>
                  <h2 className='text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left'>
                  Statewide Geotechnical (Aust) Pty Ltd – Your Partner for Slope Stability and Safety

                  </h2>
                  <p className='text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0'>
                  Trust Statewide Geotechnical to deliver comprehensive, science-backed solutions for slopes and stability. With our commitment to precision and safety, we provide the expertise and support you need for stable, reliable, and successful construction on any terrain.
                  </p>

                  <div className='text-left text-[15px] font-medium mt-4 text-blue-600 -pb-15 '>
                     <a href='#' className='flex items-center'>
                        <span className='mr-1'>
                        Get a Consultation
                        </span>
                         <img className=' pl-1 flex w-6 h-6 pl-1' src={Arrowup} alt='Arrow up' />
                     </a>
                </div>
                </div>
                

            </div>


        </div>
    );
};

export default Slopes;