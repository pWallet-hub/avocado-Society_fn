import { Link } from 'react-router-dom'
import { IoCall } from "react-icons/io5";

import image from '../../assets/LOGO - Avocado Society of Rwanda.png'
import './Header.css'


function Header() {
  return (
    <>
    <div className="header">
        <div>
            <Link to="/"> <img className='logo' src={image} alt="" /></Link>
        </div>
        <div className='header-nav'>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/About">About</Link></li>
               <li><Link to="/Membership">Membership</Link></li>
               <div className='icon'>
          <IoCall className='icon1'/>
          <p>+250780941222</p>
        </div>
            </ul>
        </div>
        <div>
            <div className='header-button'>Get in touch</div>
        </div>
     </div>   
    </>
  )
}

export default Header