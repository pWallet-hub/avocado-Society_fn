import React from 'react'
import './Register.css'
import logo from '../../assets/LOGO_-_Avocado_Society_of_Rwanda.png'

export default function Register() {
    return (
        <div className="form-container">
            <div className="form-header">
                <img src={logo} alt="ASRI Logo" className="form-logo" />
                <h1 className="form-title">MEMBERSHIP REGISTERATION</h1>
                <p className="form-subtitle">Register to avocado-society member</p>
            </div>
            <form className="membership-form">
                <div className="form-group">
                    <label>Member Name</label>
                    <div className="form-row">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" />
                </div>
                <div className="form-group">
                    <label>Home Address</label>
                    <input type="text" placeholder="Village" />
                    <input type="text" placeholder="Cell" />
                    <input type="text" placeholder="Sector" />
                    <input type="text" placeholder="District" />
                    <input type="text" placeholder="Province or City" />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <div className="form-row">
                        <label><input type="radio" name="gender" value="Female" /> Female</label>
                        <label><input type="radio" name="gender" value="Male" /> Male</label>
                        <label><input type="radio" name="gender" value="NotIdentify" /> Don't want to identify</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Member E-mail</label>
                    <input type="email" placeholder="example@example.com" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Phone number" />
                </div>
                <div className="form-group">
                    <label>Area in Ha</label>
                    <input type="number" placeholder="Area in Ha" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea placeholder="Description"></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};
