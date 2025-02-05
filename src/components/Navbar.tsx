'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Goals', path: '/goals' },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className='fixed top-0 w-full z-[1000] bg-gradient-to-r from-secondary to-primary shadow-lg px-6 py-3 rounded-lg flex justify-between items-center border-b border-gray-500'>
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-16 lg:w-24 rounded-full shadow-lg"
          src="/assets/Screenshot 2025-02-05 111124.png"
          alt="Be Brand Festival Logo"
        />
      </div>

      {/* Desktop Menu */}
      <ul className='hidden lg:flex space-x-6'>
        {navItems.map(({ name, path }) => (
          <li key={name}>
            <Link href={path} className={`text-lg py-2 px-4 rounded-xl duration-200 ${pathname === path ? 'bg-secondary text-gray-100' : 'hover:bg-secondary hover:text-gray-100'}`}>{name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className='lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} className='text-white' /> : <Menu size={30} className='text-white' />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-[5rem] left-0 w-full bg-gradient-to-r from-secondary to-primary shadow-lg rounded-lg lg:hidden flex flex-col items-center space-y-4 py-4'>
          {navItems.map(({ name, path }) => (
            <li key={name} className='list-none'>
              <Link href={path} className={`text-lg py-2 px-4 rounded-xl duration-200 ${pathname === path ? 'bg-secondary text-gray-100' : 'hover:bg-secondary hover:text-gray-100'}`}>{name}</Link>
            </li>
          ))}
        </div>
      )}
    </nav>
  );
}
