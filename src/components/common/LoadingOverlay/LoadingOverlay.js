import React from 'react';
import { Loader2 } from 'lucide-react';
import './LoadingOverlay.css';

const LoadingOverlay = ({ message = 'Processing...' }) => {
    return (
        <div className="loading-overlay">
            <div className="loading-content">
                <Loader2 className="spinner-icon" size={40} />
                <p className="loading-message">{message}</p>
            </div>
        </div>
    );
};

export default LoadingOverlay;
