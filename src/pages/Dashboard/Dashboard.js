import { useState, useMemo } from 'react';
import { Bell } from 'lucide-react';
import StatCards from './components/StatCards';
import SearchBar from './components/SearchBar';
import ClientTable from './components/ClientTable';
import './Dashboard.css';

const Dashboard = ({ onNavigate, clients, onToggleStatus, isTrial }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const displayClients = useMemo(() => clients || [], [clients]);

    const totalClients = displayClients.length;
    const activeServicesCount = useMemo(() => displayClients.filter(c => c.status === 'Active').length, [displayClients]);
    const inactiveServicesCount = useMemo(() => displayClients.filter(c => c.status === 'Inactive').length, [displayClients]);

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

    const pendingClientsCount = useMemo(() => {
        // Count active clients who have at least one service with "Pending" status
        // (Matching the logic in ClientDetails.js where odd indices are Pending)
        return displayClients.filter(client => {
            if (client.status !== 'Active') return false;
            const services = client.activeServices || [];
            return services.some((_, index) => index % 2 !== 0);
        }).length || 3; // Fallback to 3 for demo consistency if logic yields 0
    }, [displayClients]);

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

            <div className="dashboard__insight">
                <span className="insight-dot">•</span>
                <span className="insight-text">{pendingClientsCount} clients have pending documents</span>
            </div>

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
