import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/LOGO_-_Avocado_Society_of_Rwanda.png';
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-section left'>
          <img src={logo} alt="logo" className='footer-logo' />
          <p>Empowering local avocado producers for global market access.</p>
          <div className='icons'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
        <div className='footer-section middle'>
          <h3>Main Menu</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Membership">Membership</Link></li>
            <li><Link to="/Resources">Resources</Link></li>
          </ul>
        </div>
        <div className='footer-section right'>
          <h3>Subscribe</h3>
          <p>Join our mailing list to receive timely updates, expert tips, and exciting news.</p>
          <div className='email'>
            <input type="email" placeholder='Email' />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;