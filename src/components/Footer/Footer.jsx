import React from 'react'
import logo from '../../space/logo.png'

const Footer = () => {
  return (
    <div className='max-w-screen h-auto py-5 bg-gray-100'>
            <div className='flex flex-col item-center space-y-4 space-x-0 md:flex-row md:space-x-4 md:space-y-0 text-center items-center justify-evenly'>
            <a href="#navbar">
       <img src={logo} alt="" className='w-[240px] md:w-[300px] px-4'/>
            </a>
      <p className='text-gray-400 py-2'> © 2025 Syntax Synergy. All rights reserved.</p>
     </div>
            </div>
          
  )
}

export default Footer