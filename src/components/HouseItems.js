import "../styles/HouseItem.css"

function handleClick(title) {
    alert(`vous voulez voir plus de ${title} ?`)
}

function HouseItem({id, title, cover}) {
	return (
         
            <div key={id} className="kasa-house-container" onClick={() => handleClick(title)}>
                <h2 className=" kasa-house-title">{title}</h2>
                <img className="cover-image" src={cover} alt={`${title} cover`} />  
            </div>      
    )
}

export default HouseItem        
                  
