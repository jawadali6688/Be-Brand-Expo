'use client'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'


export default function OrganizedBy() {
    const organizedData = [
        {
            title: "JSF Solutions",
            description: "JSF Solutions is a trusted partner in providing end-to-end IT services, focusing on software development, cybersecurity, and data analytics. With expertise in building secure and high-performance systems, JSF enables businesses to meet modern challenges. The company prides itself on delivering customized solutions that drive efficiency and productivity. JSF Solutions offers cutting-edge tools and strategies to help businesses succeed in a competitive market.",
            link: "/innovation-entrepreneurship",
        },
        {
            title: "The ACE Solutions",
            description: " The ACE Solutions is a leading provider of innovative technology services and solutions, specializing in digital transformation, AI, and cloud computing. With a focus on delivering scalable and cost-effective strategies, The ACE helps businesses thrive in the digital age. The company is known for its customer-centric approach, ensuring seamless integration of technology into existing workflows. ACE Solutions empowers organizations to streamline operations and accelerate growth.",
            link: "/innovation-and-some",
        }
    ]
  return (
    <div className='py-10'>
         <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl text-white lg:text-5xl text-center font-bold mb-12">
        Behind of  <span className="text-warning">“Be Brand Festival”</span>
        </h1>

        <div className='flex w-[95%] justify-center items-center my-8 mx-auto'>
            <img
                      className="w-full  rounded-md shadow-lg"
                      src="/Screenshot 2025-02-05 142012.png"
                      alt="Be Brand Festival Logo"
                    />
        </div>

        
      </div>
      <section className='flex flex-col lg:flex-row justify-between gap-2 items-center  lg:mx-4'>
        <div className="max-w-8xl mx-auto ">
              <HoverEffect items={organizedData} />
            </div>
   
      </section>
    </div>
  )
}
