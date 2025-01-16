import React from 'react';
import './Header.css'

const Header = ({handleScroll}) => {
    return(
        <section className="h1-wrapper">
          <div className="text-container">
              <h1 className="main-header">Give Your Career the Gift of Focus</h1> 
              <span className='h1-span'>We specialize in professional career development</span>
              <button href='#contact-page' className='call-to-action' onClick={() => handleScroll('contactForm')}>Find Your Focus</button>
          </div>
        </section>
    )
}

export default Header