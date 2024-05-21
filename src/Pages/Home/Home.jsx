
import "./Home.css"
import avocado1 from '../../assets/avocado1.jpg'
import avocado2 from '../../assets/avocado2.jpg'
import SlideShow from "../../components/Slide/Slide";

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
      <div>
        <h1>Beauty of Avocado Society</h1>
        <h3>We  take care and give<br/> 
         value to your Avocado</h3>
         <span className="bio-button">Explore More</span>
      </div>
      <div>
        <h1>Empowering Avocado Farmers for Market Success Through Enhanced Production Quality and Access</h1>
        <p>The society supports all avocado producers by helping <br/> them meet quality standards and access markets,<br/> regardless of farm size. This is accomplished through<br/> tailored finance models, extension services, information<br/> sharing, and contract farming agreements.</p>
      </div>
    </div>
    </>
  )
}

export default Home