import React from 'react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    icon,
    onClick,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`btn btn--${variant} btn--${size} ${className}`}
            onClick={onClick}
            {...props}
        >
            {icon && <span className="btn__icon">{icon}</span>}
            <span className="btn__text">{children}</span>
        </button>
    );
};

export default Button;
