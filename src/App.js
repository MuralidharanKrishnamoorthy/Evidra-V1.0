import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import ClientOnboarding from './pages/ClientOnboarding/ClientOnboarding';
import ClientDetails from './pages/ClientDetails/ClientDetails';
import InactiveClients from './pages/InactiveClients/InactiveClients';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Subscription from './pages/Subscription/Subscription';
import StorageSettings from './pages/Settings/StorageSettings';
import { MOCK_CLIENTS } from './data/mockClients';
import Toast from './components/common/Toast/Toast';
import './App.css';

function App() {
    const [currentView, setCurrentView] = useState('dashboard');
    const [selectedClient, setSelectedClient] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(true); // Forced for Demo
    const [toast, setToast] = useState(null);

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
    };
    const [hasSubscription, setHasSubscription] = useState(() => {
        return localStorage.getItem('evidra_subscription') === 'true';
    });

    const [clients, setClients] = useState(() => {
        try {
            const savedClients = localStorage.getItem('evidra_clients');
            const localClients = savedClients ? JSON.parse(savedClients) : [];

            // Map MOCK_CLIENTS to ensure consistency
            const normalizedMocks = MOCK_CLIENTS.map(mc => ({
                ...mc,
                name: mc.clientName, // Ensure 'name' is available
                services: mc.services || mc.activeServices || [],
                onboardedDate: mc.onboardedDate || '01/01/2026',
                primaryContact: mc.primaryContact || mc.contactNumber,
                selectedDocuments: mc.selectedDocuments || {}
            }));

            // Filter out mocks from localClients to avoid duplicates if they were already saved
            const nonMockLocal = localClients.filter(c => !c.id.toString().startsWith('mock-'));

            return [...normalizedMocks, ...nonMockLocal];
        } catch (error) {
            console.error('Failed to parse clients from localStorage:', error);
            return MOCK_CLIENTS.map(mc => ({ ...mc, name: mc.clientName }));
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('evidra_clients', JSON.stringify(clients));
        } catch (error) {
            console.error('Failed to save clients to localStorage:', error);
        }
    }, [clients]);

    const handleLogin = (credentials) => {
        console.log('Logging in:', credentials);
        setIsAuthenticated(true);
        localStorage.setItem('evidra_auth', 'true');
        setCurrentView('dashboard');
    };

    const handleRegister = (data) => {
        console.log('Registering firm:', data);
        setIsAuthenticated(true);
        localStorage.setItem('evidra_auth', 'true');
        setCurrentView('dashboard');
    };

    const handleSelectPlan = (plan) => {
        console.log('Selected plan:', plan);
        setHasSubscription(true);
        localStorage.setItem('evidra_subscription', 'true');
        setCurrentView('dashboard');
    };

    const handleLogout = () => {
        // Disabled for Demo
    };

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
        // Auth screens hidden for Demo

        switch (currentView) {
            case 'subscription':
                return <Subscription onSelectPlan={handleSelectPlan} />;
            case 'dashboard':
                return (
                    <Dashboard
                        onNavigate={navigateTo}
                        clients={clients}
                        onToggleStatus={toggleClientStatus}
                        isTrial={!hasSubscription}
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
                        showToast={showToast}
                    />
                );
            case 'client-details':
                return (
                    <ClientDetails
                        client={selectedClient}
                        onBack={() => navigateTo('dashboard')}
                        onUpdateClient={updateClient}
                        showToast={showToast}
                    />
                );
            case 'cloud-storage':
                return <StorageSettings />;
            default:
                return (
                    <Dashboard
                        onNavigate={navigateTo}
                        clients={clients}
                        onToggleStatus={toggleClientStatus}
                        isTrial={!hasSubscription}
                    />
                );
        }
    };

    return (
        <div className="app">
            {isAuthenticated && (
                <Sidebar
                    currentView={currentView}
                    onNavigate={navigateTo}
                />
            )}
            <main className={isAuthenticated ? "app__main" : "app__auth"}>
                {renderView()}
            </main>
        </div>
    );
}

export default App;
