import React, { useEffect, useRef, useState } from 'react';
import buken from '../../space/buken.jpg'
import buckingham from "../../space/Buckingham.jpg"
import westwood from '../../space/Westwood.jpg'
import perezville from '../../space/perezville.jpg'
import effloresce from '../../space/effloresce.jpg'
import croydon from '../../space/croydon.png'

// ── Count-up hook ──
function useCountUp(target, duration = 2000, startCounting) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [startCounting, target, duration]);

  return count;
}

// ── School data ──
// TO EDIT: Replace each name with the real school name
// TO EDIT: Replace each logo with your imported image e.g. import school1 from '../assets/school1.png'
// Then replace the logo value: logo: school1
const schools = [
  { name: "BUCKINGHAM ACADEMY", logo: buckingham},
  { name: "BUKEN ACADEMY", logo: buken},
  { name: "CROYDON EAST EDUCATION", logo: croydon },
  { name: "WESTWOOD PARK SCHOOLS", logo: westwood},
  { name: "PEREZVILLE INT'L SCHOOLS", logo: perezville },
  { name: "EFFLORESCE M. MONTESSORI SCHOOLS", logo: effloresce },
];

// Doubles the list for a seamless infinite loop — do not edit this
const marqueeSchools = [...schools, ...schools];

export default function Partners() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  // TO EDIT: Change the numbers below to match your real stats
  const homeCount = useCountUp(147, 2000, started);
  const summerCount = useCountUp(53, 2000, started);
  const schoolCount = useCountUp(36, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" ref={sectionRef} className="bg-gray-50 py-16 overflow-hidden">

      {/* ── Section Heading ── */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Impact</h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Trusted by schools and families across Nigeria to deliver real, practical tech education.
        </p>
      </div>

      {/* ── Count-up Stats ── */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16 px-6">

        {/* Stat 1 */}
        <div className="text-center">
          <div className="text-5xl font-extrabold text-gray-800">
            {homeCount}<span className="text-3xl text-yellow-600">+</span>
          </div>
          <div className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-widest">
            Home Lesson Clients
          </div>
        </div>

        <div className="hidden md:block w-px h-14 bg-gray-300" />

        {/* Stat 2 */}
        <div className="text-center">
          <div className="text-5xl font-extrabold text-gray-800">
            {summerCount}<span className="text-3xl text-yellow-600">+</span>
          </div>
          <div className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-widest">
            Summer Clinics
          </div>
        </div>

        <div className="hidden md:block w-px h-14 bg-gray-300" />

        {/* Stat 3 */}
        <div className="text-center">
          <div className="text-5xl font-extrabold text-gray-800">
            {schoolCount}<span className="text-3xl text-yellow-600">+</span>
          </div>
          <div className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-widest">
            School Collaborations
          </div>
        </div>

      </div>

      {/* ── Divider with label ── */}
      <div className="flex items-center gap-4 max-w-xl mx-auto mb-12 px-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
          Top Partner Schools
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* ── Marquee Slider ── */}
      <div className="relative w-full overflow-hidden">

        {/* Left fade edge */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        {/* Right fade edge */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee gap-16 w-max py-4">
          {marqueeSchools.map((school, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[120px] group cursor-default"
            >
              <img
                src={school.logo}
                alt={school.name}
                className="w-16 h-16 object-contain rounded-full mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xs font-semibold text-gray-600 text-center leading-tight group-hover:text-gray-900 transition-colors duration-200">
                {school.name}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
