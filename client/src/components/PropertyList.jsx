import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Property from './Property';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');

  const fetchProperties = async () => {
    const response = await axios.get('/api/properties');
    setProperties(response.data);
  };

  const handleSearch = async () => {
    const response = await axios.get(`/api/properties/search?query=${search}`);
    setProperties(response.data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Property List</h1>
      <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <button onClick={fetchProperties}>Show All Properties</button>
      <ul>
        {properties.map(property => (
          <Property key={property.id} property={property} /> // Replace 'id' with your actual property key
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;