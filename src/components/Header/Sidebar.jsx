import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaHome, FaInfoCircle, FaUserFriends, FaBook } from "react-icons/fa";
import image from '../../assets/LOGO_-_Avocado_Society_of_Rwanda.png';
import './Sidebar.css';

function Sidebar({ className, setSidebarOpen }) {
  return (
    <div className={`sidebar ${className}`}>
      <button onClick={() => setSidebarOpen(false)}><MdClose /></button>
      <div>
        <Link to="/"> <img className='logo' src={image} alt="Avocado Society of Rwanda Logo" /></Link>
      </div>
      <ul>
        <li><Link to="/"><FaHome className='icn' /> Home</Link></li>
        <li><Link to="/About"><FaInfoCircle className='icn' /> About</Link></li>
        <li><Link to="/Membership"><FaUserFriends className='icn' /> Membership</Link></li>
        <li><Link to="/Resources"><FaBook className='icn' /> Resources</Link></li>
      </ul>
      <ul className='social-media'>
        <li><Link to="https://facebook.com"><FaFacebookF className='soc' /></Link></li>
        <li><Link to="https://twitter.com"><FaTwitter className='soc' /></Link></li>
        <li><Link to="https://instagram.com"><FaInstagram className='soc' /></Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;