import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaSprayCan, FaBasketShopping, FaMountainSun } from "react-icons/fa6";
import SlideShow from "../../components/Slide/Slide";
import './Home.css';

// Asset Imports
import avocado1 from '../../assets/avocado1.jpg';
import avocado2 from '../../assets/avocado2.jpg';
import avocado3 from '../../assets/avocado3.jpg';
import info1 from '../../assets/info1.jpg';
import info3 from '../../assets/info3.jpg';
import map from '../../assets/map1.jpg';

const pwalletFeatures = [
  { 
    Icon: FaSprayCan, 
    title: 'Collective Pest Management', 
    text: 'Localized digital spraying intervals and community crop health updates engineered to scale security parameters.' 
  },
  { 
    Icon: FaBasketShopping, 
    title: 'Farm Harvesting Management', 
    text: 'Communal harvest logging, tracking frameworks, and smart distribution algorithms built into your wallet layers.' 
  },
  { 
    Icon: FaMountainSun, 
    title: 'Farm Property Evaluation', 
    text: 'Thorough, accurate topographical mapping and property diagnostic evaluation tools to secure finance access.' 
  },
];

const pwalletList = [
  'Advanced farm financial modeling metrics',
  'Digitized, premium agricultural extension services',
  'Automated and highly secure contract farming agreements',
];

const galleryItems = [
  { img: info1, label: 'Harvesting Protocols' },
  { img: info3, label: 'Global Marketing' },
  { img: map, label: 'Quality Verification' },
];

