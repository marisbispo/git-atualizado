import React from 'react';

const Actions = ({ getRepos, getStarred }) => (
  <div>
    <button onClick={getRepos}>ver repositorios</button>
    <button onClick={getStarred}>ver favoritos</button>
  </div>
);

export default Actions;
