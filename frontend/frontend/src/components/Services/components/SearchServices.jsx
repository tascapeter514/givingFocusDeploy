import React from 'react'
import './SearchServices.css'
// import {ReactComponent as TargetSvg} from '../assets/target.svg'
import targetSvg from '../assets/target.svg'
import networkSvg from '../assets/users-solid.svg'
import briefcaseSvg from '../assets/briefcase-solid.svg'
import handshakeSvg from '../assets/handshake-solid.svg'

export default function SearchServices() {
    return(
        <article className="search-services">
            <div className="search-header-wrapper">
                <h3>Search Services</h3>
                <span>Giving Focus will help you to develop techniques and strategies for refining your job search skills by enabling you
                    to anticipate and succinctly answer any type of question you might encounter.</span>
            </div>
            <section className="search-services-card-wrapper">
                <div className="card job-plan">
                <img src={targetSvg} alt="handshake" className='icon handshake'/>
                    <h4>Job Search - The Plan</h4>
                    <p>The job search process is an “Organizational Event”.
                     If you have your thoughts in order, your goals defined,
                      your documents and questions prepared,
                      and answers considered in advance, you will be better prepared for the active,
                       ever-changing, goals-shifting, fluid process that is a productive job search.</p>
                </div>
                <div className="card networking-plan">
                    <img src={networkSvg} alt="network" className='icon network'/>
                    <h4>Networking Plan</h4>
                    <p>Any successful job search relies upon the fundamental skill of exploring personal connections
                        or “Networking” in order to learn about potential opportunities within your field.
                        Developing a networking plan can make a significant difference in your success rate.</p>
                </div>
                <div className="card interview">
                    <img src={briefcaseSvg} alt="brief-case" className='icon briefcase'/>
                    <h4>Interview Coaching & Practice</h4>
                    <p>Whether you are new to your career or progressing through the higher reaches of your industry,
                        interviewing skills can always be “Tuned-Up” or improved.
                        When under intense scrutiny, it is easy to forget that an interview is a two-way street.
                        The end game is not the interview, it is the job, and how it relates to your career path.</p>
                </div>
                <div className="card negotiation">
                    <img src={handshakeSvg} alt="handshake" className='icon handshake'/>
                    {/* <HandshakeSvg className='icon handshake'></HandshakeSvg> */}
                    <h4>Negotiating Coaching & Practice</h4>
                    <p>Salary, benefits, and many essential elements of your compensation package are negotiable.
                        Giving Focus prepares clients with proven techniques to negotiate to “Yes”. </p>
                </div>
            </section>
        </article>
    )
}