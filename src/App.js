import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';

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
        {/* <Login/>
        <Signup/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
