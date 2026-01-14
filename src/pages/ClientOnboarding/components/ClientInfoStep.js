import React from 'react';
import Input from '../../../components/common/Input/Input';
import Select from '../../../components/common/Select/Select';

const ClientInfoStep = ({ formData, onChange }) => {
    return (
        <div className="onboarding-step">
            <h2 className="onboarding-step__title">Client Details</h2>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Client Name</label>
                    <Input
                        className="form-input--full"
                        value={formData.clientName}
                        onChange={(e) => onChange('clientName', e.target.value)}
                        placeholder="Enter client name"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <Input
                        type="email"
                        className="form-input--full"
                        value={formData.email || ''}
                        onChange={(e) => onChange('email', e.target.value)}
                        placeholder="Enter email address"
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Primary Contact Number</label>
                    <Input
                        className="form-input--full"
                        value={formData.primaryContact}
                        onChange={(e) => onChange('primaryContact', e.target.value)}
                        placeholder="Enter contact number"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">WhatsApp Number</label>
                    <Input
                        className="form-input--full"
                        value={formData.whatsappNumber}
                        onChange={(e) => onChange('whatsappNumber', e.target.value)}
                        placeholder="Enter WhatsApp number"
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Reminder Date</label>
                    <div className="date-input-wrapper">
                        <Input
                            type="date"
                            className="form-input--full form-input--date"
                            value={formData.reminderDate || ''}
                            onChange={(e) => onChange('reminderDate', e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Deadline</label>
                    <div className="date-input-wrapper">
                        <Input
                            type="date"
                            className="form-input--full form-input--date"
                            value={formData.deadline || ''}
                            onChange={(e) => onChange('deadline', e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Frequency</label>
                    <Select
                        className="form-select-custom"
                        value={formData.reminderFrequency || ''}
                        onChange={(val) => {
                            onChange('reminderFrequency', val);
                            if (val !== 'Custom') onChange('reminderCustomDays', '');
                        }}
                        placeholder="Select Frequency"
                        options={[
                            'Weekly',
                            'Monthly',
                            'Quarterly',
                            'Yearly',
                            'Custom'
                        ]}
                    />
                </div>
                {formData.reminderFrequency === 'Custom' && (
                    <div className="form-group">
                        <label className="form-label">Days</label>
                        <Input
                            type="number"
                            className="form-input--full"
                            value={formData.reminderCustomDays || ''}
                            onChange={(e) => onChange('reminderCustomDays', e.target.value)}
                            placeholder="e.g. 15"
                            min="1"
                        />
                    </div>
                )}
            </div>

            <div className="form-group">
                <label className="form-label">Address</label>
                <textarea
                    className="form-textarea"
                    value={formData.address}
                    onChange={(e) => onChange('address', e.target.value)}
                    rows="4"
                    placeholder="Enter address"
                />
            </div>
        </div>
    );
};

export default ClientInfoStep;
