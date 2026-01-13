import { Check, ShieldCheck, Zap, TrendingUp, Award, MessageSquare, Bell, Search, FileText, Cloud, BarChart, LifeBuoy } from 'lucide-react';
import './Subscription.css';

const Subscription = ({ onSelectPlan }) => {
    const plans = [
        {
            id: 'monthly',
            name: 'Professional',
            price: '2,000',
            duration: 'Month',
            savings: null,
            badge: 'Most Flexible',
            icon: Zap
        },
        {
            id: 'quarterly',
            name: 'Quarterly',
            price: '5,700',
            duration: '3 Months',
            savings: 'Save ₹300',
            badge: 'Popular',
            icon: TrendingUp
        },
        {
            id: 'half-yearly',
            name: 'Half-Yearly',
            price: '10,800',
            duration: '6 Months',
            savings: 'Save ₹1,200',
            badge: 'Business Choice',
            icon: Award
        },
        {
            id: 'yearly',
            name: 'Annual Hub',
            price: '20,400',
            duration: 'Year',
            savings: 'Save ₹3,600',
            badge: 'Best Value',
            highlight: true,
            icon: ShieldCheck
        }
    ];

    const features = [
        { name: 'Core WhatsApp Automation', icon: MessageSquare },
        { name: 'Automated Client Reminders', icon: Bell },
        { name: 'AI Document Type Detection', icon: Search },
        { name: 'Bank Statement (PDF to Excel)', icon: FileText },
        { name: 'Google Drive / OneDrive Sync', icon: Cloud },
        { name: 'Service-wise Data Dashboard', icon: BarChart },
        { name: 'Email & WhatsApp Support', icon: LifeBuoy }
    ];

    return (
        <div className="subscription-page">
            <div className="subscription-header">
                <h1>Ready to automate your firm?</h1>
                <p>Choose the plan that fits your practice. All features included in every plan.</p>
            </div>

            <div className="plans-grid">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`plan-card ${plan.highlight ? 'plan-card--highlighted' : ''}`}
                    >
                        {plan.badge && <span className="plan-badge">{plan.badge}</span>}
                        <div className="plan-icon">
                            <plan.icon size={28} />
                        </div>
                        <h3 className="plan-name">{plan.name}</h3>
                        <div className="plan-price-block">
                            <span className="currency">₹</span>
                            <span className="price">{plan.price}</span>
                            <span className="duration">/ {plan.duration}</span>
                        </div>

                        {plan.savings && <div className="savings-tag">{plan.savings}</div>}

                        <ul className="plan-features">
                            {features.map((feature, idx) => (
                                <li key={idx}>
                                    <feature.icon size={16} /> {feature.name}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`plan-btn ${plan.highlight ? 'plan-btn--primary' : ''}`}
                            onClick={() => onSelectPlan(plan)}
                        >
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>

            <div className="subscription-info">
                <p><strong>Efficiency Insight:</strong> CAs save an average of 12 hours per week by automating document follow-ups.</p>
            </div>
        </div>
    );
};

export default Subscription;
