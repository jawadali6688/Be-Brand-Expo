import React from "react";

export default function AboutExpo() {
  return (
    <section className="text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl lg:text-5xl text-center font-bold mb-12">
          What is <span className="text-warning">“Be Brand Festival”</span> ?
        </h1>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mx-auto flex justify-center items-center">
            <img
              className="w-[80%] p-0 rounded-full lg:w-[90%] h-auto  shadow-lg"
              src="/assets/Screenshot 2025-02-05 111124.png"
              alt="Be Brand Festival Logo"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed text-gray-200">
              The <span className="text-warning font-semibold">"Be Brand Festival"</span> is a premier business and technology expo set to take place in Zahir Pir. 
              This event aims to bring together businesses, IT professionals, startups, investors, educational institutions, and various industries under one roof.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Our vision is to transform <span className="text-info font-semibold">Zahir Pir</span> into a thriving business hub by fostering collaborations, 
              networking opportunities, and investment prospects.
            </p>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                
                className="bg-primary hover:bg-opacity-80 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-lg shadow-md border cursor-pointer hover:bg-secondary"
              >
               Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
