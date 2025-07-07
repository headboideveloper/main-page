import React from 'react'

const Courses = () => {
  return (
    <section id='courses'>
    <div className='max-w-screen text-gray-600 bg-white mt-[620px] md:mt-[-100px] py-5 md:py-[60px] mb-4 px-10 text-center items-center h-screen justify-center'>
        <div className='text-center md:max-w-4xl mx-auto py-10 md:py-0'>
            <h2 className='text-center item-center justify-center text-2xl md:text-3xl py-4 font-semibold md:py-11'>Our Courses</h2>
            <div className='bg-white text-black flex flex-col md:flex-row px-10 md:mb-12 md:py-6 items-center justify-evenly py-6 space-x-0 space-y-6 md:space-x-6 md:space-y-0'>
                <div className='shadow-lg shadow-gray-400 px-4 py-6 lg:h-[300px] lg:w-[700px] hover:scale-105 duration-200'>
                    <h2 className='text-2xl font-normal py-4 text-gray-500'>Frontend Development</h2>
                    <p className='text-gray-400'>Learn HTML, CSS, JavaScript, Bootstrap and React to build stunning, responsive websites.</p>
                </div>
                <div className='shadow-lg shadow-gray-400 px-4 py-6 lg:h-[300px] lg:w-[700px] hover:scale-105 duration-200'>
                    <h2 className='text-2xl font-normal py-4 text-gray-500'>Backend Development</h2>
                    <p className='text-gray-400'>Master Node.js, Express, and databases to create powerful server-side applications.</p>
                </div>
                <div className='shadow-lg shadow-gray-400 px-4 py-6 lg:h-[300px] lg:w-[700px] hover:scale-105 duration-200'>
                    <h2 className='text-2xl font-normal py-4 text-gray-500'>Data Analysis</h2>
                    <p className='text-gray-400'>Explore Python, SQL, Excel, Power BI and other tools to uncover insights from data.</p>
                </div>
                <div className='shadow-lg shadow-gray-400 px-4 py-6 lg:h-[300px] lg:w-[700px] hover:scale-105 duration-200'>
                    <h2 className='text-2xl font-normal py-4 text-gray-500'>Pictoblox & Scratch</h2>
                    <p className='text-gray-400'>Develop creative coding skills with block-based programming for beginners.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Courses