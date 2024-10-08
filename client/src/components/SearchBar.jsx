// SearchBar.jsx
import React from 'react';

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <div>
      <input 
        type="text" 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        placeholder="Search properties"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;