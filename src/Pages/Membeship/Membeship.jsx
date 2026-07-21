import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle } from "react-icons/fa";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Provinces, Districts, Sectors, Cells, Villages } from 'rwanda';

// Asset Imports
import avocado5 from '../../assets/symposium.jpg';
import avoca from '../../assets/member.jpg';
import audience from '../../assets/audience.jpg'
import './Membership.css';

const heroStockPhoto = 'https://images.unsplash.com/photo-1726177551991-270f9e79b65e?auto=format&fit=crop&w=1800&q=80';

const benefits = [
  {
    icon: FaCheckCircle,
    title: 'Market Access',
    img: audience,
    text: `Ensuring market access for avocado farmers is crucial for the growth and sustainability of the avocado industry. By opening new markets and expanding existing ones, farmers can increase their revenue, reduce waste, and enhance the overall economic stability of their communities. Access to international markets can be particularly beneficial, providing opportunities to meet the growing global demand for avocados.`,
  },
  {
    icon: FaCheckCircle,
    title: 'Extension Service',
    img: avocado5,
    text: `Our comprehensive extension services are designed to support avocado farmers in every aspect of their operations, ensuring optimal productivity and sustainability. We offer expert pest management solutions tailored to protect your crops from harmful pests while minimizing environmental impact. Our harvesting support ensures that you employ the best practices for maximum yield and quality.`,
  },
  {
    icon: FaCheckCircle,
    title: 'Access to Finance',
    img: avoca,
    text: `Access to finance is a critical component for the advancement and sustainability of avocado farming. By securing funding, farmers can invest in high-quality inputs, modern equipment, and innovative technologies that boost productivity and efficiency. Financial resources enable farmers to adopt best practices in pest management and optimize harvesting techniques.`,
  },
];

