import React from 'react'
import logo from '../../space/logo.png'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>

      {/* Main footer content */}
      <div className='max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10'>

        {/* Column 1 — Logo + tagline */}
        <div className='flex flex-col gap-5'>
          <a href="#navbar">
            <img src={logo} alt="Syntax Synergy" className='h-10 w-auto'/>
          </a>
          <p className='text-gray-400 text-sm leading-relaxed'>
            Bringing hands-on technology education directly to schools across Nigeria.
            Real skills. Real results. Every term.
          </p>

          {/* Social icons */}
          <div className='flex items-center gap-4 mt-2'>
            
          <a      href="https://www.facebook.com/profile.php?id=61586843758790"
              target="_blank"
              rel="noopener noreferrer"
              className='w-9 h-9 rounded-full bg-white bg-opacity-10 hover:bg-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>

            
            <a     href="https://www.instagram.com/syntaxsynergy?igsh=bDNwM3p0NjlheHY2"
              target="_blank"
              rel="noopener noreferrer"
              className='w-9 h-9 rounded-full bg-white bg-opacity-10 hover:bg-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            
            <a    href="https://wa.me/2349049809176"
              target="_blank"
              rel="noopener noreferrer"
              className='w-9 h-9 rounded-full bg-white bg-opacity-10 hover:bg-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 — Quick links */}
       {/* Column 2 — Quick links */}
<div className='flex flex-col gap-4'>
  <h4 className='text-sm font-bold uppercase tracking-widest text-yellow-400'>
    Quick Links
  </h4>
  <div className='flex flex-col gap-3'>

    <a href='#hero' className='text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
      Home
    </a>

    <a href='#about' className='text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
      About Us
    </a>

    <a href='#services' className='text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
      Services
    </a>

    <a href='#partners' className='text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
      Our Impact
    </a>

    <a href='#contact' className='text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
      Contact
    </a>

  </div>
</div>

        {/* Column 3 — Services + Contact */}
        <div className='flex flex-col gap-4'>
          <h4 className='text-sm font-bold uppercase tracking-widest text-yellow-400'>
            Our Services
          </h4>
          <div className='flex flex-col gap-3'>
            {[
              'Computer Appreciation',
              'Scratch Programming',
              'Frontend Web Development',
              'Mobile Phone Engineering',
            ].map((service, i) => (
              <p key={i} className='text-gray-400 text-sm flex items-center gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0'/>
                {service}
              </p>
            ))}
          </div>

          {/* Contact snippet */}
          <div className='mt-4 flex flex-col gap-2'>
            
          <a   href="mailto:syntaxsynergy22@gmail.com"
              className='text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              syntaxsynergy22@gmail.com
            </a>
            
            <a  href="tel:+2349078875406"
              className='text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              +234-907-887-5406
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className='border-t border-white border-opacity-10'>
        <div className='max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3'>
          <p className='text-gray-500 text-xs'>
            © 2026 Syntax Synergy. All rights reserved.
          </p>
          <p className='text-gray-600 text-xs'>
            Empowering the next generation of tech talent 🚀
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer