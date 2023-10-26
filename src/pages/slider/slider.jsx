import testimonials from "../../data/testimonials";
import { useState,useEffect } from "react";
import './slider.css'
import Carousel from 'react-elastic-carousel';

const TSlider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
  ];
    return(
         <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints} className="rec-carousel-item">
          {testimonials.map((item) => (
            <div id="carouselCenter">
                <div id="imgContain">
                <img src={item.personImg} />
                </div>
                <h1>{item.personName}</h1>
                <p>{item.testimonial}</p>
            </div>
          ))}
        </Carousel>
      </div>
    )
}

export default TSlider