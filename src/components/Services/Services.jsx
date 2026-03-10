import React from 'react'
import web from '../../space/web.jpg'
import appreciation from '../../space/appreciation.jpeg'
import scratch from '../../space/heroo.png'
import phone from '../../space/phone.jpg'

const Services = () => {
  return (
    <section id='services'>
    <div className='max-w-screen h-auto p-6 bg-white'>
      <div className='text-center md:text-center py-8 md:py-10 max-w-[400px] md:max-w-[700px] md:mx-auto'>
        <h2 className='text-2xl mb-6 capitalize'>Services</h2>
      </div>
  
      {/* Row 1 */}
      <div className='flex flex-col items-center py-6 space-y-4 space-x-0 justify-evenly md:space-y-0 md:space-x-5 md:flex-row max-w-[700px] mx-auto mb-6'>
  
        {/* Card 1 — Computer Appreciation */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl animate-fade-slide-up [animation-delay:100ms]">
        <img className="w-full h-48 object-cover" src={appreciation} alt="" role="presentation" />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Computer Appreciation</h2>
            <p className="text-gray-600 text-base">
              We introduce young learners from Nursery 3 through Primary 2 to the world of technology. Students learn to navigate a computer, create and format documents in Microsoft Word, draw creatively in MS Paint and build typing speed using Mavis Beacon — all through fun, hands-on practical sessions.
            </p>
          </div>
        </div>
  
        {/* Card 2 — Scratch Programming */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl animate-fade-slide-up [animation-delay:250ms]">
          <img
            className="w-full h-48 object-cover"
            src={scratch}
            alt=""
            role="presentation"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Scratch Programming</h2>
            <p className="text-gray-600 text-base">
              Using the Scratch visual programming platform, students from Primary 3 through JSS 3 learn to build games, animations and interactive stories through hands-on coding. From dancing sprites and animated tales to ping pong games and AI extensions — students graduate with real projects they built themselves.
            </p>
          </div>
        </div>
  
      </div>
  
      {/* Row 2 */}
      <div className='flex flex-col items-center py-6 space-y-4 space-x-0 justify-evenly md:space-y-0 md:space-x-5 md:flex-row max-w-[700px] mx-auto mb-6'>
  
        {/* Card 3 — Frontend Web Development */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl animate-fade-slide-up [animation-delay:400ms]">
          <img
            className="w-full h-48 object-cover"
            src={web}
            alt="" role="presentation"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Frontend Web Development</h2>
            <p className="text-gray-600 text-base">
              Designed for SS1 through SS3 students, this module teaches real, industry-standard web development from scratch. Students progress from HTML structure through CSS styling to JavaScript interactivity — finishing the year by publishing a live personal portfolio website on the internet via GitHub Pages.
            </p>
          </div>
        </div>
  
        {/* Card 4 — Mobile Phone Engineering */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl animate-fade-slide-up [animation-delay:550ms]">
          <img
            className="w-full h-48 object-cover"
            src={phone}
            alt="" role="presentation"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Mobile Phone Engineering</h2>
            <p className="text-gray-600 text-base">
              Students learn about the fundamentals of Android smartphone hardware and repair through completely hands-on practical sessions. Ranging from identifying internal components to the replacing of the screens, batteries, charger ports, and sensors — students leave with real technical skills they can apply immediately for their personal use or to earn a part-time income.
            </p>
          </div>
        </div>
  
      </div>
    </div>
  </section>
  )
}

export default Services