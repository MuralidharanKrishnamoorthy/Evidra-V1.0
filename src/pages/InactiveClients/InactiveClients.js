import { ArrowLeft, PauseCircle, Eye, Phone } from 'lucide-react';
import '../Dashboard/Dashboard.css';
import '../Dashboard/components/ClientTable.css';

const InactiveClients = ({ onNavigate, clients, onToggleStatus }) => {
    const handleViewClient = (client) => {
        const detailedClient = {
            name: client.clientName,
            contact: client.contactNumber || '9876543210',
            email: client.email || 'client@example.com',
            whatsapp: client.whatsappNumber || client.contactNumber || '9876543210',
            address: client.address || '123, Business Park, Chennai, TN',
            ...client
        };
        onNavigate('client-details', detailedClient);
    };

    return (
        <div className="dashboard">
            <div className="dashboard__header" style={{ marginBottom: '12px' }}>
                <button
                    className="back-btn"
                    onClick={() => onNavigate('dashboard')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '6px',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        color: '#1e2a3a',
                        fontSize: '15px',
                        fontWeight: '500'
                    }}
                >
                    <ArrowLeft size={18} />
                    Back to Dashboard
                </button>
                <div>
                    <h1 className="dashboard__title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <PauseCircle size={24} color="var(--color-blue-accent)" />
                        Dormant / On-Hold Clients
                    </h1>
                    <p className="dashboard__subtitle">
                        Compliance Paused
                    </p>
                </div>
            </div>

            <div className="client-table-container">
                <div className="client-table-wrapper">
                    <table className="client-table">
                        <thead>
                            <tr>
                                <th>Client Name</th>
                                <th>Mobile Number</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="client-table__empty">
                                        No dormant or on-hold clients found.
                                    </td>
                                </tr>
                            ) : (
                                clients.map(client => (
                                    <tr key={client.id} style={{ opacity: 0.7 }}>
                                        <td className="client-table__name">{client.clientName}</td>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Phone size={16} color="var(--color-text-gray)" />
                                                <span>{client.contactNumber}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <label className="switch" title="Toggle to restore service">
                                                <input
                                                    type="checkbox"
                                                    checked={client.status === 'Active'}
                                                    onChange={() => onToggleStatus(client.id)}
                                                />
                                                <span className="slider round" style={{ backgroundColor: client.status === 'Inactive' ? '#e74c3c' : '' }}></span>
                                            </label>
                                            <span style={{ marginLeft: '10px', fontSize: '12px', color: '#e74c3c' }}>Stopped</span>
                                        </td>
                                        <td>
                                            <button
                                                className="action-btn"
                                                onClick={() => handleViewClient(client)}
                                                title="View client details"
                                            >
                                                <Eye size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InactiveClients;
