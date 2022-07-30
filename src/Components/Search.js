import React from 'react';
import styles from './Search.module.css';

const Search = ({ name, placeholder, type, value, onChange, onClick }) => (
  <div className={styles.barra}>
    <input
      placeholder={placeholder}
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={styles.buscar}
    />
    <button onClick={onClick} className={styles.botao}>
      ok
    </button>
  </div>
);

export default Search;
