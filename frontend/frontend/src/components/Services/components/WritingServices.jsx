import React from 'react';
import './WritingServices.css'


export default function WritingServices() {
    return(
        <div className="writing-services">
            <h3>Writing Services</h3>
            <article className="resume-services">
                <div className="resume-services-img"><img src={require('../assets/resume.jpg')} alt="" /></div>
                <section className="resume-services-wrapper">
                    <hr className='resume-divider' />

                    <h4>Resumes</h4>
                    <ul>
                        <li><span className="resume-item">Resumes are an essential element of any search. A truly effective resume serves as an individual’s marketing tool, highlighting his or her strengths.</span></li>
                        <li><span className="resume-item">Two in-depth interviews are routinely required</span></li>
                        <li><span className="resume-item">An initial draft is presented, followed by two detailed editing sessions.</span></li>
                    </ul>
                </section>
            </article>
            <article className="biographies">
            <div className="biography-services-img"><img src={require('../assets/writing.jpg')} alt="" /></div>
                <section className="biography-services-wrapper">
                    <hr className='biography-divider' />
                    <h4>Biographies</h4>
                    <ul>
                        <li><span className="biography-item">A biography should convey as much essential, targeted information as possible to shape your background into the perfect “snap- shot caption” of your experience, strengths, and objectives.</span> </li>
                        <li><span className="biography-item">An extensive interviewing process is required </span></li>
                        <li> <span className="biography-item">An initial draft is presented, followed by two detailed editing sessions.</span></li>
                    </ul>
                </section>
            </article>
            
        </div>
    )
}