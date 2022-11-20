import Fiability from "../components/Fiability"
import Respect from "../components/Respect"
import Service from "../components/Service"
import Security from "../components/Security"
import "../styles/AboutContent.css"

function AboutContent(){
    return(
    <div className="about-component-wrapper">
       
        <Fiability/>
        <Respect/>
        <Service/>
        <Security/>
    </div>
    )
}

export default AboutContent