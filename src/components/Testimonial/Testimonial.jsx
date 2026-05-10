import React, { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  {
    quote: "Partnering with Syntax Synergy has been one of the best decisions we made this academic year. Our students are more engaged, more confident with technology and parents are genuinely impressed by what their children are producing in class.",
    name: "Mrs. Naomi Nwosu",
    role: "School Principal",
    initials: "NN",
    color: "#3D1F2D",
  },
  {
    quote: "I never thought I could build a real website but now mine is live on the internet. The classes are always practical and fun — I look forward to every session.",
    name: "Ephraim Nyam",
    role: "Web Development Student",
    initials: "EN",
    color: "#1A3A5C",
  },
  {
    quote: "My child comes home excited about technology every week. Watching them explain coding concepts and show me games they built themselves has been incredible. Worth every penny.",
    name: "Mr. Isaiah Innocent",
    role: "Parent — Home Lesson Client",
    initials: "II",
    color: "#C9A84C",
  },
  {
    quote: "We signed our son up for online sessions and the quality has been outstanding. His tutor is patient, knowledgeable and genuinely invested in his progress. He has built three projects in just two months.",
    name: "Sarah Mitchell",
    role: "Parent — Online Session Client",
    initials: "SM",
    color: "#1A3A5C",
  },
  {
    quote: "I can now open a phone, identify every component inside and fix a cracked screen by myself. My uncle already paid me to repair his phone. This class changed everything for me.",
    name: "Daniel Leton",
    role: "Smartphone Engineering Student",
    initials: "DL",
    color: "#6A1B9A",
  },
  {
    quote: "The individual sessions have been a game changer for my daughter. She was struggling to keep up in a group setting but with a dedicated tutor she has flourished. Her confidence has completely transformed.",
    name: "Jennifer Okafor",
    role: "Parent — Individual Session Client",
    initials: "JO",
    color: "#2E7D32",
  },
  {
    quote: "Before Syntax Synergy I had never written a single line of code. Now I have built three games on Scratch and my friends always want to play them. I did not know learning could be this fun.",
    name: "Nanret Emmanuel",
    role: "Scratch Programming Student",
    initials: "NE",
    color: "#C9A84C",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const timerRef = useRef(null);

  const goTo = useCallback((index, dir = 'next') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 'next');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, 'prev');
  }, [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-50 relative overflow-hidden">

      {/* Decorative soft blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-100 rounded-full opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow-100 rounded-full opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-4 relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 capitalize">
          What Our Clients Say
        </h2>
        <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full" />
        <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
          From school partnerships to individual home lessons and online sessions — 
          here is what our clients around the world say about learning with us.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 relative z-10">
        {[
          { label: "All", filter: "all" },
          { label: "Schools", filter: "school" },
          { label: "Parents", filter: "parent" },
          { label: "Students", filter: "student" },
        ].map((tab, i) => (
          <button
            key={i}
            className="px-4 py-1.5 rounded-full text-xs font-semibold border border-gray-200 bg-white text-gray-500 hover:border-yellow-400 hover:text-yellow-600 transition-all duration-200"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Carousel wrapper */}
      <div className="relative max-w-2xl mx-auto z-10">

        {/* Card */}
        <div
          className={`
            bg-white rounded-2xl px-8 py-10 md:px-12 shadow-lg border border-gray-100
            transition-all duration-300 text-center
            ${animating
              ? direction === 'next'
                ? 'opacity-0 translate-x-6'
                : 'opacity-0 -translate-x-6'
              : 'opacity-100 translate-x-0'
            }
          `}
        >
          {/* Coloured top bar */}
          <div
            className="w-12 h-1 rounded-full mx-auto mb-6"
            style={{ backgroundColor: t.color }}
          />

          {/* Large decorative quote mark */}
          <div
            className="text-6xl font-serif leading-none mb-2 opacity-20"
            style={{ color: t.color }}
          >
            "
          </div>

          {/* Quote text */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 italic">
            {t.quote}
          </p>

          {/* Avatar + name */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
              style={{ backgroundColor: t.color }}
            >
              {t.initials}
            </div>
            <div>
              <p className="text-gray-800 font-bold text-sm">{t.name}</p>
              <p
                className="text-xs font-semibold uppercase tracking-widest mt-0.5"
                style={{ color: t.color }}
              >
                {t.role}
              </p>
            </div>
          </div>

        </div>

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md text-gray-500 hover:text-gray-800 flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md text-gray-500 hover:text-gray-800 flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-8 relative z-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              backgroundColor: i === current ? t.color : '#D1D5DB',
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-gray-400 text-xs mt-4">
        {current + 1} / {testimonials.length}
      </p>

    </section>
  );
};

export default Testimonial;