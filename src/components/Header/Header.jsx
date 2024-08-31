import { Link } from 'react-router-dom'
import { useState } from 'react';
import { IoCall } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import image from '../../assets/LOGO - Avocado Society of Rwanda.png'
import './Header.css'
import Sidebar from './Sidebar';



function Header() {
  const [SidebarOpener, setSidebarOpener] = useState(false);
  const handleMenuClick = () => {
    setSidebarOpener(!SidebarOpener);
  }
  return (
    <>
      <div className="header">
        <div>
          <Link to="/"> <img className='logo' src={image} alt="" /></Link>
        </div>
        <div className="header-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Membership">Membership</Link></li>
            <div className='icon'>
              <IoCall className='icon1' />
              <p className='icon-text'>+250788481560</p>
            </div>
          </ul>
        </div>
        <div>
          <div className='header-button'>Get in touch</div>
        </div>
        <div className='menu' onClick={handleMenuClick}>
        <MdMenu />
      {SidebarOpener && <Sidebar setSidebarOpen={setSidebarOpener} className='open' />}
           
      </div> 
      </div>
       
    </>
  )
}

export default Header