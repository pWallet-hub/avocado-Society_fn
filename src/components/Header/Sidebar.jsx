import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import image from '../../assets/LOGO - Avocado Society of Rwanda.png'
import './Sidebar.css';
import { MdPeopleAlt } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";

function Sidebar({className,setSidebarOpen }) {
  return (
   <div className={`sidebar ${className}`}>
      <button onClick={() => setSidebarOpen(false)}><MdClose /></button>
       <div>
          <Link to="/"> <img className='logo' src={image} alt="" /></Link>
        </div>
      <ul>
         <li><Link to="/"><IoMdHome className='icn' />  Home</Link></li>
          <li><Link to="/About"><MdPeopleAlt className='icn' /> About</Link></li>
          <li><Link to="/Membership"><MdGroupAdd className='icn' /> Membership</Link></li>
          <ul className='social-media'>
            <li><Link to="/"><FaFacebookF className='soc' /></Link></li>
            <li><Link to="/"><FaTwitter className='soc' /></Link></li>
            <li><Link to="/"><FaInstagram className='soc' /></Link></li>
          </ul>
      </ul>
    </div>
  );
}

export default Sidebar;