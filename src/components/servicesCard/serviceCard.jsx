import './serviceCard.css'
import { useInView } from 'react-intersection-observer';
import { useState,useEffect } from 'react';

const ServiceCard = ({data}) => {
    const [ref, inView] = useInView();
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 767
      );

    const handleResize = () => {
        setIsMobile(window.innerWidth < 767);
    };

    useEffect(()=>{
        handleResize()
        console.log(isMobile)
    },[])

    return(
        <div ref={ref} className={`serviceCardContain animate__animated ${inView && !isMobile?'animate__fadeInLeft':''}`} style={{backgroundImage: `url(${data.img})`}} >
            <span>{data.title}</span>
        </div>
   )
}

export default ServiceCard