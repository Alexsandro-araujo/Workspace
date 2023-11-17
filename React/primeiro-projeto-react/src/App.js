import logo from './logo.svg';
import './App.css';
import Exemplo from './components/Exemplo'; //imporntando o componente
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testando <code>o diretorio é src/App.js</code> Favela venceu
        </p>
        <h2>Lets Go Baby</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciando o React
        </a>
        <Exemplo/>
      </header>
    </div>
  );
}

export default App;
