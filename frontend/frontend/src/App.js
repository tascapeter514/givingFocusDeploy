import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import TestimonialsCarousel from './components/TestimonialsCarousel/TestimonialsCarousel'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import Profile from './components/Profile/Profile'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
   
      <main>
        <section className="h1-wrapper">
          <div className="text-container">
              {/* <h1>
                  <div id="firstLine"><span >Give Your </span></div>
                  <div id="secondLine"><span>Career the </span></div>
                  <span id="thirdLine">Gift of <span id="rotateIn">F</span>ocus</span>
              </h1> */}
              <h1 className="main-header">Give Your Career the Gift of Focus</h1> 
              <span className='h1-span'>We specialize in professional career development</span>
              <a href='#' className='CTA-button'>Find Your Focus</a>
          </div>
          {/* <div className="curvy-background">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div> */}
        </section>

        {/* see if we can combine AboutUs and Testimonials */}
        <AboutUs></AboutUs>
        <TestimonialsCarousel></TestimonialsCarousel>
        <Services></Services>
        <Profile></Profile>
        <ContactForm></ContactForm>
        <Footer></Footer>
        
      </main>
    </div>
  )
}

export default App;
