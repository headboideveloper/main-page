
import React, { useState } from 'react';
import logo from '../../space/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='navbar'>
    <nav className="bg-gray-100 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl italics">
              <img src={logo} alt="logo" className='w-[200px]'/>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-400">
            <a href="#hero" className="hover:text-gray-300 transition">Home</a>
            <a href="#about" className="hover:text-gray-300 transition">About</a>
            <a href="#courses" className="hover:text-gray-300 transition">Courses</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#navbar"></a>
              <a href="#home" className="text-gray-400 block px-3 py-2 rounded-md hover:bg-gray-700 transition hover:text-white">Home</a>
              <a href="#about" className="text-gray-400 block px-3 py-2 rounded-md hover:bg-gray-700 transition hover:text-white">About</a>
              <a href="#courses" className="text-gray-400 block px-3 py-2 rounded-md hover:bg-gray-700 transition hover:text-white">Courses</a>
              <a href="#contact" className="text-gray-400 block px-3 py-2 rounded-md hover:bg-gray-700 transition hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
    </section>
  );
};

export default Navbar;