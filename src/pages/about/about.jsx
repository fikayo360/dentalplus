import './about.css'
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView();
    return (
        <div id="aboutContain">
            <div id="circle1"></div>
            <div id="circle2"></div>
            <h1> About Us</h1>
            <div id="aboutContent">
                <div id="aboutContentImgContain">
                    <img src="./doctor.jpg"/>
                </div>
                <div ref={ref} id="aboutContentTxtContain" className={`animate__animated ${inView?'animate__fadeIn':''}`}>
                    <h1>A few words about us </h1>
                    <p id="aTextMain"> 
                    At Dental plus beauty services, we are committed to providing exceptional dental care in a comfortable and relaxed environment.
                     With a team of highly skilled and compassionate professionals, we strive to make every visit a positive experience. 
                     Our state-of-the-art facilities and advanced
                     technology allow us to deliver the highest standard of care for all your dental needs.
                     Our mission is to help you achieve and maintain optimal oral health while ensuring your comfort and satisfaction. 
                     We believe in personalized care and take the time to listen to your concerns and goals.
                      Whether you need a routine check-up, cosmetic dentistry, 
                     or restorative treatments, we are dedicated to helping you smile with confidence.
                    </p>

                    <h1 id="whyChooseUs">Why choose us</h1>
                    <ul>
                        <li>
                        Advanced Technology: We invest in the latest dental technology to provide you with cutting-edge treatments and a comfortable experience.
                        </li>
                        <li>
                        Patient-Centered Approach: Your comfort and satisfaction are our top priorities. We tailor our treatments to meet your specific needs and preferences
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About