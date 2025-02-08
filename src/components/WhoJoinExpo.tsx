import React from 'react'
import { GlareCard } from './ui/glare-card'

export default function WhoJoinExpo() {
    const audienceData = [
        {
          title: "Established Businesses & Industries",
          description: "Leading businesses looking to expand, network, and explore new opportunities.",
        },
        {
          title: "IT Companies & Tech Startups",
          description: "Innovative tech firms and startups seeking exposure, funding, and partnerships.",
        },
        {
          title: "Investors & Venture Capitalists",
          description: "Angel investors and VCs looking for the next big opportunity in the market.",
        },
        {
          title: "Educational Institutions & Students",
          description: "Universities, colleges, and students eager to connect with industry experts.",
        },
        {
          title: "Entrepreneurs & Business Leaders",
          description: "Visionaries and business minds driving innovation and change in their fields.",
        },
        {
          title: "Government & Local Authorities",
          description: "Officials supporting business growth, investment, and regional development.",
        },
        {
          title: "Job Hunters & Recruiters",
          description: "Talented professionals and recruiters exploring career and hiring opportunities.",
        },
      ];
  return (
    <section className='py-10'>
    <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl text-white lg:text-5xl text-center font-bold mb-12">
          Who Can Join <span className="text-warning">“Be Brand Festival”</span>
        </h1>

        
      </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-4 gap-4'>
    {audienceData.map((audience, index) => (
        <GlareCard key={index} className="flex flex-col items-start justify-end py-4 px-6 w-full">
        <p className="font-bold text-white text-lg">{audience.title}</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          {audience.description}
        </p>
      </GlareCard>

    ))}
    
      </div>
    </section>
  )
}
