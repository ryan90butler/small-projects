import React, {Component} from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';

export default (
  <Switch>
    <div>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/ClassList/:class' component={ClassList} />
    </div>
  </Switch>
)