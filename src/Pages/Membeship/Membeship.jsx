import { useState } from 'react';
import avocado5 from '../../assets/DSC_2210.jpg'
import logo from '../../assets/LOGO - Avocado Society of Rwanda.png'
import avoca from '../../assets/avica.webp'
import './Membership.css'
import { FaCheckCircle } from "react-icons/fa";


function Membeship() {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    address: '',
    email: '',
    phoneNumber: '',
    journey: '',
    upi: '',
    numberOfTrees: '',
    variety: '',
    advancedService: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.fullName.trim()) formErrors.fullName = 'Full Name is required';
    if (!formData.birthDate.trim()) formErrors.birthDate = 'Birth Date is required';
    if (!formData.address.trim()) formErrors.address = 'Address is required';
    if (!formData.email.trim()) formErrors.email = 'Email is required';
    if (!formData.phoneNumber.trim()) formErrors.phoneNumber = 'Phone Number is required';
    if (formData.journey.trim().length > 300) formErrors.journey = 'Journey should be less than 300 words';
    if (!formData.upi.trim()) formErrors.upi = 'UPI is required';
    if (!formData.numberOfTrees.trim()) formErrors.numberOfTrees = 'Number of Trees is required';
    if (!formData.variety.trim()) formErrors.variety = 'Variety is required';
    if (!formData.advancedService.trim()) formErrors.advancedService = 'Advanced Service is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form data:', formData);
      // Submit form data
    }
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
      <div className='member'>
        <h1>Be a Member</h1>
      </div>
      <div className='member-logo'>
        <img src={logo} alt="" />
        <div className='members-text'>
          <h4>Avocado Society of Rwanda</h4>
          <h1>MEMBERSHIP Form</h1>
        </div>
      </div>
      <form className='member-form' onSubmit={handleSubmit}>
        <h3>personal information</h3>
        <div className='member-form-content'>
          <label htmlFor="fullName">Full Name: </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className='member-form-content1'>
          <label htmlFor="birthdate">Birth Date: </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && <span className="error">{errors.birthDate}</span>}
        </div>
        <div className='member-form-content2'>
          <label htmlFor="Address">Address: </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className='member-form-content3'>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className='member-form-content4'>
          <label htmlFor="number">Phone Number: </label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div className='comment'>
        <input
            type="text"
            name="journey"
            placeholder="In not more than 300 words tell us your journey"
            value={formData.journey}
            onChange={handleChange}
          />
          {errors.journey && <span className="error">{errors.journey}</span>}
        </div>
        <h3>Membership Information</h3>
        <div className='member-form-content5'>
          <label htmlFor="upi">Upi: </label>
          <input
            type="number"
            name="upi"
            value={formData.upi}
            onChange={handleChange}
          />
          {errors.upi && <span className="error">{errors.upi}</span>}
        </div>
        <div className='member-form-content6'>
          <label htmlFor="upi">Number of Trees : </label>
          <input
            type="number"
            name="numberOfTrees"
            value={formData.numberOfTrees}
            onChange={handleChange}
          />
          {errors.numberOfTrees && <span className="error">{errors.numberOfTrees}</span>}
        </div>
        <div className='member-form-content7'>
          <label htmlFor="varieties">Varieties : </label>
          <select
            name="variety"
            onChange={handleChange}
          >
            <option value="text">select</option>
            <option value="text">avoca</option>
            <option value="text">umwembe</option>
          </select>
          {errors.variety && <span className="error">{errors.variety}</span>}
        </div>
        <h3>Advanced Service</h3>
        <div className='radio'>
          <div className='radio-text'>
          <label htmlFor="text">Advance Payment:</label>
          <input
              type="radio"
              name="advancedService"
              value="Saving"
              check={formData.advancedService === 'Advance Payment'}
              onChange={handleChange}
            />
          </div>
          <div className='radio-text'>
            <label htmlFor="text">Saving:</label>
            <input
              
              type="radio"
              name="advancedService"
              value="Advance Payment"
              check={formData.advancedService === 'Saving'}
              onChange={handleChange}
            />
          </div>
          {errors.advancedService && <span className="error">{errors.advancedService}</span>}
          <div className='buto'><button>send</button></div>
        </div>
      </form>
    </>
  )
}

export default Membeship