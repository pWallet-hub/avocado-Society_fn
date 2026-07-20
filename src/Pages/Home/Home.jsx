import "./Home.css"
import { Helmet } from 'react-helmet-async'
import avocado1 from '../../assets/avocado1.jpg'
import avocado2 from '../../assets/avocado2.jpg'
import avocado3 from '../../assets/avocado3.jpg'
import info1 from '../../assets/info1.jpg'
import info2 from '../../assets/info2.jpg'
import info3 from '../../assets/info3.jpg'
import map from '../../assets/map1.jpg'
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
      <p>Empowering Avocado producers for Sustainable Growth.
 Cultivating Green Delights Through Community and Knowledge.
      </p>
    </div>
    <div className='slide-button'>
      <Link className="about-style" to="/About">Discover</Link></div>
  </div>
);

const images = [
  { url: avocado1, text: text },
  { url: avocado2, text: text },
  { url: avocado3, text: text },
];

const galleryItems = [
  { img: info1, label: 'Harvesting' },
  { img: info2, label: 'Marketing' },
  { img: info3, label: 'Quality' },
];

const pwalletFeatures = [
  { Icon: FaSprayCan, label: 'Collective Pest Management' },
  { Icon: FaBasketShopping, label: 'Farm Harvesting Management' },
  { Icon: FaMountainSun, label: 'Farm Property Evaluation' },
];

const pwalletList = [
  'Farm financial modeling',
  'Extension Services',
  'Contract Farming Agreements',
];

function Home() {
  return (
    <>
      <Helmet>
        <title>Avocado Society of Rwanda | Home</title>
        <meta name="description" content="Empowering Rwandan avocado producers for sustainable growth, quality standards, and global market access through the Pwallet digital platform. Based in Kigali, Rwanda." />
        <link rel="canonical" href="https://avocado-society-rwanda.netlify.app/" />
        <meta property="og:title" content="Avocado Society of Rwanda | Home" />
        <meta property="og:description" content="Empowering Rwandan avocado producers for sustainable growth, quality standards, and global market access through the Pwallet digital platform." />
        <meta property="og:url" content="https://avocado-society-rwanda.netlify.app/" />
      </Helmet>

      <SlideShow images={images} />

      <div className="home-page">
        {/* ── INTRO ── */}
        <section className="home-intro">
          <div className="home-intro-left">
            <span className="home-badge">Who We Are</span>
            <h1>The Beauty of Avocado Society</h1>
            <p className="home-intro-tag">We take care and give value to your avocado orchards</p>
            <span className="home-cta-ghost">Explore More</span>
          </div>
          <div className="home-intro-right">
            <h2>Empowering Rwandan small scale avocado producers for the Global market access, quality standards, and tailored financial modeling.</h2>
            <p>The society supports all avocado producers by helping them meet quality standards and access markets, regardless of farm size. This is accomplished through tailored finance models, extension services, information sharing, and contract farming agreements.</p>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="home-gallery">
          {galleryItems.map((item) => (
            <div className="home-gallery-item" key={item.label}>
              <img src={item.img} alt={item.label} />
              <span className="home-gallery-label">{item.label}</span>
            </div>
          ))}
        </section>

        {/* ── PWALLET FEATURE BAND ── */}
        <section className="home-feature-band">
          <div className="home-feature-media">
            <img src={info1} alt="info1" />
          </div>
          <div className="home-feature-content">
            <span className="home-badge home-badge--light">Farmer Service Center</span>
            <h2>Access this though <br />our Society&apos;s Pwallet App.</h2>
            <p>The society supports all avocado producers by helping them meet quality standards and access markets, regardless of farm size and means. This is accomplished through tailored and digitized farm financial modeling, extension services, and information sharing.</p>
            <div className="home-icon-grid">
              {pwalletFeatures.map(({ Icon, label }) => (
                <div className="home-icon-card" key={label}>
                  <Icon className="home-icon" />
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PWALLET SPLIT ── */}
        <section className="home-split">
          <div className="home-split-content">
            <span className="home-badge">Know more about Pwallet</span>
            <h2>We do Creative things for Success</h2>
            <p>The society supports all avocado producers and other value chain actors by helping them meet consistency in quality standards, growth of production, and predictive analytics tools for markets. This is accomplished through:</p>
            <ul className="home-check-list">
              {pwalletList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to="/Membership" className="home-cta-solid">Explore</Link>
          </div>
          <div className="home-split-media">
            <img src={info3} alt="info3" />
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="home-contact">
          <div className="home-contact-info">
            <span className="home-badge home-badge--light">Get in Touch</span>
            <p className="home-contact-welcome">Welcome to the Avocado Society of Rwanda. Join us in our mission to feed the world.</p>
            <div className="home-contact-rows">
              <div className="home-contact-row">
                <h3>Location</h3>
                <p>1 KN 78 St, Kigali</p>
              </div>
              <div className="home-contact-row">
                <h3>Phone</h3>
                <p>+250788481560</p>
              </div>
              <div className="home-contact-row">
                <h3>Email</h3>
                <p>avocadosocietyofrwanda@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="home-contact-map">
            <img src={map} alt="info2" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home