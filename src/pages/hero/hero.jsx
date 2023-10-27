import Navbar from "../nav/nav"
import './heroStyles.css'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import { useInView } from 'react-intersection-observer';
import { useRef} from "react";

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Tooth-whitening','mouth odour treatment','Scaling','Polishing','crown and bridges','Tooth arrangement','Maxillofacial Prothesis','General dental consult','oral care products'],
    })
    
    const [ref, inView] = useInView();
    const navRef = useRef(null)

    const showNavMobile = ()=>{
        navRef.current.classList.add('animate__animated', 'animate__fadeInDown')
        navRef.current.classList.add('show')
    }
    
    
    const closeNavMobile = ()=>{
        navRef.current.classList.remove('animate__animated', 'animate__fadeInDown')
        navRef.current.classList.remove('show')
    }
    

    return (
        <div className="heroContain">
            <Navbar showNavMobile={showNavMobile}/>
            <div id="contentWrap">
            <div id="content">
                <h1 id="heroH" className={`animate__animated ${inView?'animate__rubberBand animate__delay-1.5s':''}`} ref={ref}>Improve your dental health </h1>
                <h2> {`we offer - ${text}`}</h2>
                <p> At Beauty plus dental clinic, 
                    we are dedicated to providing you with the highest quality dental care in a warm and welcoming environment. 
                    Our team of experienced professionals is committed to helping you achieve optimal oral health and a beautiful smile.
                     Whether you're in need of a routine check-up, cosmetic dentistry, or a complete smile makeover, 
                     we're here to serve you with personalized and compassionate care. Schedule an appointment today and experience the difference of beauty plus .


                </p>
                <button id="heroBtn"><a  href="#apointmentContain">Book-Appointment</a></button>
             </div>
            </div>
             <div className="mobileNav" ref={navRef}>
            <div id="navMobileH">
                <div id="navMobileHwrap">
                <span>DENTAL-PLUS BEAUTY</span>
                <div id="closeN" onClick={closeNavMobile}><img src="./close.png" /></div>
                </div>
            </div>
            <div id="bodyWrap">
             <ul id="nMlistItems">
                        <li onClick={closeNavMobile}>
                         <a href="#heroContain">Home</a>
                        </li>
                        <li onClick={closeNavMobile}>
                           <a href="#aboutContain">About</a> 
                        </li>
                        <li onClick={closeNavMobile}>
                            <a href="#servicesContain">Services</a>
                        </li>
                        <li onClick={closeNavMobile} >
                           <a href="#teamContain">Team</a> 
                        </li>
                        <li onClick={closeNavMobile}>
                            <a href="#testimonialContain">Testimonials</a>
                        </li>
                        <li onClick={closeNavMobile}>
                            <a href="#apointmentContain">Appointment</a>
                        </li>
                    </ul>
             </div>
             </div>
        </div>
    )
}

export default Hero