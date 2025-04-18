import React, { forwardRef } from 'react'
import './ContactForm.css'

const ContactForm = forwardRef((props, ref) => {
    return(
        <main className="contact-form-wrapper">
            <section className="form-container" id='contact-page' ref={ref}>
                <article className="contact-text">
                    <h2 className="contact-title">Let’s talk about the next phase of your career</h2>
                    <span className='contact-description'>Please schedule a telephone call with Mary Louise Fazzano to share information
                    about your current plans and learn more about the Giving Focus process. </span>
                </article>
                <article className="contact-form">
                    <form action="#" className="form-field" name="myForm">
                        <input type="text" className="formInput fName" id='fName' placeholder='First Name' required/>
                        <input type="text" className="formInput lName" id='lName' placeholder='Last Name' required />
                        <input type="email" className="formInput email" id='email' placeholder='Email Address' required />
                        <input type="text" className="formInput message" id='message' placeholder='Enter Your Message' required/>
                        <button type="submit" id='submit' className='submit-button' >Find your focus today!</button>
                    </form>
                </article>
            </section>
        </main>

    )
})

export default ContactForm