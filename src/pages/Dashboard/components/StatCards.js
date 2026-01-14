import React from 'react';
import { Users, CircleOff } from 'lucide-react';
import './StatCards.css';

const StatCards = ({ activeServicesCount, inactiveServicesCount }) => {
    const cards = [
        {
            id: 1,
            title: 'Active Engagements',
            value: activeServicesCount || 0,
            description: 'Active Accounts',
            icon: Users,
            className: 'stat-card--slate'
        },
        {
            id: 2,
            title: 'On-Hold Engagements',
            value: inactiveServicesCount || 0,
            description: 'Paused Mandates',
            icon: CircleOff,
            className: 'stat-card--blue'
        }
    ];

    return (
        <div className="stat-cards">
            {cards.map(card => {
                const IconComponent = card.icon;
                return (
                    <div key={card.id} className={`stat-card ${card.className}`}>
                        <div className="stat-card__header">
                            <h3 className="stat-card__title">{card.title}</h3>
                            <span className="stat-card__icon">
                                <IconComponent size={24} />
                            </span>
                        </div>
                        <div className="stat-card__value">{card.value}</div>
                        <p className="stat-card__description">{card.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default StatCards;
