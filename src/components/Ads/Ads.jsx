
import React from 'react'    
  
const Ads = () => {
    return (
        <section className='bg-white md:py-16'>
      <div
        className="relative h-[300px] md:h-[200px] bg-cover bg-center flex items-end md:w-[1000px] mx-auto"
        style={{
          backgroundImage: `url('/images/img11.jpg')`,
        }}
      >
        <div className="w-full bg-black bg-opacity-80 text-white py-4 px-6 md:p-12 items-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Campus?</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto pb-4">
          Partner with Syntax Synergy to bring innovative tech and wellness solutions to your institution today.
          </p>
          <div className='mt-4'>
          <a href="https://api.whatsapp.com/+2349078875406" className='px-6 py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all duration-300'>Contact Us Now</a>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      </section>
    );
  };

  export default Ads;
 