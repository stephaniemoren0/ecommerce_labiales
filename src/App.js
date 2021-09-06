import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <div className="App">
        <NavBar />
        <br />
        <br />
        <br />
        <ItemListContainer />
        <ItemDetailContainer />
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
