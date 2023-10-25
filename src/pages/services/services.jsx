import './services.css'
import services from '../../data/services'
import ServiceCard from '../../components/servicesCard/serviceCard'
import { useEffect } from 'react'



const Services = () => {
    useEffect(()=>{
        console.log(services)
    },[])
    return (
    <div id="servicesContain">
        <h1> Our sevices </h1>
        <div id="servicesContent">
            {
                services && services.map((service) => (
                    <ServiceCard data={service}/>
                ))
            }
        </div>
    </div>)
}

export default Services