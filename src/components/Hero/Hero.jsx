import React, { useState, useEffect } from 'react';
    import ReactDOM from 'react-dom';

    const Hero = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
      
      // Sample images/data for the carousel
      const slides = [
        {
          id: 1,
          image: '/images/bby.jpg',
          title: 'Unlock Your Full Potential',
          description: 'Master frontend & backend development, data analysis, and creative programming with Pictoblox and Scratch.'
        },
        {
          id: 2,
          image: '/images/bg2.jpg',
          title: 'Build Real-World Projects',
          description: 'Gain hands-on experience with industry-relevant tools and technologies.'
        },
        {
          id: 3,
          image: '/images/bgg.jpg',
          title: 'Learn to Code with Syntax Synergy',
          description: 'Start your coding journey with expert guidance and a supportive community.'
        }
      ];

      // Auto-slide effect
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => 
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
      }, [slides.length]);

      const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      };

      const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
      };

      return (
        <section id='home'>
          <div className="relative w-full mx-auto overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full">
                  <div className="relative h-96">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center item-center">
                      <h2 className="text-2xl font-bold">{slide.title}</h2>
                      <p className='text-gray-400'>{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-2 rounded-full transition"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black p-2 rounded-full transition"
            >
              →
            </button>

            <div className='px-4 max-w-3xl text-center item-center py-8 text-black md:max-w-4xl mx-auto md:text-3xl lg:text-4xl lg:py-3 font-thin italic'>
              <h2 className='py-4 lg:py-2 text-2xl text-gray-400'>"We offer more than just an education, we offer you the future"</h2>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;