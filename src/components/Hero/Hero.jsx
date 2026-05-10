
  import React from 'react'    
  
  const Hero = () => {
      return (
        <section
          className="relative h-[600px] bg-cover bg-center flex items-end"
          style={{
            backgroundImage: `url('/images/herobg.png')`,
          }}
        >
          <div className="w-full bg-black bg-opacity-60 text-white py-4 px-6 md:p-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 opacity-0 animate-fade-slide-up [animation-delay:100ms] [animation-fill-mode:forwards]">We Teach Technology — To Every Age. In Every Setting.</h1>
            <p className="text-lg md:text-xl max-w-2xl opacity-0 animate-fade-slide-up [animation-delay:300ms] [animation-fill-mode:forwards]">
            Whether you are a school looking to partner with us or a parent seeking individual lessons for your child — Syntax Synergy has a programme designed for you.
            </p>
            {/* <div className='py-4'>
            <a href='#contact' className='border mt-2 rounded-md px-4 py-2 hover:bg-gray-100 hover:text-gray-600 duration-200 opacity-0 animate-fade-slide-up [animation-delay:500ms] [animation-fill-mode:forwards] hover:-translate-y-1 hover:shadow-lg transition-all duration-300'>Partner With Us Today</a>
            </div> */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <a href="#services"className="px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-1 text-center">For Schools</a>
              <a href="#individual"className="px-6 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 text-center">For Individuals</a>
              </div>
          </div>
        </section>
      );
    };

    export default Hero;
   