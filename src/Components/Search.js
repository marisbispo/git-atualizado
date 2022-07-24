import React from 'react';

const Search = ({ name, label, type, value, onChange }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Search;
