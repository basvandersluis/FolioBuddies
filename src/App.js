import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { initialState, reducer } from "./Store/Reducer";

export const AuthContext = createContext();


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <div className="App">
      <BrowserRouter style={{color: "#1E1E24"}}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
