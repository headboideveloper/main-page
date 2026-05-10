import React, { useEffect, useRef, useState } from 'react'

const phases = [
  {
    number: "01",
    title: "Orientation",
    text: "Introductory meeting with school management, curriculum review, student group organisation and timetable alignment.",
    delay: "0ms",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Setup",
    text: "Classroom or lab access confirmed, curriculum materials prepared and student groups finalised before the first session.",
    delay: "150ms",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Classes",
    text: "Weekly practical sessions delivered every week per the agreed timetable. Student progress tracked and reported each term.",
    delay: "300ms",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Projects",
    text: "End-of-term capstone projects, peer presentations and certificates of completion issued to all qualifying students.",
    delay: "450ms",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
];

const Plan = () => {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="plan" ref={sectionRef} className="bg-white py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 capitalize">
          Our Implementation Plan
        </h2>
        <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Horizontal connecting line — desktop only */}
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 z-0">
          {/* Animated fill line */}
          <div
            className="h-full bg-yellow-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: visible ? '100%' : '0%' }}
          />
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {phases.map((phase, i) => (
            <div
              key={i}
              style={{
                animationDelay: phase.delay,
                animationFillMode: 'forwards',
              }}
              className={`
                flex flex-col items-center text-center
                transition-all duration-300
                ${visible ? 'animate-fade-slide-up' : 'opacity-0'}
              `}
            >
              {/* Number circle */}
              <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white font-extrabold text-lg shadow-lg mb-6 ring-4 ring-white z-10">
                {phase.number}
              </div>

              {/* Card */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full flex flex-col items-center gap-3">

                {/* Icon */}
                <div className="text-yellow-500">
                  {phase.icon}
                </div>

                {/* Phase label */}
                <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest">
                  Phase {phase.number}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800">
                  {phase.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-yellow-400 rounded-full" />

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {phase.text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Plan;