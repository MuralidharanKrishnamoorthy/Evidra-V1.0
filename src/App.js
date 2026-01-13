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
import './App.css';

function App() {
    const [currentView, setCurrentView] = useState('dashboard');
    const [selectedClient, setSelectedClient] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('evidra_auth') === 'true';
    });
    const [hasSubscription, setHasSubscription] = useState(() => {
        return localStorage.getItem('evidra_subscription') === 'true';
    });

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
        setIsAuthenticated(false);
        setHasSubscription(false);
        localStorage.removeItem('evidra_auth');
        localStorage.removeItem('evidra_subscription');
        setCurrentView('login');
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
        if (!isAuthenticated) {
            return currentView === 'register' ? (
                <Register onRegister={handleRegister} onNavigateToLogin={() => setCurrentView('login')} />
            ) : (
                <Login onLogin={handleLogin} onNavigateToRegister={() => setCurrentView('register')} />
            );
        }

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
                    onLogout={handleLogout}
                />
            )}
            <main className={isAuthenticated ? "app__main" : "app__auth"}>
                {renderView()}
            </main>
        </div>
    );
}

export default App;
