import avacados from '../../assets/avocados.jpeg'
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/image3.jpeg'
import image4 from '../../assets/image4.jpeg'
import gnf from "../../assets/gfn.jpg";
import rgg from "../../assets/rgg.png";
import ryaf from "../../assets/ryaf.jpg";
import soris from "../../assets/soris.png";
import WaveLine from '../../components/Line/line'
import './About.css'
function About() {
  return (

    <div className='active-hub'>
      <div className='active-content'>
        <img className='active-img' src={avacados} alt="Description of image" />
        <h3>ABOUT</h3>
      </div>
      <div className='about'>
        <h2>Avocado Society of Rwanda</h2>
        <p>The Avocado Society of Rwanda was established on October 28th, 2020, as a social enterprise dedicated to empowering Rwandan avocado producers. Organized with the primary aim of creating a sustainable and prosperous avocado industry, the society reinvests all profits back into the development of Rwanda&apos;s avocado sector. This reinvestment focuses on supporting small-scale farmers, enhancing quality standards, and refinancing avocado collection infrastructure.</p>
        <h2>Social Enterprise Model</h2>
        <p>
          As a social enterprise, the Avocado Society of Rwanda operates with a commitment to reinvesting profits into social and environmental initiatives. Shareholders do not receive dividends; instead, all earnings are used to support the Rwandan avocado industry.

        </p>

        <h2>Sustainable Developement goals:</h2>

        <p>The Avocado Society of Rwanda was registered with the Rwanda Development Board (RDB) under the framework of sustainable development goals and the Agriculture and Livestock Strategic Transformation Plan (PST4) 2018-2024. The society aligns with several key Sustainable goals, specifically: </p>
        <ul>
          <li> Goal 1: No Poverty</li>
          <li>Goal 2: Zero Hunger</li>
          <li>Goal 3: Good Health and Well-being</li>
          <li>Goal 8: Decent Work and Economic Growth</li>
        </ul>

        <div className='about-content'>
          <h1>Vision :</h1>
          <p>To transform Rwanda&apos;s avocado industry into a globally recognized leader by empowering small-scale producers with access to quality standards, global markets, and innovative financial solutions.
          </p>
          <h1>Mission:</h1>
          <p>Working in partnership with public and private stakeholders, the Avocado Society of Rwanda provides innovative services that transform agriculture and empower small-scale avocado producers. Our focus is on helping these farmers sustainably increase productivity and meet market demands through our digital platforms and farm financial modeling, ultimately improving their livelihoods.
          </p>

        </div>
        <WaveLine/>
        <div className='team'>
          <div className='team1'>
            <h2>the team</h2>
            <h1>Board of Director ASR</h1>
          </div>
          <div className='image'>
            <div className='image1'>
              <img src={image1} alt="" />
              <h3>Omar BISERUKA</h3>
              <p>Managing Director</p>
            </div>
            <div className='image1'>
              <img src={image2} alt="" />
              <h3>Jean Damascéne MUSANGAMFURA</h3>
              <p>Secretary</p>
            </div>
            <div className='image1'>
              <img src={image3} alt="" />
              <h3>Pacifique NSHIMIYIMANA</h3>
              <p>Chair Person</p>
            </div>
            <div className='image1'>
              <img src={image4} alt="" />
              <h3>Renovat NITUNGA</h3>
              <p>Member</p>
            </div>
          </div>
          <div className='image'>
            <div className='image1'>
              <img src={image1} alt="" />
              <h3>Godfrey KAREMA</h3>
              <p>Member</p>
            </div>
            <div className='image1'>
              <img src={image2} alt="" />
              <h3>ALEXANDRE NSHIMIYIMANA</h3>
              <p>Member</p>
            </div>
            <div className='image1'>
              <img src={image3} alt="" />
              <h3>Mugeni Euphrosine NIYIDUKUNDA</h3>
              <p>Member</p>
            </div>
            <div className='image1'>
              <img src={image4} alt="" />
              <h3>Aime Chance BUTERA</h3>
              <p>Member</p>
            </div>
            <div className='image1'>
              <img src={image4} alt="" />
              <h3>Emmanuel Muvunyi MUGISHA</h3>
              <p>Member</p>
            </div>
          </div>

          <div className='team1'>
            <h1>Supporting Team ASR</h1>
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
      <WaveLine/>

      <h1 className='partners'>Our PArtners</h1>

      <div className='log-image'>
        <img src={gnf} alt='gnf' />
        <img src={rgg} alt='gnf' />
        <img src={soris} alt='gnf' />
        <img src={ryaf} alt='gnf' />
      </div>

    </div>



  )
}

export default About