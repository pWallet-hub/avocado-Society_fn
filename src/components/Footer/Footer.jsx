import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane } from "react-icons/fa";
import logo from '../../assets/LOGO_-_Avocado_Society_of_Rwanda.png';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='agrigo-footer-wrapper'>
      <div className='agrigo-footer-container'>
        
        {/* Left Column: Brand & Socials */}
        <div className='agrigo-footer-section branding-pane'>
          <img src={logo} alt="Avocado Society of Rwanda Logo" className='footer-logo' />
          <p className='footer-bio'>
            Empowering local avocado producers across Rwanda with technical knowledge, quality management, and transparent global market access channels.
          </p>
          <div className='footer-social-icons'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Middle Column: Structured Navigation Links */}
        <div className='agrigo-footer-section links-pane'>
          <h3>Main Menu</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Membership">Membership</Link></li>
            <li><Link to="/Resources">Resources Ecosystem</Link></li>
          </ul>
        </div>

        {/* Right Column: Premium Subscription Module */}
        <div className='agrigo-footer-section subscribe-pane'>
          <h3>Subscribe</h3>
          <p className='subscribe-info'>Join our private mailing list to receive verified corporate updates, seasonal harvest protocols, and critical regional agritech insights.</p>
          <form className='footer-email-box' onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder='Your email address' aria-label="Email Field" required />
            <button type="submit" aria-label="Submit Subscription">
              <FaPaperPlane />
            </button>
          </form>
        </div>

      </div>

      {/* Deep Bottom Corporate Meta Strip */}
      <div className='agrigo-footer-meta-strip'>
        <div className='meta-strip-inner'>
          <p>© {currentYear} Avocado Society of Rwanda. All Rights Reserved.</p>
          <div className='meta-strip-links'>
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;