import logo from './logo.svg';
import './App.css';
import { NavBar} from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
        <NavBar />
        <br />

        <p>
          Edit <code>src/App.js</code> and save to reload.
          <ItemListContainer greeting={'¡Hola Mate!,muchas gracias por la ayuda, no se si esto es demasiado sencillo o yo muy tonta jajaja 😆'}/>
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



export default App;
