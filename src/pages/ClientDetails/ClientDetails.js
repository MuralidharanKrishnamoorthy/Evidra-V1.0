import React, { useState, useEffect } from 'react';
import { Mail, Phone, Download, Eye, ArrowLeft, RefreshCw, X, Trash2 } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { calculateNextReminder } from '../../utils/dateUtils';
import pdfIcon from '../../assets/images/pdf.png';
import excelIcon from '../../assets/images/excel.png';
import whatsappIcon from '../../assets/images/whatsapp.png';
import LoadingOverlay from '../../components/common/LoadingOverlay/LoadingOverlay';
import './ClientDetails.css';

const ClientDetails = ({ client, onBack, onUpdateClient, showToast }) => {
    const [activeTab, setActiveTab] = useState('services');
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const openServiceDetails = (service) => {
        const serviceMeta = SERVICES_DATA.find(s => s.title === service.name);

        // Get selected documents for this service from the client object
        const selectedDocsForService = client.selectedDocuments?.[service.name] || [];

        const documents = serviceMeta ? serviceMeta.documents
            .filter(doc => selectedDocsForService.includes(doc)) // Only show selected docs
            .map((doc, idx) => {
                // More intentional status distribution
                let status = 'Pending';
                if (idx === 0) status = 'Verified';
                else if (idx === 1) status = 'Partial';
                else if (idx % 3 === 0) status = 'Incomplete';

                return {
                    id: idx,
                    name: doc,
                    status: status
                };
            }) : [];

        setSelectedService({ ...service, documentList: documents });
        setIsModalOpen(true);
    };

    const closeServiceDetails = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    const handleDeleteDocument = (docName) => {
        if (window.confirm(`Are you sure you want to delete ${docName}?`)) {
        }
    };

    const handleReminderSent = () => {
        if (!client.reminderDate || !client.reminderFrequency) return;

        const nextDate = calculateNextReminder(
            client.reminderDate,
            client.reminderFrequency,
            client.reminderCustomDays
        );

        if (window.confirm(`Mark reminder as sent? Next reminder will be set to ${nextDate}`)) {
            onUpdateClient({
                ...client,
                reminderDate: nextDate
            });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!client) return <div>Loading...</div>;

    const activeServices = (client.activeServices || []).map((serviceName, index) => {
        const serviceMeta = SERVICES_DATA.find(s => s.title === serviceName);
        const totalDocs = serviceMeta ? serviceMeta.documents.length : 0;

        // Match mock data logic or real data
        const status = index % 2 === 0 ? 'Verified' : 'Pending';
        const progress = index % 2 === 0 ? 100 : 40;
        const currentDocs = index % 2 === 0 ? totalDocs : Math.floor(totalDocs / 2);

        return {
            id: index,
            name: serviceName,
            status: status,
            deadline: client.deadline || '20th Jan 2026',
            progress: progress,
            docsCount: `${currentDocs}/${totalDocs} documents`,
            description: serviceName.includes('GST') ? 'Monthly GST return filing' : 'Monthly TDS return'
        };
    });

    const mockDocuments = [
        { name: 'GST_Return_Q3.pdf', date: 'Jan 10, 2026', type: 'PDF' },
        { name: 'TDS_Challan_Dec.xlsx', date: 'Jan 08, 2026', type: 'Excel' },
        { name: 'Income_Tax_Proof.pdf', date: 'Jan 05, 2026', type: 'PDF' },
        { name: 'Bank_Statement.pdf', date: 'Jan 02, 2026', type: 'PDF' }
    ];

    const handleToggleStatus = () => {
        setIsProcessing(true);
        setTimeout(() => {
            onUpdateClient({
                ...client,
                status: client.status === 'Active' ? 'Inactive' : 'Active'
            });
            setIsProcessing(false);
        }, 1200);
    };

    return (
        <div className="client-details-page">
            <button
                className="back-btn"
                onClick={onBack}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '20px',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    color: '#1e2a3a',
                    fontSize: '16px',
                    fontWeight: '500'
                }}
            >
                <ArrowLeft size={20} />
                Back to Dashboard
            </button>

            <div className="client-header-card">
                <div className="client-profile-header">
                    <div className="client-info-main">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '12px' }}>
                            <h1>{client.name}</h1>
                            <div className="status-toggle-wrapper">
                                <span className={`status-label ${client.status === 'Active' ? 'status-active' : 'status-inactive'}`}>
                                    {client.status}
                                </span>
                                <label className="switch" title="Toggle Client Status">
                                    <input
                                        type="checkbox"
                                        checked={client.status === 'Active'}
                                        onChange={handleToggleStatus}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="client-contact-grid">
                            <div className="contact-item">
                                <span style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>Next Reminder: (Auto)</span>
                                <span>{client.reminderDate || 'Not Set'}</span>
                                {client.reminderDate && (
                                    <button
                                        onClick={handleReminderSent}
                                        title="Mark Sent & Reset for Next Cycle"
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: '#27ae60',
                                            marginLeft: '8px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <RefreshCw size={14} />
                                    </button>
                                )}
                            </div>
                            <div className="contact-item">
                                <Phone size={16} />
                                <span>{client.primaryContact || client.contactNumber}</span>
                            </div>
                            <div className="contact-item">
                                <img src={whatsappIcon} alt="WhatsApp" width="16" height="16" />
                                <span>{client.whatsapp || client.contact}</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={16} />
                                <span>{client.email || 'Email not available'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="client-tabs">
                <button
                    className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
                    onClick={() => setActiveTab('services')}
                >
                    Active Services
                </button>
                <button
                    className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
                    onClick={() => setActiveTab('documents')}
                >
                    Documents Uploaded
                </button>
            </div>

            <div className="details-content-card">
                {activeTab === 'services' && (
                    <div className="active-services-content">
                        <h3 className="section-title">Service Engagement</h3>
                        <p className="section-subtitle">Engagement Overview</p>

                        <div className="services-list-detail">
                            {activeServices.length === 0 ? (
                                <p className="no-data">No active services found for this client.</p>
                            ) : (
                                activeServices.map(service => (
                                    <div key={service.id} className="detail-service-item">
                                        <div className="service-header">
                                            <div className="service-name" onClick={() => openServiceDetails(service)}>
                                                {service.name}
                                            </div>
                                            <div className="service-deadline" style={{ fontSize: '12px', color: '#6c757d' }}>
                                                Deadline: {service.deadline}
                                            </div>
                                        </div>
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${service.progress}%` }}></div>
                                        </div>
                                        <div className="service-meta">
                                            <span>{service.description}</span>
                                            <span>{service.docsCount}</span>
                                        </div>
                                    </div>
                                )))}
                        </div>
                    </div>
                )}

                {activeTab === 'documents' && (
                    <div className="documents-content">
                        <div className="section-header-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <div>
                                <h3 className="section-title">Uploaded Documents</h3>
                                <p className="section-subtitle">Manage and view client documents</p>
                            </div>
                            <button className="export-btn" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                backgroundColor: 'var(--color-background)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500',
                                color: 'var(--color-text-dark)'
                            }}>
                                <Download size={16} />
                                Export All (ZIP)
                            </button>
                        </div>

                        <table className="documents-table">
                            <thead>
                                <tr>
                                    <th>Document Name</th>
                                    <th>Date Uploaded</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockDocuments.map((doc, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="doc-name">
                                                {doc.type === 'Excel' ? (
                                                    <img src={excelIcon} alt="Excel" width="24" height="24" />
                                                ) : (
                                                    <img src={pdfIcon} alt="PDF" width="24" height="24" />
                                                )}
                                                {doc.name}
                                            </div>
                                        </td>
                                        <td>{doc.date}</td>
                                        <td>
                                            <div className="doc-actions">
                                                <button className="action-icon-btn" title="View">
                                                    <Eye size={18} />
                                                </button>
                                                <button className="action-icon-btn" title="Download PDF">
                                                    <img src={pdfIcon} alt="PDF" width="18" height="18" />
                                                </button>
                                                <button className="action-icon-btn" title="Download Excel">
                                                    <img src={excelIcon} alt="Excel" width="18" height="18" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            {isModalOpen && selectedService && (
                <div className="modal-overlay" onClick={closeServiceDetails}>
                    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{selectedService.name}</h2>
                            <button className="modal-close-btn" onClick={closeServiceDetails}>
                                <X size={24} />
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="modal-table">
                                <thead>
                                    <tr>
                                        <th>File Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedService.documentList.map((doc) => (
                                        <tr key={doc.id}>
                                            <td>{doc.name}</td>
                                            <td>
                                                <span className={`status-cell status-${doc.status.toLowerCase()}`}>
                                                    {doc.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="doc-actions">
                                                    <button
                                                        className="action-icon-btn"
                                                        title="Download Excel"
                                                        onClick={() => { }}
                                                    >
                                                        <img src={excelIcon} alt="Excel" width="18" height="18" />
                                                    </button>
                                                    <button
                                                        className="action-icon-btn"
                                                        title="Delete"
                                                        onClick={() => handleDeleteDocument(doc.name)}
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
            {isProcessing && <LoadingOverlay message="Updating Status..." />}
        </div>
    );
};

export default ClientDetails;
