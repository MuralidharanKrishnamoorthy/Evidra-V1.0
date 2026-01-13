import React, { useState } from 'react';
import { Check, RefreshCw, Layout, ChevronRight } from 'lucide-react';
import onedriveLogo from '../../assets/images/onedrive.png';
import './StorageSettings.css';

const StorageSettings = () => {
    const [connections, setConnections] = useState({
        googleDrive: { connected: false, email: '' },
        oneDrive: { connected: false, email: '' }
    });

    const [isConnecting, setIsConnecting] = useState(null);

    const handleConnect = (provider) => {
        setIsConnecting(provider);
        setTimeout(() => {
            setConnections(prev => ({
                ...prev,
                [provider]: {
                    connected: true,
                    email: provider === 'googleDrive' ? 'murali.ca@gmail.com' : 'murali.office@outlook.com'
                }
            }));
            setIsConnecting(null);
        }, 1500);
    };

    const handleDisconnect = (provider) => {
        if (window.confirm(`Are you sure you want to disconnect ${provider === 'googleDrive' ? 'Google Drive' : 'OneDrive'}?`)) {
            setConnections(prev => ({
                ...prev,
                [provider]: { connected: false, email: '' }
            }));
        }
    };

    return (
        <div className="storage-settings">
            <header className="storage-header">
                <div>
                    <h1 className="storage-title">Cloud Storage</h1>
                    <p className="storage-subtitle">Sync client documents to your firm's cloud drive</p>
                </div>
            </header>

            <div className="storage-grid">
                <div className={`storage-card ${connections.googleDrive.connected ? 'is-connected' : ''}`}>
                    <div className="card-header">
                        <div className="provider-info">
                            <div className="provider-icon google">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Google Drive" />
                            </div>
                            <h3>Google Drive</h3>
                        </div>
                        {connections.googleDrive.connected && <span className="status-pill">Connected</span>}
                    </div>

                    <div className="card-body">
                        {connections.googleDrive.connected ? (
                            <div className="connection-details">
                                <Check size={16} className="text-success" />
                                <span><strong>{connections.googleDrive.email}</strong></span>
                            </div>
                        ) : (
                            <p className="integration-desc">
                                Professional backup and folder organization.
                            </p>
                        )}
                    </div>

                    <div className="card-footer">
                        {connections.googleDrive.connected ? (
                            <button className="btn-link-danger" onClick={() => handleDisconnect('googleDrive')}>
                                Disconnect
                            </button>
                        ) : (
                            <button
                                className="btn-primary"
                                onClick={() => handleConnect('googleDrive')}
                                disabled={isConnecting === 'googleDrive'}
                            >
                                {isConnecting === 'googleDrive' ? <RefreshCw className="spin" size={18} /> : 'Connect'}
                            </button>
                        )}
                    </div>
                </div>

                <div className={`storage-card ${connections.oneDrive.connected ? 'is-connected' : ''}`}>
                    <div className="card-header">
                        <div className="provider-info">
                            <div className="provider-icon microsoft">
                                <img src={onedriveLogo} alt="OneDrive" />
                            </div>
                            <h3>OneDrive</h3>
                        </div>
                        {connections.oneDrive.connected && <span className="status-pill pill-blue">Connected</span>}
                    </div>

                    <div className="card-body">
                        {connections.oneDrive.connected ? (
                            <div className="connection-details">
                                <Check size={16} className="text-success" />
                                <span><strong>{connections.oneDrive.email}</strong></span>
                            </div>
                        ) : (
                            <p className="integration-desc">
                                Enterprise-grade storage for your firm.
                            </p>
                        )}
                    </div>

                    <div className="card-footer">
                        {connections.oneDrive.connected ? (
                            <button className="btn-link-danger" onClick={() => handleDisconnect('oneDrive')}>
                                Disconnect
                            </button>
                        ) : (
                            <button
                                className="btn-primary"
                                onClick={() => handleConnect('oneDrive')}
                                disabled={isConnecting === 'oneDrive'}
                            >
                                {isConnecting === 'oneDrive' ? <RefreshCw className="spin" size={18} /> : 'Connect'}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <section className="hierarchy-section">
                <div className="section-header">
                    <Layout size={18} />
                    <h2>Organization Logic</h2>
                </div>

                <div className="hierarchy-preview">
                    <div className="folder-item root">Evidra Aura</div>
                    <ChevronRight size={14} className="sep" />
                    <div className="folder-item">Client</div>
                    <ChevronRight size={14} className="sep" />
                    <div className="folder-item">Service</div>
                    <ChevronRight size={14} className="sep" />
                    <div className="folder-item">Date</div>
                    <ChevronRight size={14} className="sep" />
                    <div className="file-item">document.pdf</div>
                </div>
            </section>
        </div>
    );
};

export default StorageSettings;
