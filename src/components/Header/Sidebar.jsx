import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import image from '../../assets/LOGO - Avocado Society of Rwanda.png'
import './Sidebar.css';

function Sidebar({className,setSidebarOpen }) {
  return (
   <div className={`sidebar ${className}`}>
      <button onClick={() => setSidebarOpen(false)}><MdClose /></button>
       <div>
          <Link to="/"> <img className='logo' src={image} alt="" /></Link>
        </div>
      <ul>
         <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Membership">Membership</Link></li>
          <ul className='social-media'>
            <li><Link to="/"><FaFacebookF /></Link></li>
            <li><Link to="/"><FaTwitter /></Link></li>
            <li><Link to="/"><FaInstagram /></Link></li>
          </ul>
      </ul>
    </div>
  );
}

export default Sidebar;