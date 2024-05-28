import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/LOGO_-_Avocado_Society_of_Rwanda.png'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container'>
    <div className='footer'>
      <div className='left'>
        <img src={logo} alt="logo" />
        <p>Empowering local avacado producers for the  Global market access.</p>
        <div className='icons'>
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
      <div className='middle'>
        <h3>Main menu</h3>
        <ul>
          <><Link to="/">Home</Link></>
          <><Link to="/About">About</Link></>
          <><Link to="/Membership">Membership</Link></>
        </ul>
      </div>
      <div className='right' >
        <h2>Subscribe</h2>
        <p>Join our mailing list to receive timely <br /> updates, expert tips, and exciting <br /> news</p>
        <div className='email'>
          <input type="Email" placeholder='Email' />
          <button>send</button>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Footer