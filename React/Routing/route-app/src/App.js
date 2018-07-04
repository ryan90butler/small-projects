import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Page4 from './views/Page4';

class App extends Component {
  render() {
    return (
      <div>
          <header>This is my header</header>
      <Router>
        <Switch>
          <Route path='/page1' component={ Page1 }/>
          <Route path='/page2/:id' component={ Page2 }/>
          <Route path='/page3' component={ Page3 }/>
          <Route path='/page4' component={ Page4 }/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
