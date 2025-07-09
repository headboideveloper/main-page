import React from 'react'
import aboutImg from '../../space/bg2.jpg'

const About = () => {
  return (
    <section id='about'>
    <div className='max-w-screen h-auto p-6 bg-gray-300'>
      <div className='flex flex-col items-center py-6 space-y-4 space-x-0 justify-evenly md:space-y-0 md:space-x-5 md:flex-row max-w-[900px] mx-auto'>

      <div className='text-right md:text-center py-8 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto'>
        <h2 className='text-2xl mb-6 capitalize'>about us</h2>
        <p className='text-gray-700 mb-5'>We are a leading provider of integrated technology and wellness solutions, dedicated to empowering educational institutions. Our mission is to enhance student engagement, operational efficiency, and community well-being through cutting-edge digital tools and health-focused initiatives.
        </p>

        <p className='text-gray-700 mb-5'>
        With a focus on sustainability and user-centric design, we bring expertise in website development, data analysis, phone repair, and natural wellness products to create a holistic campus experience.
        </p>
        </div>


        <div className='text-center py-8 md:py-10 max-w-[400px] md:max-w-[700px] mx-auto'>
          <img src={aboutImg} alt="about-us Img" className='rounded-md w-400px'/>
        </div>
      </div>
      </div>
      </section>
  )
}

export default About