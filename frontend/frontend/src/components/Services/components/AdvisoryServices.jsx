import React from 'react'
import './AdvisoryServices.css'
// import './AdvisoryServicesGrid.css'


export default function AdvisoryServices() {
    return(
        <div className="advisory-services">
            <h3>Advisory Services</h3>
            <article className="focus-you">
                <div className="focus-you-img"><img src={require('../assets/focus-you-pic.jpg')} alt="" /></div>
                <section className="focus-you-wrapper">
                <hr className='focus-divider' />
                    <h4>Focusing On You</h4>
                    <ul>
                        <li><span className="focus-item">One-on-one conversations highlight your plans and goals</span></li>
                        <li><span className="focus-item">Confidential discussions and brainstorming allow you to understand your true value</span></li>
                        <li><span className="focus-item">Investigate your experience, knowledge and accomplishments to define your priorities</span></li>
                        <li><span className="focus-item">Gaining confidence in describing your skills and abilities puts you at greater ease, which is key to the success of this process</span></li>
                    </ul>
                </section>
            </article>
            <article className="search-focus">
                <div className="search-focus-img"><img src={require('../assets/search-focus-pic.jpg')} alt="" /></div>
                <section className="search-focus-wrapper">
                    <hr className='search-divider' />
                    <h4>Focusing Your Search</h4>
                    <ul>
                        <li><span className="search-item">Define your goals for this search</span></li>
                        <li><span className="search-item">Know yourself so you can tell others</span> </li>
                        <li> <span className="search-item">Prepare to explain who you are and what you will bring to your next role</span></li>
                        <li><span className="search-item">Understand the entire search process - from the long-term goals you set to the smallest details</span></li>
                    </ul>
                </section>
            </article>
        </div>
    )
}


            {/* <div className="circle-background">
                    <svg id="visual"
                    viewBox="0 0 900 600" width="900" height="600" version="1.1">
                        <rect x="0" y="0" width="900" height="600" fill="#0179c5"></rect>
                        <g fill='rgba(252, 61, 61, 0.911)'>
                            <circle className='circle' r="147" cx="332" cy="66"></circle>
                            <circle className='circle' r="65" cx="806" cy="137"></circle>
                            <circle className='circle' r="121" cx="203" cy="525"></circle>
                            <circle className='circle' r="89" cx="576" cy="458"></circle>
                            <circle className='circle' r="131" cx="889" cy="437"></circle>
                            <circle className='circle' r="100" cx="2" cy="292"></circle>
                        </g>
                    </svg>
                </div> */}