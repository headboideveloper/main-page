
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
          <div className="hidden md:flex space-x-8 text-black">
            <a href="#hero" className="hover:text-gray-300 transition">Home</a>
            <a href="#about" className="hover:text-gray-300 transition">About</a>
            <a href="#services" className="hover:text-gray-300 transition">Services</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
            {/* Add inside your Desktop Menu div, after the last nav link */}

  <a href="/proposal.pdf"
  download="Syntax_Synergy_Proposal.pdf"
  className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 hover:-translate-y-0.5 transition-all duration-200"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
  Download Proposal
</a>

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
              <a href="#services" className="text-gray-400 block px-3 py-2 rounded-md hover:bg-gray-700 transition hover:text-white">Services</a>
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