import React from 'react';
import './Header.css'

export default function Header() {
    return(
        <section className="h1-wrapper">
          <div className="text-container">
              <h1 className="main-header">Give Your Career the Gift of Focus</h1> 
              <span className='h1-span'>We specialize in professional career development</span>
              <button href='#contact-page' className='call-to-action'>Find Your Focus</button>
          </div>
        </section>
    )
}