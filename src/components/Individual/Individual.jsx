import React, { useEffect, useRef, useState } from 'react'

const formats = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Home Lessons",
    description: "We come directly to your home and deliver practical tech sessions at a time and schedule that works perfectly for your family. Your child learns in the comfort of their own space.",
    tag: "Aba and environs",
    delay: "0ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Online Sessions",
    description: "Live and fully interactive sessions delivered in real time by our experienced tutors — from anywhere in Nigeria. Not pre-recorded videos. Real teaching, real feedback, real progress.",
    tag: "Nationwide",
    delay: "150ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Individual One on One",
    description: "The fastest path to mastery. Your child gets a dedicated tutor fully focused on them — moving at their pace, adapting to their learning style and making twice the progress of group sessions.",
    tag: "Online and in person",
    delay: "300ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
      </svg>
    ),
    title: "Small Group Sessions",
    description: "Learn alongside 2 to 5 other students at the same level. More affordable than one on one while still getting personalised attention and a focused learning environment.",
    tag: "Online and in person",
    delay: "450ms",
  },
];

const Individual = () => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="individual" ref={sectionRef} className="bg-gray-50 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-6">
        <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest">
          Not Just For Schools
        </span>
        <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-3">
          Learning For Individuals & Families
        </h2>
        <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full" />
        <p className="text-gray-500 text-sm mt-4 max-w-lg mx-auto">
          You don't need to be in a school to learn with us. We offer flexible sessions 
          for children, teenagers and young adults — at home, online or one on one.
        </p>
      </div>

<<<<<<< HEAD
      {/* Pricing pill
=======
      {/* Pricing pill */}
>>>>>>> 7ac6601b7eb734371d035e78dcb859bfc8f27e8a
      <div className="flex justify-center mb-10">
        <div className="bg-yellow-50 border border-yellow-200 rounded-full px-6 py-2 text-sm text-yellow-700 font-semibold">
          Individual sessions from ₦30,000/month · Online sessions from ₦25,000/month
        </div>
<<<<<<< HEAD
      </div> */}
=======
      </div>
>>>>>>> 7ac6601b7eb734371d035e78dcb859bfc8f27e8a

      {/* Format cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        {formats.map((format, i) => (
          <div
            key={i}
            style={{
              animationDelay: format.delay,
              animationFillMode: 'forwards',
            }}
            className={`
              bg-white rounded-2xl p-6 shadow-md flex flex-col gap-4
              hover:-translate-y-2 hover:shadow-xl transition-all duration-300
              ${visible ? 'animate-fade-slide-up' : 'opacity-0'}
            `}
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 flex-shrink-0">
              {format.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800">{format.title}</h3>

            {/* Divider */}
            <div className="w-8 h-0.5 bg-yellow-400 rounded-full" />

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed flex-1">
              {format.description}
            </p>

            {/* Tag */}
            <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest">
              📍 {format.tag}
            </span>
          </div>
        ))}
      </div>

      {/* How to get started */}
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-2">
          Ready To Get Started?
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          Tell us your child's age and what they want to learn — we'll match them 
          to the right programme and session format within 24 hours.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/2349049809176"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
<<<<<<< HEAD
            Chat On Whatsapp
=======
            WhatsApp Us Now
>>>>>>> 7ac6601b7eb734371d035e78dcb859bfc8f27e8a
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
          >
            Send Us A Message
          </a>
        </div>
      </div>

    </section>
  );
};

export default Individual;