
  import React from 'react'    
  
  const Hero = () => {
      return (
        <section
          className="relative h-[450px] bg-cover bg-center flex items-end"
          style={{
            backgroundImage: `url('/images/bby.jpg')`,
          }}
        >
          <div className="w-full bg-black bg-opacity-60 text-white py-4 px-6 md:p-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Unlock Your Full Potential</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              We offer more than just an education. We offer you the future.
            </p>
            <div className='py-4'>
            <a href='#contact' className='border mt-2 rounded-md px-4 py-2 hover:bg-gray-100 hover:text-gray-600 duration-200'>Partner With Us Today</a>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
   