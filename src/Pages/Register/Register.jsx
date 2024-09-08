import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import logo from '../../assets/avocado1.jpg';
import { FaCheckCircle } from "react-icons/fa";
import { ChevronRight, ChevronLeft } from 'lucide-react';

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
    firstName: '',
    lastName: '',
    telephone: '',
    idNumber: '',
    village: '',
    cell: '',
    sector: '',
    district: '',
    province: '',
    planted: '',
    avocadoType: '',
    mixedPercentage: '',
    farmSize: '',
    treeCount: '',
    upiNumber: '',
    assistance: ''
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    try {
        const response = axios.post('https://applicanion-api.onrender.com/api/users', formData);
        console.log('Form submitted successfully');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div className="interactive-form-container">
      {/* Left Section */}
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

      {/* Right Section */}
      <div className="right-section">
        <form onSubmit={handleSubmit} className="form-content">
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
          
          {step === 1 && (
            <FormStep title="Umwirondoro w'umuhinzi waho utuye">
              <input className="form-input" placeholder="Amazina - First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
              <input className="form-input" placeholder="Amazina - Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
              <input className="form-input" placeholder="Telephone" type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
              <input className="form-input" placeholder="Indangamuntu" name="idNumber" value={formData.idNumber} onChange={handleChange} />
              <input className="form-input" placeholder="Umudugudu" name="village" value={formData.village} onChange={handleChange} />
              <input className="form-input" placeholder="Akagali" name="cell" value={formData.cell} onChange={handleChange} />
              <input className="form-input" placeholder="Umurenge" name="sector" value={formData.sector} onChange={handleChange} />
              <input className="form-input" placeholder="Akarere" name="district" value={formData.district} onChange={handleChange} />
              <input className="form-input" placeholder="Intara" name="province" value={formData.province} onChange={handleChange} />
            </FormStep>
          )}

          {step === 2 && (
            <FormStep title="Aho ubutaka buhingwaho buherereye">
              <label>Waba waramaze gutera?</label>
              <select className="form-input" name="planted" value={formData.planted} onChange={handleChange}>
                <option value="">Hitamo</option>
                <option value="yego">Yego</option>
                <option value="oya">Oya</option>
              </select>

              <label>Ni ubuhe bwoko bwa avoka wateye?</label>
              <select className="form-input" name="avocadoType" value={formData.avocadoType} onChange={handleChange}>
                <option value="">Hitamo</option>
                <option value="hass">Hass</option>
                <option value="fuerte">Fuerte</option>
                <option value="bivanze">Bivanze</option>
              </select>

              <label>Niba waravanze Fuerte na Hass, ni kanganahe ku ijana?</label>
              <select className="form-input" name="mixedPercentage" value={formData.mixedPercentage} onChange={handleChange}>
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
              <label>Ingano y'umurima muri hectare</label>
              <select className="form-input" name="farmSize" value={formData.farmSize} onChange={handleChange}>
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

              <input className="form-input" placeholder="Umubare w'ibiti" type="number" name="treeCount" value={formData.treeCount} onChange={handleChange} />

              <input className="form-input" placeholder="UPI number (not mandatory)" name="upiNumber" value={formData.upiNumber} onChange={handleChange} />
            </FormStep>
          )}

          {step === 4 && (
            <FormStep title="Ubufasha n'imikoranire akeneye">
              <label>Ubufasha akeneye na ASR</label>
              <select className="form-input" name="assistance" value={formData.assistance} onChange={handleChange}>
                <option value="">Hitamo</option>
                <option value="kubona-imbuto">Kubona imbuto</option>
                <option value="kontara-gurirwa">Kontara yo kugurirwa umusaruro</option>
                <option value="bds">BDS (Business Development Service)</option>
                <option value="inguzanyo">Inguzanyo iriho inkunga ya 50% ku nyungu ya banki igabanyije 10%</option>
              </select>
            </FormStep>
          )}

          <div className="navigation-buttons">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="nav-button prev-button">
                <ChevronLeft size={20} />
                Previous
              </button>
            )}
            {step < totalSteps ? (
              <button type="button" onClick={nextStep} className="nav-button next-button">
                Next
                <ChevronRight size={20} />
              </button>
            ) : (
              <button type="submit" className="submit-button">Submit</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}