function Home() {
  const slideshowText = (
    <div className='agrigo-slide-layer'>
      <span className='agrigo-slide-badge'>Premium Agriculture Services</span>
      <h1>SMART AGRICULTURE FOR MODERN WORLD</h1>
      <p>Empowering Rwandan small-scale avocado producers for premium global market access, consistent quality standards, and automated financial modeling.</p>
      <div className='agrigo-slide-actions'>
        <Link className="btn-agrigo btn-hero-solid" to="/About">Discover ASR</Link>
      </div>
    </div>
  );

  const images = [
    { url: avocado1, text: slideshowText },
    { url: avocado2, text: slideshowText },
    { url: avocado3, text: slideshowText },
  ];

  return (
    <div className="agrigo-home">
      <Helmet>
        <title>Avocado Society of Rwanda | Modern Farming Excellence</title>
        <meta name="description" content="Empowering Rwandan avocado producers for sustainable growth, quality standards, and global market access through the Pwallet digital platform." />
        <link rel="canonical" href="https://avocado-society-rwanda.netlify.app/" />
      </Helmet>

      {/* ── INTERACTIVE SLIDESHOW BANNER ── */}
      <section className="agrigo-hero-wrapper">
        <SlideShow images={images} />
      </section>

      {/* ── INTRO SUMMARY GRID ── */}
      <section className="agrigo-section info-flesh-bg">
        <div className="agrigo-container agrigo-grid-2">
          <div className="agrigo-intro-media-box">
            <img src={info1} alt="ASR High Quality Yields" className="agrigo-intro-img" />
            <div className="agrigo-year-experience-badge">
              <h3>EST.</h3>
              <h2>2020</h2>
            </div>
          </div>
          
          <div className="agrigo-intro-text-box">
            <span className='agrigo-badge-pill'>Who We Are</span>
            <h2 className="agrigo-headline-main">The Beauty of Avocado Society Innovation</h2>
            <h4 className="agrigo-subtitle-tag"> We take strategic care and inject real asset value directly into your avocado orchards.</h4>
            <p className="agrigo-body-paragraph">
              The society supports all avocado producers by helping them meet stringent global quality standards and securely access international commercial markets, regardless of farm size or baseline capital. This is systematically accomplished through predictive analytics, contract farming frameworks, and targeted support.
            </p>
            <Link to="/About" className="btn-agrigo btn-outline-dark">Explore More Features</Link>
          </div>
        </div>
      </section>

      {/* ── THREE-COLUMN SHOWCASE GALLERY ── */}
      <section className="agrigo-section">
        <div className="agrigo-container">
          <div className="agrigo-center-header">
            <span className='agrigo-badge-pill'>Strategic Pillars</span>
            <h2 className="agrigo-headline-main">Portfolio of Modern Agricultural Operations</h2>
          </div>
          <div className="agrigo-grid-3">
            {galleryItems.map((item, index) => (
              <div className="agrigo-gallery-card" key={index}>
                <div className="agrigo-gallery-img-wrap">
                  <img src={item.img} alt={item.label} />
                  <div className="agrigo-gallery-gradient" />
                </div>
                <div className="agrigo-gallery-meta">
                  <span className="agrigo-gallery-arrow">↗</span>
                  <h3>{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PWALLET DEEP FOREST DIGITAL REVOLUTION BAND ── */}
      <section className="agrigo-section dark-forest-bg">
        <div className="agrigo-container agrigo-grid-2 align-center">
          <div className="agrigo-pwallet-content">
            <span className='agrigo-badge-pill badge-pill-light'>Farmer Service Center</span>
            <h2 className="agrigo-headline-main text-white">Access Global Ecosystems via our Society&apos;s pWallet App</h2>
            <p className="agrigo-body-paragraph text-muted-white">
              Unlock a comprehensive suite of digital utilities custom-tailored for regional producers. From automated tracking to agronomic inspections, the pWallet application bridges the gap between field outputs and macro markets.
            </p>
            <div className="agrigo-icon-features-grid">
              {pwalletFeatures.map(({ Icon, title, text }, idx) => (
                <div className="agrigo-icon-feature-card" key={idx}>
                  <div className="agrigo-icon-circle-avatar">
                    <Icon />
                  </div>
                  <div className="agrigo-feature-text-block">
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="agrigo-pwallet-media-preview">
            <img src={info3} alt="ASR pWallet Analytics Integration" className="agrigo-pwallet-img" />
          </div>
        </div>
      </section>

      {/* ── STRATEGIC STATISTICS SECTION ── */}
      <section className="agrigo-section statistics-accent-bg">
        <div className="agrigo-container agrigo-grid-4">
          <div className="agrigo-stat-block-card">
            <h2>84%</h2>
            <p>Export Fulfillment</p>
          </div>
          <div className="agrigo-stat-block-card">
            <h2>20%</h2>
            <p>Increase in Yields</p>
          </div>
          <div className="agrigo-stat-block-card">
            <h2>95%</h2>
            <p>Farmer Retention</p>
          </div>
          <div className="agrigo-stat-block-card">
            <h2>8+</h2>
            <p>Trusted Logistics Hubs</p>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN VALUE SPLIT INFOGRAPHIC ── */}
      <section className="agrigo-section">
        <div className="agrigo-container agrigo-grid-2 align-center">
          <div className="agrigo-split-img-frame">
            <img src={info1} alt="Precision Harvesting Processes" />
          </div>
          <div className="agrigo-split-text-frame">
            <span className='agrigo-badge-pill'>Platform Execution</span>
            <h2 className="agrigo-headline-main">We Implement Creative Frameworks for Success</h2>
            <p className="agrigo-body-paragraph">
              The society reliably guides all certified avocado producers and downstream actors by preserving consistency across processing intervals, international shipping pipelines, and agricultural security layers. This is efficiently delivered through:
            </p>
            <ul className="agrigo-premium-bullet-list">
              {pwalletList.map((item, idx) => (
                <li key={idx}>
                  <span className="bullet-checkmark">✓</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <Link to="/Membership" className="btn-agrigo btn-solid-forest">Become an Active Member</Link>
          </div>
        </div>
      </section>

      {/* ── GEOGRAPHICAL HEADQUARTERS HUB ── */}
      <section className="asr-contact-section">
        <div className="asr-contact-container">
          
          {/* Left Side: Content & Highly Visible Headings */}
          <div className="asr-contact-content-block">
            <span className="asr-mini-badge">Get In Touch</span>
            <h2 className="asr-main-heading">
              Connect with the <br />
              Society Headquarters Today
            </h2>
            <p className="asr-description-text">
              Join us in mapping a highly profitable, sustainable landscape for Rwandan agri-tech solutions.
            </p>
            
            <div className="asr-info-meta-box">
              <span className="asr-meta-label">Location</span>
              <p className="asr-meta-value">1 KN 78 St, Kigali, Rwanda</p>
            </div>
          </div>

          {/* Right Side: Aligned, Elevated Map Frame */}
          <div className="asr-contact-map-block">
            <div className="asr-map-wrapper">
              <img src={map} alt="ASR Interactive Location Map at Norrsken House" />
            </div>
          </div>

        </div>
      </section>

      {/* ── FULL-BLEED BOTTOM ECO BANNER ── */}
      <footer className="agrigo-eco-footer-action">
        <div className="agrigo-container footer-flex-wrap">
          <h2>Build an Eco-Friendly, High-Yield Farm Infrastructure Today</h2>
          <Link to="/Membership" className="btn-agrigo btn-hero-lime">Get Started Now</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;