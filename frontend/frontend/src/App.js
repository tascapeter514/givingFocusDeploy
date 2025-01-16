import './App.css';
import React, {useRef} from 'react';
import Navbar from './components/Navbar/Navbar'
import TestimonialsCarousel from './components/TestimonialsCarousel/TestimonialsCarousel'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import Profile from './components/Profile/Profile'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


function App() {
  const sectionRefs = {
    aboutUs: useRef(null),
    services: useRef(null),
    contactForm: useRef(null),
  }

  function handleScroll(section) {
    if (sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({behavior: 'smooth'})
    }
  }
  



  return (
    <div className="App">
        <Navbar handleScroll={handleScroll}></Navbar>
        <main>
            <Header handleScroll={handleScroll}></Header>
            <AboutUs ref={sectionRefs.aboutUs} title= 'About Us'></AboutUs>
            <TestimonialsCarousel></TestimonialsCarousel>
            <Services ref={sectionRefs.services} title= 'Services'></Services>
            <Profile></Profile>
            <ContactForm ref={sectionRefs.contactForm} title= 'Contact Us'></ContactForm>
            <Footer></Footer>
        
        </main>
    </div>
  )
}

export default App;
