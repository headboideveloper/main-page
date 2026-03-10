
  import React from 'react'    
  
  const Hero = () => {
      return (
        <section
          className="relative h-[600px] bg-cover bg-center flex items-end"
          style={{
            backgroundImage: `url('/images/hero.png')`,
          }}
        >
          <div className="w-full bg-black bg-opacity-60 text-white py-4 px-6 md:p-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 opacity-0 animate-fade-slide-up [animation-delay:100ms] [animation-fill-mode:forwards]">Empowering the Next Generation of Tech Talent</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-0 animate-fade-slide-up [animation-delay:300ms] [animation-fill-mode:forwards]">
            We bring hands-on technology education directly to your school — from Scratch programming and web development to computer appreciation and mobile phone engineering.
            </p>
            <div className='py-4'>
            <a href='#contact' className='border mt-2 rounded-md px-4 py-2 hover:bg-gray-100 hover:text-gray-600 duration-200 opacity-0 animate-fade-slide-up [animation-delay:500ms] [animation-fill-mode:forwards] hover:-translate-y-1 hover:shadow-lg transition-all duration-300'>Partner With Us Today</a>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
   