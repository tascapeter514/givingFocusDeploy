import React from 'react'
import './Footer.css'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="image-and-text-wrapper">
                    <div className="image-wrapper">
                        <img src={require('./assets/logo.png')} alt="" className='footer-logo' />
                    </div>
                    <div className="text-content">
                        <p>
                        We are a consulting firm specializing in professional career development for individuals seeking advancement, transition, return to, or entry
                        into the workplace.
                        </p>
                        <small>@2024. All rights reserved.</small>
                    </div>
                </div>
                <div className="contact-info-container">
                    <h5>Contact Us</h5>
                        <ul className="contact-list">
                            <li><span>Email: </span>mlf@givingfocusllc.com</li>
                            <li><span>Phone: </span> 1 – 401 – 487 – 4275</li>
                            <li><span>Address: </span>P.O. Box 102 <br /> Newport, Rhode Island <br /> 02840 – 0100</li>
                        </ul>
                </div>
            </div>

        </footer>
        

    )
}