import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './app.scss';
import Pos from './components/Pos';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
          <NavLink exact to="/" activeClassName="active">Pos</NavLink>
          <NavLink to="/products" activeClassName="active">Products</NavLink>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Pos} />
            <Route path="/products" component={Products} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
