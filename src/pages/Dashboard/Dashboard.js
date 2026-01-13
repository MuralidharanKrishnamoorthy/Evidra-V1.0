import { useState, useMemo } from 'react';
import { Bell } from 'lucide-react';
import StatCards from './components/StatCards';
import SearchBar from './components/SearchBar';
import ClientTable from './components/ClientTable';
import './Dashboard.css';

const Dashboard = ({ onNavigate, clients, onToggleStatus, isTrial }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const displayClients = clients || [];

    const totalClients = displayClients.length;

    const activeServicesCount = displayClients.filter(c => c.status === 'Active').length;

    const inactiveServicesCount = displayClients.filter(c => c.status === 'Inactive').length;

    const filteredClients = useMemo(() => {
        const activeClients = displayClients.filter(c => c.status === 'Active');

        if (!searchQuery.trim()) {
            return activeClients;
        }

        const query = searchQuery.toLowerCase();
        return activeClients.filter(client =>
            client.clientName.toLowerCase().includes(query) ||
            client.contactNumber.includes(query)
        );
    }, [searchQuery, displayClients]);

    const handleSearchChange = (value) => {
        setSearchQuery(value);
    };

    const handleAddClient = () => {
        onNavigate('client-onboarding');
    };

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

    const handleEditClient = (client) => {
        onNavigate('client-onboarding', client);
    };

    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <div>
                    <h1 className="dashboard__title">Compliance Hub</h1>
                    <p className="dashboard__subtitle">
                        Client Compliance & Data Tracking
                    </p>
                </div>
                <div className="dashboard__actions">
                    <button className="notification-btn" aria-label="Notifications">
                        <Bell size={24} />
                        <span className="notification-dot"></span>
                    </button>
                </div>
            </div>

            <StatCards
                totalClients={totalClients}
                activeServicesCount={activeServicesCount}
                inactiveServicesCount={inactiveServicesCount}
            />

            <SearchBar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onAddClient={handleAddClient}
            />

            <ClientTable
                clients={filteredClients}
                onViewClient={handleViewClient}
                onEditClient={handleEditClient}
            />
        </div>
    );
};

export default Dashboard;
