import './App.css';
import React, {useRef, useState} from 'react';
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

  const [showNavbar, setShowNavbar] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  function handleScroll(section) {
    if (sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({behavior: 'smooth'})
      if (showNavbar) {
        setIsExiting(true);
        setTimeout(() => {
          setShowNavbar(false);
          setIsExiting(false)
        }, 350);
      }
    }
  }
  



  return (
    <div className="App">
        <Navbar 
          handleScroll={handleScroll} 
          showNavbar={showNavbar}
          isExiting={isExiting} 
          setShowNavbar={setShowNavbar} 
          setIsExiting={setIsExiting}></Navbar>
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
