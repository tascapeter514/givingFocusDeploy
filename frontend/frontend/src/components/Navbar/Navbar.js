import React, { useState } from 'react';
import './Navbar.css'
import AboutUs from '../AboutUs/AboutUs';

const Navbar = ({handleScroll}) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    
  
    function handleToggle() {
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
                <li><button onClick={() => handleScroll('aboutUs')}>About Us</button></li>
                <li><button onClick={() => handleScroll('services')}>Services</button></li>
                <li><button onClick={() => handleScroll('contactForm')}>Contact Us</button></li>
            </ul>
        </nav>
      </header>
    )
}

export default Navbar;