import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import TestimonialsCarousel from './components/TestimonialsCarousel/TestimonialsCarousel'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'
import Profile from './components/Profile/Profile'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Header></Header>
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
