import React from 'react'
import './Services.css'
import AdvisoryServices from './components/AdvisoryServices'
import WritingServices from './components/WritingServices'
import SearchServices from './components/SearchServices'


export default function Services() {
    return(
        <section className='services-container'>
        

            <div className="services-wrapper">
              <h2>Giving Focus Services</h2>
              <AdvisoryServices></AdvisoryServices>
              <WritingServices></WritingServices>
              <SearchServices></SearchServices>
            </div>
      </section>


    )
}



<div className="circle-background">

</div>


{/* <svg className="first-circle"
viewBox='0 0 50 50'
height='450' width='450'
>
  <circle cx='25' cy='25' r='25' fill='rgba(252, 61, 61, 0.911)' />
</svg> */}


  {/* <svg id="visual"
            width='100%' height='100%'
            preserveAspectRatio="XMidYMid meet"
            viewBox="0 0 5000 750" version="1.1">
              <g
              
              fill='rgba(252, 61, 61, 0.911)'>
                <circle className='circle' r="147" cx="332" cy="66"></circle>
                <circle className='circle' r="65" cx="806" cy="137"></circle>
                <circle className='circle' r="121" cx="203" cy="525"></circle>
                <circle className='circle' r="89" cx="576" cy="458"></circle>
                <circle className='circle' r="131" cx="889" cy="437"></circle>
                <circle className='circle' r="100" cx="2" cy="292"></circle>
              </g>
          </svg> */}