import React from 'react'
import aboutImg from '../../space/abt.png'

const About = () => {
  return (
    <section id='about'>
   <div className='w-full py-12 md:py-20 bg-gray-300 px-6'>
  <div className='flex flex-col items-center md:flex-row max-w-[1000px] mx-auto gap-8 md:gap-16 justify-center'>
    
    {/* Text Column - Now balanced with flex-1 */}
    <div className='flex-1 flex flex-col justify-center text-center md:text-left order-2 md:order-1'>
      <h2 className='text-3xl font-bold mb-6 capitalize text-gray-800 tracking-tight'>About Us</h2>
      <div className='space-y-4 text-gray-700 leading-relaxed'>
        <p>
          Syntax Synergy is a technology education company on a mission to make quality, 
          practical tech skills accessible to every student regardless of age or background. 
          We partner directly with schools to deliver structured, hands-on technology 
          programmes that fit seamlessly into the academic calendar.
        </p>
        <p>
          From our youngest learners discovering computers for the first time, to senior 
          secondary students building and publishing real websites — every programme we 
          deliver is designed around one principle: students learn best by doing. 
          No passive listening, no rushed theory.
        </p>

        <div>
    <p class="font-semibold">Advanced students in JSS 2 and JSS 3 may progress into our Physical Computing extension featuring Arduino and robotics — available as an optional add-on programme.</p>
  </div>
      </div>
    </div>

    {/* Image Column - Constrained to match text height */}
    <div className='flex-1 w-full max-w-[450px] order-1 md:order-2'>
      <div className='relative overflow-hidden rounded-2xl shadow-xl'>
        <img 
          src={aboutImg} 
          alt="African teens coding together" 
          className='w-full h-[350px] md:h-[450px] object-cover object-center'
        />
      </div>
    </div>
    
  </div>
</div>
      </section>
  )
}

export default About