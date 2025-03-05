import React from 'react';
import CardIconTopLeft from '../../components/card-icon-top-left/CardIconTopLeft';
import { Arrowup, WorkerHat, Engineers, Roller } from '../../assets/assets';


const Road = () => {
    return (
        <div className='flex flex-col w-full'>
            {/* Second Section */}
            <div className='soil__second-section p-21 w-full h-auto'>
                <div className='flex flex-col items-left justify-left w-full h-auto'>
                    
                        <div className="grid grid-cols-3 grid-rows-3 gap-4 pt-[35px] ">
                          <div className='col-span-1 row-span-1 h-[450px]'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white-100'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Pavement Type Selection and Design'
                                bodyText='We evaluate site-specific conditions, traffic volume, and load requirements to determine the most suitable pavement type-whether flexible, rigid, or composite. Our design process includes selecting materials and layer thicknesses that provide the best balance of strength, durability, and cost-effectiveness.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1 h-[450px]'>
                            <img src={Engineers} alt='Engineers' className='w-full h-full object-cover rounded-3xl'/>
                          </div>

                          <div className='col-span-1 row-span-1 h-[450px]'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Geotechnical Site Investigations'
                                bodyText='Thorough site investigation is critical to successful pavement design. We conduct geotechnical surveys, soil sampling, and in-situ testing to assess soil properties, subgrade stability, and drainage conditions. This data forms the foundation of our design approach, ensuring each pavement structure is customized to the unique characteristics of the site.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1 h-[450px]'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Drainage and Erosion Control'
                                bodyText='Proper drainage design is key to preventing pavement degradation and extending its lifespan. We integrate effective drainage solutions into our pavement designs to manage surface water, reduce erosion risks, and maintain the structural integrity of the pavement over the long term.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1'>
                            <img src={Roller} alt='Roller' className='w-full h-full object-cover rounded-3xl'/>
                          </div>

                          <div className='col-span-1 row-span-1 h-[450px]'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Material Selection and Layer Design'
                                bodyText='We carefully select high-quality materials for each pavement layer, including the base, subbase, and surface layers. By considering factors like climate, loadbearing requirements, and project budget, we design layered pavement structures that deliver the best performance over time.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1 h-[450px]'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white-100'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Subgrade Analysis and Improvement'
                                bodyText='Subgrade stability is essential for pavement performance. Our team evaluates subgrade strength and recommends stabilization or improvement methods where needed. By optimizing the subgrade’s load-bearing capacity, we enhance the pavement’s durability and reduce future maintenance requirements.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1 h-[450px]'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Traffic Load Analysis and Design Life Assessment'
                                bodyText='Using traffic load modeling and design life projections, we ensure that each pavement is engineered to withstand current and future traffic demands. Our designs consider anticipated vehicle loads, environmental factors, and maintenance cycles, resulting in pavements that are both resilient and sustainable.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>

                          <div className='col-span-1 row-span-1 h-[450px]'>
                            <CardIconTopLeft 
                                iconUrl={WorkerHat}
                                iconBackground='bg-white'
                                background='bg-Primary-100'
                                stroke={true}
                                titleText='Pavement Rehabilitation and Strengthening'
                                bodyText='For existing roads, we provide assessment and rehabilitation solutions to extend pavement life and enhance performance. Our team conducts condition assessments and recommends resurfacing, strengthening, or reconstruction as necessary to restore pavement integrity and reduce lifecycle costs.'
                                titleColor='text-gray-900'
                                bodyColor='text-gray-900'
                                padding={true}
                                backgroundHover={false}
                            
                            />
                          </div>
                          
                        </div>
                        <h2 className='font-bold text-4xl text-left text-[33px] pt-20'>
                        Aggregate Testing Services
                    </h2>
                    <p className='text-left text-[15px] mt-4'>
                    Our aggregate testing services are essential for understanding material characteristics, ensuring quality for use in concrete, asphalt, and foundational applications. Properly tested aggregates contribute to the longevity and stability of structures, roads, and other infrastructure.
                    </p>
                </div>

                

            </div>

            {/* Third Section */}
            <div className='flex w-full h-auto bg-blue-100 p-21'>
                <div className='flex flex-col items-left justify-left w-full h-auto'>
                  <h2 className='font-bold text-4xl text-left text-[33px]'>
                  Why Choose Statewide Geotechnical for Road Pavement Design?

                  </h2>
                  <p className='text-left text-[15px] mt-4'>
                  Statewide Geotechnical combines geotechnical expertise with industry-leading analysis to deliver road pavement designs that maximize durability, safety, and cost-efficiency. Our approach is grounded in thorough site assessment, precise material selection, and a commitment to regulatory compliance, ensuring each project meets or exceeds industry standards.


                  </p>
                </div>

            </div>

            {/* Fourth Section */}
            <div className='flex w-full h-auto bg-white-100 p-21'>
                <div className='flex flex-col items-left justify-left w-full h-auto'>
                  <h2 className='font-bold text-4xl text-left text-[33px]'>
                  Statewide Geotechnical (Aust) Pty Ltd – Your Partner for Resilient Road Infrastructure

                  </h2>
                  <p className='text-left text-[15px] mt-4'>
                  From local access roads to high-capacity highways, trust Statewide Geotechnical to provide road pavement design solutions that stand the test of time. With our experience and dedication to quality, we deliver safe, sustainable, and high-performance pavements for all types of infrastructure projects.
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

export default Road;