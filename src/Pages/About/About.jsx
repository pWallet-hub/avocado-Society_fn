import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

// Asset Imports
import avocados from '../../assets/avocados.jpeg';
import nopic from '../../assets/nopic.jpg';
import rugangazi from '../../assets/rugangazi.jpg';
import gnf from '../../assets/gfn.jpg';
import rgg from '../../assets/rgg.png';
import ryaf from '../../assets/ryaf.jpg';
import soris from '../../assets/soris.png';
import mugisha from '../../assets/mugisha.jpg';
import pacific from '../../assets/pacific.jpg';
import omar from '../../assets/omar.jpg';
import renovat from '../../assets/renovat.jpg';
import euprosine from '../../assets/euprosine.jpg';
import musangamfura from '../../assets/musangamfura.jpg';
import butera from '../../assets/butera.jpg';
import agape from '../../assets/agape.jpg';
import minagri from '../../assets/MINAGRI Logo.png';

const boardDirectors = [
  { img: pacific, name: 'Pacifique NSHIMIYIMANA', role: 'Chair Person' },
  { img: omar, name: 'Omar BISERUKA', role: 'Managing Director' },
  { img: renovat, name: 'Renovat NITUNGA', role: 'Extension Manager' },
  { img: mugisha, name: 'Emmanuel Muvunyi MUGISHA', role: 'Partnership & Trade Manager' },
  { img: musangamfura, name: 'Jean Damascéne MUSANGAMFURA', role: 'Secretary' },
  { img: butera, name: 'Aime Chance BUTERA', role: 'Youth Inclusion Advisor' },
  { img: euprosine, name: 'Mugeni Euphrosine NIYIDUKUNDA', role: 'Value Addition Advisor' },
  { img: nopic, name: 'ALEXANDRE NSHIMIYIMANA', role: 'Member' },
];

const supportingTeam = [
  { img: agape, name: 'Agape Nduwamungu', tag: 'Alliance for Science', role: 'Administrative Officer' },
  { img: rugangazi, name: 'Felix Bikorimana', tag: 'Real Green Gold', role: 'Senior Digitization Officer' },
  { img: nopic, name: 'Kevin Ishimwe', tag: 'Real Green Gold', role: 'Back-End Lead' },
  { img: nopic, name: 'Umutoni Doreen', tag: 'Real Green Gold', role: 'UI/UX Lead' },
];

const partnerLogos = [
  { img: gnf, alt: 'GNF' },
  { img: rgg, alt: 'RGG' },
  { img: soris, alt: 'Soris' },
  { img: ryaf, alt: 'RYAF' },
  { img: minagri, alt: 'MINAGRI' }
];

const goals = [
  { num: '01', title: 'No Poverty', text: 'Alleviating rural constraints for localized families.' },
  { num: '02', title: 'Zero Hunger', text: 'Securing value loops for continuous crop output.' },
  { num: '03', title: 'Good Health', text: 'Promoting nutritional security through healthy yields.' },
  { num: '08', title: 'Decent Work', text: 'Generating sustainable farming livelihoods.' },
];

const testimonials = [
  {
    quote: "ASR has completely shifted how we handle regional exports. Their farm financial modeling provided clarity we never had before.",
    author: "Jean de Dieu Temahagari",
    role: "Avocado Cooperative Lead, Eastern Province"
  },
  {
    quote: "Through their extension services and digital platforms, our small-scale farmers have successfully met stringent global quality standards.",
    author: "Marie Claire Uwera",
    role: "Agronomy Consultant"
  }
];

