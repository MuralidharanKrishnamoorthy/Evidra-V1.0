import React, { useState } from 'react';
import StepIndicator from './components/StepIndicator';
import ClientInfoStep from './components/ClientInfoStep';
import ServicesStep from './components/ServicesStep';
import ReviewStep from './components/ReviewStep';
import Button from '../../components/common/Button/Button';
import './ClientOnboarding.css';

const ClientOnboarding = ({ onNavigate, onAddClient, initialData, onUpdateClient }) => {
    const navigateBack = () => {
        onNavigate('dashboard');
    };

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(initialData || {
        clientName: '',
        email: '',
        primaryContact: '',
        whatsappNumber: '',
        address: '',
        status: 'Active',
        deadline: '',
        reminderDate: '',
        reminderFrequency: '',
        reminderCustomDays: '',
        services: [],
        selectedDocuments: {}
    });

    const handleFormDataChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(prev => prev + 1);
        } else {
            if (initialData && initialData.id) {
                const updatedClient = {
                    ...initialData,
                    ...formData,
                    activeServices: formData.services.map(s => s.name || s),
                    contactNumber: formData.contactNumber || formData.whatsappNumber,
                };

                if (typeof onUpdateClient === 'function') {
                    onUpdateClient(updatedClient);
                }
                alert('Client updated successfully!');
            } else {
                const newClient = {
                    id: `CLI-${Date.now()}`,
                    clientName: formData.clientName,
                    activeServices: formData.services.map(s => s.name || s),
                    onboardedDate: new Date().toLocaleDateString('en-GB'),
                    contactNumber: formData.contactNumber || formData.whatsappNumber,
                    status: 'Active',
                    ...formData
                };

                if (typeof onAddClient === 'function') {
                    onAddClient(newClient);
                }
                alert('Client onboarded successfully!');
            }

            navigateBack();
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        } else {
            navigateBack();
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <ClientInfoStep formData={formData} onChange={handleFormDataChange} />;
            case 2:
                return <ServicesStep formData={formData} onChange={handleFormDataChange} />;
            case 3:
                return <ReviewStep formData={formData} />;
            default:
                return null;
        }
    };

    return (
        <div className="client-onboarding">
            <div className="onboarding-header">
                <StepIndicator currentStep={currentStep} />
            </div>

            <div className="onboarding-content">
                <div className="content-card">
                    {renderStepContent()}

                    <div className="onboarding-actions">
                        <Button
                            variant="secondary"
                            onClick={handlePrevious}
                            className="action-btn--prev"
                        >
                            {currentStep === 1 ? 'Cancel' : 'Previous'}
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleNext}
                            className="action-btn--next"
                        >
                            {currentStep === 3 ? 'Submit' : 'Next'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientOnboarding;
