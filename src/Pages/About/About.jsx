import avocados from '../../assets/avocados.jpeg';
import nopic from '../../assets/nopic.jpg';
import gnf from '../../assets/gfn.jpg';
import rgg from '../../assets/rgg.png';
import ryaf from '../../assets/ryaf.jpg';
import soris from '../../assets/soris.png';
import mugisha from '../../assets/mugisha.jpg';
import pacific from '../../assets/pacific.jpg';
import omar from '../../assets/omar.jpg';
import renovat from '../../assets/renovat.jpg';
import euprosine from '../../assets/euprosine.jpg';
import musangamfura from '../../assets/musangamfura.jpg'
import butera from '../../assets/butera.jpg'
import agape from '../../assets/agape.jpg';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const boardDirectors = [
  { img: pacific, name: 'Pacifique NSHIMIYIMANA', role: 'Chair Person' },
  { img: omar, name: 'Omar BISERUKA', role: 'Managing Director' },
  { img: renovat, name: 'Renovat NITUNGA', role: 'Extension Manager' },
  { img: mugisha, name: 'Emmanuel Muvunyi MUGISHA', role: 'Partnership & Trade Manager' },
  { img: musangamfura, name: 'Jean Damascéne MUSANGAMFURA', role: 'Secretary' },
  { img: butera, name: 'Aime Chance BUTERA', role: 'Youth Inclusion Advisor' },
  { img: euprosine, name: 'Mugeni Euphrosine NIYIDUKUNDA', role: 'Value Addition Advisor' },
  { img: nopic, name: 'Renovat NITUNGA', role: 'Member' },
  { img: nopic, name: 'ALEXANDRE NSHIMIYIMANA', role: 'Member' },
];

const supportingTeam = [
  { img: agape, name: 'Agape Nduwamungu', tag: 'corresponding alliance for science', role: 'Administrative Officer' },
  { img: nopic, name: 'Felix Bikorimana', tag: 'corresponding real green gold', role: 'Senior Digitization Officer' },
  { img: nopic, name: 'Kevin Ishimwe', tag: 'corresponding real green gold', role: 'Back-End Lead' },
  { img: nopic, name: 'Umutoni Doreen', tag: 'corresponding real green gold', role: 'UI/UX Lead' },
];

const partnerLogos = [
  { img: gnf, alt: 'GNF' },
  { img: rgg, alt: 'RGG' },
  { img: soris, alt: 'Soris' },
  { img: ryaf, alt: 'RYAF' },
];

const goals = [
  'Goal 1: No Poverty',
  'Goal 2: Zero Hunger',
  'Goal 3: Good Health and Well-being',
  'Goal 8: Decent Work and Economic Growth',
];

const milestones = [
  {
    year: '2018–2024',
    title: 'Agriculture & Livestock Strategic Transformation Plan',
    text: 'Registered with the Rwanda Development Board (RDB) under the framework of sustainable development goals and the Agriculture and Livestock Strategic Transformation Plan (PST4).',
  },
  {
    year: '2020',
    title: 'Avocado Society of Rwanda Founded',
    text: "Established on October 28th, 2020, as a social enterprise dedicated to empowering Rwandan avocado producers — reinvesting all profits into the country's avocado sector.",
  },
];

