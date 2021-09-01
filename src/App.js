import './App.css';
import NavBar from './components/NavBar';
import Cosmetico from './components/Item';

function App() {

  return (
    <div className="App">
        <NavBar />
        <br />
        <br />
        <br />
        <Cosmetico />
        <br />
        
        <br />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
