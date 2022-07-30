import React from 'react';
import Actions from './Components/Actions';
import Repos from './Components/Repos';
import Search from './Components/Search';
import UserInfo from './Components/UserInfo';
import './App.css';

function App() {
  const [name, setName] = React.useState('');
  const [buscar, setBuscar] = React.useState(null);
  const [dados, setDados] = React.useState(null);
  const [repos, setRepos] = React.useState(null);
  const [ativarRepos, setAtivarRepos] = React.useState(null);
  const [starred, setStarred] = React.useState(null);
  const [ativarStarred, setAtivarStarred] = React.useState(null);
  const [valor, setValor] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      let resposta;
      let json;

      resposta = await fetch(`https://api.github.com/users/${name}`);
      json = await resposta.json();
      if (resposta.ok === false) {
        setValor(true);
        setDados(null);
      } else setDados(json);
    };

    if (buscar) {
      fetchData();

      setStarred(null);
      setRepos(null);
    }

    setBuscar(null);
  }, [name, buscar, dados]);

  function handleClick() {
    setBuscar(true);
    setValor(null);
  }

  React.useEffect(() => {
    if (ativarStarred) {
      fetch(`https://api.github.com/users/${name}/starred`)
        .then((resposta) => resposta.json())
        .then((json) => setStarred(json));
    } else if (ativarRepos) {
      fetch(`https://api.github.com/users/${name}/repos`)
        .then((resposta) => resposta.json())
        .then((json) => setRepos(json));
    }

    setAtivarStarred(null);
    setAtivarRepos(null);
  }, [ativarStarred, starred, ativarRepos, name]);

  function getStarred(event) {
    const nome = event.target.innerText;

    if (nome === 'ver favoritos') {
      setRepos(null);
      setAtivarStarred(true);
    } else {
      setStarred(null);
      setAtivarRepos(true);
    }
  }

  return (
    <div className="main">
      <div className="cabecalho">
        <h1>Buscador de repositorios</h1>
      </div>
      <Search
        placeholder="Digite seu usuário no Github."
        type="text"
        name="user"
        value={name}
        onChange={(event) => setName(event.target.value)}
        onClick={handleClick}
      />
      {/* <button onClick={handleClick}>procurar</button> */}
      {valor && <p>Digite um usuário válido!</p>}
      {dados && <UserInfo userinfo={dados} />}
      {dados && <Actions getRepos={getStarred} getStarred={getStarred} />}
      {repos && (
        <Repos
          repos={repos}
          title={repos.length === 1 ? 'Repositorio:' : 'Repositorios:'}
        />
      )}
      {starred && (
        <Repos
          repos={starred}
          title={starred.length === 1 ? 'Favorito:' : 'Favoritos:'}
        />
      )}
    </div>
  );
}

export default App;
