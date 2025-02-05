import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export default function ExpoGoal() {
    const goalsData = [
        {
          title: "Promote Zahir Pir as a Business & Technology Hub",
          description:
            "The Be Brand Festival aims to position Zahir Pir as a thriving business and technology hub by bringing together industry leaders, startups, and professionals to showcase opportunities in the region.",
          link: "/business-hub",
        },
        {
          title: "Showcase Local & National Businesses",
          description:
            "Providing a platform for local and national businesses to display their products and services, enabling them to reach a broader audience and establish meaningful partnerships.",
          link: "/business-showcase",
        },
        {
          title: "Connect Startups with Investors & Mentors",
          description:
            "The event will act as a bridge for startups, helping them connect with potential investors and industry mentors who can provide guidance, funding, and opportunities for growth.",
          link: "/startup-investors",
        },
        {
          title: "Bridge the Gap Between Academia & Industry",
          description:
            "By involving schools and colleges, we aim to create a strong link between academia and industry, ensuring that students and young professionals have access to real-world knowledge and career opportunities.",
          link: "/academia-industry",
        },
        {
          title: "Attract Investment & Generate Employment",
          description:
            "Our goal is to attract local and international investments to Zahir Pir, which will, in turn, create job opportunities and contribute to the economic development of the region.",
          link: "/investment-jobs",
        },
        {
          title: "Foster Innovation & Entrepreneurial Spirit",
          description:
            "Encouraging innovation and entrepreneurship by hosting workshops, networking sessions, and mentorship programs that empower individuals to turn their ideas into successful ventures.",
          link: "/innovation-entrepreneurship",
        },
      ];
  return (
    <section className="text-white py-16   lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl lg:text-5xl text-center font-bold mb-12">
          Goal of <span className="text-warning">“Be Brand Festival”</span>
        </h1>

        
      </div>
      <div>
      <div className="max-w-10xl lg:max-w-7xl mx-auto ">
      <HoverEffect items={goalsData} />
    </div>
      </div>
    </section>
  );
}
