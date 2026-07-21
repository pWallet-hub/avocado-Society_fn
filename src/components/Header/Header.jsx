import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import image from '../../assets/LOGO_-_Avocado_Society_of_Rwanda.png';
import './Header.css';
import Sidebar from './Sidebar';

function Header() {
  const [SidebarOpener, setSidebarOpener] = useState(false);
  const location = useLocation(); // Allows dynamically injecting active classes

  const handleMenuClick = () => {
    setSidebarOpener(!SidebarOpener);
  };

  return (
    <>
      <header className="agrigo-header">
        <div className="agrigo-header-container">
          
          {/* Logo Brand Frame */}
          <div className="logo-container">
            <Link to="/"> 
              <img className='logo' src={image} alt="Avocado Society of Rwanda Logo" />
            </Link>
          </div>
          
          {/* Main Desktop Navigation */}
          <nav className="header-nav">
            <ul>
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
              <li><Link to="/About" className={location.pathname === '/About' ? 'active' : ''}>About</Link></li>
              <li><Link to="/Membership" className={location.pathname === '/Membership' ? 'active' : ''}>Membership</Link></li>
              <li><Link to="/Resources" className={location.pathname === '/Resources' ? 'active' : ''}>Resources</Link></li>
              
              {/* Fixed: Wrapped the contact info cleanly in an li wrapper for HTML validation */}
              <li className='header-contact-li'>
                <div className='header-phone-badge'>
                  <IoCall className='phone-icon' />
                  <span className='phone-text'>+250 788 481 560</span>
                </div>
              </li>
            </ul>
          </nav>
          
          {/* Premium Call to Action */}
          <div className="header-actions">
            <Link to="/Register" className='header-button'>Join Us Today</Link>
          </div>
          
          {/* Mobile Menu Icon Toggle */}
          <div className='menu' onClick={handleMenuClick}>
            <MdMenu />
            {SidebarOpener && <Sidebar setSidebarOpen={setSidebarOpener} className='open' />}
          </div> 

        </div>
      </header>
    </>
  );
}

export default Header;