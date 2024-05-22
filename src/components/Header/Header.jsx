import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { IoCall } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import image from '../../assets/LOGO - Avocado Society of Rwanda.png'
import './Header.css'


function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <>
      <div className="header">
        <div>
          <Link to="/"> <img className='logo' src={image} alt="" /></Link>
        </div>
        <div className={`header-nav ${sidebarOpen ? 'open' : ''}`}>
          <button onClick={() => setSidebarOpen(false)}><MdClose className='close' /></button>
          <ul>
            <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/About" onClick={closeSidebar}>About</Link></li>
            <li><Link to="/Membership" onClick={closeSidebar}>Membership</Link></li>
            <div className='icon'>
              <IoCall className='icon1' />
              <p>+250780941222</p>
            </div>
          </ul>
        </div>
        <div>
          <div className='header-button'>Get in touch</div>
        </div>
        <button className="menu-button" onClick={() => setSidebarOpen(true)}><MdMenu /></button>
      </div>
    </>
  )
}

export default Header