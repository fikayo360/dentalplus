import {Hero,About,Appointment,Services,Testimonials,Footer,OurTeam} from '../index'
import './main.css'
import 'animate.css';

const Main = () => {
    return (
        <div id="container">
            <Hero />
            <About />
            <Services />
            <OurTeam />
            <Testimonials />
            <Appointment />
            <Footer />
        </div>
    )
}

export default Main