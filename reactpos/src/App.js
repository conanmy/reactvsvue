import React, { Component } from 'react'
import Route from './myrouter/Route'
import NavLink from './myrouter/NavLink'
import logo from './logo.svg'
import './app.scss';
import PosContainer from './containers/PosContainer'
import ProductsContainer from './containers/ProductsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
          <NavLink to="/">Pos</NavLink>
          <NavLink to="/products">Products</NavLink>
        </div>
        <div className="App-intro">
          <Route path="/" component={PosContainer} /> 
          <Route path="/products" component={ProductsContainer} />
        </div>
      </div>
    );
  }
}

export default App;
