import avacados from '../../assets/avocados.jpeg'
import image1 from '../../assets/Agape web photo.png'
import image2 from '../../assets/felix.png'
import image3 from '../../assets/kevin.jpg'
import image4 from '../../assets/image4.jpeg'
import gnf from "../../assets/gfn.jpg";
import rgg from "../../assets/rgg.png";
import ryaf from "../../assets/ryaf.jpg";
import soris from "../../assets/soris.png";
import WaveLine from '../../components/Line/line'
import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Container,
  Typography
} from '@mui/material';
import './About.css'
function About() {
  const [formValues, setFormValues] = useState({
    amazina: '',
    imyaka: '',
    umudugudu: '',
    akagari: '',
    umurenge: '',
    akarere: '',
    upiNumber: '',
    telefone: '',
    ubusoHa: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formValues.amazina) errors.amazina = 'Amazina is required';
    if (!formValues.imyaka) errors.imyaka = 'Imyaka is required';
    if (!formValues.umudugudu) errors.umudugudu = 'Umudugudu is required';
    if (!formValues.akagari) errors.akagari = 'Akagari is required';
    if (!formValues.umurenge) errors.umurenge = 'Umurenge is required';
    if (!formValues.akarere) errors.akarere = 'Akarere is required';
    if (!formValues.upiNumber) errors.upiNumber = 'UPI Number is required';
    if (!formValues.telefone) errors.telefone = 'Telefone is required';
    if (!formValues.ubusoHa) errors.ubusoHa = 'Ubuso Ha is required';

    // Additional validation (e.g., phone number format)
    const phoneRegex = /^[0-9]{10}$/;
    if (formValues.telefone && !phoneRegex.test(formValues.telefone)) {
      errors.telefone = 'Telefone must be a 10-digit number';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      // Submit the form
      console.log('Form submitted successfully', formValues);
    } else {
      setFormErrors(errors);
    }
  };
  
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
              <h3>Agape Nduwamungu</h3>
              <p> Administrative Officer</p>
            </div>
            <div className='image1'>
              <img src={image2} alt="" />
              <h3>Felix Bikorimana </h3>
              <p>Senior digitization Officer
</p>
            </div>
            <div className='image1'>
              <img src={image3} alt="" />
              <h3>Kevin Ishimwe</h3>
              <p>back-End Lead</p>
            </div>
            <div className='image1'>
              <img src={image4} alt="" />
              <h3>Umutoni Doreen</h3>
              <p>UI/UX  Lead </p>
            </div>
          </div>
        </div>

      </div>
      <WaveLine/>

      <div className="container">
        <h2>KWIYANDIKISHA</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Amazina:</label>
          <input
            type="text"
            name="amazina"
            className="input"
            value={formValues.amazina}
            onChange={handleInputChange}
          />
          {formErrors.amazina && <span className="error">{formErrors.amazina}</span>}
        </div>

        <div className="form-group">
          <label className="label">Imyaka:</label>
          <select
            name="imyaka"
            className="select"
            value={formValues.imyaka}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="<35">Below 35</option>
            <option value=">35">Above 35</option>
          </select>
          {formErrors.imyaka && <span className="error">{formErrors.imyaka}</span>}
        </div>

        <div className="form-group">
          <label className="label">Umudugudu:</label>
          <input
            type="text"
            name="umudugudu"
            className="input"
            value={formValues.umudugudu}
            onChange={handleInputChange}
          />
          {formErrors.umudugudu && <span className="error">{formErrors.umudugudu}</span>}
        </div>

        <div className="form-group">
          <label className="label">Akagari:</label>
          <input
            type="text"
            name="akagari"
            className="input"
            value={formValues.akagari}
            onChange={handleInputChange}
          />
          {formErrors.akagari && <span className="error">{formErrors.akagari}</span>}
        </div>

        <div className="form-group">
          <label className="label">Umurenge:</label>
          <input
            type="text"
            name="umurenge"
            className="input"
            value={formValues.umurenge}
            onChange={handleInputChange}
          />
          {formErrors.umurenge && <span className="error">{formErrors.umurenge}</span>}
        </div>

        <div className="form-group">
          <label className="label">Akarere:</label>
          <input
            type="text"
            name="akarere"
            className="input"
            value={formValues.akarere}
            onChange={handleInputChange}
          />
          {formErrors.akarere && <span className="error">{formErrors.akarere}</span>}
        </div>

        <div className="form-group">
          <label className="label">UPI Number:</label>
          <input
            type="text"
            name="upiNumber"
            className="input"
            value={formValues.upiNumber}
            onChange={handleInputChange}
          />
          {formErrors.upiNumber && <span className="error">{formErrors.upiNumber}</span>}
        </div>

        <div className="form-group">
          <label className="label">Telefone:</label>
          <input
            type="text"
            name="telefone"
            className="input"
            value={formValues.telefone}
            onChange={handleInputChange}
          />
          {formErrors.telefone && <span className="error">{formErrors.telefone}</span>}
        </div>

        <div className="form-group">
          <label className="label">Ubuso ufite Ha:</label>
          <input
            type="text"
            name="ubusoHa"
            className="input"
            value={formValues.ubusoHa}
            onChange={handleInputChange}
          />
          {formErrors.ubusoHa && <span className="error">{formErrors.ubusoHa}</span>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
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