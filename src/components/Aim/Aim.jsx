import React, { useEffect, useRef, useState } from 'react'

const cards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "100% Practical Learning",
    text: "Every session is hands-on from start to finish. Students spend their time building, coding and creating — not passively listening. Skills are retained, demonstrable and something to be proud of.",
    delay: "0ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: "Structured Full-Year Curriculum",
    text: "A complete academic year roadmap with clear learning outcomes, capstone projects every month and certificates of completion issued to qualifying students every term.",
    delay: "150ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Real Outcomes Students Own",
    text: "Students finish the year with live websites, original games, repaired devices and formatted documents they built themselves — tangible results that impress parents and schools alike.",
    delay: "300ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Built for Every Age",
    text: "From Nursery 3 pupils to SS3 students — each programme is carefully designed and delivered at exactly the right level for the age group.",
    delay: "450ms",
  },
];

const Aim = () => {
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
    <section id="aim" ref={sectionRef} className="bg-gray-100 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 capitalize">
          Why Partner With Us?
        </h2>
        <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full" />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              animationDelay: card.delay,
              animationFillMode: 'forwards',
            }}
            className={`
              bg-white rounded-2xl p-6 shadow-md
              flex flex-col items-center text-center gap-4
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
              ${visible
                ? 'animate-fade-slide-up'
                : 'opacity-0'
              }
            `}
          >
            {/* Icon circle */}
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-yellow-600 flex-shrink-0">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 leading-snug">
              {card.title}
            </h3>

            {/* Divider */}
            <div className="w-8 h-0.5 bg-yellow-500 rounded-full" />

            {/* Text */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Aim;