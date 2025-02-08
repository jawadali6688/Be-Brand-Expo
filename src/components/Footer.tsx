'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, MessageCircle } from 'lucide-react';
export default function Footer() {
  return (
    <footer className='w-full bg-gradient-to-r from-secondary to-primary text-white py-6 mt-10 shadow-lg'>
      <div className='container mx-auto flex flex-col items-center space-y-4'>
        {/* Logo */}
        <img
                  className="w-56 h-auto lg:w-24 rounded-md shadow-lg"
                  src="/Screenshot 2025-02-05 142012.png"
                  alt="Be Brand Festival Logo"
                />
        
        {/* Navigation Links */}
        <div className='flex space-x-6 text-lg'>
          <Link href='https://wa.me/yourwhatsappnumber' target='_blank' className='hover:text-gray-200 duration-200'>
            <MessageCircle size={32} />
          </Link>
          <Link href='https://facebook.com/yourprofile' target='_blank' className='hover:text-gray-200 duration-200'>
            <Facebook size={32} />
          </Link>
          <Link href='https://linkedin.com/in/yourprofile' target='_blank' className='hover:text-gray-200 duration-200'>
            <Linkedin size={32} />
          </Link>
        </div>

        {/* Developer Credit */}
        <p className='text-sm text-gray-300 mt-4'>
          Developed by 
          <Link href='https://jawadportfolio.vercel.app' className='text-white font-semibold hover:underline ml-1' target='_blank'>Jawad Khan</Link>
        </p>
      </div>
    </footer>
  );
}
