import { useState } from 'react'
import arrow from '../assets/arrow-close.svg'
import '../styles/Respect.css'

function Respect() {
  const [isOpen, setIsOpen] = useState(false)
  return isOpen ? (
    <div className="respect-item">
      <div className="rectangle-respect">
        <div className="rectangle-title">Respect</div>
        <img
          src={arrow}
          alt="close"
          className="arrowClose"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="respect-content">
        <p className="content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire u de perturbation du voisinage
          entraînera une exclusion de notre plateforme.{' '}
        </p>
      </div>
    </div>
  ) : (
    <div className="rectangle-respect">
      <div className="rectangle-title">Respect</div>
      <img
        src={arrow}
        alt="close"
        className="arrowOpen"
        onClick={() => setIsOpen(true)}
      />
    </div>
  )
}

export default Respect
