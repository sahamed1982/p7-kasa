import '../styles/ErrorMsg.css'

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
                Retourner sur la page d'accueil.
            </div>
        </div>
    )
}

export default Error