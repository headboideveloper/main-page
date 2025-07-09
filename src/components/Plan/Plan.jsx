import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-screen h-auto p-6 bg-white'>
        <div className='text-right md:text-center py-8 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto'>
       <h2 className='text-2xl mb-6 capitalize '>Our Implementation Plan</h2>
      </div>
         <div className='flex flex-col items-center py-6 space-y-4 space-x-0 justify-evenly md:space-y-0 md:space-x-5 md:flex-row max-w-[900px] mx-auto'>

        <div className='text-left md:text-center py-5 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto shadow-lg px-4 shadow-gray-500'>
        <h2 className='text-2xl mb-6 capitalize'>Phase 1: Orientation</h2>
        <p className='text-gray-700 mb-5'>Introductory workshop and custom curriculum design.
        </p>
        </div>

        <div className='text-left md:text-center py-5 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto shadow-lg px-4 shadow-gray-500'>
        <h2 className='text-2xl mb-6 capitalize'>Phase 2: <br /> Setup</h2>
        <p className='text-gray-700 mb-5'>Equip a tech and service center with internet and hardware.
        </p>
        </div>

        <div className='text-left md:text-center py-5 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto shadow-lg px-4 shadow-gray-500'>
        <h2 className='text-2xl mb-6 capitalize'>Phase 3: <br /> Classes</h2>
        <p className='text-gray-700 mb-5'>Weekly coding and wellness sessions during extracurricular periods.
        </p>
        </div>

        <div className='text-left md:text-center py-5 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto shadow-lg px-4 shadow-gray-500'>
        <h2 className='text-2xl mb-6 capitalize'>Phase 4: Projects</h2>
        <p className='text-gray-700 mb-5'>Hands-on projects, competitions, and certifications.
        </p>
        </div>

</div>
    </div>
  )
}

export default Plan