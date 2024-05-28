
import "./Home.css"
import avocado1 from '../../assets/avocado1.jpg'
import avocado2 from '../../assets/avocado2.jpg'
import avocado3 from '../../assets/avocado3.jpg'
import info1 from '../../assets/info1.jpg'
import info2 from '../../assets/info2.jpg'
import info3 from '../../assets/info3.jpg'
import map from '../../assets/map.jpg'
import SlideShow from "../../components/Slide/Slide";
import { FaSprayCan } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";
import { Link } from "react-router-dom"

const text = (
  <div className='style' >
    <div className='story-head'>
      <h3 >Avocado Society of Rwanda </h3>
    </div>
    <div className='story-content'>
      <p>Empowering Avocado Enthusiasts for Sustainable Growth.
 Cultivating Green Delights Through Community and Knowledge.
      </p>
    </div>
    <div className='slide-button'>Discover</div>
  </div>
);

const images = [
  { url: avocado1, text: text },
  { url: avocado2, text: text },
  { url: avocado3, text: text },
];

function Home() {
  return (
    <>
    <SlideShow images={images} />

    <div className="bio">
      <div className="bio-sector1">
        <h1> The Beauty of Avocado Society</h1>
        <h4>We  take care and give
         value to your Avocado</h4>
         <span className="bio-button">Explore More</span>
      </div>
      <div className="bio-sector2">
        <h1>Empowering Rwandan small scale avocado producers for the Global market access, quality standards, and tailored financial modeling.</h1>
        <p>The society supports all avocado producers by helping  them meet quality standards and access markets, regardless of farm size. This is accomplished through tailored finance models, extension services, information sharing, and contract farming agreements.</p>
      </div>
    </div>

    <div className="info">
      <div className="info-sector1">
        <h1>Harvesting</h1>
        <img className="info-image1" src={info1} alt="info1" />
      </div>
      <div className="info-sector2">
        <h1>Marketing</h1>
        <img className="info-image2" src={info2} alt="info2" />
      </div>
      <div className="info-sector1">
        <h1>Quality</h1>
        <img className="info-image1" src={info3} alt="info3" />
      </div>
    </div>


    <div className="benefits">
      <div className="benefits-img">
        <img className="info-image1" src={info1} alt="info1" />
      </div>
      <div className="benefits-text">
        <h2>farmer service center </h2>
        <h1>Access this though <br/>
         our Society's Pwallet App.</h1>
        <p>The society supports all avocado producers by helping them meet quality standards and access markets, regardless of farm size and means. This is accomplished through tailored and digitized farm financial modeling, extension services, and information sharing. 
        </p>
        <div className="benefits-list">
          <div className="icon1">
            <FaSprayCan className="icon2" />
            <p>Collective Pest<br/>
            Management</p>
          </div>
          <div className="icon1">
            <FaBasketShopping className="icon2" />
            <p>
            Farm Harvesting<br/> Management</p>
            
         </div>
          <div className="icon1">
            <FaMountainSun  className="icon2" />
            <p>Farm Property <br />
            Evaluation</p>
            
          </div>
          
        </div>
        
        </div>
    </div>

    <div className="benefits2">
      <div className="ben-section1">
       <h2>Know more about Pwallet</h2>
       <h1>We do Creative <br/>
       things for Success</h1>
       <p>The society supports all avocado producers and other value chain actors by helping them meet consistency in quality standards, growth of production, and predictive analytics tools for markets. This is accomplished through:
       </p>
       <ul>
        <li>Farm financial modeling</li>
        <li>Extension Services</li>
        <li>Contract Farming Agreements</li>
       </ul>

       <div className="button">
          <button>
            <Link to="/Membership">explore</Link></button></div>
      </div>
      <div className="ben-section2">
         <img className="section-image1" src={info3} alt="info3" />
      </div>
    </div>

    <div className="contact-info">
      <div className="contact">
        <h1>Get in Touch </h1>
        <p>Empowering Avocado Enthusiasts<br/> for Sustainable Growth.<br/>
          Cultivating Green Delights<br/> Through Community and<br/> Knowledge.</p>
          <h2>LOCATION</h2>
          <p>Kigali, Rwanda KN 154 STREET</p>
          <h2>PHONE</h2>
          <p>+250 0788 889 80</p>
          <h2>EMAIL</h2>
          <p>asr@gmail.com</p>
      </div>
      <div className="map">
         <img className="map-disp" src={map} alt="info2" />
      </div>
     </div>

    </>
  )
}

export default Home