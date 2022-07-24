import React from 'react';
import Actions from './Components/Actions';
import Repos from './Components/Repos';
import Search from './Components/Search';
import UserInfo from './Components/UserInfo';

function App() {
  const [name, setName] = React.useState('');
  const [buscar, setBuscar] = React.useState(null);
  const [dados, setDados] = React.useState(null);

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
      <Actions />
      <Repos />
    </div>
  );
}

export default App;
