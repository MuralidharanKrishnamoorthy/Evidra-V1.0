import React, { useState } from 'react';
import { User, Building2, Phone, Mail, Lock, MapPin, Users, Send, Check } from 'lucide-react';
import './Register.css';

const Register = ({ onRegister, onNavigateToLogin }) => {
    const [formData, setFormData] = useState({
        firmName: '',
        caName: '',
        mobileNumber: '',
        email: '',
        password: '',
        city: '',
        firmSize: 'Solo',
        whatsappNumber: '',
        consent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(formData);
    };

    return (
        <div className="auth-page">
            <div className="auth-hero">
            </div>

            <div className="auth-form-container">
                <div className="auth-card register-card">
                    <div className="auth-header">
                        <h2 className="auth-title">Evidra Aura</h2>
                        <p className="auth-subtitle">Empower your CA firm with AI-driven automation</p>
                    </div>

                    <form className="auth-form register-form" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">CA Firm Name</label>
                                <div className="input-wrapper">
                                    <Building2 className="input-icon" size={18} />
                                    <input
                                        type="text"
                                        name="firmName"
                                        className="form-input"
                                        placeholder="Excel & Co."
                                        value={formData.firmName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Contact CA Name</label>
                                <div className="input-wrapper">
                                    <User className="input-icon" size={18} />
                                    <input
                                        type="text"
                                        name="caName"
                                        className="form-input"
                                        placeholder="CA Muralidharan"
                                        value={formData.caName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Mobile Number</label>
                                <div className="input-wrapper">
                                    <Phone className="input-icon" size={18} />
                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        className="form-input"
                                        placeholder="+91 98765 43210"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email ID</label>
                                <div className="input-wrapper">
                                    <Mail className="input-icon" size={18} />
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="ca.name@firm.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <div className="input-wrapper">
                                    <Lock className="input-icon" size={18} />
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-input"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">City</label>
                                <div className="input-wrapper">
                                    <MapPin className="input-icon" size={18} />
                                    <input
                                        type="text"
                                        name="city"
                                        className="form-input"
                                        placeholder="Chennai"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Firm Size</label>
                                <div className="input-wrapper">
                                    <Users className="input-icon" size={18} />
                                    <select
                                        name="firmSize"
                                        className="form-input select-input"
                                        value={formData.firmSize}
                                        onChange={handleChange}
                                    >
                                        <option value="Solo">Solo Practice</option>
                                        <option value="2-5">2 - 5 Members</option>
                                        <option value="6-10">6 - 10 Members</option>
                                        <option value="10+">10+ Members</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">WhatsApp Number</label>
                                <div className="input-wrapper">
                                    <Send className="input-icon" size={18} />
                                    <input
                                        type="tel"
                                        name="whatsappNumber"
                                        className="form-input"
                                        placeholder="+91 98765 43210"
                                        value={formData.whatsappNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="consent-wrapper">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">
                                    I consent to data processing and WhatsApp communications as per Evidra's MVP policy.
                                </span>
                            </label>
                        </div>

                        <button type="submit" className="auth-submit-btn">
                            Activate My Firm Dashboard <Check size={18} />
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>Already have an account? <button onClick={onNavigateToLogin} className="auth-link-btn">Firm Login</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
