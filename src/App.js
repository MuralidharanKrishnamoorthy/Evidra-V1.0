import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import ClientOnboarding from './pages/ClientOnboarding/ClientOnboarding';
import ClientDetails from './pages/ClientDetails/ClientDetails';
import InactiveClients from './pages/InactiveClients/InactiveClients';
import './App.css';

function App() {
    const [currentView, setCurrentView] = useState('dashboard');
    const [selectedClient, setSelectedClient] = useState(null);

    const [clients, setClients] = useState(() => {
        try {
            const savedClients = localStorage.getItem('evidra_clients');
            return savedClients ? JSON.parse(savedClients) : [];
        } catch (error) {
            console.error('Failed to parse clients from localStorage:', error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('evidra_clients', JSON.stringify(clients));
        } catch (error) {
            console.error('Failed to save clients to localStorage:', error);
        }
    }, [clients]);

    const navigateTo = (view, data = null) => {
        if ((view === 'client-details' || view === 'client-onboarding') && data) {
            setSelectedClient(data);
        } else if (view === 'client-onboarding' && !data) {
            setSelectedClient(null);
        }
        setCurrentView(view);
    };

    const addClient = (newClient) => {
        setClients(prevClients => [newClient, ...prevClients]);
    };

    const toggleClientStatus = (clientId) => {
        setClients(prevClients => prevClients.map(client => {
            if (client.id === clientId) {
                return { ...client, status: client.status === 'Active' ? 'Inactive' : 'Active' };
            }
            return client;
        }));
    };

    const updateClient = (updatedClient) => {
        setClients(prevClients => prevClients.map(client =>
            client.id === updatedClient.id ? updatedClient : client
        ));
        if (selectedClient && selectedClient.id === updatedClient.id) {
            setSelectedClient(updatedClient);
        }
    };

    const renderView = () => {
        switch (currentView) {
            case 'dashboard':
                return (
                    <Dashboard
                        onNavigate={navigateTo}
                        clients={clients}
                        onToggleStatus={toggleClientStatus}
                    />
                );
            case 'inactive-clients':
                return (
                    <InactiveClients
                        onNavigate={navigateTo}
                        clients={clients.filter(c => c.status === 'Inactive')}
                        onToggleStatus={toggleClientStatus}
                    />
                );
            case 'client-onboarding':
                return (
                    <ClientOnboarding
                        onNavigate={navigateTo}
                        onAddClient={addClient}
                        initialData={selectedClient}
                        onUpdateClient={updateClient}
                    />
                );
            case 'client-details':
                return (
                    <ClientDetails
                        client={selectedClient}
                        onBack={() => navigateTo('dashboard')}
                        onUpdateClient={updateClient}
                    />
                );
            default:
                return (
                    <Dashboard
                        onNavigate={navigateTo}
                        clients={clients}
                        onToggleStatus={toggleClientStatus}
                    />
                );
        }
    };

    return (
        <div className="app">
            <Sidebar currentView={currentView} onNavigate={navigateTo} />
            <main className="app__main">
                {renderView()}
            </main>
        </div>
    );
}

export default App;
