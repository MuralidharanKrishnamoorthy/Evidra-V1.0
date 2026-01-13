import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import './Select.css';

const Select = ({
    options = [],
    value,
    onChange,
    placeholder = 'Select option',
    className = '',
    disabled = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option) => {
        const val = typeof option === 'object' ? option.value : option;
        onChange(val);
        setIsOpen(false);
    };

    const handleClear = (e) => {
        e.stopPropagation();
        onChange('');
    };

    const displayValue = () => {
        if (!value) return placeholder;

        const selectedOption = options.find(opt =>
            (typeof opt === 'object' ? opt.value : opt) === value
        );

        if (selectedOption) {
            return typeof selectedOption === 'object' ? selectedOption.label : selectedOption;
        }

        return value;
    };

    return (
        <div
            className={`select-container ${className}`}
            ref={selectRef}
            onClick={() => !disabled && setIsOpen(!isOpen)}
        >
            <div className={`select-input ${isOpen ? 'select-input--active' : ''} ${!value ? 'select-input--placeholder' : ''}`}>
                <span className="select-value-text">{displayValue()}</span>
                <div className="select-icons">
                    {value && !disabled && (
                        <button
                            type="button"
                            className="icon-button"
                            onClick={handleClear}
                            aria-label="Clear selection"
                        >
                            <X size={16} />
                        </button>
                    )}
                    <ChevronDown size={16} />
                </div>
            </div>

            {isOpen && !disabled && (
                <div className="select-dropdown">
                    {options.map((option, index) => {
                        const optValue = typeof option === 'object' ? option.value : option;
                        const optLabel = typeof option === 'object' ? option.label : option;
                        const isSelected = value === optValue;

                        return (
                            <div
                                key={index}
                                className={`select-option ${isSelected ? 'select-option--selected' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSelect(option);
                                }}
                            >
                                {optLabel}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Select;
