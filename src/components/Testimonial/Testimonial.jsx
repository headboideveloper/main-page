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
    role: "Secondary School Student",
    initials: "EN",
    color: "#1A3A5C",
  },
  {
    quote: "My child comes home excited about technology every week. Watching them explain coding concepts and show me games they built themselves has been incredible. Worth every kobo.",
    name: "Mr. Isaiah Innocent",
    role: "Parent",
    initials: "II",
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
    }, 400);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 'next');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, 'prev');
  }, [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [next]);

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const timerRef = useRef(null);

  const goTo = (index, dir = 'next') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % testimonials.length, 'next');
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length, 'prev');

  // Auto-slide every 4 seconds
  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [current, next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">

      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-5 rounded-full translate-x-1/3 translate-y-1/3" />

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-2xl font-bold text-white mb-3 capitalize">
          What Our Clients Say
        </h2>
        <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full" />
      </div>

      {/* Carousel */}
      <div className="relative max-w-2xl mx-auto z-10">

        {/* Card */}
        <div
          className={`
            bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10
            rounded-3xl px-8 py-10 md:px-12 text-center shadow-2xl
            transition-all duration-400
            ${animating
              ? direction === 'next'
                ? 'opacity-0 translate-x-8'
                : 'opacity-0 -translate-x-8'
              : 'opacity-100 translate-x-0'
            }
          `}
        >
          {/* Quote mark */}
          <div className="text-yellow-400 text-7xl font-serif leading-none mb-4 opacity-40">
            "
          </div>

          {/* Quote text */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 italic">
            {t.quote}
          </p>

          {/* Divider */}
          <div className="w-10 h-0.5 bg-yellow-500 mx-auto mb-6 rounded-full" />

          {/* Avatar + name */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
              style={{ backgroundColor: t.color }}
            >
              {t.initials}
            </div>
            <div>
              <p className="text-white font-bold text-sm">{t.name}</p>
              <p className="text-yellow-400 text-xs uppercase tracking-widest">{t.role}</p>
            </div>
          </div>

        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-12 w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-12 w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-3 mt-10 relative z-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-yellow-400 w-6 h-2'
                : 'bg-white bg-opacity-30 w-2 h-2 hover:bg-opacity-50'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Testimonial;