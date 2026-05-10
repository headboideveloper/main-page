import React from 'react'
import aboutImg from '../../space/abt.png'

const About = () => {
  return (
    <section id='about'>
<<<<<<< HEAD
      <div className='w-full py-12 md:py-20 bg-gray-300 px-6'>
        <div className='flex flex-col items-center md:flex-row max-w-[1000px] mx-auto gap-8 md:gap-16 justify-center'>

          {/* Text Column */}
          <div className='flex-1 flex flex-col justify-center text-center md:text-left order-2 md:order-1'>
            <h2 className='text-3xl font-bold mb-6 capitalize text-gray-800 tracking-tight'>About Us</h2>
            <div className='space-y-4 text-gray-700 leading-relaxed'>
              <p>
                Syntax Synergy is a technology education company on a mission to make
                practical, real-world tech skills accessible to everyone — regardless
                of age, background or location. We work with schools, families and
                individuals to deliver structured, hands-on technology programmes that
                fit seamlessly into any schedule and any setting.
              </p>
              <p>
                Whether we are partnering with a school to run weekly classes, visiting
                a family at home for private sessions or teaching a young adult online
                from anywhere in the world — our approach never changes. Every session
                is practical, every lesson produces something real and every learner
                leaves knowing more than when they arrived.
              </p>
              <p>
                From a 4 year old discovering a computer for the first time to a teenager
                publishing their first live website — and from a young adult learning to
                repair smartphones to a professional brushing up on digital skills —
                Syntax Synergy meets every learner exactly where they are and takes them
                further than they imagined possible.
              </p>

              {/* Stats row */}
              <div className='flex flex-wrap gap-6 pt-2 justify-center md:justify-start'>
                <div className='text-center md:text-left'>
                  <p className='text-2xl font-extrabold text-gray-800'>140+</p>
                  <p className='text-xs font-semibold text-gray-500 uppercase tracking-widest'>Individual Clients</p>
                </div>
                <div className='text-center md:text-left'>
                  <p className='text-2xl font-extrabold text-gray-800'>36+</p>
                  <p className='text-xs font-semibold text-gray-500 uppercase tracking-widest'>School Partnerships</p>
                </div>
                <div className='text-center md:text-left'>
                  <p className='text-2xl font-extrabold text-gray-800'>4+</p>
                  <p className='text-xs font-semibold text-gray-500 uppercase tracking-widest'>Programmes Offered</p>
                </div>
              </div>

            </div>
          </div>

          {/* Image Column */}
          <div className='flex-1 w-full max-w-[450px] order-1 md:order-2'>
            <div className='relative overflow-hidden rounded-2xl shadow-xl'>
              <img
                src={aboutImg}
                alt="Students learning technology"
                className='w-full h-[350px] md:h-[450px] object-cover object-center'
              />
            </div>
          </div>

        </div>
      </div>
    </section>
=======
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
>>>>>>> 7ac6601b7eb734371d035e78dcb859bfc8f27e8a
  )
}

export default About