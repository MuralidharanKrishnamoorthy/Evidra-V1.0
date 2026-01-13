import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import './Login.css';

const Login = ({ onLogin, onNavigateToRegister }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(formData);
    };

    return (
        <div className="auth-page">
            <div className="auth-hero">
            </div>

            <div className="auth-form-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h2 className="auth-title">Evidra Aura</h2>
                        <p className="auth-subtitle">Welcome back to your AI-powered firm</p>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Email ID</label>
                            <div className="input-wrapper">
                                <Mail className="input-icon" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="name@firm.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="label-row">
                                <label className="form-label">Password</label>
                                <button type="button" className="forgot-link">Forgot?</button>
                            </div>
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

                        <button type="submit" className="auth-submit-btn">
                            Login to Dashboard <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>New to Evidra Aura? <button onClick={onNavigateToRegister} className="auth-link-btn">Create Firm Account</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
