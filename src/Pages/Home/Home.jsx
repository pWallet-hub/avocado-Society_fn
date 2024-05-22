
import "./Home.css"
import avocado1 from '../../assets/avocado1.jpg'
import avocado2 from '../../assets/avocado2.jpg'
import info1 from '../../assets/info1.jpg'
import info2 from '../../assets/info2.jpg'
import info3 from '../../assets/info3.jpg'
import SlideShow from "../../components/Slide/Slide";
import { FaSprayCan } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";

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
    <div className='slide-button'>Get in touch</div>
  </div>
);

const images = [
  { url: avocado1, text: text },
  { url: avocado2, text: text },
  { url: avocado1, text: text },
];

function Home() {
  return (
    <>
    <SlideShow images={images} />

    <div className="bio">
      <div className="bio-sector1">
        <h1>Beauty of Avocado Society</h1>
        <h3>We  take care and give<br/> 
         value to your Avocado</h3>
         <span className="bio-button">Explore More</span>
      </div>
      <div className="bio-sector2">
        <h1>Empowering Avocado Farmers for Market Success Through Enhanced Production Quality and Access</h1>
        <p>The society supports all avocado producers by helping <br/> them meet quality standards and access markets,<br/> regardless of farm size. This is accomplished through<br/> tailored finance models, extension services, information<br/> sharing, and contract farming agreements.</p>
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
        <h2>Benefits</h2>
        <h1>Awesome works with<br/> 
          Avocado Society Rwanda</h1>
        <p>The society supports all avocado producers by helping them meet quality standards and access markets, regardless of farm size. This is accomplished through tailored finance models, extension services, information sharing, and t.
        </p>
        <div className="benefits-list">
          <div className="icon1">
            <FaSprayCan className="icon2" />
            <p>Pest
            Management</p>
          </div>
          <div className="icon1">
            <FaBasketShopping className="icon2" />
            <p>Awesome
            Harvesting <br />
          Extension Services</p>
            
         </div>
          <div className="icon1">
            <FaMountainSun  className="icon2" />
            <p>Farm Property <br />
            Evaluation</p>
            
          </div>
          
        </div>
        <div className="button"><button>explore</button></div>
        
        </div>
    </div>

    <div className="benefits2">
      <div className="ben-section1">
       <h2>Benefits</h2>
       <h1>We do Creative <br/>
       things for Success</h1>
       <p>The society supports all avocado producers by helping them meet quality standards and access markets, regardless of farm size.This is accomplished through tailored
       </p>
       <ul>
        <li>Finance Models</li>
        <li>Extension Services</li>
        <li>Contract Farming Agreements</li>
       </ul>
      </div>
      <div className="ben-section2">
         <img className="info-image1" src={info3} alt="info3" />
      </div>
    </div>
    </>
  )
}

export default Home