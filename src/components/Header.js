import logo from "../assets/logo.svg"
import '../styles/Header.css';


function Header(){
return(
    
        <div className="home-header">
            <img src={logo} alt='logo kasa' className="home-logo" />
            <nav className="home-nav">
                    
                    <div className="home-nav-div">Accueil</div>
                    <div className="home-nav-div">A propos</div>
                
            </nav>
        </div>
       
    )
}

export default Header