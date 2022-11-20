import { useState } from 'react'
import arrow from "../assets/arrow-close.svg"
import "../styles/Respect.css"


function Service(){
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        
    <div className='service-item'>
        
        <div className='rectangle-service'>
            <div className='rectangle-title'>Service</div>
            <img src={arrow} alt='close' className="arrowClose"
            onClick={() => setIsOpen(false)}
            /> 
        </div>
        <div className='service-content'>
            <p className='content'>
            Nos équipes se tiennent à votre disposition
             pour vous fournir une expérience parfaite.
             N'hésitez pas à nous contacter si vous avez la moindre question. </p>
        </div>
        
        
    </div>
) : (
    <div className='rectangle-service'>
            <div className='rectangle-title'>Service</div>
            <img src={arrow} alt='close' className="arrowOpen"
            onClick={() => setIsOpen(true)}
            /> 
        </div>
)}

export default Service