const FormStep = ({ title, children }) => (
  <div className="form-step">
    <h2>{title}</h2>
    <div className="form-step-fields">{children}</div>
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
    assistance: []
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

  const [step2Data, setStep2Data] = useState({
    province: '',
    district: '',
    sector: '',
    cell: '',
    village: ''
  });

  useEffect(() => {
    setProvinces(Provinces());
  }, []);

  useEffect(() => {
    if (step2Data.province) {
      setFilteredDistricts(Districts(step2Data.province));
    } else {
      setFilteredDistricts([]);
    }
    setFilteredSectors([]);
    setFilteredCells([]);
    setFilteredVillages([]);
  }, [step2Data.province]);

  useEffect(() => {
    if (step2Data.province && step2Data.district) {
      setFilteredSectors(Sectors(step2Data.province, step2Data.district));
    } else {
      setFilteredSectors([]);
    }
    setFilteredCells([]);
    setFilteredVillages([]);
  }, [step2Data.district, step2Data.province]);

  useEffect(() => {
    if (step2Data.province && step2Data.district && step2Data.sector) {
      setFilteredCells(Cells(step2Data.province, step2Data.district, step2Data.sector));
    } else {
      setFilteredCells([]);
    }
    setFilteredVillages([]);
  }, [step2Data.sector, step2Data.province, step2Data.district]);

  useEffect(() => {
    if (step2Data.province && step2Data.district && step2Data.sector && step2Data.cell) {
      setFilteredVillages(Villages(step2Data.province, step2Data.district, step2Data.sector, step2Data.cell));
    } else {
      setFilteredVillages([]);
    }
  }, [step2Data.cell, step2Data.province, step2Data.district, step2Data.sector]);

  useEffect(() => {
    if (formData.province) {
      setFilteredDistricts(Districts(formData.province));
    } else {
      setFilteredDistricts([]);
    }
  }, [formData.province]);

  useEffect(() => {
    if (formData.province && formData.district) {
      setFilteredSectors(Sectors(formData.province, formData.district));
    } else {
      setFilteredSectors([]);
    }
  }, [formData.district, formData.province]);

  useEffect(() => {
    if (formData.province && formData.district && formData.sector) {
      setFilteredCells(Cells(formData.province, formData.district, formData.sector));
    } else {
      setFilteredCells([]);
    }
  }, [formData.sector, formData.province, formData.district]);

  useEffect(() => {
    if (formData.province && formData.district && formData.sector && formData.cell) {
      setFilteredVillages(Villages(formData.province, formData.district, formData.sector, formData.cell));
    } else {
      setFilteredVillages([]);
    }
  }, [formData.cell, formData.province, formData.district, formData.sector]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'age') {
      const birthDate = new Date(value);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      if (calculatedAge < 18) {
        setValidationError('You must be at least 18 years old to register.');
      } else {
        setValidationError('');
      }
    }

    if (name === 'idnumber' && value.length > 16) return; 
    if (name === 'telephone' && value.length > 10) return;
    if (name === 'farmsize' && value.length > 10) return; 
    if (name === 'treecount' && value.length > 10) return;

    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'province' && { district: '', sector: '', cell: '', village: '' }),
      ...(name === 'district' && { sector: '', cell: '', village: '' }),
      ...(name === 'sector' && { cell: '', village: '' }),
      ...(name === 'cell' && { village: '' })
    }));
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

  const validateStep1 = (data) => {
    const requiredFields = ['firstname', 'lastname', 'telephone', 'age', 'idnumber', 'province', 'district', 'sector', 'cell', 'village'];
    return requiredFields.every(field => data[field] && data[field].trim() !== '');
  };

  const validateStep2 = (data) => {
    if (!data.planted || data.planted.trim() === '') return false;
    if (data.planted === 'yego') {
      if (!data.yearPlanted || data.yearPlanted.trim() === '') return false;
      if (!data.avocadotype || data.avocadotype.trim() === '') return false;
      if (data.avocadotype === 'bivanze' && (!data.mixedpercentage || data.mixedpercentage.trim() === '')) return false;
    }
    return true;
  };

  const validateStep3 = (data) => {
    return data.farmsize.trim() !== '' && data.treecount.toString().trim() !== '';
  };

  const validateStep4 = (data) => {
    return data.assistance && data.assistance.length > 0;
  };

  const validateStep = (currentStep, data) => {
    switch (currentStep) {
      case 1: return validateStep1(data);
      case 2: return validateStep2(data);
      case 3: return validateStep3(data);
      case 4: return validateStep4(data);
      default: return false;
    }
  };

  const nextStep = () => {
    if (validateStep(step, formData)) {
      setStep(prev => Math.min(prev + 1, totalSteps));
      setValidationError('');
    } else {
      setValidationError('All fields are required. Please fill in all the information before proceeding.');
    }
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

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
      treecount: formData.treecount || 0, 
      upinumber: formData.upinumber || '',      
      assistance: formData.assistance.join(', ')
    };

    if (formData.planted === 'yego') {
      payload.farm_age = formData.yearPlanted || 0;
      payload.avocadotype = formData.avocadotype || '';
      payload.mixedpercentage = formData.mixedpercentage || '';
    }

    try {
      const response = await axios.post('https://applicanion-api.onrender.com/api/users', payload);
      console.log('Form submitted successfully:', response.data);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      if (err.response) {
        setError(`Submission failed: ${err.response.data.message || 'Please try again.'}`);
      } else {
        setError('Submission failed. Please check your internet connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Visibility helpers for progressive reveal
  const isInitialFourFilled = formData.firstname.trim() && formData.lastname.trim() && formData.telephone.trim() && formData.age.trim();

  return (
    <div className="agrigo-membership">
      <Helmet>
        <title>Membership Benefits | Avocado Society of Rwanda</title>
        <meta name="description" content="Join the Avocado Society of Rwanda. Get access to global markets, extension services, finance, and the pWallet digital platform." />
        <link rel="canonical" href="https://avocado-society-rwanda.netlify.app/Membership" />
      </Helmet>

      {/* ── HERO BANNER ── */}
      <header className='mem-hero'>
        <img className='mem-hero-img' src={heroStockPhoto} alt="Avocados ripening on the tree" />
        <div className='mem-hero-scrim' />
        <div className='mem-hero-inner'>
          <span className='mem-eyebrow'>Avocado Society of Rwanda</span>
          <h1>Membership</h1>
          <span className='mem-hero-tag'>Benefits</span>
        </div>
      </header>

      {/* ── BENEFITS SECTION ── */}
      <section className='mem-benefits-section'>
        <div className="mem-container">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div className={`mem-benefit-row ${i % 2 === 1 ? 'mem-benefit-row--reverse' : ''}`} key={benefit.title}>
                <div className='mem-benefit-media-box'>
                  <img src={benefit.img} alt={benefit.title} />
                </div>
                <div className='mem-benefit-content-box'>
                  <span className='mem-benefit-icon-span'><Icon /></span>
                  <h2>{benefit.title}</h2>
                  <p className="justify-text">{benefit.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── MEMBERSHIP TYPE DISPLAY HEADER ── */}
      <div className='member-type'>
        <h2>Membership</h2>
        <h1>Type</h1>
      </div>
      <div className='member-type-para'>
        <p className="justify-text center-max-width">The Avocado pWallet offers tailored benefits like market access, communal harvesting, and compliance support. Higher-tier members enjoy extras such as priority booking, financial services, and irrigation financing.</p>
      </div>

      {/* ── CENTERED STEPPERS LAYOUT ── */}
      <section className="interactive-form-section">
        <div className="interactive-form-centered-flow">
          
          {/* Centered Intro Guidance Box */}
          <div className="left-section-centered">
            <div className="info-box">
              <span className="info-box-pill">ASR Guidance Hub</span>
              <h1>Avocado Society of Rwanda</h1>
              <p className="step-desc-kiga">
                {step === 1 && "Umwirondoro w'umuhinzi n'aho utuye. Tell us about yourself."}
                {step === 2 && "Aho ubutaka buhingwaho buherereye. Let's understand your land."}
                {step === 3 && "Ibisobanuro by'umurima. Provide details about your farm."}
                {step === 4 && "Ubufasha n'imikoranire akeneye. How can we assist you?"}
              </p>
              
              <div className="additional-info">
                <h3>Impamvu ibi ari ingenzi:</h3>
                <p className="justify-text">
                  {step === 1 && "Amakuru yawe ni ingenzi kuko atuma tubasha kugufasha no kugukurirana neza."}
                  {step === 2 && "Ushobora kuba udatuye aho uhinga ntacyo bitwaye. Amakuru y' ubutaka, ubunini bw' umurima n' ibiwuranga bizadufasha kumenya uko wahitamo abafashanyumvire, ntese no ku gutegurana igihe cyo kubasura."}
                  {step === 3 && "Ibisobanuro by'umurima bituma dushobora gutanga ubufasha bukwiye."}
                  {step === 4 && "Ubufasha tuvuga aha umuhinzi bumugeraho bivuye ku mukoranire n' abafatanyabikwa b' ihuriro. Ni ingenzi ko tubimenya kare kugirango duhurize hamwe n' abafatanyabikorwa bateganije mu ngengo y' imari baduha. Murakoze!"}
                </p>
              </div>
            </div>
          </div>

          {/* Centered Form Wizard Card with Progressive Disclosures */}
          <div className="right-section-centered">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2>Thank you! Your registration has been successfully submitted.</h2>
                <p>We will review your information and get back to you soon.</p>
                <button className="back-home-button" onClick={() => window.location.href = '/'}>
                  Back to Home
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-content">
                <ProgressBar currentStep={step} totalSteps={totalSteps} />

                {step === 1 && (
                  <FormStep title="Umwirondoro w'umuhinzi waho utuye">
                    {/* The Initial 4 Inputs */}
                    <div className="reveal-field">
                      <label htmlFor="firstname">Amazina ya Mbere <span className="required">*</span></label>
                      <input className="form-input" placeholder="First Name" name="firstname" value={formData.firstname} onChange={handleChange} />
                    </div>
                    
                    <div className="reveal-field">
                      <label htmlFor="lastname">Amazina y'Ahanyuma <span className="required">*</span></label>
                      <input className="form-input" placeholder="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} />
                    </div>
                    
                    <div className="reveal-field">
                      <label htmlFor="telephone">Telephone <span className="required">*</span></label>
                      <input className="form-input" placeholder="Telephone" type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
                    </div>
                    
                    <div className="reveal-field">
                      <label htmlFor="dateOfBirth">Itariki y'amavuko <span className="required">*</span></label>
                      <input className="form-input" type="date" name="age" value={formData.age} onChange={handleChange} max={new Date().toISOString().split('T')[0]} />
                    </div>
                    
                    {/* Progressively Disclosed Dropdowns / ID Inputs */}
                    {isInitialFourFilled && (
                      <div className="reveal-field fade-in-element">
                        <label htmlFor="idnumber">Indangamuntu <span className="required">*</span></label>
                        <input className="form-input" placeholder="Indangamuntu" type='text' name="idnumber" value={formData.idnumber} onChange={handleChange} />
                      </div>
                    )}
                    
                    {isInitialFourFilled && (
                      <div className="reveal-field fade-in-element">
                        <label htmlFor="province">Intara <span className="required">*</span></label>
                        <select className='form-input' name="province" value={formData.province} onChange={handleChange}>
                          <option value="">-- Select Province --</option>
                          {provinces.map(prov => (
                            <option key={prov} value={prov}>{prov}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {formData.province && (
                      <div className="reveal-field fade-in-element">
                        <label htmlFor="district">Akarere <span className="required">*</span></label>
                        <select className='form-input' name="district" value={formData.district} onChange={handleChange}>
                          <option value="">-- Select District --</option>
                          {filteredDistricts.map(dist => (
                            <option key={dist} value={dist}>{dist}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {formData.district && (
                      <div className="reveal-field fade-in-element">
                        <label htmlFor="sector">Umurenge <span className="required">*</span></label>
                        <select className='form-input' name="sector" value={formData.sector} onChange={handleChange}>
                          <option value="">-- Select Sector --</option>
                          {filteredSectors.map(sec => (
                            <option key={sec} value={sec}>{sec}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {formData.sector && (
                      <div className="reveal-field fade-in-element">
                        <label htmlFor="cell">Akagari <span className="required">*</span></label>
                        <select className='form-input' name="cell" value={formData.cell} onChange={handleChange}>
                          <option value="">-- Select Cell --</option>
                          {filteredCells.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {formData.cell && (
                      <div className="reveal-field fade-in-element">
                        <label htmlFor="village">Umudugudu <span className="required">*</span></label>
                        <select className='form-input' name="village" value={formData.village} onChange={handleChange}>
                          <option value="">-- Select Village --</option>
                          {filteredVillages.map(v => (
                            <option key={v} value={v}>{v}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </FormStep>
                )}

                {step === 2 && (
                  <FormStep title="Amakuru ajyanye n' umurima w' avoka, n' ubwoko bw' ibiti mwateye">
                    <label>Aho Umurima Uherereye <span className="required">*</span></label>
                    
                    <select className='form-input' name="province" value={step2Data.province} onChange={handleStep2Change}>
                      <option value="">-- Select Province --</option>
                      {provinces.map(prov => (
                        <option key={prov} value={prov}>{prov}</option>
                      ))}
                    </select>

                    {step2Data.province && (
                      <select className='form-input fade-in-element' name="district" value={step2Data.district} onChange={handleStep2Change}>
                        <option value="">-- Select District --</option>
                        {filteredDistricts.map(dist => (
                          <option key={dist} value={dist}>{dist}</option>
                        ))}
                      </select>
                    )}

                    {step2Data.district && (
                      <select className='form-input fade-in-element' name="sector" value={step2Data.sector} onChange={handleStep2Change}>
                        <option value="">-- Select Sector --</option>
                        {filteredSectors.map(sec => (
                          <option key={sec} value={sec}>{sec}</option>
                        ))}
                      </select>
                    )}

                    {step2Data.sector && (
                      <select className='form-input fade-in-element' name="cell" value={step2Data.cell} onChange={handleStep2Change}>
                        <option value="">-- Select Cell --</option>
                        {filteredCells.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    )}

                    {step2Data.cell && (
                      <select className='form-input fade-in-element' name="village" value={step2Data.village} onChange={handleStep2Change}>
                        <option value="">-- Select Village --</option>
                        {filteredVillages.map(v => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    )}

                    {step2Data.village && (
                      <div className="fade-in-element" style={{marginTop: '1rem'}}>
                        <label>Waba waramaze gutera? <span className="required">*</span></label>
                        <select className="form-input" name="planted" value={formData.planted} onChange={handleChange}>
                          <option value="">Hitamo</option>
                          <option value="yego">Yego</option>
                          <option value="oya">Oya</option>
                        </select>
                      </div>
                    )}

                    {formData.planted === 'yego' && (
                      <div className="fade-in-element">
                        <label>Umwaka wateye <span className="required">*</span></label>
                        <select className="form-input" name="yearPlanted" value={formData.yearPlanted} onChange={handleChange}>
                          <option value="">Hitamo</option>
                          {Array.from({ length: new Date().getFullYear() - 1999 }, (_, i) => (
                            <option key={2000 + i} value={2000 + i}>{2000 + i}</option>
                          ))}
                        </select>

                        <label>Ni ubuhe bwoko bwa avoka wateye? <span className="required">*</span></label>
                        <select className="form-input" name="avocadotype" value={formData.avocadotype} onChange={handleChange}>
                          <option value="">Hitamo</option>
                          <option value="hass">Hass</option>
                          <option value="fuerte">Fuerte</option>
                          <option value="bivanze">Bivanze</option>
                        </select>

                        {formData.avocadotype === 'bivanze' && (
                          <div className="fade-in-element">
                            <label>Niba waravanze Fuerte na Hass, ni kanganahe ku ijana? <span className="required">*</span></label>
                            <select className="form-input" name="mixedpercentage" value={formData.mixedpercentage} onChange={handleChange}>
                              <option value="">Hitamo</option>
                              <option value="Hass ingana na >80%">Hass ingana na {'>'}80%</option>
                              <option value="Hass Ingana na 50-70%">Hass Ingana na 50-70%</option>
                              <option value="Fuerte ingana na 50%">Fuerte ingana na 50%</option>
                            </select>
                          </div>
                        )}
                      </div>
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

                    {formData.farmsize && (
                      <div className="fade-in-element">
                        <label htmlFor="treecount">Umubare w'ibiti byatewe <span className="required">*</span></label>
                        <input className="form-input" placeholder="Umubare w'ibiti" type='number' name="treecount" value={formData.treecount} onChange={handleChange} />
                      </div>
                    )}
                    
                    {formData.treecount && (
                      <div className="fade-in-element">
                        <label htmlFor="upinumber">UPI number</label>
                        <input className="form-input" placeholder="UPI Number" type='text' name="upinumber" value={formData.upinumber} onChange={handleChange} />
                      </div>
                    )}
                  </FormStep>
                )}

                {step === 4 && (
                  <FormStep title="Mu mikoranire yawe na Avocado Society of Rwanda">
                    <label>Ni ubuhe bufasha wifuza cyane muri ibi bikurikira: <span className="required">*</span></label>
                    <div className="checkbox-group">
                      <label>
                        <input type="checkbox" name="assistance" value="Imihingire" checked={formData.assistance.includes('Imihingire')} onChange={handleCheckboxChange} />
                        <span className="check-label-bold">Imihingire:</span> Guhabwa umukozi wahuguwe kandi umenyereye akakubera Umuhuzabikorwa w' umurima (Farm Manager).
                      </label>
                      <label>
                        <input type="checkbox" name="assistance" value="Ubujyanama" checked={formData.assistance.includes('Ubujyanama')} onChange={handleCheckboxChange} />
                        <span className="check-label-bold">Ubujyanama:</span> Guhabwa service zikurikirana uko ushyira mu bikorwa amabwiriza y' ubuziranenge harimo kugusura.
                      </label>
                      <label>
                        <input type="checkbox" name="assistance" value="Inguzanyo" checked={formData.assistance.includes('Inguzanyo')} onChange={handleCheckboxChange} />
                        <span className="check-label-bold">Serivise z' inguzanyo (Access to Finance):</span> Guhabwa ubufasha mu kugera ku gishoro gikoreshwa ku bikoresho.
                      </label>
                    </div>
                  </FormStep>
                )}

                <div className="form-buttons">
                  {step > 1 && (
                    <button type="button" className="prev-button" onClick={prevStep}>
                      <ChevronLeft className="btn-icon" /> Back
                    </button>
                  )}
                  {step < totalSteps ? (
                    <button type="button" className='next-button' onClick={nextStep}>
                      Next <ChevronRight className="btn-icon" />
                    </button>
                  ) : (
                    <button type="submit" className="submits-button" disabled={loading}>
                      {loading ? 'Submitting...' : 'Submit Form'}
                    </button>
                  )}
                </div>
                {validationError && <p className="error-message">{validationError}</p>}
                {error && <p className="error-message">{error}</p>}
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Membeship;