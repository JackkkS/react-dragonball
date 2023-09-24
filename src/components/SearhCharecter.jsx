import React from 'react';
import './SearhCharecter.css';
import { FaSearch } from 'react-icons/fa';

function SearchCharacter({ value, onValueChange }) {
  return (
    <div>
      <div className="search">
        <div className="search-icon">
          <FaSearch />
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search Character"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchCharacter;
