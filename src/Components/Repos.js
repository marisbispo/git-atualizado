import React from 'react';
import styles from './Repos.module.css';

const Repos = ({ repos, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className={styles.lista}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