function About() {
  return (
    <div className='asr-about'>
      <Helmet>
        <title>About Us | Avocado Society of Rwanda</title>
        <meta name="description" content="Learn about the Avocado Society of Rwanda (ASR) — founded in 2020, a social enterprise empowering small-scale avocado producers with extension services, market access, and sustainable development." />
        <link rel="canonical" href="https://avocado-society-rwanda.netlify.app/About" />
        <meta property="og:title" content="About Us | Avocado Society of Rwanda" />
        <meta property="og:description" content="The Avocado Society of Rwanda — established 2020. Empowering small-scale avocado producers across Rwanda." />
        <meta property="og:url" content="https://avocado-society-rwanda.netlify.app/About" />
      </Helmet>

      {/* ── HERO BAND ── */}
      <header className='asr-hero'>
        <span className='asr-blob asr-blob--a' aria-hidden='true' />
        <span className='asr-blob asr-blob--b' aria-hidden='true' />
        <div className='asr-hero-inner'>
          <span className='asr-eyebrow asr-eyebrow--light'>Avocado Society of Rwanda</span>
          <h1>About</h1>
        </div>
      </header>

      <main className='asr-main'>
        {/* ── WHO WE ARE ── */}
        <section className='asr-who'>
          <div className='asr-who-media'>
            <img src={avocados} alt="Avocados" />
          </div>
          <div className='asr-who-content'>
            <span className='asr-badge'>Who We Are</span>
            <h2>Avocado Society of Rwanda</h2>
            <p>
              The Avocado Society of Rwanda was established on October 28th, 2020, as a social enterprise dedicated to empowering Rwandan avocado producers. Organized with the primary aim of creating a sustainable and prosperous avocado industry, the society reinvests all profits back into the development of Rwanda's avocado sector. This reinvestment focuses on supporting small-scale farmers, enhancing quality standards, and refinancing avocado collection infrastructure.
            </p>
            <div className='asr-stats'>
              <div className='asr-stat'>
                <span className='asr-stat-num'>est. 2020</span>
                <span className='asr-stat-label'>A social enterprise</span>
              </div>
              <div className='asr-stat'>
                <span className='asr-stat-num'>100%</span>
                <span className='asr-stat-label'>Profits reinvested, no dividends</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERS STRIP ── */}
        <section className='asr-partners-strip'>
          <p className='asr-strip-label'>Our Partners</p>
          <div className='asr-logo-row'>
            {partnerLogos.map((logo, i) => (
              <img key={i} src={logo.img} alt={logo.alt} />
            ))}
          </div>
        </section>

        {/* ── SOCIAL ENTERPRISE MODEL + SDGs (dark feature grid) ── */}
        <section className='asr-model-band'>
          <span className='asr-blob asr-blob--c' aria-hidden='true' />
          <div className='asr-model-inner'>
            <span className='asr-badge asr-badge--light'>Social Enterprise Model</span>
            <h2>Sustainable Development Goals</h2>
            <p>
              As a social enterprise, the Avocado Society of Rwanda operates with a commitment to reinvesting profits into social and environmental initiatives. Shareholders do not receive dividends; instead, all earnings are used to support the Rwandan avocado industry. The society was registered with the Rwanda Development Board (RDB) under the framework of sustainable development goals and the Agriculture and Livestock Strategic Transformation Plan (PST4) 2018-2024, aligning with several key goals:
            </p>
            <div className='asr-goal-grid'>
              {goals.map((goal) => {
                const [label, ...rest] = goal.split(': ');
                return (
                  <div className='asr-goal-card' key={goal}>
                    <span className='asr-goal-number'>{label.replace('Goal ', '')}</span>
                    <h3>{rest.join(': ')}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION (quote-style cards) ── */}
        <section className='asr-vm'>
          <div className='asr-vm-card'>
            <span className='asr-quote-mark' aria-hidden='true'>&ldquo;</span>
            <h3>Vision</h3>
            <p>
              To transform Rwanda's avocado industry into a globally recognized leader by empowering small-scale producers with access to quality standards, global markets, and innovative financial solutions.
            </p>
          </div>
          <div className='asr-vm-card'>
            <span className='asr-quote-mark' aria-hidden='true'>&ldquo;</span>
            <h3>Mission</h3>
            <p>
              Working in partnership with public and private stakeholders, the Avocado Society of Rwanda provides innovative services that transform agriculture and empower small-scale avocado producers. Our focus is on helping these farmers sustainably increase productivity and meet market demands through our digital platforms and farm financial modeling, ultimately improving their livelihoods.
            </p>
          </div>
        </section>

        {/* ── MILESTONES ── */}
        <section className='asr-milestones'>
          <span className='asr-badge'>Milestones</span>
          <h2>Our Foundations</h2>
          <div className='asr-timeline'>
            {milestones.map((m) => (
              <div className='asr-timeline-item' key={m.year}>
                <div className='asr-timeline-year'>{m.year}</div>
                <div className='asr-timeline-content'>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className='asr-section asr-team'>
          <h2 className='asr-section-title'>Board of Directors ASR</h2>
          <div className='asr-people-grid'>
            {boardDirectors.map((person, i) => (
              <figure className='asr-person-card' key={i}>
                <div className='asr-person-photo'>
                  <img src={person.img} alt={person.name} />
                </div>
                <figcaption>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <h2 className='asr-section-title asr-section-title--spaced'>Supporting Team ASR</h2>
          <div className='asr-people-grid asr-people-grid--support'>
            {supportingTeam.map((person, i) => (
              <figure className='asr-person-card' key={i}>
                <div className='asr-person-photo'>
                  <img src={person.img} alt={person.name} />
                </div>
                <figcaption>
                  <h3>{person.name}</h3>
                  <h4>{person.tag}</h4>
                  <p>{person.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;