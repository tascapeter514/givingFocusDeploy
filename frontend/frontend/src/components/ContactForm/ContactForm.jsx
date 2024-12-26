import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
    return(
        <section className="form-container">
            <article className="contact-text">
                <h2 className="contact-title">Let’s talk about the next phase of your career</h2>
                <span className='contact-description'>Please schedule a telephone call with Mary Louise Fazzano to share information
                about your current plans and learn more about the Giving Focus process. </span>
            </article>
            <article className="contact-form">
                <form action="#" className="form-field" name="myForm">
                    <input type="text" className="formInput fName" id='fName' placeholder='First Name' required/>
                    <span className="text" id='fname-text'></span>
                    <div className="space"></div>
                    <input type="text" className="formInput lName" id='lName' placeholder='Last Name' required />
                    <span className="text" id='lname-text'></span>
                    <div className="space"></div>
                    <input type="email" className="formInput email" id='email' placeholder='Email Address' required />
                    <span className="text" id='lname-text'></span>
                    <div className="space"></div>
                    <input type="text" className="formInput message" id='message' placeholder='Enter Your Comments' required/>
                    <span className="text" id='message-text'></span>
                    <div className="space"></div>
                    <input type="submit" id='submit' value='Find Your Focus Today' />
                </form>
            </article>

        </section>

    )
}