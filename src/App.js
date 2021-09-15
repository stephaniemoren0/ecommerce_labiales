import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {

  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <br />
        <br />
        <br />
        <Switch> 
          <Route exact path='/' component={ItemListContainer} />
          <Route  path='/categoria/:category' component={ItemListContainer} />
          <Route  path='/item/:id' component={ItemDetailContainer} />
          <Route path='/cart' component={Cart} />
        </Switch> 
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
    </BrowserRouter>
    </CartContextProvider>
  );
}



export default App;
