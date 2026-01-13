import React from 'react';
import { Search, Plus } from 'lucide-react';
import Input from '../../../components/common/Input/Input';
import Button from '../../../components/common/Button/Button';
import './SearchBar.css';

const SearchBar = ({ searchQuery, onSearchChange, onAddClient }) => {
    return (
        <div className="search-bar">
            <div className="search-bar__left">
                <Input
                    type="text"
                    placeholder="Search client by name"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    icon={<Search size={18} />}
                    className="search-bar__input"
                />
            </div>
            <Button
                variant="primary"
                onClick={onAddClient}
                icon={<Plus size={18} />}
            >
                Register New Client
            </Button>
        </div>
    );
};

export default SearchBar;
