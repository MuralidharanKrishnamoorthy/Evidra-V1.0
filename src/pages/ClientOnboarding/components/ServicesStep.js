import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../../../data/servicesData';
import './ServicesStep.css';

const ServicesStep = ({ formData, onChange }) => {
    const [activeServiceId, setActiveServiceId] = useState(null);

    const isDocumentSelected = (serviceId, docName) => {
        const serviceDocs = formData.selectedDocuments?.[serviceId] || [];
        return serviceDocs.includes(docName);
    };

    const toggleDocument = (serviceId, docName) => {
        const currentServiceDocs = formData.selectedDocuments?.[serviceId] || [];
        let newServiceDocs;

        if (currentServiceDocs.includes(docName)) {
            newServiceDocs = currentServiceDocs.filter(d => d !== docName);
        } else {
            newServiceDocs = [...currentServiceDocs, docName];
        }

        const newSelectedDocuments = {
            ...formData.selectedDocuments,
            [serviceId]: newServiceDocs
        };

        onChange('selectedDocuments', newSelectedDocuments);

        const serviceTitle = SERVICES_DATA.find(s => s.id === serviceId)?.title;
        if (serviceTitle) {
            const currentServices = formData.services || [];
            const hasAnyDoc = newServiceDocs.length > 0;
            let newServicesList = [...currentServices];

            if (hasAnyDoc && !currentServices.includes(serviceTitle)) {
                newServicesList.push(serviceTitle);
            } else if (!hasAnyDoc && currentServices.includes(serviceTitle)) {
                newServicesList = newServicesList.filter(s => s !== serviceTitle);
            }
            onChange('services', newServicesList);
        }
    };

    const activeServiceData = activeServiceId ? SERVICES_DATA.find(s => s.id === activeServiceId) : null;

    return (
        <div className="onboarding-step">
            <h2 className="onboarding-step__title">Compliance Requirements</h2>

            <div className="services-container">
                <div className="services-sidebar">
                    <div className="services-sidebar__header">
                        <h3 className="services-sidebar__title">Services</h3>
                        <p className="services-sidebar__subtitle">Select a service to view required documents</p>
                    </div>

                    <div className="services-list">
                        {SERVICES_DATA.map(service => {
                            const isActive = activeServiceId === service.id;
                            const serviceDocs = formData.selectedDocuments?.[service.id] || [];
                            const hasSelection = serviceDocs.length > 0;

                            return (
                                <div
                                    key={service.id}
                                    className={`service-item ${isActive ? 'service-item--active' : ''} ${hasSelection ? 'service-item--has-selection' : ''}`}
                                    onClick={() => setActiveServiceId(service.id)}
                                >
                                    <div className="service-item__content">
                                        {hasSelection && <div className="service-item__check"><Check size={12} color="white" /></div>}
                                        <span className="service-item__title">{service.title}</span>
                                    </div>
                                    <ChevronRight size={16} className="service-item__chevron" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="documents-panel">
                    {activeServiceData ? (
                        <>
                            <div className="documents-header">
                                <h3 className="documents-title">{activeServiceData.title}</h3>
                                <h4 className="documents-section-title">Required Documents</h4>
                            </div>

                            <div className="documents-list">
                                {activeServiceData.documents.map((doc, index) => {
                                    const isSelected = isDocumentSelected(activeServiceId, doc);
                                    return (
                                        <div
                                            key={index}
                                            className={`document-item ${isSelected ? 'document-item--selected' : ''}`}
                                            onClick={() => toggleDocument(activeServiceId, doc)}
                                        >
                                            <div className={`checkbox ${isSelected ? 'checkbox--checked' : ''}`}>
                                                {isSelected && <Check size={14} color="white" />}
                                            </div>
                                            <span className="document-name">{doc}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <div className="no-selection-placeholder">
                            <p>Select a service from the left to view and select required documents.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServicesStep;
