import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
  
    function handleToggle() {
      console.log("Toggle listener working!")
      setShowNavbar((prevNavbar) => !prevNavbar)
      if (showNavbar) {
        setIsExiting(true);
        setTimeout(() => {
          setShowNavbar(false);
          setIsExiting(false)
        }, 350);
      } else {
        setShowNavbar(true)
      }
    }

    function handleAnchor(event) {
      // handleToggle()
      console.log(event.target.textContent)
      const currBtn = event.target.textContent
      const targetHref = event.target.getAttribute('href')
      const targetEl = document.querySelector(targetHref)
      targetHref.scrollIntoView({behavior: 'smooth'})
      
      
    }



    return(
        <header className="header">
            <div className="logo-wrapper">
                <img src={require('./assets/logo.png')} alt="logo-image" className="logo"/>
            </div>
        <button
          onClick={handleToggle} 
          className="mobile-nav-toggle" 
          aria-controls='navbar' 
          aria-expanded={showNavbar}></button>
        <nav className={`navbar ${showNavbar ? 'enter' : ''} ${isExiting ? 'exit' : ''}`}>
            <ul className='nav-list'>
                <li><button href="#about-us-page" onClick={handleAnchor}>About Us</button></li>
                <li><button href="#services-page" onClick={handleAnchor}>Services</button></li>
                <li><button href="#contact-page" onClick={handleAnchor}>Contact Us</button></li>
            </ul>
        </nav>
      </header>
    )
}