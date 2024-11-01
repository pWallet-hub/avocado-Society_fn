import { useState, useEffect } from 'react';
import axios from 'axios';
import avocado5 from '../../assets/DSC_2210.jpg'
import logo from '../../assets/LOGO - Avocado Society of Rwanda.png'
import avoca from '../../assets/avica.webp'
import './Membership.css'
import { FaCheckCircle } from "react-icons/fa";

import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Provinces, Districts, Sectors, Cells, Villages } from 'rwanda';

const FormStep = ({ title, children }) => (
  <div className="form-step">
    <h2>{title}</h2>
    {children}
  </div>
);

const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className="progress-bar-wrapper">
    <div
      className="progress-bar-fill"
      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
    ></div>
  </div>
);

function Membeship() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    telephone: '',
    age: '',
    idnumber: '',
    village: '',
    cell: '',
    sector: '',
    district: '',
    province: '',
    planted: '',
    avocadotype: '',
    mixedpercentage: '',
    yearPlanted: '',
    farmsize: '',
    treecount: '',
    upinumber: '',
    assistance: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [provinces, setProvinces] = useState([]);
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [filteredSectors, setFilteredSectors] = useState([]);
  const [filteredCells, setFilteredCells] = useState([]);
  const [filteredVillages, setFilteredVillages] = useState([]);

  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    setProvinces(Provinces());
  }, []);
  const [step2Data, setStep2Data] = useState({
    province: '',
    district: '',
    sector: '',
    cell: '',
    village: ''
  });

  useEffect(() => {
    if (step2Data.province) {
      setFilteredDistricts(Districts(step2Data.province));
    } else {
      setFilteredDistricts([]);
    }

    if (step2Data.district) {
      setFilteredSectors(Sectors(step2Data.province, step2Data.district));
    } else {
      setFilteredSectors([]);
    }

    if (step2Data.sector) {
      setFilteredCells(Cells(step2Data.province, step2Data.district, step2Data.sector));
    } else {
      setFilteredCells([]);
    }

    if (step2Data.cell) {
      setFilteredVillages(Villages(step2Data.province, step2Data.district, step2Data.sector, step2Data.cell));
    } else {
      setFilteredVillages([]);
    }
  }, [step2Data.province, step2Data.district, step2Data.sector, step2Data.cell]);


  useEffect(() => {

    setProvinces(Provinces());
    if (formData.province) {
      setFilteredDistricts(Districts(formData.province));
    } else {
      setFilteredDistricts([]);
    }

    if (formData.district) {
      setFilteredSectors(Sectors(formData.province, formData.district));
    } else {
      setFilteredSectors([]);
    }

    if (formData.sector) {
      setFilteredCells(Cells(formData.province, formData.district, formData.sector));
    } else {
      setFilteredCells([]);
    }

    if (formData.cell) {
      setFilteredVillages(Villages(formData.province, formData.district, formData.sector, formData.cell));
    } else {
      setFilteredVillages([]);
    }
  }, [formData.province, formData.district, formData.sector, formData.cell]);

  const nextStep = () => {
    if (validateStep(step, formData)) {
      setStep(prev => Math.min(prev + 1, totalSteps));
      setValidationError('');
    } else {
      setValidationError('All fields are required. Please fill in all the information before proceeding.');
    }
  };
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'province' && { district: '', sector: '', cell: '', village: '' }),
      ...(name === 'district' && { sector: '', cell: '', village: '' }),
      ...(name === 'sector' && { cell: '', village: '' }),
      ...(name === 'cell' && { village: '' })
    }));
  };
  if (name === 'age') {
    const birthDate = new Date(value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
      setValidationError('You must be at least 18 years old to register.');
    } else {
      setValidationError('');
    }
  }
  if (name === 'idnumber' && value.length > 16) {
    return; 
  }
  if (name === 'telephone' && value.length > 10) {
    return;
  }
  if (name === 'farmsize' && value.length > 10) {
    return; 
  }
  if (name === 'treecount' && value.length > 10) {
    return; // Don't update state if tree count exceeds 10 digits
  }

  const validateStep1 = (formData) => {
    const requiredFields = ['firstname', 'lastname', 'telephone', 'age', 'idnumber', 'province', 'district', 'sector', 'cell', 'village'];
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const validateStep2 = (formData) => {
    const requiredFields = ['planted'];
    if (formData.planted === 'yego') {
      requiredFields.push('yearPlanted', 'avocadotype');
      if (formData.avocadotype === 'bivanze') {
        requiredFields.push('mixedpercentage');
      }
    }
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const validateStep3 = (formData) => {
    const requiredFields = ['farmsize', 'treecount'];
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const validateStep4 = (formData) => {
    return formData.assistance.length > 0;
  };

  const validateStep = (step, formData) => {
    switch (step) {
      case 1:
        return validateStep1(formData);
      case 2:
        return validateStep2(formData);
      case 3:
        return validateStep3(formData);
      case 4:
        return validateStep4(formData);
      default:
        return false;
    }
  };
  const handleStep2Change = (e) => {
    const { name, value } = e.target;

    setStep2Data(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'province' && { district: '', sector: '', cell: '', village: '' }),
      ...(name === 'district' && { sector: '', cell: '', village: '' }),
      ...(name === 'sector' && { cell: '', village: '' }),
      ...(name === 'cell' && { village: '' })
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      assistance: checked
        ? [...prev.assistance, value]
        : prev.assistance.filter(item => item !== value)
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(step, formData)) {
      setValidationError('All fields are required. Please fill in all the information before submitting.');
      return;
    }
    setValidationError('');
    setLoading(true);
    setError('');

   const payload = {
   firstname: formData.firstname || '',
   lastname: formData.lastname || '',  
   telephone: formData.telephone || '',  
   age: formData.age || '', 
  idnumber: formData.idnumber || '',
  province: formData.province || '',    
  district: formData.district || '',
  sector: formData.sector || '',        
  cell: formData.cell || '',           
  village: formData.village || '',      
  farm_province: step2Data.province || '',  
  farm_district: step2Data.district || '',
  farm_sector: step2Data.sector || '',
  farm_cell: step2Data.cell || '',          
  farm_village: step2Data.village || '',   
  planted: formData.planted === 'yego',
  farmsize: formData.farmsize || '',       
  treecount: formData.treecount || 0 , 
  upinumber: formData.upinumber || '',      
  assistance: formData.assistance || ''   
  };

  if (formData.planted === 'yego') {
     payload.farm_age = formData.yearPlanted || 0 ;
     payload.avocadotype = formData.avocadotype || '';
     payload.mixedpercentage = formData.mixedpercentage || '';
  }


    try {
      const response = await axios.post('https://applicanion-api.onrender.com/api/users', payload);
      console.log('Form submitted successfully:', response.data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
        setError(`Submission failed: ${error.response.data.message || 'Please try again.'}`);
      } else {
        setError('Submission failed. Please check your internet connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };
  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  return (
    <>
      <div className='active-hub'>
        <div className='active-content'>
          <img className='active-img' src={avoca} alt="Description of image" />
          <h3>MEMBERSHIP</h3>
        </div>
      </div>
      <div className='membership'>
        <h1>Membership</h1>
        <h2>Benefits</h2>
      </div>
      <div className='membership-content'>
        <div className='membericon'>
          <FaCheckCircle />
        </div>
        <div className='member-text'>
          <h1>Market Access</h1>
          <p>Ensuring market access for avocado farmers is crucial for the growth and <br />
            sustainability of the avocado industry. By opening new markets and expanding <br />
            existing ones, farmers can increase their revenue, reduce waste, and enhance the <br />
            overall economic stability of their communities. Access to international markets can <br />
            be particularly beneficial, providing opportunities to meet the growing global demand <br />
            for avocados. To achieve this, it is essential to address trade barriers, improve supply <br />
            chain logistics, and adhere to stringent quality standards. Investing in marketing <br />
            initiatives, establishing fair trade practices, and leveraging technology for better <br />
            market intelligence can further empower avocado farmers, enabling them to compete <br />
            effectively and sustainably in the global marketplace.</p>
        </div>
      </div>
      <div className='membership-content'>
        <div className='membericon'>
          <FaCheckCircle />
        </div>
        <div className='member-text'>
          <h1>Extension Service</h1>
          <p>Our comprehensive extension services are designed
            to support avocado farmers in <br /> every aspect of their operations,
            ensuring optimal productivity and sustainability. We <br /> offer expert pest
            management solutions tailored to protect your crops from harmful <br /> pests
            while minimizing environmental impact. Our harvesting support ensures
            that you <br /> employ the best practices for maximum yield and quality, aligning
            with market <br /> standards. Additionally, our farm property evaluation service
            provides a thorough <br /> assessment of your land, identifying areas for improvement
            and opportunities for <br /> growth. By integrating these services, we help you enhance
            your farming practices, <br /> boost your harvest, and achieve greater market success.</p>
        </div>
      </div>
      <div className='membership-content'>
        <div className='membericon'>
          <FaCheckCircle />
        </div>
        <div className='member-text'>
          <h1>Access to Finance</h1>
          <p>Access to finance is a critical component for the advancement and sustainability <br />
            of avocado farming. By securing funding, farmers can invest in high-quality inputs, <br />
            modern equipment, and innovative technologies that boost productivity and <br />
            efficiency. Financial resources enable farmers to adopt best practices in pest <br />
            management, optimize harvesting techniques, and improve overall farm <br />
            infrastructure. Moreover, access to finance facilitates expansion, allowing farmers to <br />
            scale their operations and explore new market opportunities. We are committed to <br />
            connecting farmers with financial institutions and resources, providing guidance on <br />
            loan applications, and offering financial literacy programs. By empowering farmers <br />
            with the necessary financial tools, we help ensure the long-term success and <br />
            resilience of the avocado industry.</p>
        </div>
      </div>
      <div className='member-type'> <h2>membership </h2> <h1>Type</h1>
      
      </div>
      <div className='member-type-para'>
      <p>The Avocado pWallet offers tailored benefits like market access,
         communal harvesting, and compliance support. Higher-tier members enjoy
          extras such as priority booking, 
        financial services, and irrigation financing.</p>
        </div>
    <div className="interactive-form-container">
      <div className="left-section">
        <div className="info-box">
          <h1>Avocado Society of Rwanda</h1>
          <p>
            {step === 1 && "Umwirondoro w'umuhinzi n'aho utuye. Tell us about yourself."}
            {step === 2 && "Aho ubutaka buhingwaho buherereye. Let's understand your land."}
            {step === 3 && "Ibisobanuro by'umurima. Provide details about your farm."}
            {step === 4 && "Ubufasha n'imikoranire akeneye. How can we assist you?"}
          </p>
          <div className="additional-info">
            <h3>Impamvu ibi ari ingenzi:</h3>
            <p>
              {step === 1 && "Amakuru yawe ni ingenzi kuko atuma tubasha kugufasha no kugukurirana neza."}
              {step === 2 && "Ushobora kuba udatuye aho uhinga ntacyo bitwaye. Amakuru y' ubutaka, ubunini bw' umurima n' ibiwuranga bizadufasha kumenya uko wahitamo abafashanyumvire, ntese no ku gutegurana igihe cyo kubasura."}
              {step === 3 && "Ibisobanuro by'umurima bituma dushobora gutanga ubufasha bukwiye."}
              {step === 4 && "Ubufasha tuvuga aha umuhinzi bumugeraho bivuye ku mukoranire n' abafatanyabikwa b' ihuriro. Ni ingenzi ko tubimenya kare kugirango duhurize hamwe n' abafatanyabikorwa bateganije mu ngengo y' imari baduha. Murakoze!"}
            </p>
          </div>
        </div>
      </div>

      <div className="right-section">
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check-circle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2>Thank you! Your registration has been successfully submitted.</h2>
            <p>We will review your information and get back to you soon.</p>
            <p>If you have any questions, feel free to <a href="/contact">contact us</a>.</p>
            <button className="back-home-button" onClick={() => window.location.href = '/'}>
              Back to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-content">
            <ProgressBar currentStep={step} totalSteps={totalSteps} />

            {step === 1 && (
              <FormStep title="Umwirondoro w'umuhinzi waho utuye">
                <label htmlFor="firstname">Amazina <span className="required">*</span></label>
                <input className="form-input" placeholder="Amazina - First Name" name="firstname" value={formData.firstname} onChange={handleChange} />
                <label htmlFor="lastname">Amazina <span className="required">*</span></label>
                <input className="form-input" placeholder="Amazina - Last Name" name="lastname" value={formData.lastname} onChange={handleChange} />
                <label htmlFor="telephone">Telephone <span className="required">*</span></label>

                <input className="form-input" placeholder="Telephone" type="tel" name="telephone" value={formData.telephone} onChange={handleChange} maxLength={10} pattern="\d*"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }} />
                <label htmlFor="dateOfBirth">Itariki y'amavuko <span className="required">*</span></label>
                <input
                  className="form-input"
                  type="date"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  max={new Date().toISOString().split('T')[0]} 
                />
                <label htmlFor="idnumber">Indangamuntu <span className="required">*</span></label>
                <input className="form-input" placeholder="Indangamuntu" type='text' name="idnumber" value={formData.idnumber} onChange={handleChange} maxLength={16} pattern="\d*"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }} />
                <label htmlFor="province">Intara <span className="required">*</span></label>
                <select className='form-input' name="province" value={formData.province} onChange={handleChange}>
                  <option value="">-- Select Province --</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
                <label htmlFor="district">Akarere <span className="required">*</span></label>
                <select className='form-input' name="district" value={formData.district} onChange={handleChange}>
                  <option value="">-- Select District --</option>
                  {filteredDistricts.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
                <label htmlFor="sector">Umurenge <span className="required">*</span></label>
                <select className='form-input' name="sector" value={formData.sector} onChange={handleChange}>
                  <option value="">-- Select Sector --</option>
                  {filteredSectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
                <label htmlFor="cell">Akagari <span className="required">*</span></label>
                <select className='form-input' name="cell" value={formData.cell} onChange={handleChange}>
                  <option value="">-- Select Cell --</option>
                  {filteredCells.map(cell => (
                    <option key={cell} value={cell}>{cell}</option>
                  ))}
                </select>
                <label htmlFor="village">Umudugudu <span className="required">*</span></label>
                <select className='form-input' name="village" value={formData.village} onChange={handleChange}>
                  <option value="">-- Select Village --</option>
                  {filteredVillages.map(village => (
                    <option key={village} value={village}>{village}</option>
                  ))}
                </select>
              </FormStep>
            )}
            {step === 2 && (
              <FormStep title="Amakuru ajyanye n' umurima w' avoka, n' ubwoko bw' ibiti mwateye">
                <label>Aho Umurima Uherereye <span className="required">*</span></label>
                <label htmlFor="province">Intara <span className="required">*</span></label>
                <select className='form-input' name="province" value={step2Data.province} onChange={handleStep2Change}>
                  <option value="">-- Select Province --</option>
                  {provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
                <label htmlFor="district">Akarere <span className="required">*</span></label>
                <select className='form-input' name="district" value={step2Data.district} onChange={handleStep2Change}>
                  <option value="">-- Select District --</option>
                  {filteredDistricts.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
                <label htmlFor="sector">Umurenge <span className="required">*</span></label>
                <select className='form-input' name="sector" value={step2Data.sector} onChange={handleStep2Change}>
                  <option value="">-- Select Sector --</option>
                  {filteredSectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
                <label htmlFor="cell">Akagari <span className="required">*</span></label>
                <select className='form-input' name="cell" value={step2Data.cell} onChange={handleStep2Change}>
                  <option value="">-- Select Cell --</option>
                  {filteredCells.map(cell => (
                    <option key={cell} value={cell}>{cell}</option>
                  ))}
                </select>
                <label htmlFor="village">Umudugudu <span className="required">*</span></label>
                <select className='form-input' name="village" value={step2Data.village} onChange={handleStep2Change}>
                  <option value="">-- Select Village --</option>
                  {filteredVillages.map(village => (
                    <option key={village} value={village}>{village}</option>
                  ))}
                </select>
                <label>Waba waramaze gutera? <span className="required">*</span></label>
                <select
                  className="form-input"
                  name="planted"
                  value={formData.planted}
                  onChange={handleChange}
                >
                  <option value="">Hitamo</option>
                  <option value="yego">Yego</option>
                  <option value="oya">Oya</option>
                </select>

                {formData.planted === 'yego' && (

                  <>
                  <label>Umwaka wateye<span className="required">*</span></label>
                        <select
                          className="form-input"
                          name="yearPlanted"
                          value={formData.farm_age}
                          onChange={handleChange}
                        >
                          <option value="">Hitamo</option>
                          {Array.from({ length: new Date().getFullYear() - 1999 }, (_, i) => (
                            <option key={2000 + i} value={2000 + i}>{2000 + i}</option>
                          ))}
                        </select>

                    <label>Ni ubuhe bwoko bwa avoka wateye?</label>
                    <select
                      className="form-input"
                      name="avocadotype"
                      value={formData.avocadotype}
                      onChange={handleChange}
                    >
                      <option value="">Hitamo</option>
                      <option value="hass">Hass</option>
                      <option value="fuerte">Fuerte</option>
                      <option value="bivanze">Bivanze</option>
                    </select>

                    {formData.avocadotype === 'bivanze' && (
                      <>
                        <label>Niba waravanze Fuerte na Hass, ni kanganahe ku ijana?</label>
                        <select
                          className="form-input"
                          name="mixedpercentage"
                          value={formData.mixedpercentage}
                          onChange={handleChange}
                        >
                          <option value="">Hitamo</option>
                          <option value="Hass ingana na >80%">Hass ingana na {'>'}80%</option>
                          <option value="Hass Ingana na 50-70%
                           ">Hass Ingana na 50-70%
                          </option>
                          <option value="Fuerte ingana na 50%">Fuerte ingana na 50%</option>
                        </select>
                        
                      </>
                    )}
                  </>
                )}
              </FormStep>

            )}

            {step === 3 && (
              <FormStep title="Ibisobanuro by'umurima">
                <label>Ingano y'umurima muri hectare <span className="required">*</span></label>
                <select className="form-input" name="farmsize" value={formData.farmsize} onChange={handleChange}>
                  <option value="">Hitamo</option>
                  <option value="1/4">¼</option>
                  <option value="1/2">½</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value=">10">{'>'}10</option>
                </select>
                <label htmlFor="treecount">Umubare w'ibiti byatewe <span className="required">*</span></label>
                <input className="form-input" placeholder="Umubare w'ibiti" type='number' name="treecount" value={formData.treecount} onChange={handleChange} onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }} />
                <label htmlFor="upinumber">UPI number </label>
                <input className="form-input" placeholder="UPI Number" type='text' name="upinumber" value={formData.upinumber} onChange={handleChange} />
              </FormStep>
            )}

            {step === 4 && (
              <FormStep title="Mu mikoranire yawe na Avocado Society of Rwanda">
                <label> Ni ubuhe bufasha wifuza cyane muri ibi bikurikira:
                  <span className="required">*</span></label>
                <div className="checkbox-group">

                  <label>
                    <input
                      type="checkbox"
                      name="assistance"
                      value="Imihingire"
                      checked={formData.assistance.includes('Imihingire')}
                      onChange={handleCheckboxChange}
                    />
                    Imihingire: Guhabwa umukozi wahuguwe kandi umenyereye akakubera Umuhuzabikorwa w' umurima (Farm Manager). Cyangwa se kuguhugura muri rusange ariko wagaragaje umukozi umwe wishakiye uzaba ashinzwe gushyira mu bikorwa amabwiriza y' ubuhinzi bwa avoka.

                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="assistance"
                      value="Ubujyanama"
                      checked={formData.assistance.includes('Ubujyanama')}
                      onChange={handleCheckboxChange}
                    />
                    Ubujyanama: Guhabwa service zikurikirana uko ushyira mu bikorwa amabwiriza y' ubuziranenge harimo kugusura no kuguha rapport y' igenzura ituma umenya ibigenda neza n' ibyo ukwiye guhindura no kongera.

                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="assistance"
                      value="Inguzanyo"
                      checked={formData.assistance.includes('Inguzanyo')}
                      onChange={handleCheckboxChange}
                    />
                    Serivise z' inguzanyo (Access to Finance): Guhabwa ubufasha mu kugera ku gishoro gikoreshwa ku bikoresho, ingemwe, ifumbire, imiti, n' ibindi byifashishwa mu buhinzi bwa avoka nk' imiziga y' inzuki, ibikoresho byo kuhira, n' abakozi.
                  </label>

                </div>

              </FormStep>
            )}

            <div className="form-buttons">
              {step > 1 && (
                <button type="button" className="prev-button" onClick={prevStep}>
                  <ChevronLeft /> Back
                </button>
              )}
              {step < totalSteps ? (
                <button
                  type="button"
                  className='next-button'
                  onClick={nextStep}
                >
                  Next <ChevronRight />
                </button>


              ) : (
                <button
                  type="submit"
                  className="submits-button"
                  disabled={loading}
                  onClick={handleSubmit}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
            {validationError && <p className="error-message">{validationError}</p>}
          </form>
        )}
      </div>
    </div>
    </>
  )
}

export default Membeship