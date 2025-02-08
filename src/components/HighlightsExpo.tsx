import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export default function HighlightsExpo() {
    const events = [
        {
          title: "Business Exhibitions",
          description: "A showcase of products and services from various industries.",
          name: "Business Exhibitions"
        },
        {
          title: "Startup Pavilion",
          description: "A dedicated space for startups to pitch their ideas and connect with investors.",
          name: "Startup Pavilion"
        },
        {
          title: "Tech Innovation Zone",
          description: "Display of cutting-edge technology and IT solutions.",
          name: "Tech Innovation Zone"
        },
        {
          title: "Investor Meetups",
          description: "Opportunities for businesses and startups to network with potential investors.",
          name: "Investor Meetups"
        },
        {
          title: "Workshops and Seminars",
          description: "Expert-led discussions on business growth, branding, and digital transformation.",
          name: "Workshops and Seminars"
        },
        {
          title: "Panel Discussions",
          description: "Insights from industry leaders on business trends and market opportunities.",
          name: "Panel Discussions"
        },
        {
          title: "Networking Sessions",
          description: "A chance for professionals and entrepreneurs to build strategic partnerships.",
          name: "Networking Sessions"
        }
      ];
  return (
    <div className='py-10'>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl text-white lg:text-5xl text-center font-bold mb-12">
          Highlights of <span className="text-warning">“Be Brand Festival”</span>
        </h1>

        
      </div>

      <div>
      <div className="h-[20rem] bg-gradient-to-r to-info from-war rounded-md flex flex-col antialiased  bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={events}
        direction="right"
        speed="slow"
      />
    </div>
      </div>
    </div>
  )
}
