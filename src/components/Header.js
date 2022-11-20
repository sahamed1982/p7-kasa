import logo from "../assets/logo.svg"
import '../styles/Header.css';
import { Link } from 'react-router-dom'


function Header(){
return(
    
        <div className="home-header">
            <img src={logo} alt='logo kasa' className="home-logo" />
            <nav className="home-nav">
                    
                    <div className="home-nav-div"><Link to="/" className="nav-link">Accueil</Link></div>
                    <div className="home-nav-div"><Link to="/about" className="nav-link">A propos</Link></div>
                
            </nav>
        </div>
       
    )
}

export default Header