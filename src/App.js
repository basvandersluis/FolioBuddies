import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Button from '@material-ui/core/Button';

import Signup from './Components/Signup';
import Login from './Components/Login';
  


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
