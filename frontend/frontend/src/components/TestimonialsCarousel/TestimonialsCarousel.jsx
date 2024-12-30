import './TestimonialsCarousel.css'
import React, {useState, useEffect} from 'react'
import data from './data.js'

export default function TestimonialsCarousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [autoPlay] = useState(true);


    useEffect(() => {
        const timeOut = autoPlay && setTimeout(() => {
            setActiveSlide((prevIndex) => prevIndex === data.length - 1 ? 0 : prevIndex + 1)
        }, 3000)
        return () => clearTimeout(timeOut)
    }, [autoPlay, activeSlide])

    


    const testimonialItems = data.map(t => {
        return <li className={`testimonial ${activeSlide === t.id ? 'visible' : 'hidden'} `} key={t.id}>
            <blockquote className="testimonial-testimonialbody">"{t.quote}"</blockquote>
            <small className="byline">{t.byline}</small>
        </li>
    })

    const sliderButtons = data.map((t) => {
        return <span 
                    className={`slider-button ${activeSlide === t.id ? 'active' : ''}`}
                    key={t.id}
                    onClick={() => showSlide(t.id)}
                    >               </span>
    })



    

    function showSlide(id) {
        setActiveSlide(id)
    }


    
    return(
        <section className="carousel">
            <div className="carousel-item">
                <ul className="carousel-slide">
                   {testimonialItems}
                </ul>
                <ul className="menu-wrapper">
                    {sliderButtons}
                </ul>

                
            </div>



        </section>
        
        
    )
}