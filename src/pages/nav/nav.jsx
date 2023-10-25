import './nav.css'
import { useState } from 'react'
import { useRef } from 'react'

const Navbar = ({showNavMobile}) => {
    const [activeTab,setActiveTab] = useState('HomeTab')
    const HomeRef = useRef(null)
    const AboutRef = useRef(null)
    const ServicesRef = useRef(null)
    const TeamRef = useRef(null)
    const TestimonialsRef = useRef(null)
    const AppointmentRef = useRef(null)
    const menuRef = useRef(null)
    const [menuActive,setMenuActive] = useState(false)

    function setActive(ref){
        switch(ref.current.textContent){
            case "Home":
                setActiveTab('HomeTab')
                break;
            case "About":
                setActiveTab('AboutTab')
                break;
            case "Services":
                setActiveTab('ServicesTab')
                break;
            case "Team":
                setActiveTab('TeamTab')
                break;
            case "Testimonials":
                setActiveTab('TestimonialsTab')
                break;
            case "Appointment":
                setActiveTab('AppointmentTab')
                break;
        }
    }

    return (
        <div id="navContainer">
            <div id="navWrap">
                <div id="navWrapLeft">
                   <div id="navImg"><img  src="./logo.png"/></div>
                    <span id="navWrapLeftText">BEAUTYPLUS</span>
                </div>
                <div id="navWrapRight">
                    <ul id="listItems">
                        <li ref={HomeRef} onClick={() => setActive(HomeRef)} className={`listItem ${activeTab === 'HomeTab' && 'linkActive'}`}>
                         <a href="#heroContain">Home</a>
                        </li>
                        <li ref={AboutRef} onClick={() => setActive(AboutRef)} className={`listItem ${activeTab === 'AboutTab' && 'linkActive'}`}>
                           <a href="#aboutContain">About</a> 
                        </li>
                        <li ref={ServicesRef} onClick={() => setActive(ServicesRef)} className={`listItem ${activeTab === 'ServicesTab' && 'linkActive'}`}>
                            <a href="#servicesContain">Services</a>
                        </li>
                        <li ref={TeamRef} onClick={() => setActive(TeamRef)} className={`listItem ${activeTab === 'TeamTab' && 'linkActive'}`}>
                           <a href="#teamContain" >Team</a> 
                        </li>
                        <li ref={TestimonialsRef} onClick={() => setActive(TestimonialsRef)} className={`listItem ${activeTab === 'TestimonialsTab' && 'linkActive'}`}>
                            <a href="#testimonialContain">Testimonials</a>
                        </li>
                        <li ref={AppointmentRef} onClick={AppointmentRef} className={`listItem ${activeTab === 'AppointmentTab' && 'linkActive'}`}>
                            <a href="#apointmentContain">Appointment</a>
                        </li>
                    </ul>

                    <div className='ham' onClick={showNavMobile}><img src="./menu.png" /></div>
                </div>
                </div>
        
        </div>
    )
}

export default Navbar