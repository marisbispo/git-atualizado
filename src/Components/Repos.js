import React from 'react';

const Repos = ({ repos, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
