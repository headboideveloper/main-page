import React from 'react'
import Image11 from '../../space/three.jpg'
import Image12 from '../../space/aids.jpg'

const About = () => {
  return (
    <section id='about'>
    <div className='max-w-screen bg-white mb-4 px-10 text-gray-600 text-center items-center h-screen justify-center mt-[-120px] md:mt-0 py-[110px] md:py-0'>
        <div className='text-center md:max-w-4xl mx-auto mt-[-12px]'>
            <h2 className='text-center item-center justify-center text-2xl md:text-3xl py-6 font-semibold text-gray-600'>About Us</h2>
            <p className='text-gray-400 leading-8 text-center'>Syntax Synergy is dedicated to empowering students with cutting-edge tech skills. Our expert instructors guide you through hands-on projects, ensuring you gain practical experience in web development, data analysis, and creative programming.</p>
        </div>

        <div className='bg-white flex flex-col md:flex-row px-10 md:mb-12 md:py-10 items-center justify-evenly py-8 space-x-0 space-y-6 md:space-x-6 md:space-y-0  mx-auto'>
          <div className='mb-6 md:mb-0'>
            <img src={Image11} alt="image7" className='w-[300px] rounded-[40px] md:mt-4'/>
          </div>
          <div className='text-center items-center md:max-w-[300px] space-y-5'>
            <h2 className='text-2xl border-b border-gray-400'>Instruction</h2>
            <p className='text-gray-400 leading-8 tracking-wide py-4'>Syntax Synergy employs experienced professionals who are considered experts within their fields and instructional areas. We offer both virtual and physical class options.</p>
            <p>
              <a href="#" className='text-gray-600 border border-gray-300 rounded-lg px-6 py-2 hover:bg-gray-400 hover:text-white hover:border-none'>Learn More</a>
            </p>
          </div>
        </div>

        <div className='bg-white flex flex-col md:flex-row px-10 md:mb-12 md:py-6 items-center justify-evenly py-8 space-x-0 space-y-6 md:space-x-6 md:space-y-0  mx-auto'>
          <div className='text-center items-center md:max-w-[300px] space-y-5 mb-6 '>
            <h2 className='text-2xl border-b border-gray-400'>Career Mentorship</h2>
            <p className='text-gray-400 leading-8 tracking-wide py-4'>We maintain a large network of previous graduates who are willing to give back and mentor fellow graduates. Our extensive network enables graduates to enter the workforce promptly upon graduation.</p>
            <p>
              <a href="#" className='text-gray-600 border border-gray-300 rounded-lg px-6 py-2 hover:bg-gray-400 hover:text-white hover:border-none'>Learn More</a>
            </p>
          </div>
          <div className='md:mb-0'>
            <img src={Image12} alt="image7" className='w-[300px] rounded-[40px] md:mt-4'/>
          </div>
        </div>
    </div>
    </section>
  )
}

export default About