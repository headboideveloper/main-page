import React from 'react'
import image1 from '../../space/img1.jpg'
import image3 from '../../space/img3.jpg'
import image5 from '../../space/img5.jpg'
import image7 from '../../space/img7.jpg'
import image8 from '../../space/img8.jpg'
import image9 from '../../space/img9.jpg'


const Highlight = () => {
  return (
    <div className='max-w-screen h-screen bg-white mb-6 text-gray-600 text-center mt-[-1300px] md:mt-[-550px]'>
        <div className='md:py-6 mb-4'>
            <h2 className='text-2xl md:text-3xl font-semibold'>Inspiring Development Highlights</h2>
        </div>
        <div className='bg-white flex flex-col md:flex-row px-10 md:mb-12 md:py-6 items-center justify-evenly py-6 space-x-0 space-y-6 md:space-x-6 md:space-y-0'>
            <div>
                <img src={image1} alt="image" className='w-[300px] rounded-lg hover:opacity-70 hover:scale-95'/>
            </div>
            <div>
                <img src={image5} alt="image" className='w-[300px] rounded-lg hover:opacity-70 hover:scale-95'/>
            </div>
            <div>
                <img src={image3} alt="image" className='w-[300px] rounded-lg hover:opacity-70 hover:scale-95'/>
            </div>
        </div>
        <div className='bg-white flex flex-col md:flex-row px-10 md:mt-10 md:mb-12 md:py-6 items-center justify-evenly py-6 space-x-0 space-y-6 md:space-x-6 md:space-y-0'>
            <div>
                <img src={image8} alt="image" className='w-[300px] rounded-lg hover:opacity-70 hover:scale-95'/>
            </div>
            <div>
                <img src={image9} alt="image" className='w-[300px] rounded-lg hover:opacity-70 hover:scale-95'/>
            </div>
            <div>
                <img src={image7} alt="image" className='w-[300px] rounded-lg hover:opacity-70 hover:scale-95'/>
            </div>
        </div>
    </div>
  )
}

export default Highlight