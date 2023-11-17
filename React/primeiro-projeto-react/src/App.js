import logo from './messi.jpeg';
import './App.css';
import Exemplo from './components/Exemplo'; //imporntando o componente
import Exemplo2 from './components/Exemplo2'; //imporntando o componente
import Mensagem from './components/BoasVindas'; //imporntando o componente

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
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciando o React
        </a>
        <Mensagem/>
        <Exemplo2/>
        <Exemplo/>
       
        </header>
    </div>
  );
}

export default App;
