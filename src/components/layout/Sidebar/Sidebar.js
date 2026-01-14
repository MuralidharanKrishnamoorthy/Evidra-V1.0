import React, { useState } from 'react';
import { LayoutDashboard, UserPlus, PauseCircle, CreditCard, LogOut, Cloud } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ currentView, onNavigate, onLogout }) => {
    const [activeItem, setActiveItem] = useState('dashboard');

    React.useEffect(() => {
        setActiveItem(currentView);
    }, [currentView]);

    const menuItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: LayoutDashboard
        },
        {
            id: 'client-onboarding',
            label: 'Onboarding',
            icon: UserPlus
        },
        {
            id: 'inactive-clients',
            label: 'Dormant',
            icon: PauseCircle
        },
        {
            id: 'cloud-storage',
            label: 'Cloud Storage',
            icon: Cloud
        },
        {
            id: 'subscription',
            label: 'Subscription',
            icon: CreditCard
        }
    ];

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h2 className="sidebar__title">EVIDRA AURA</h2>
            </div>

            <nav className="sidebar__nav">
                {menuItems.map(item => {
                    const IconComponent = item.icon;
                    return (
                        <button
                            key={item.id}
                            className={`sidebar__item ${activeItem === item.id ? 'sidebar__item--active' : ''} `}
                            onClick={() => onNavigate(item.id)}
                        >
                            <span className="sidebar__item-icon">
                                <IconComponent size={20} />
                            </span>
                            <span className="sidebar__item-label">{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="sidebar__footer">
                <button className="sidebar__item sidebar__logout" onClick={onLogout}>
                    <span className="sidebar__item-icon">
                        <LogOut size={20} />
                    </span>
                    <span className="sidebar__item-label">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
