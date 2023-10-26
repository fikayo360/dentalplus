import './testimonials.css'
import TSlider from '../slider/slider';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
    const [ref, inView] = useInView();
    return (
        <div id="testimonialContain">
            <div id="scircle1"></div>
            <div id="scircle2"></div>
            <h1 ref={ref} className={`animate__animated ${inView?'animate__bounce':''}`}> Testimonials </h1>
            <TSlider/>
        </div>
    )
}

export default Testimonials