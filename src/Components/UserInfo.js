import React from 'react';

const UserInfo = ({ userinfo }) => {
  return (
    <div>
      <img src={userinfo.avatar_url} alt={userinfo.login} />
      <a href={userinfo.html_url}>
        <h2>Nome: {userinfo.name}</h2>
      </a>
      <ul>
        <li>Repositorios: {userinfo.public_repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
