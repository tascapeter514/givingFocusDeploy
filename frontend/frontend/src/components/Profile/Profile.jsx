import React from 'react';
import './Profile.css'

export default function Profile() {
    return(
        <section className='maryLouise-container'>
            <article className="mary-louise-header">
                <hr />
                <h2>Meet Mary Louise</h2>
                <h5>Mary Louise Fazzano is the President of Giving Focus LLC®
                a career consulting and advisory firm serving individuals at the start of their career, in transition, or seeking career advancement.</h5>
                    <div className="mary-louise-image-wrapper">
                        <img src={require("./assets/mary-louise-photo.jpg")} alt="mary-louise-photo" />
                        <div className="maryLouise-card-background"></div>
                    </div>
            </article>
                <article class="maryLouise-text-wrapper">
                
                
                <p>
                She is known as an expert listener with clear, practical suggestions. More than 400 satisfied clients have recommended Giving Focus to colleagues and friends globally.
                Mary Louise creates targeted and customized resumes and biographies for clients pursuing unique professional opportunities. 
                She started her career in Chicago as a recruiter with MKM Consultants 
                where she achieved an exceptional record of performance, and also served as a consultant with Right Management.</p>

                <p>Mary Louise spent the majority of her career in corporate philanthropy. 
                    Before establishing Giving Focus LLC®, she was a Managing Director at Changing Our World, Inc. a philanthropic consulting firm in New York City.
                She was the Director of the Hasbro Charitable Trust for over 10 years 
                where financial grants and product donations benefitted more than one million children annually. 
                Previously, she was the Director of Community Affairs at Stanley Fastening Systems.</p>

                <p>
                    Mary Louise serves on the Board of Directors of the Providence Mutual Fire Insurance Company and the Advisory Board of Newport Eco-Tech; 
                    she is also a member of Women Corporate Directors and the Belizean Grove. 
                    She was an Adjunct Instructor at New York University’s Center for Philanthropy and Fundraising. 
                    She is an Emeritus Board member of Refugees International in Washington D.C. 
                    and a former member of the Advisory Council of Harvard University’s Center for Children’s Health at the Harvard School of Public Health. 
                    Mary Louise earned her BA from Queen’s University in Kingston, Ontario.
                </p>
                
            </article>
      </section>
    )
}