function About() {
  return (
    <div className='agrigo-about'>
      <Helmet>
        <title>About Us | Avocado Society of Rwanda</title>
        <meta name="description" content="Learn about the Avocado Society of Rwanda (ASR) — a social enterprise empowering small-scale avocado producers with modern farming solutions." />
      </Helmet>

      {/* ── HERO BANNER ── */}
      <header className='agrigo-hero'>
        <div className='agrigo-hero-overlay' />
        <div className='agrigo-hero-inner'>
          <span className='agrigo-eyebrow'>Avocado Society of Rwanda</span>
          <h1>ABOUT US</h1>
          <div className='agrigo-breadcrumbs'>Home <span>//</span> About Us</div>
        </div>
      </header>

      {/* ── PARTNERS LOGO STRIP ── */}
      <section className='agrigo-partners-strip'>
        <div className='agrigo-container'>
          <div className='agrigo-logo-row'>
            {partnerLogos.map((logo, i) => (
              <img key={i} src={logo.img} alt={logo.alt} className="agrigo-partner-img" />
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO / HISTORY SECTION WITH HIGHLIGHT CARDS ── */}
      <section className='agrigo-intro-section'>
        <div className='agrigo-container agrigo-intro-grid'>
          <div className='agrigo-intro-media'>
            <img src={avocados} alt="Modern Farming Solutions" className='agrigo-main-img' />
            <div className='agrigo-experience-badge'>
              <h3>EST.</h3>
              <h2>2020</h2>
            </div>
          </div>
          
          <div className='agrigo-intro-content'>
            <span className='agrigo-section-badge'>About Society</span>
            <h2 className='agrigo-section-title'>From Humble Beginnings to a Leader in Modern Farming Solutions</h2>
            <p className='agrigo-lead-text'>
              The Avocado Society of Rwanda was established on October 28th, 2020, as a social enterprise dedicated to empowering small-scale producers.
            </p>
            <p className='agrigo-body-text'>
              Organized with the primary aim of creating a sustainable and prosperous avocado industry, the society reinvests all profits back into the development of Rwanda's avocado sector, focusing on enhancing quality standards and infrastructure.
            </p>

            {/* Template Highlight Badges */}
            <div className='agrigo-highlight-cards'>
              <div className='agrigo-mini-card'>
                <div className='agrigo-card-icon'>✓</div>
                <div>
                  <h4>100% Reinvested</h4>
                  <p>Zero shareholder dividends paid out.</p>
                </div>
              </div>
              <div className='agrigo-mini-card'>
                <div className='agrigo-card-icon'>✓</div>
                <div>
                  <h4>RDB Registered</h4>
                  <p>Aligned with PST4 strategic frameworks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO-COLUMN PANORAMIC STORY SECTION ── */}
      <section className='agrigo-panoramic-section' style={{ backgroundImage: `url(${avocados})` }}>
        <div className='agrigo-panoramic-overlay' />
        <div className='agrigo-container agrigo-story-grid'>
          <div className='agrigo-panoramic-card'>
            <span className='agrigo-card-tag'>ASR Origins</span>
            <h2>Our Foundational Social Enterprise Model</h2>
            <p>
              As a dedicated social enterprise, our structural priorities focus completely on sector advancement rather than investor payouts. By re-allocating assets toward small-scale farming collection centers, we help secure regional value chains throughout Rwanda.
            </p>
          </div>
          <div className='agrigo-panoramic-card'>
            <span className='agrigo-card-tag'>ASR Excellence</span>
            <h2>Empowering Growth Through Innovation</h2>
            <p>
              Working in partnership with public and private stakeholders, we provide services that transform agriculture. Through our digital platforms and farm financial modeling, smallholders sustainably increase productivity and access global markets.
            </p>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABLE GOALS GRID ── */}
      <section className='agrigo-goals-section'>
        <div className='agrigo-container'>
          <div className='agrigo-center-header'>
            <span className='agrigo-section-badge'>Framework Alignment</span>
            <h2 className='agrigo-section-title'>Sustainable Development Goals</h2>
          </div>
          
          <div className='agrigo-goals-grid'>
            {goals.map((g, i) => (
              <div className='agrigo-goal-card' key={i}>
                <div className='agrigo-goal-icon-wrap'>✓</div>
                <div className='agrigo-goal-count'>{g.num}</div>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGH VISIBILITY VISION & MISSION CARDS ── */}
      <section className='agrigo-vision-section'>
        <div className='agrigo-container agrigo-vision-grid'>
          <div className='agrigo-vision-card agrigo-clear-vision'>
            <div className='agrigo-vm-badge'>Our Vision</div>
            <h3>To transform Rwanda's avocado industry into a globally recognized leader by empowering small-scale producers with access to quality standards, global markets, and innovative financial solutions.</h3>
          </div>
          <div className='agrigo-vision-card agrigo-clear-mission'>
            <div className='agrigo-vm-badge'>Our Mission</div>
            <h3>Providing innovative services that transform agriculture and empower small-scale avocado producers to sustainably meet market demands and dramatically improve their livelihoods.</h3>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section className='agrigo-testimonials-section'>
        <div className='agrigo-container'>
          <div className='agrigo-center-header'>
            <span className='agrigo-section-badge'>Voice of Impact</span>
            <h2 className='agrigo-section-title'>What Our Partners Say</h2>
          </div>
          <div className='agrigo-testimonials-grid'>
            {testimonials.map((t, i) => (
              <div className='agrigo-testimonial-card' key={i}>
                <div className='agrigo-testimonial-quote'>“{t.quote}”</div>
                <div className='agrigo-testimonial-author'>
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP & TEAM SECTION ── */}
      <section className='agrigo-team-section'>
        <div className='agrigo-container'>
          <div className='agrigo-center-header'>
            <span className='agrigo-section-badge'>Expertise</span>
            <h2 className='agrigo-section-title'>Leading Agriculture with Expertise and Innovation</h2>
          </div>

          <h3 className='agrigo-team-subtitle'>Board of Directors ASR</h3>
          <div className='agrigo-team-grid directors-grid'>
            {boardDirectors.map((person, i) => (
              <div className='agrigo-team-member' key={i}>
                <div className='agrigo-member-photo-wrapper'>
                  <img src={person.img} alt={person.name} />
                </div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            ))}
          </div>

          <h3 className='agrigo-team-subtitle subtitle-spaced'>Supporting Team ASR</h3>
          <div className='agrigo-team-grid support-grid'>
            {supportingTeam.map((person, i) => (
              <div className='agrigo-team-member' key={i}>
                <div className='agrigo-member-photo-wrapper'>
                  <img src={person.img} alt={person.name} />
                </div>
                <h3>{person.name}</h3>
                <span className='agrigo-member-tag'>{person.tag}</span>
                <p>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;