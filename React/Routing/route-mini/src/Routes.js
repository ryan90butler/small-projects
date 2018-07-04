import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';

export default (

  <Switch>
    <Route path='/Route1' component={ Route1 } />
    <Route path='/Route2' component={ Route2 } />
    <Route path='/Route3' component={ Route3 } />
  </Switch>
)

