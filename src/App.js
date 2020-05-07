import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import store from "./store/store";
import {Provider} from "react-redux";
import CartIcon from './components/CartIcon';

// Pages:
import Products from './pages/Products';
import ProductCU from './pages/ProductCU';
import ProductScreen from './pages/ProductScreen';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import ProductsOnlyCU from './pages/ProductsOnlyCU';
import ProductsOnlyScreen from './pages/ProductsOnlyScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src={require('./assets/images/pcgamer.jpg')} width="40" height="40" className="d-inline-block align-top" alt="" />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
          <CartIcon />
        </nav><br/>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/centralUnit/:id" exact component={ProductCU} />
          <Route path="/products/screen/:id" exact component={ProductScreen} />
          <Route path="/products-cu" exact component={ProductsOnlyCU} />
          <Route path="/products-screen" exact component={ProductsOnlyScreen} />
          <Route path="/products" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route component={NotFound} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWithStore;
