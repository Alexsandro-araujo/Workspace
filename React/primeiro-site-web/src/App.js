import './App.css';
import Cabecalho from './components/cabecalho';
import Principal from './components/principal';
import Rodape from './components/rodape';
function App() {
  return (
    <div className="App" style={{backgroundColor: '#ffa500'}}>
      <Cabecalho/>
      <Principal/>
      <Rodape/>
    </div>
  );
}

export default App;
