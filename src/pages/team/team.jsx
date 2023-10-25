import './team.css'
import { useInView } from 'react-intersection-observer';

const OurTeam = () => {
    const [ref, inView] = useInView();
    return (
        <div id="teamContain">
            <h1>Meet our superstar </h1>
            <div id="teamContent">
                <div id="teamContentLeft">
                        <div >
                        <img src='./dentist2.jpg'/>
                        </div>
                        
                </div>
                <div id="teamContentRight">
                    <h1>Our doctor</h1>
                    <p>
                                     I'm Dr. Oke oyindamola, a dedicated and compassionate dentist with a passion for enhancing smiles and promoting oral health. 
                                     With years of experience in the field, I am committed to providing personalized, high-quality dental care to every patient.

                                    Education and Expertise:
                                    I earned my Doctor of Dental Medicine (DMD) degree from the university of Imo teaching hospital, where I received extensive training in various dental procedures, including restorative dentistry, cosmetic dentistry, and oral surgery. I stay updated with the latest advancements in dentistry through regular continuing education and memberships in professional associations.

                                    Patient-Centered Care:
                                    My approach to dentistry is patient-centered. I believe in open communication and active collaboration with my patients to understand their unique needs and concerns. Together, we create customized treatment plans that prioritize comfort, aesthetics, and long-term oral health.

                                    Comprehensive Services:
                                    From routine cleanings and preventive care to complex restorations and smile makeovers, our practice offers a wide range of services to cater to all your dental needs. Whether you're seeking a gentle cleaning or a complete smile transformation, we're here to provide exceptional care.
                     </p>
                </div>
            </div>
        </div>
    )
}

export default OurTeam