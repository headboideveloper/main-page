import React, { useEffect, useRef, useState } from 'react'

const Ads = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-0 md:py-16 bg-gray-50">
      <div
        className="relative overflow-hidden md:max-w-5xl mx-auto md:rounded-3xl"
        style={{
          backgroundImage: `url('/images/img11.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '320px',
        }}
      >
        {/* Dark overlay — stronger gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

        {/* Decorative gold accent bar left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500" />

        {/* Content */}
        <div
          className={`
            relative z-10 flex flex-col md:flex-row items-center justify-between
            gap-8 px-10 py-14 md:py-16
            transition-all duration-700
            ${visible ? 'animate-fade-slide-up' : 'opacity-0'}
          `}
        >

          {/* Left — Text */}
          <div className="flex flex-col gap-4 max-w-xl text-center md:text-left">

            {/* Label */}
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
              Take the Next Step
            </span>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Transform <br className="hidden md:block" />
              Your School?
            </h2>

            {/* Subtext */}
            <p className="text-gray-300 text-base leading-relaxed">
              Partner with Syntax Synergy to bring hands-on technology
              education directly to your students. Real skills, real results,
              every term.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start mt-2">
              <div className="flex items-center gap-2 text-gray-300 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Structured curriculum
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                All age groups covered
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                100% hands-on sessions
              </div>
            </div>

          </div>

          {/* Right — CTA buttons */}
          <div className="flex flex-col gap-4 items-center flex-shrink-0">

            {/* Primary CTA */}
            
          <a    href="https://forms.gle/4XixrN3wf5rWPnaD8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-sm whitespace-nowrap"
            >
              Fill the Partnership Form
            </a>

            {/* Secondary CTA — WhatsApp */}
            
           <a   href="https://wa.me/2349049809176"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-sm whitespace-nowrap flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Ads;