import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Aim from './components/Aim/Aim';
import About from './components/About/About';
import Highlight from './components/Highlights/Highlight';
import Courses from './components/Courses/Courses';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Testimonial from './components/Testimonial/Testimonial';


function App() {
  return (
    <div className='bg-white text-black h-screen w-full'>
       <Navbar/>
       <Hero/>
       <About/>
       <Aim/>
       <Highlight/>
       <Courses/>
       <Testimonial/>
       <ContactForm/>
       <Footer/>
    </div>
  );
}

export default App;
