import "../styles/HouseItem.css"
import { Link } from 'react-router-dom'


function HouseItem({id, title, cover}) {
	return (
            <Link to={`/accomodation/${id}`}>
                <div key={id} className="kasa-house-container" >
                    <h2 className=" kasa-house-title">{title}</h2>
                    <img className="cover-image" src={cover} alt={`${title} cover`} />  
                </div>
            </Link>     
    )
}

export default HouseItem        
                  
