import React from 'react';
import './StepIndicator.css';

const StepIndicator = ({ currentStep }) => {
    const steps = [
        { number: 1, label: 'Client Info' },
        { number: 2, label: 'Services' },
        { number: 3, label: 'Review' }
    ];

    return (
        <div className="step-indicator">
            {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                    <div
                        className={`step ${currentStep >= step.number ? 'step--active' : ''}`}
                    >
                        <div className={`step__circle ${currentStep >= step.number ? 'step__circle--active' : ''}`}>
                            {step.number}
                        </div>
                        <span className={`step__label ${currentStep >= step.number ? 'step__label--active' : ''}`}>
                            {step.label}
                        </span>
                    </div>

                    {index < steps.length - 1 && (
                        <div className={`step__line ${currentStep > step.number ? 'step__line--active' : ''}`} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default StepIndicator;
