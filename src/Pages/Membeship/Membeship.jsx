import React from 'react'
import avocado5 from '../../assets/avocado5.jpeg'
import logo from '../../assets/LOGO - Avocado Society of Rwanda.png'
import './Membership.css'
import { FaCheckCircle } from "react-icons/fa";
import { FormControl } from '@mui/base/FormControl';

function Membeship() {
  return (
    <div>
      <div className='active-hub'>
        <div className='active-content'>
          <img className='active-img' src={avocado5} alt="Description of image" />
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
      <div className='member-form'>
        <h3>personal information</h3>
        <div className='member-form-content'>
          <label htmlFor="FirstName">Full Name: </label>
          <input type="text" />
        </div>
        <div className='member-form-content1'>
          <label htmlFor="birthdate">Birth Date: </label>
          <input type="date" />
        </div>
        <div className='member-form-content2'>
          <label htmlFor="Address">Address: </label>
          <input type="text" />
        </div>
        <div className='member-form-content3'>
          <label htmlFor="email">Email: </label>
          <input type="email" />
        </div>
        <div className='member-form-content4'>
          <label htmlFor="number">Phone Number: </label>
          <input type="number" />
        </div>
        <div className='comment'>
          <input type="text" />
        </div>
        <h3>Membership Information</h3>
        <div className='member-form-content5'>
          <label htmlFor="upi">Upi: </label>
          <input type="number" />
        </div>
        <div className='member-form-content6'>
          <label htmlFor="upi">Number of Trees : </label>
          <input type="number" />
        </div>
        <div className='member-form-content7'>
          <label htmlFor="varieties">Varieties : </label>
          <select name="varieties" id="">
            <option value="text">select</option>
            <option value="text">avoca</option>
            <option value="text">umwembe</option>
          </select>
        </div>
        <h3>Advanced Service</h3>
        <div className='radio'>
          <div className='radio-text'>
          <label htmlFor="text">Advance Payment:</label>
          <input type="radio" />
          </div>
          <div className='radio-text'>
            <label htmlFor="text">Saving:</label>
            <input type="radio" />
          </div>
          <div className='buto'><button>send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Membeship