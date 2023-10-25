import './apointment.css'
import { useInView } from 'react-intersection-observer';
import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import Map, {Marker} from 'react-map-gl';

const Appointment = () => {
      const [ref, inView] = useInView();
      const [success,setSucess] = useState(false)
      const [notification,setNot] = useState('')
      const form = useRef();
      const clear = () => {
          setTimeout(()=>{
              setNot('')
          },5000)
      }
      const handleSubmit = (e) => {
          e.preventDefault()
          emailjs.sendForm('service_jx6w5ai', 'template_xwd49nd', form.current, 'kIFtlPOFPG99QtOXO')
          .then((result) => {
              console.log(result.text);
              setSucess(!success)
              setNot('email sent successfully')
              form.current.reset();
              clear()
  
          }, (error) => {
              console.log(error.text);
              setSucess(false)
          });
      }

    return (
        <div id="apointmentContain">
            <h1>Book apointment</h1>
            <div id="apointmentContent">
                <div id="apointmentContentLeft" ref={ref} className={`animate__animated ${inView?'animate__bounce':''}`}>
                    <form ref={form} onSubmit={handleSubmit}>
                        <input  className="inputs" type="text" placeholder='enter your name' name="name"/>
                        <input type="text" className="inputs" placeholder='enter your email' name="message"/>
                        <textarea id="bigBox" placeholder='send us a mail' name="message" type="text" rows="10" cols="30" />
                        <button>submit</button>
                        <p id='not'> {notification} </p>
                    </form>
                </div>
                <div id="apointmentContentRight">
                <Map
                mapboxAccessToken="pk.eyJ1IjoiZmlrYXlvOTAiLCJhIjoiY2xvNHlsZGswMDZuejJrbGF2dGtiYTd0aSJ9.6ZhkSEXZk0Bq8kbmrjRBTA"
                initialViewState={{
                    longitude: 6.4964,
                    latitude: 5.6644,
                    zoom: 10
                }}
                style={{width: '90%', height:'90%'}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                />
                </div>
            </div>
        </div>
    )
}

export default Appointment