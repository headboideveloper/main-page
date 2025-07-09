import React from 'react'
import data from '../../space/data.png'
import web from '../../space/webdev.jpeg'
import phone from '../../space/repairer.jpeg'
import wellness from '../../space/wellness.jpeg'

const Services = () => {
  return (
    <section id='services'>
    <div className='max-w-screen h-auto p-6 bg-white'>
       <div className='text-right md:text-center py-8 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto'>
       <h2 className='text-2xl mb-6 capitalize '>Services</h2>
      </div>
      <div className='flex flex-col items-center py-6 space-y-4 space-x-0 justify-evenly md:space-y-0 md:space-x-5 md:flex-row max-w-[700px] mx-auto mb-6'>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img 
            className="w-full h-48 object-cover" 
            src={web} 
            alt="Card image" 
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Website Development</h2>
            <p className="text-gray-600 text-base">
            Learn to build dynamic, responsive websites using HTML, CSS, Bootstrap, JavaScript, and Python. From landing pages to weather apps and portfolios, students gain hands-on coding skills and learn to host projects online.
            </p>
          </div>
        </div>

        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img 
            className="w-full h-48 object-cover" 
            src={phone} 
            alt="Card image" 
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone Repair Services</h2>
            <p className="text-gray-600 text-base">
            On-campus repair services and student-led workshops for diagnostics, screen replacements, and software troubleshooting to enhance technical skills.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center py-6 space-y-4 space-x-0 justify-evenly md:space-y-0 md:space-x-5 md:flex-row max-w-[700px] mx-auto mb-6'>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img 
            className="w-full h-48 object-cover" 
            src={data} 
            alt="Card image" 
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Data Analysis</h2>
            <p className="text-gray-600 text-base">
            Empower your school with insights through student performance analytics, operational efficiency reports, and predictive modeling using tools like Excel, Tableau, and Python.
            </p>
          </div>
        </div>

        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img 
            className="w-full h-48 object-cover" 
            src={wellness} 
            alt="Card image" 
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Beauty Crafting Classes</h2>
            <p className="text-gray-600 text-base">
            Wellness workshops teaching hair braiding and crafting natural hair and skin oils (e.g., turmeric oil) to promote self-care and well-being.
            </p>
          </div>
        </div>

        
      </div>
    </div>
    </section>
  )
}

export default Services