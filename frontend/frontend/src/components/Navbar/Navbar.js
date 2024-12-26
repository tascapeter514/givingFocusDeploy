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
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
      </header>
    )
}