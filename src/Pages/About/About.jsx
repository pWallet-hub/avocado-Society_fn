import avocados from '../../assets/avocados.jpeg';
import nopic from '../../assets/nopic.jpg';
import rugangazi from '../../assets/rugangazi.jpg'
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
import minagri from '../../assets/MINAGRI Logo.png';
import React from 'react';
import './About.css';

function About() {
  return (
    <div className='active-hub'>
      <div className='active-content'>
        <img className='active-img' src={avocados} alt="Avocados" />
        <h3>ABOUT</h3>
      </div>

      <div className='about'>
        <h2>Avocado Society of Rwanda</h2>
        <p>
          The Avocado Society of Rwanda was established on October 28th, 2020, as a social enterprise dedicated to empowering Rwandan avocado producers. Organized with the primary aim of creating a sustainable and prosperous avocado industry, the society reinvests all profits back into the development of Rwanda's avocado sector. This reinvestment focuses on supporting small-scale farmers, enhancing quality standards, and refinancing avocado collection infrastructure.
        </p>
        <div className='social'>
          <div className='social-model'>
            <h2>Social Enterprise Model</h2>
            <p>
              As a social enterprise, the Avocado Society of Rwanda operates with a commitment to reinvesting profits into social and environmental initiatives. Shareholders do not receive dividends; instead, all earnings are used to support the Rwandan avocado industry.
            </p>
          </div>
          <div className='sustainable'>
            <h2>Sustainable Development Goals:</h2>
            <p>
              The Avocado Society of Rwanda was registered with the Rwanda Development Board (RDB) under the framework of sustainable development goals and the Agriculture and Livestock Strategic Transformation Plan (PST4) 2018-2024. The society aligns with several key Sustainable goals, specifically:
            </p>
            <ul>
              <li>Goal 1: No Poverty</li>
              <li>Goal 2: Zero Hunger</li>
              <li>Goal 3: Good Health and Well-being</li>
              <li>Goal 8: Decent Work and Economic Growth</li>
            </ul>
          </div>
        </div>
        <div className='about-content'>
          <div className='vision'>
          <h1>Vision:</h1>
          <p>
            To transform Rwanda's avocado industry into a globally recognized leader by empowering small-scale producers with access to quality standards, global markets, and innovative financial solutions.
          </p>
          </div>
          <div className='mission'>
          <h1>Mission:</h1>
          <p>
            Working in partnership with public and private stakeholders, the Avocado Society of Rwanda provides innovative services that transform agriculture and empower small-scale avocado producers. Our focus is on helping these farmers sustainably increase productivity and meet market demands through our digital platforms and farm financial modeling, ultimately improving their livelihoods.
          </p>
          </div>
        </div>

        <div className='team'>
          <h2>Board of Directors ASR</h2>
          <div className='board-directors'>
            <div className='board'>
              <div className='image1'>
                <img src={pacific} alt="Pacifique NSHIMIYIMANA" />
                <h3>Pacifique NSHIMIYIMANA</h3>
                <p>Chair Person</p>
              </div>
              <div className='image1'>
                <img src={omar} alt="Omar BISERUKA" />
                <h3>Omar BISERUKA</h3>
                <p>Managing Director</p>
              </div>
              <div className='image1'>
                <img src={renovat} alt="Renovat NITUNGA" />
                <h3>Renovat NITUNGA</h3>
                <p>Extension Manager</p>
              </div>
            </div>
            <div className='board'>
              <div className='image1'>
                <img src={mugisha} alt="Emmanuel Muvunyi MUGISHA" />
                <h3>Emmanuel Muvunyi MUGISHA</h3>
                <p>Partnership & Trade Manager</p>
              </div>
              <div className='image1'>
                <img src={musangamfura} alt="Jean Damascéne MUSANGAMFURA" />
                <h3>Jean Damascéne MUSANGAMFURA</h3>
                <p>Secretary</p>
              </div>
              <div className='image1'>
                <img src={butera} alt="Aime Chance BUTERA" />
                <h3>Aime Chance BUTERA</h3>
                <p>Youth Inclusion Advisor</p>
              </div>
            </div>
            <div className='board'>
              <div className='image1'>
                <img src={euprosine} alt="Mugeni Euphrosine NIYIDUKUNDA" />
                <h3>Mugeni Euphrosine NIYIDUKUNDA</h3>
                <p>Value Addition Advisor</p>
              </div>
              {/* <div className='image1'>
                <img src={nopic} alt="Renovat NITUNGA" />
                <h3>Renovat NITUNGA</h3>
                <p>Member</p>
              </div> */}
              <div className='image1'>
                <img src={nopic} alt="ALEXANDRE NSHIMIYIMANA" />
                <h3>ALEXANDRE NSHIMIYIMANA</h3>
                <p>Member</p>
              </div>
            </div>
          </div>

          <h2>Supporting Team ASR</h2>
          <div className='board'>
            <div className='image1'>
              <img src={agape} alt="Agape Nduwamungu" />
              <h3>Agape Nduwamungu</h3>
              <h4>corresponding alliance for science</h4>
              <p>Administrative Officer</p>
            </div>
            <div className='image1'>
              <img src={rugangazi} alt="Felix Bikorimana" />
              <h3>Felix Bikorimana</h3>
              <h4>corresponding real green gold</h4>
              <p>Senior Digitization Officer</p>
            </div>
            <div className='image1'>
              <img src={nopic} alt="Kevin Ishimwe" />
              <h3>Kevin Ishimwe</h3>
              <h4>corresponding real green gold</h4>
              <p>Back-End Lead</p>
            </div>
            {/* <div className='image1'>
              <img src={nopic} alt="Umutoni Doreen" />
              <h3>Umutoni Doreen</h3>
              <h4>corresponding real green gold</h4>
              <p>UI/UX Lead</p>
            </div> */}
          </div>
        </div>
        <div className='partners'>
          <h1 className='partner'>Our Partners</h1>
          <div className='log-image'>
            <img src={gnf} alt='GNF' />
            <img src={rgg} alt='RGG' />
            <img src={soris} alt='Soris' />
            <img src={minagri} alt='minagri' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
