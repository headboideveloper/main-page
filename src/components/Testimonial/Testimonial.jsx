import React from 'react'

const Testimonial = () => {
  return (
    <div className='max-w-screen bg-white mt-[-80px] md:mt-[-100px] py-[550px] md:py-[10px] px-10 text-black text-center items-center h-screen justify-center mb-[120px] '>
        <div className='text-center md:max-w-4xl mx-auto py-12 md:py-0'>
            <h2 className='text-center item-center justify-center text-2xl md:text-3xl py-4 font-semibold text-gray-600'>What Our Clients Say</h2>
            <div className='bg-white flex flex-col md:flex-row px-10 md:mb-12 md:py-6 items-center justify-evenly py-6 space-x-0 space-y-6 md:space-x-6 md:space-y-0'>
                <div className='border border-gray-400 rounded-[20px] px-4 py-6 lg:h-[330px] lg:w-[700px] hover:scale-105 duration-200 hover:border-b hover:shadow-lg hover:shadow-gray-500'>
                    <p className='text-gray-400 py-4'>"The tutorship program has been transformative for our students. The faculty's expertise and patience have made complex coding accessible, boosting students' confidence and skills."</p>
                    <h2 className='text-2xl font-normal text-gray-400'>~ Mrs. Florence Nwosu (Principal)</h2>
                </div>
                <div className='border border-gray-400 rounded-[20px] px-4 py-6 lg:h-[330px] lg:w-[700px] hover:scale-105 duration-200 hover:border-b hover:shadow-lg hover:shadow-gray-500'>
                <p className='text-gray-400 py-4'>"The tutors have made coding easy to understand and fun! I loved working on projects with Pictoblox. Thanks to this program, I can now build my own websites, games and create interactive projects."</p>
                    <h2 className='text-2xl font-normal text-gray-400'>~ Ephraim Nyam (Student)</h2>
                </div>
                <div className='border border-gray-400 rounded-[20px] px-4 py-6 lg:h-[330px] lg:w-[700px] hover:scale-105 duration-200 hover:border-b hover:shadow-lg hover:shadow-gray-500'>
                <p className='text-gray-400 py-4'>"This program has given my child a head start in tech. The faculty's expertise and emphasis on practical learning have developed their coding skills, problem-solving abilities, and creativity."</p>
                    <h2 className='text-2xl font-normal text-gray-400'>~ Mr. Isaiah Innocent (Parent)</h2>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Testimonial