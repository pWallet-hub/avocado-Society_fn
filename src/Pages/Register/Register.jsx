import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import logo from '../../assets/LOGO_-_Avocado_Society_of_Rwanda.png';
import { FaCheckCircle } from "react-icons/fa";

export default function Register() {
    const [formData, setFormData] = useState({
        amazina: '',
        imyaka: 0,
        umudugudu: '',
        akagari: '',
        umurenge: '',
        akarere: '',
        telefone: '',
        ubuso: '',
    });
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.amazina.trim()) newErrors.amazina = 'Amazina (Name) is required';
        if (!formData.imyaka) newErrors.imyaka = 'Imyaka (Age) is required';
        if (!formData.umudugudu.trim()) newErrors.umudugudu = 'Umudugudu (Village) is required';
        if (!formData.akagari.trim()) newErrors.akagari = 'Akagari (Cell) is required';
        if (!formData.umurenge.trim()) newErrors.umurenge = 'Umurenge (Sector) is required';
        if (!formData.akarere.trim()) newErrors.akarere = 'Akarere (District) is required';
        if (!formData.telefone.trim()) {
            newErrors.telefone = 'Telefone (Phone) is required';
        } else if (!/^\+?\d{1,3}?[-\s]?\(?\d{1,3}\)?[-\s]?\d{3,4}[-\s]?\d{4}$/.test(formData.telefone)) {
            newErrors.telefone = 'Telefone (Phone) is invalid';
        }
        if (!formData.ubuso.trim()) newErrors.ubuso = 'Ubuso (Area) is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await axios.post(
                    'https://applicanion-api.onrender.com/api/users',
                    {
                        amazina: formData.amazina,
                        myaka: formData.imyaka,
                        umudugudu: formData.umudugudu,
                        akagari: formData.akagari,
                        umurenge: formData.umurenge,
                        akarere: formData.akarere,
                        telefone: formData.telefone,
                        ubuso: formData.ubuso,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );
                console.log(response.data);
                setSubmitSuccess(true);
                setFormData({
                    amazina: '',
                    imyaka: 0,
                    umudugudu: '',
                    akagari: '',
                    umurenge: '',
                    akarere: '',
                    telefone: '',
                    ubuso: '',
                });
                setErrors({});
                setSubmitError(null);
            } catch (error) {
                console.error('There was an error submitting the form!', error.message);
                setSubmitError('There was an error submitting the form. Please try again later.');
                setSubmitSuccess(false);
            }
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <div className="register-container">
            <div className="content-wrapper">
                <div className="page-container">
                    <div className="avocado-info">
                        <h2>Avocado Varieties Provisional</h2>
                        <p>The Avocado Society of Rwanda is proposing to provide the following avocado varieties:</p>
                        <ul>
                            <li><strong>Hass:</strong> Known for its creamy texture and rich flavor, Hass avocados are popular for their smooth, dark green skin and nutty taste.</li>
                            <li><strong>Fuerte:</strong> Fuerte avocados are known for their milder flavor and smooth, medium-green skin. They are often used in salads and as a garnish.</li>
                        </ul>
                    </div>
                </div>
                <div className="form-container">
                    <div className="form-header">
                        <img src={logo} alt="ASRI Logo" className="form-logo" />
                        <h1 className="form-title">MEMBERSHIP REGISTRATION</h1>
                        <p className="form-subtitle">Register to avocado-society member</p>
                    </div>

                    {/* Display alert messages */}
                    {submitSuccess && (
                        <div className="alert success-alert">
                            <i className="icon"><FaCheckCircle /></i>
                            Form submitted successfully! Thank you for registering.
                        </div>
                    )}
                    {submitError && (
                        <div className="alert error-alert">
                            {submitError}
                        </div>
                    )}

                    <form className="membership-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Member Name</label>
                            <input
                                type="text"
                                name="amazina"
                                placeholder="Amazina (Name)"
                                value={formData.amazina}
                                onChange={handleChange}
                            />
                            {errors.amazina && <span className="error">{errors.amazina}</span>}
                        </div>

                        <div className="form-group">
                            <label>Age</label>
                            <input
                                type="number"
                                name="imyaka"
                                placeholder="Imyaka (Age)"
                                value={formData.imyaka}
                                onChange={handleChange}
                            />
                            {errors.imyaka && <span className="error">{errors.imyaka}</span>}
                        </div>

                        <div className="form-group">
                            <label>Home Address</label>
                            <input
                                type="text"
                                name="umudugudu"
                                placeholder="Umudugudu (Village)"
                                value={formData.umudugudu}
                                onChange={handleChange}
                            />
                            {errors.umudugudu && <span className="error">{errors.umudugudu}</span>}
                            <input
                                type="text"
                                name="akagari"
                                placeholder="Akagari (Cell)"
                                value={formData.akagari}
                                onChange={handleChange}
                            />
                            {errors.akagari && <span className="error">{errors.akagari}</span>}
                            <input
                                type="text"
                                name="umurenge"
                                placeholder="Umurenge (Sector)"
                                value={formData.umurenge}
                                onChange={handleChange}
                            />
                            {errors.umurenge && <span className="error">{errors.umurenge}</span>}
                            <input
                                type="text"
                                name="akarere"
                                placeholder="Akarere (District)"
                                value={formData.akarere}
                                onChange={handleChange}
                            />
                            {errors.akarere && <span className="error">{errors.akarere}</span>}
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="telefone"
                                placeholder="Telefone (Phone)"
                                value={formData.telefone}
                                onChange={handleChange}
                            />
                            {errors.telefone && <span className="error">{errors.telefone}</span>}
                        </div>

                        <div className="form-group">
                            <label>Area in Ha</label>
                            <input
                                type="text"
                                name="ubuso"
                                placeholder="Ubuso (Area)"
                                value={formData.ubuso}
                                onChange={handleChange}
                            />
                            {errors.ubuso && <span className="error">{errors.ubuso}</span>}
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
