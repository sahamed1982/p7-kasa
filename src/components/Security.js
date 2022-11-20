import { useState } from 'react'
import arrow from "../assets/arrow-close.svg"
import "../styles/Respect.css"

function Security(){
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        
    <div className='security-item'>
        
        <div className='rectangle-security'>
            <div className='rectangle-title'>Sécurité</div>
            <img src={arrow} alt='close' className="arrowClose"
            onClick={() => setIsOpen(false)}
            /> 
        </div>
        <div className='security-content'>
            <p className='content'>La sécurité est la priorité de Kasa.
             Aussi bien pour nos hôtes que pour les voyageurs, 
             chaque logement correspond aux critères de sécurité établis par nos services. 
             En laissant une note aussi bien à l'hôte qu'au locataire,
              cela permet à nos équipes de vérifier que les standards sont bien respectés. 
              Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
        
        
    </div>
) : (
    <div className='rectangle-security'>
            <div className='rectangle-title'>Sécurité</div>
            <img src={arrow} alt='close' className="arrowOpen"
            onClick={() => setIsOpen(true)}
            /> 
        </div>
)}

export default Security