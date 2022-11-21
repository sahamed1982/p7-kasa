import '../styles/ErrorMsg.css'
import { Link } from 'react-router-dom'

function Error(){
    return(
        <div>
            <div className="error-number">
                404
            </div>
            <div className="error-message">
                Oups! La page que vous demandez n'existe pas.
            </div>
            <div className="error-return">
            <Link to="/" className="nav-link">Retourner sur la page d'accueil.</Link>
            </div>
        </div>
    )
}

export default Error