'use client'
import React from 'react'
import { Meteors } from './ui/meteors'

export default function BenifitsExpo() {

    const benifits = [
        {
          title: "Gain exposure in a competitive business environment",
          description: "Participate in high-profile events to showcase your products and services. Gain visibility and credibility among potential customers and partners."
        },
        {
          title: "Build strong networks with industry leaders and investors",
          description: "Create meaningful relationships with key decision-makers in your industry. Meet investors who can provide funding and mentorship for business growth."
        },
        {
          title: "Increase brand awareness and market reach",
          description: "Promote your brand through strategic marketing opportunities. Reach new audiences and expand your market presence locally and globally."
        },
        {
          title: "Learn from experts through workshops and keynote sessions",
          description: "Access valuable insights and knowledge from industry professionals. Learn best practices and strategies to improve your business and stay ahead of trends."
        },
        {
          title: "Contribute to the economic growth of Zahir Pir",
          description: "Be part of the development and prosperity of Zahir Pir through active business participation. Create job opportunities and drive economic growth in the region."
        }
      ];
      
  return (
    <div className='py-10'>
       <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl lg:text-5xl text-center font-bold mb-12">
          Benifits of <span className="text-warning">“Be Brand Festival”</span>
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 lg:mx-8 gap-4'>
        {
            benifits.map((item, index) => (
                <>
                <div key={item.title} className=" w-full relative max-w-7xl">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-secondary to-info transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gradient-to-r to-secondary  from-primary border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {item.title}
          </h1>
 
          <p className="font-normal text-base text-gray-200 mb-4 relative z-50">
            {item.description}
          </p>
 
         
 
          {/* Meaty part - Meteor effect */}
          <Meteors key={index} number={20} />
        </div>
      </div>
                </>
            ))
        }
      
      </div>
    </div>
  )
}
