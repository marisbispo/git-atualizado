import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = ({ userinfo }) => {
  return (
    <div className={styles.info}>
      <img
        src={userinfo.avatar_url}
        alt={userinfo.login}
        className={styles.foto}
      />
      <ul className={styles.dados}>
        <h2 className={styles.nome}>
          <a href={userinfo.html_url}>{userinfo.name}</a>
        </h2>
        <li>Repositorios: {userinfo.public_repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
