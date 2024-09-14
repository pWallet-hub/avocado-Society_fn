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
  if (name === 'idnumber' && value.length > 16) {
    return; // Don't update state if ID number exceeds 16 digits
  }
  if (name === 'telephone' && value.length > 10) {
    return; // Don't update state if phone number exceeds 10 digits
  }
  if (name === 'farmsize' && value.length > 10) {
    return; // Don't update state if farm size exceeds 10 digits
  }
  if (name === 'treecount' && value.length > 10) {
    return; // Don't update state if tree count exceeds 10 digits
  }

  const validateStep1 = (formData) => {
    const requiredFields = ['firstname', 'lastname', 'telephone', 'idnumber', 'province', 'district', 'sector', 'cell', 'village'];
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const validateStep2 = (formData) => {
    const requiredFields = ['planted'];
    if (formData.planted === 'yego') {
      requiredFields.push('avocadotype');
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

    // Construct the payload with the required API format
    const payload = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      telephone: formData.telephone,
      idnumber: formData.idnumber,
      village: formData.village,
      cell: formData.cell,
      sector: formData.sector,
      district: formData.district,
      province: formData.province,
      planted: formData.planted,
      avocadotype: formData.avocadotype,
      mixedpercentage: formData.mixedpercentage,
      farmsize: formData.farmsize,
      treecount: formData.treecount,
      upinumber: formData.upinumber,
      assistance: formData.assistance
    };

    try {
      const response = await axios.post('https://applicanion-api.onrender.com/api/users', payload);
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
                <input className="form-input" placeholder="Umubare w'ibiti" type='number' name="treecount" value={formData.treecount} onChange={handleChange}  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}  />
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
                    Imihingire: Guhabwa umukozi wahuguwe kandi umenyereye akakubera farm manager. Cyangwa se kuguhurura muri rusange ariko wagaragaje umukozi umwe wishakiye uzaba ashinzwe gushyira mu bikorwa amabwiriza y' ubuhinzi bwa avoka.

                  </label>

                  <label>
                    <input
                      type="checkbox"
                      name="assistance"
                      value="Ubujyanama"
                      checked={formData.assistance.includes('Ubujyanama')}
                      onChange={handleCheckboxChange}
                    />
                    Ubujyanama: Guhabwa service zikurikirana uko ushyira mu bikorwa amabwiriza y' ubuziranenge harimo kugusurano kuguha rapport y' igenzura ituma umenya ibigenda neza n' ibyo ukwiye guhindura no kongere.

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
  );
}