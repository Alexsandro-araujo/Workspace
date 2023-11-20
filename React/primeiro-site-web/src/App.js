import './App.css';
import Cabecalho from './components/cabecalho';
import Principal from './components/principal';
import Rodape from './components/rodape';
function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Principal/>
      <Rodape/>
    </div>
  );
}

export default App;
