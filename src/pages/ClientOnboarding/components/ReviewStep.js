import React from 'react';
import { SERVICES_DATA } from '../../../data/servicesData';
import whatsappIcon from '../../../assets/images/whatsapp.png';

const ReviewStep = ({ formData }) => {
    return (
        <div className="onboarding-step">
            <h2 className="onboarding-step__title">Review Details</h2>
            <p className="onboarding-step__subtitle">Please review the client information before submitting</p>

            <div className="review-section">
                <h3 className="review-section__title">Client Information</h3>
                <div className="review-grid">
                    <div className="review-item">
                        <label>Client Name</label>
                        <p>{formData.clientName || '-'}</p>
                    </div>
                    <div className="review-item">
                        <label>Email Address</label>
                        <p>{formData.email || '-'}</p>
                    </div>
                    <div className="review-item">
                        <label>Primary Contact</label>
                        <p>{formData.primaryContact || '-'}</p>
                    </div>
                    <div className="review-item">
                        <label>WhatsApp Number</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <img src={whatsappIcon} alt="WhatsApp" width="16" height="16" />
                            <p style={{ margin: 0 }}>{formData.whatsappNumber || '-'}</p>
                        </div>
                    </div>
                    <div className="review-item">
                        <label>Reminder Frequency</label>
                        <p>
                            {formData.reminderFrequency === 'Custom'
                                ? `Every ${formData.reminderCustomDays || '?'} Days`
                                : (formData.reminderFrequency || '-')}
                        </p>
                    </div>
                    <div className="review-item">
                        <label>Reminder Date</label>
                        <p>{formData.reminderDate || '-'}</p>
                    </div>
                    <div className="review-item">
                        <label>Deadline</label>
                        <p>{formData.deadline || '-'}</p>
                    </div>
                    <div className="review-item review-item--full">
                        <label>Address</label>
                        <p>{formData.address || '-'}</p>
                    </div>
                </div>
            </div>

            <div className="review-section">
                <h3 className="review-section__title">Selected Services</h3>
                {(!formData.services || formData.services.length === 0) ? (
                    <p className="no-services">No services selected</p>
                ) : (
                    <div className="service-tags">
                        {formData.services.map((service, index) => {
                            const docs = formData.selectedDocuments?.[service] || [];

                            return (
                                <div key={index} className="service-tag-wrapper">
                                    <span className="service-tag">{service}</span>
                                    {docs.length > 0 && (
                                        <div className="service-tooltip">
                                            <div className="tooltip-header">Selected Documents:</div>
                                            <ul className="tooltip-list">
                                                {docs.map((doc, i) => (
                                                    <li key={i}>{doc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewStep;
