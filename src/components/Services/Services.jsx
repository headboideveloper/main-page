import React, { useEffect, useRef, useState } from 'react'
import web from '../../space/web.jpg'
import appreciation from '../../space/appreciation.jpeg'
import scratch from '../../space/heroo.png'
import phone from '../../space/phone.jpg'

const services = [
  {
    image: appreciation,
    title: "Computer Appreciation",
    level: "Nursery 3 — Primary 2",
    description: "We introduce young learners to the world of technology. Students learn to navigate a computer, create and format documents in Microsoft Word, draw creatively in MS Paint and build typing speed using Mavis Beacon — all through fun, hands-on practical sessions.",
    accent: "#3D1F2D",
    delay: "0ms",
  },
  {
    image: scratch,
    title: "Scratch Programming",
    level: "Primary 3 — JSS 3",
    description: "Using the Scratch visual programming platform, students learn to build games, animations and interactive stories through hands-on coding. From dancing sprites to ping pong games and AI extensions — students graduate with real projects they built themselves.",
    accent: "#C9A84C",
    delay: "150ms",
  },
  {
    image: web,
    title: "Frontend Web Development",
    level: "SS1 — SS3",
    description: "Students progress from HTML structure through CSS styling to JavaScript interactivity — finishing the year by publishing a live personal portfolio website on the internet via GitHub Pages. Real, industry-standard web development from scratch.",
    accent: "#1A3A5C",
    delay: "300ms",
  },
  {
    image: phone,
    title: "Mobile Phone Engineering",
    level: "All Secondary Levels",
    description: "Students learn Android smartphone hardware and repair through completely hands-on practical sessions. From identifying internal components to replacing screens, batteries and charger ports — students leave with real technical skills they can use immediately.",
    accent: "#2E7D32",
    delay: "450ms",
  },
];

const Services = () => {
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
    <section id="services" ref={sectionRef} className="bg-white py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 capitalize">
          Our Services
        </h2>
        <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full" />
        <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto">
          Structured, practical tech programmes delivered directly inside your school — every week of the academic term.
        </p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            style={{
              animationDelay: service.delay,
              animationFillMode: 'forwards',
            }}
            className={`
              group bg-white rounded-2xl shadow-md overflow-hidden
              hover:-translate-y-2 hover:shadow-xl transition-all duration-300
              ${visible ? 'animate-fade-slide-up' : 'opacity-0'}
            `}
          >
            {/* Image with overlay */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={service.image}
                alt=""
                role="presentation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Level badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: service.accent }}
              >
                {service.level}
              </div>

              {/* Title on image */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">

              {/* Gold accent bar */}
              <div
                className="w-10 h-1 rounded-full"
                style={{ backgroundColor: service.accent }}
              />

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Learn more indicator */}
              <div
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mt-auto"
                style={{ color: service.accent }}
              >
                Hands-on practical sessions
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services