import '../styles/Footer.css'
import logo from '../assets/logo-footer.svg'

function Footer() {
  return (
    <div className="kasa-footer">

      <img src={logo} alt="logo kasa" className="footer-logo" />
      <div className="foot-allright">© 2020 Kasa. All rights reserved</div>
      
    </div>
  )
}

export default Footer
