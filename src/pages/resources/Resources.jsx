import React from 'react';
import PolicyText from '../../components/text/PolicyText';
import CardDocumentation from '../../components/card-documentation/CardDocumentation';
import { DownloadIcon } from '../../assets/assets';

const Resources = () => {
    return (
        <div className="w-full flex flex-col">
            {/* First Section*/}
            <div></div>
            {/* second Section*/}
            <div className=' w-full h-auto  px-[45px] sm:p-[85px] h-auto'>
            <div>
                <PolicyText
                    title="1. Quality Assurance Policy"
                    description="We strive for excellence in our engineering services. Our Quality Assurance Policy ensures that all projects are delivered to the highest standards, with thorough reviews conducted at every stage. Key aspects include:"
                    bulletText={[
                        "Comprehensive project planning and documentation",
                        "Regular internal audits and reviews",
                        "Client feedback mechanisms to continuously improve our services",
                    ]} 
                />
            </div>
            <div>
                <PolicyText
                    title="2. Safety Policy"
                    description="The safety of our employees, clients, and the public is our top priority. Our Safety Policy encompasses:"
                    bulletText={[
                        "Compliance with all relevant health and safety regulations.",
                        "Regular training and safety drills for staI.",
                        "Implementation of risk management strategies on all job sites.",
                    ]} 
                />
            </div>
            <div>
                <PolicyText
                    title="3. Environmental Policy"
                    description="We recognize the importance of sustainable practices in geotechnical engineering. Our Environmental Policy includes:"
                    bulletText={[
                        "Commitment to reducing our environmental impact.",
                        "Sustainable resource management and waste reduction strategies.",
                        "Compliance with environmental regulations and standards.",
                    ]} 
                />
            </div>
            <div>
                <PolicyText
                    title="4. Confidentiality Policy"
                    description="We understand the importance of confidentiality in our client relationships. Our Confidentiality Policy covers:"
                    bulletText={[
                        "Protection of client information and project details.",
                        "Non-disclosure agreements for sensitive information.",
                        "Secure handling of all documents and data.",
                    ]} 
                />
            </div>
            <div>
                <PolicyText
                    title="5. Complaints and Feedback Policy"
                    description="We welcome feedback and are committed to addressing any concerns. Our Complaints and Feedback Policy outlines:"
                    bulletText={[
                        "A straightforward process for submitting complaints or suggestions.",
                        "Timely responses to all feedback received.",
                        "Regular reviews of complaints to improve our services.",
                    ]} 
                />
            </div>
            <div>
                <PolicyText
                    title="6. Data Protection and Privacy Policy"
                    description="We prioritize the privacy of our clients and employees. Our Data Protection and Privacy Policy ensures:"
                    bulletText={[
                        "Compliance with all applicable data protection laws.",
                        "Secure storage and processing of personal information.",
                        "Transparency in how we collect, use, and store data.",
                    ]} 
                />
            </div>
            <div>
                <PolicyText
                    title="7. Insurance and Liability Documentation"
                    description="To protect our clients and employees, we maintain comprehensive insurance coverage, including:"
                    bulletText={[
                        "Professional Indemnity Insurance",
                        "Public Liability Insurance",
                        "Fleet and Equipment Insurance",
                        "WorkCover Insurance",
                    ]} 
                />
            </div>
            </div>

            {/* Third Section*/}
            <div className='soil__second-section p-[45px] sm:p-[85px] w-full h-auto'>
                <div className='flex flex-col items-left justify-left w-full h-auto'>
                    <h2 className='text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left'>
                        Aggregate Testing Services
                    </h2>
                    <p className='text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0'>
                    Our aggregate testing services are essential for understanding material characteristics, ensuring quality for use in concrete, asphalt, and foundational applications. Properly tested aggregates contribute to the longevity and stability of structures, roads, and other infrastructure.
                    </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[35px] w-full">
                            <div className='col-span-1 row-span-1 sm:w-full'>
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Quality Assurance Policy Document"
                                    number={1}
                                />

                            </div>
                            <div className='col-span-1 row-span-1 sm:w-full'>
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Safety Policy Document"
                                    number={2}
                                />
                            </div>
                            <div className='col-span-1 row-span-1 sm:w-full'>
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Environmental Policy Document"
                                    number={3}
                                />

                            </div>
                            <div className='col-span-1 row-span-1 sm:w-full'>
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Confidentiality Policy Document"
                                    number={4}
                                />

                            </div>
                            <div className='col-span-1 row-span-1 sm:w-full'>
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Complaints and Feedback Policy Document"
                                    number={5}
                                />

                            </div>
                            <div className='col-span-1 row-span-1 sm:w-full'>
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Data Protection and Privacy Policy Document"
                                    number={6}
                                />
                            </div>
                            <div className='col-span-1 row-span-1 sm:w-full'>
                                <CardDocumentation
                                    image={DownloadIcon}
                                    title="Insurance Coverage Document"
                                    number={7}
                                />
                            </div>
                          
                          
                        </div>
                        
                </div>

            </div>
            <div className="p-[45px] sm:p-[85px] w-full h-auto">
                <div className="flex flex-col items-left justify-left w-full h-auto">
                    <h2 className="text-24 sm:text-36 md:text-48 font-600 text-gray-900 font-inter  mb-4 text-4xl text-center md:text-left">Contact Us</h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-7xl mx-auto md:mx-0">
                    If you have any questions about our policies or require further information, please feel free to{" "}
                    <a href="#" className="text-blue-600 hover:underline">contact us</a>.
                    </p>
                
                    <div className="mt-6 text-left text-gray-500 text-sm sm:px-0">
                        © 2024 Statewide Geotechnical Pty Ltd. All rights reserved.
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default Resources;