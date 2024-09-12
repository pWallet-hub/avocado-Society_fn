import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';
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

export default function Register() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    telephone: '',
    idnumber: '',
    village: '',
    cell: '',
    sector: '',
    district: '',
    province: '',
    planted: '',
    avocadotype: '',
    mixedpercentage: '',
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

  useEffect(() => {
    // Initialize provinces
    setProvinces(Provinces());

    // Update filtered lists based on selected formData
    if (formData.province) {
      setFilteredDistricts(Districts(formData.province));
    } else {
      setFilteredDistricts([]);
    }

    if (formData.district) {
      setFilteredSectors(Sectors(formData.district));
    } else {
      setFilteredSectors([]);
    }

    if (formData.sector) {
      setFilteredCells(Cells(formData.sector));
    } else {
      setFilteredCells([]);
    }

    if (formData.cell) {
      setFilteredVillages(Villages(formData.cell));
    } else {
      setFilteredVillages([]);
    }
  }, [formData.province, formData.district, formData.sector, formData.cell]);

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://applicanion-api.onrender.com/api/users', formData);
      console.log('Form submitted successfully:', response.data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isLastStepValid = () => formData.assistance !== '';

  return (
    <div className="interactive-form-container">
      <div className="left-section">
        <div className="info-box">
          <h1>Avocado Society Rwanda</h1>
          <p>
            {step === 1 && "Umwirondoro w'umuhinzi waho utuye. Tell us about yourself."}
            {step === 2 && "Aho ubutaka buhingwaho buherereye. Let's understand your land."}
            {step === 3 && "Ibisobanuro by'umurima. Provide details about your farm."}
            {step === 4 && "Ubufasha n'imikoranire akeneye. How can we assist you?"}
          </p>
          <div className="additional-info">
            <h3>Impamvu ibi ari ingenzi:</h3>
            <p>
              {step === 1 && "Amakuru yawe y'ingenzi atuma dushobora kugufasha neza."}
              {step === 2 && "Kumenya aho ubutaka bwawe buherereye bidufasha mu mikoranire."}
              {step === 3 && "Ibisobanuro by'umurima bituma dushobora gutanga ubufasha bukwiye."}
              {step === 4 && "Ubufasha bukenewe butuma ubucuruzi bwawe butera imbere."}
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
                <input className="form-input" placeholder="Telephone" type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
                <label htmlFor="idnumber">Indangamuntu <span className="required">*</span></label>
                <input className="form-input" placeholder="Indangamuntu" name="idnumber" value={formData.idnumber} onChange={handleChange} />
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
              <FormStep title="Aho ubutaka buhingwaho buherereye">
                <label>Waba waramaze gutera? <span className="required">*</span></label>
                <select className="form-input" name="planted" value={formData.planted} onChange={handleChange}>
                  <option value="">Hitamo</option>
                  <option value="yego">Yego</option>
                  <option value="oya">Oya</option>
                </select>

                <label>Ni ubuhe bwoko bwa avoka wateye? <span className="required">*</span></label>
                <select className="form-input" name="avocadotype" value={formData.avocadotype} onChange={handleChange}>
                  <option value="">Hitamo</option>
                  <option value="hass">Hass</option>
                  <option value="fuerte">Fuerte</option>
                  <option value="bivanze">Bivanze</option>
                </select>

                <label>Niba waravanze Fuerte na Hass, ni kanganahe ku ijana?<span className="required">*</span></label>
                <select className="form-input" name="mixedpercentage" value={formData.mixedpercentage} onChange={handleChange}>
                  <option value="">Hitamo</option>
                  <option value=">60">{'>'}60%</option>
                  <option value="50">50%</option>
                  <option value="40">40%</option>
                  <option value="<20">{'<'}20%</option>
                </select>
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
                <input className="form-input" placeholder="Umubare w'ibiti" type='number' name="treecount" value={formData.treecount} onChange={handleChange} />
                <label htmlFor="upinumber">UPI number <span className="required">*</span></label>
                <input className="form-input" placeholder="UPI Number" type='number' name="upinumber" value={formData.upinumber} onChange={handleChange} />
              </FormStep>
            )}

            {step === 4 && (
             <FormStep title="Ubufasha n'imikoranire akeneye">
             <label>Ni ubuhe bufasha wifuza? <span className="required">*</span></label>
             <div className="checkbox-group">
               <label>
                 <input
                   type="checkbox"
                   name="assistance"
                   value="ubuhinzi"
                   checked={formData.assistance.includes('ubuhinzi')}
                   onChange={handleChange}
                 />
                 Ubuhinzi
               </label>
               <label>
                 <input
                   type="checkbox"
                   name="assistance"
                   value="ubuvugizi"
                   checked={formData.assistance.includes('ubuvugizi')}
                   onChange={handleChange}
                 />
                 Ubuvugizi
               </label>
               <label>
                 <input
                   type="checkbox"
                   name="assistance"
                   value="guhangana-nibibazo"
                   checked={formData.assistance.includes('guhangana-nibibazo')}
                   onChange={handleChange}
                 />
                 Guhangana n'ibibazo
               </label>
               <label>
                 <input
                   type="checkbox"
                   name="assistance"
                   value="ubwishingizi"
                   checked={formData.assistance.includes('ubwishingizi')}
                   onChange={handleChange}
                 />
                 Ubwishingizi
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
                <button type="button" className="next-button" onClick={nextStep}>
                  Next <ChevronRight />
                </button>
              ) : (
                <button type="submit" className="submits-button" disabled={loading || !isLastStepValid()}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
            {error && <p className="error-message">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}