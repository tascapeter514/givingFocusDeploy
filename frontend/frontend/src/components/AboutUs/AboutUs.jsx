import React, { forwardRef} from 'react';
import './AboutUs.css'


const AboutUs = forwardRef((props, ref) => {
    return(
        <section className='about-wrapper' id='about-us-page' ref={ref} >

            <img src={require('./assets/aboutUs.jpg')} alt="about-image" />
            <article className="about-text-container">
                <hr className='about-divider' />
                <h2 className="about-header">Who We Are</h2>
                
                <h5 className='about-secondary-header'>Giving Focus LLC is a consulting firm specializing in professional career development for individuals seeking advancement, transition, return to, or entry into the workplace.</h5>

                <p>Giving Focus LLC was founded by Mary Louise Fazzano and for nearly 20 years it has assisted clients on 6 continents prepare for and begin the next phase of their career. From recent graduates and those climbing through the ranks to industry leaders, diplomats and academicians, we guide clients in confidential, one-on-one sessions.</p>

                <p>The Giving Focus process includes planning a comprehensive job search, creating resumes and bios,
                fine tuning interviewing skills, negotiating the job and salary details, and navigating the first year in a new position.
                We believe career planning is more effective when organized in close association with personal goals or special interests.
                </p>
                <p>Career advancement occurs when one has a focused, well-executed plan in place.
                Giving Focus LLC develops effective strategies to maximize the specific skills and accomplishments that individuals bring to the table iorder to accomplish their career goals.</p>
                        
                    
            </article>
        </section>
    )
})

export default AboutUs