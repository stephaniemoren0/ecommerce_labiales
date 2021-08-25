import logo from './logo.svg';
import './App.css';
import {NavBar, carrito} from './components/NavBar';
import {ItemListContainer, cosmetico} from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
        <NavBar />
        <ItemListContainer cosmeticonuevo={cosmetico} />

        <p>
          Edit <code>src/App.js</code> and save to reload.
          <HomeApp />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
    </div>
  );
}

const HomeApp=()=>{
  return (
    <div>
      <h1>hola</h1>
    </div>
  );
}

export default App;
