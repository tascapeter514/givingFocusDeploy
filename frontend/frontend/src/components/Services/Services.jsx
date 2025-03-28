import React, {forwardRef} from 'react'
import './Services.css'
import AdvisoryServices from './components/AdvisoryServices'
import WritingServices from './components/WritingServices'
import SearchServices from './components/SearchServices'


const Services = forwardRef((props, ref) => {
    return(
        <section className='services-container' id='services-page' ref={ref}>
        

            <div className="services-wrapper">
              <h2>Giving Focus Services</h2>
              <AdvisoryServices></AdvisoryServices>
              <WritingServices></WritingServices>
              <SearchServices></SearchServices>
            </div>
      </section>


    )
})

export default Services



