import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function MyHome() {
    const words = `The
"Be Brand Festival" is a premier business and technology
expo set to take place in Zahir Pir. This event aims to bring
together businesses, IT professionals, startups, investors,
educational institutions, and various industries under one roof.`;
  return (
    <BackgroundBeamsWithCollision>
     <div className="mt-24 flex flex-col gap-1 w-[95%] md:w-[90%]">
     <h2 className="text-2xl text-center   md:text-4xl lg:text-5xl font-bold  text-white font-Poppins ">
     
      <div className=" bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-white via-gray-200 to-pink-500 py-2">
            <span className=""> Get Ready Zahir Pir And Surrounding</span>
            
          </div>
      {" "}
       
        
      </h2>
      <div>

      </div>
      <div>
        <h3 className="hidden text-lg lg:text-xl leading-7">The
"Be Brand Festival" is a premier business and technology
expo set to take place in Zahir Pir. This event aims to bring
together businesses, IT professionals, startups, investors,
educational institutions, and various industries under one roof.</h3>
      </div>
      <div>
      <TextGenerateEffect className="text-lg leading-relaxed text-gray-300" duration={2} filter={false} words={words} />
      </div>
     <div className="flex justify-center mt-4">
     <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-400 rounded-xl" />
        <div className="px-[80px] py-4  bg-gradient-to-r from-priamry to-purple-500 rounded-xl  relative group transition duration-200 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-seconday hover:text-gray-900 hover:font-bold hover:drop-shadow-xl">
          Get a Pass
        </div>
      </button>
     </div>
     </div>
    </BackgroundBeamsWithCollision>
  );
}
