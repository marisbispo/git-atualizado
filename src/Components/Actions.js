import React from 'react';
import styles from './Actions.module.css';

const Actions = ({ getRepos, getStarred }) => (
  <div className={styles.botoes}>
    <button onClick={getRepos} className={`${styles.botao} ${styles.ativo}`}>
      ver repositorios
    </button>
    <button onClick={getStarred} className={styles.botao}>
      ver favoritos
    </button>
  </div>
);

export default Actions;
