'use client'
import React from 'react'

export default function BeAPart() {
  return (
    <div className='py-10 z-48'>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl lg:text-5xl text-center font-bold mb-12">
          <span className="text-warning">“Be Brand Festival”</span>
        </h1>

        <div className="max-w-5xl mx-auto py-2 px-4 rounded-lg ">
      <h1 className="text-xl lg:text-3xl font-semibold  text-white mb-4">
      For sponership, partnership, and participation, please contact us at 0329-4304180.
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        We are excited to discuss potential collaborations and partnerships. Reach out to us for any inquiries, and we'll be happy to assist you!
      </p>

    <div className='flex flex-col gap-2 justify-center items-center'>
        <h1 className='text-center text-xl font-bold lg:text-3xl'>Contact Us</h1>
        <input type="text" placeholder='Full Name' className='bg-primary py-4 px-4 w-[280px] md:w-[350px] lg:w-[500px] outline-none rounded-sm my-2 focus:outline-info duration-200 border border-gray-400 ' />
        <input type="text" placeholder='Email'  className='bg-primary py-4 px-4 w-[280px] md:w-[350px] lg:w-[500px] outline-none rounded-sm my-2 focus:outline-info duration-200 border border-gray-400 '/>
        <input type="text" placeholder='Subject'  className='bg-primary py-4 px-4 w-[280px] md:w-[350px] lg:w-[500px] outline-none rounded-sm my-2 focus:outline-info duration-200 border border-gray-400 '/>
        <textarea rows={5} name="" placeholder='Your Message' id="" className='bg-primary py-4 px-4 w-[280px] md:w-[350px] lg:w-[500px] outline-none rounded-sm my-2 focus:outline-info duration-200 border border-gray-400 '></textarea>
        <button className='bg-gradient-to-r to-primary from-secondary shadow-lg  w-[250px] md:w-[320px] lg:w-[470px] py-4 rounded-lg font-bold hover:bg-gradient-to-r hover:to-secondary  hover:from-primary active:from-info active:to-warning'>Submit</button>
    </div>

      <div className="flex justify-center gap-6 mt-10">
        <span className='cursor-pointer'>
          <a className="bg-secondary text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-warning transition duration-300 shadow-2xl">
            Call Us Now
          </a>
        </span>
        <span className='cursor-pointer'>
          <a className="bg-primary text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-info transition duration-300 shadow-2xl">
            Email Us
          </a>
        </span>
      </div>
    </div>
      </div>
    </div>
  )
}
