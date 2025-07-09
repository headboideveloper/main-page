import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Aim from './components/Aim/Aim';
import About from './components/About/About';
import Services from './components/Services/Services';
import Plan from './components/Plan/Plan';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Testimonial from './components/Testimonial/Testimonial';
import Ads from './components/Ads/Ads';


function App() {
  return (
    <div className='bg-white text-black h-screen w-full'>
       <Navbar/>
       <Hero/>
       <About/>
       <Services/>
       <Aim/>
       <Plan/>
       <Testimonial/>
       <ContactForm/>
       <Ads/>
       <Footer/>
    </div>
  );
}

export default App;
