import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import './Toast.css';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const getIcon = () => {
        switch (type) {
            case 'success': return <CheckCircle size={20} className="toast-icon success" />;
            case 'error': return <AlertCircle size={20} className="toast-icon error" />;
            default: return <Info size={20} className="toast-icon info" />;
        }
    };

    return (
        <div className={`toast-container toast--${type}`}>
            <div className="toast-content">
                {getIcon()}
                <span className="toast-message">{message}</span>
                <button className="toast-close" onClick={onClose}>
                    <X size={16} />
                </button>
            </div>
            <div className="toast-progress" style={{ animationDuration: `${duration}ms` }}></div>
        </div>
    );
};

export default Toast;
