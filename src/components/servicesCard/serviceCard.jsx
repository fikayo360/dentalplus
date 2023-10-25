import './serviceCard.css'
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({data}) => {
    const [ref, inView] = useInView();
    return(
        <div ref={ref} className={`serviceCardContain animate__animated ${inView?'animate__fadeInLeft animate__delay-1.5s':''}`} style={{backgroundImage: `url(${data.img})`}} >
            <span>{data.title}</span>
        </div>
   )
}

export default ServiceCard