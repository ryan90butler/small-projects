import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <Link to='/route1'>Route 1</Link>
        </div>
          <div>
        <Link to='/route2'>Route 2</Link>
        </div>
        <div>
        <Link to='/route3'>Route 3</Link>
        </div>
        {Routes}
      </div>
      </Router>
    );
  }
}

export default App;
