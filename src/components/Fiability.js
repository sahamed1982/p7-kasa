import { useState } from 'react'
import arrow from "../assets/arrow-close.svg"
import "../styles/Respect.css"

function Fiability(){
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        
    <div className=''>
        
        <div className='rectangle-fiability'>
            <div className='rectangle-title'>Fiabilité</div>
            <img src={arrow} alt='close' className="arrowClose"
            onClick={() => setIsOpen(false)}
            /> 
        </div>
        <div className='fiability-content'>
            <p className='content'>
            Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, 
            et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </p>
        </div>
        
        
    </div>
) : (
    <div className='rectangle-fiability'>
            <div className='rectangle-title'>Fiabilité</div>
            <img src={arrow} alt='close' className="arrowOpen"
            onClick={() => setIsOpen(true)}
            /> 
        </div>
)}

export default Fiability