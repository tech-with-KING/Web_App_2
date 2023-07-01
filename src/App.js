import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import HomePage from '../HomePage.js';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}
