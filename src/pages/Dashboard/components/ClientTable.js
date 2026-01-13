import React from 'react';
import { Eye, Pencil, Phone } from 'lucide-react';
import './ClientTable.css';

const ClientTable = ({ clients, onViewClient, onEditClient }) => {
    return (
        <div className="client-table-container">
            <h3 className="client-table__title">All Clients</h3>
            <div className="client-table-wrapper">
                <table className="client-table">
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Mobile Number</th>
                            <th>Onboarded On</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="client-table__empty">
                                    No active clients found. Ready to onboard someone new?
                                </td>
                            </tr>
                        ) : (
                            clients.map(client => (
                                <tr key={client.id}>
                                    <td className="client-table__name">{client.clientName}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Phone size={16} color="var(--color-text-gray)" />
                                            <span>{client.contactNumber}</span>
                                        </div>
                                    </td>
                                    <td>{client.onboardedDate}</td>
                                    <td>
                                        <button
                                            className="action-btn"
                                            onClick={() => onEditClient(client)}
                                            title="Edit client"
                                            style={{ marginLeft: '8px' }}
                                        >
                                            <Pencil size={18} />
                                        </button>
                                        <button
                                            className="action-btn"
                                            onClick={() => onViewClient(client)}
                                            title="View client details"
                                            style={{ marginLeft: '8px' }}
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
    );
};

export default ClientTable;
