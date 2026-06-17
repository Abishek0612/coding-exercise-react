import React from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import './Search.css';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Search: React.FC<SearchProps> = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <div className="search-container">
      <SearchIcon className="search-icon" size={18} />
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className="search-clear" onClick={() => onChange('')} aria-label="Clear search">
          <X size={16} />
        </button>
      )}
    </div>
  );
};
