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
    description: "We come directly to your home and deliver practical sessions at a time and schedule that works perfectly for your family. Your child learns in the comfort of their own space with full undivided attention.",
    tag: "In person — Aba and environs",
    delay: "0ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Live Online Sessions",
    description: "Fully interactive sessions delivered in real time by our experienced tutors — from anywhere in the world. Not pre-recorded videos. Real teaching, real feedback and real progress every session.",
    tag: "Available worldwide",
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
    description: "Learn alongside 2 to 5 other students at the same level. More affordable than one on one while still getting personalised attention and a focused, collaborative learning environment.",
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
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest">
          Not Just For Schools
        </span>
        <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-3">
          Learning For Individuals & Families
        </h2>
        <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full" />
        <p className="text-gray-500 text-sm mt-4 max-w-lg mx-auto">
          You don't need to be in a school to learn with us. We offer flexible,
          personalised sessions for children, teenagers and young adults —
          at home, online or one on one. Wherever you are in the world.
        </p>
      </div>

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

      {/* Beyond Technology — English and Maths */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-10 text-center">
        <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest">
          Beyond Technology
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
          We Also Offer Academic Tutoring
        </h3>
        <div className="w-10 h-0.5 bg-yellow-400 rounded-full mx-auto mb-4" />
        <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto mb-4">
          In addition to our technology programmes we offer personalised tutoring
          in English Language and Mathematics for primary and secondary school
          students — delivered with the same hands-on, student-centred approach
          that defines everything we do.
        </p>
        <p className="text-gray-400 text-xs italic">
          Reach out to discuss availability and find out how we can support
          your child across all their learning needs.
        </p>
      </div>

      {/* CTA Block */}
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-2">
          Ready To Get Started?
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          Tell us your child's age and what they want to learn — we will match
          them to the right programme and session format within 24 hours.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/2349049809176"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            Chat On Whatsapp
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