import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Orange</h1>
      <BrowserRouter>
        <Switch>
          <Route path="dashboard">
            <Dashboard />
          </Route>
          <Route path="preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
