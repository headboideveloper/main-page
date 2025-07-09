import React from 'react'

const Testimonial = () => {
  return (
    <div className='max-w-screen h-auto p-6 bg-white'>
        <div className='text-right md:text-center py-8 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto'>
            <h2 className='text-2xl mb-6 capitalize '>What Our Clients Say</h2>
         </div>
         <div className='flex flex-col items-center py-6 space-y-4 space-x-0 justify-evenly md:space-y-0 md:space-x-5 md:flex-row max-w-[900px] mx-auto'>

            <div className='text-left md:text-center py-5 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto border rounded-lg px-4 shadow-gray-500'>
            <p className='text-gray-700 mb-5'>"The tutorship program has been transformative for our students. The faculty's expertise and patience have made complex coding accessible, boosting students' confidence and skills."
            </p>
            <h2 className='text-2xl mb-2 capitalize'>~ Mrs. Naomi Nwosu (Principal)</h2>
            </div>

            <div className='text-left md:text-center py-5 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto border rounded-lg px-4 shadow-gray-500'>
            <p className='text-gray-700 mb-5'>"My tutors have made coding easy to understand and fun! I loved working on projects with Pictoblox. Thanks to this program, I can now build my own websites, games and create interactive projects."
            </p>
            <h2 className='text-2xl mb-2 capitalize'>~ Ephraim Nyam (Student)</h2>
            </div>

            <div className='text-left md:text-center py-5 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto border rounded-lg px-4 shadow-gray-500'>
            <p className='text-gray-700 mb-5'>"This program has given my child a head start in tech. The faculty's expertise and emphasis on practical learning have developed their coding skills, problem-solving abilities, and creativity."
            </p>
            <h2 className='text-2xl mb-2 capitalize'>~ Mr. Isaiah Innocent (Parent)</h2>
            </div>

            </div>
    </div>
  )
}

export default Testimonial