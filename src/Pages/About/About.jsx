import avacados from '../../assets/avocados.jpeg'
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/image3.jpeg'
import image4 from '../../assets/image4.jpeg'
import logo from '../../assets/LOGO - Avocado Society of Rwanda.png'
import gnf from "../../assets/gfn.jpg";
import rgg from "../../assets/rgg.jpg";
import ryaf from "../../assets/ryaf.jpg";
import soris from "../../assets/soris.jpg";
import './About.css'
function About() {
  return (

    <div className='active-hub'>
      <div className='active-content'>
        <img className='active-img' src={avacados} alt="Description of image" />
        <h3>ABOUT</h3>
      </div>
      <div className='about'>
        <h4>Get to know</h4>
        <div className='about-content'>
          <h1>avacado society rwanda</h1>
          <h5>with reference to made:</h5>

          <ul>
            <li><p>	Sustainable Development Goals specifically goal 1, 2, 3, 8, 12, 13, 14, 15;</p></li>
            <li><p>	Agriculture and Livestock Strategic Transformation in Rwanda 2018-2024 (PST4);</p></li>
          </ul>
          <p>It is high time for Rwandan people to be proactive and invest efforts
            to complement to government initiatives and smoothen the achievement of sustainable food
            security and climate resilient agriculture development.
          </p>
          <p>In this context a social enterprise called “Avocado Society
            of Rwanda” is under establishment to operate in Rwanda with aims at
            creating prosperous communities built around scientific innovation in agriculture.
            The Society will bring together individual and organizations alike who are involved in avocado
            business in Rwanda to invest and build capacity of producers, collectors, packers, and exporters
            from Rwanda to meet the international market and trade standards.
          </p>
        </div>
        <div className='team'>
          <div className='team1'>
            <h2>the team</h2>
            <h1>Key People in ASR</h1>
          </div>
          <div className='image'>
            <div className='image1'>
              <img src={image1} alt="" />
              <h3>nkunsi john</h3>
              <p>founder</p>
            </div>
            <div className='image1'>
              <img src={image2} alt="" />
              <h3>alex bill</h3>
              <p>operations manager</p>
            </div>
            <div className='image1'>
              <img src={image3} alt="" />
              <h3>dewyne wood</h3>
              <p>farmer</p>
            </div>
            <div className='image1'>
              <img src={image4} alt="" />
              <h3>Gregory River</h3>
              <p>mechanic</p>
            </div>

          </div>
        </div>

      </div>

     <h1 className='partners'>Our PArtners</h1> 

     <div className='log-image'>
      <img src={gnf} alt='gnf'/>
      <img src={rgg} alt='gnf'/>
      <img src={soris} alt='gnf'/>
      <img src={ryaf} alt='gnf'/>
     </div>
        
      </div>
  


  )
}

export default About