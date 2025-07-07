import React from 'react'
import logo from '../../space/logo.png'

const Footer = () => {
  return (
    <div className='h-[150px] md:mt-[-80px] max-w-screen bg-gray-100 mt-[640px] py-8 text-center text-gray-400 md:py-10'>
      <div className='flex flex-col space-y-4 space-x-0 items-center justify-evenly md:flex-row md:space-y-0 md:space-x-4 md:py-4'>
      <a href="#navbar">
        <img src={logo} alt="" className='w-[240px] md:w-[300px] px-4'/>
      </a>
      <p className='text-gray-400 py-2'> © 2025 Syntax Synergy. All rights reserved.</p>
      </div>
</div>
  )
}

export default Footer