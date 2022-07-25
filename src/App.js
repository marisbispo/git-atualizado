import React from 'react';
import Actions from './Components/Actions';
import Repos from './Components/Repos';
import Search from './Components/Search';
import UserInfo from './Components/UserInfo';

function App() {
  const [name, setName] = React.useState('');
  const [buscar, setBuscar] = React.useState(null);
  const [dados, setDados] = React.useState(null);
  const [repos, setRepos] = React.useState(null);
  const [ativarRepos, setAtivarRepos] = React.useState(null);
  const [starred, setStarred] = React.useState(null);
  const [ativarStarred, setAtivarStarred] = React.useState(null);

  React.useEffect(() => {
    if (buscar) {
      fetch(`https://api.github.com/users/${name}`)
        .then((resposta) => resposta.json())
        .then((json) => setDados(json));
    }
    setBuscar(null);
  }, [name, buscar, dados]);

  function handleClick() {
    setBuscar(true);
  }

  React.useEffect(() => {
    if (ativarRepos) {
      fetch(`https://api.github.com/users/${name}/repos`)
        .then((resposta) => resposta.json())
        .then((json) => setRepos(json));
    }
    setAtivarRepos(null);
  }, [ativarRepos, name]);

  React.useEffect(() => {
    if (ativarStarred) {
      fetch(`https://api.github.com/users/${name}/starred`)
        .then((resposta) => resposta.json())
        .then((json) => setStarred(json));
    }
    setAtivarStarred(null);
  }, [ativarStarred, name]);

  function getRepos() {
    setStarred(null);
    setAtivarRepos(true);
  }

  function getStarred() {
    setRepos(null);
    setAtivarStarred(true);
    console.log('funcionou?');
  }

  return (
    <div>
      <Search
        label="Digite seu usuário no Github =)"
        type="text"
        name="user"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleClick}>procurar</button>
      {dados && <UserInfo userinfo={dados} />}
      {dados && <Actions getRepos={getRepos} getStarred={getStarred} />}
      {/* {repos &&
        repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))} */}
      {repos && <Repos repos={repos} title="Repositorios:" />}
      {starred && <Repos repos={starred} title="Favoritos:" />}
    </div>
  );
}

export default App;
