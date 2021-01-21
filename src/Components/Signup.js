import React from 'react';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, Button } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
      main: "#1E1E24"
    }, 
    secondary: {
      main: "#1E1E24"
    }
  }
});

export default function Signup() {
  return (
    <ThemeProvider theme={theme}>
    <div>
        <h2>Signup</h2>
        <Button variant="contained" color="primary">SIGN UP WITH GITHUB</Button>
        <Button variant="outlined" color="primary">SIGN UP WITH LINKEDIN</Button>
        <br/>
        <p>or</p>
        <p>You allready signed up?<Link to="/Login" className="nav-link">Log in here.</Link></p>
        <Button variant="contained" color="primary">SIGN UP</Button>
        <Button variant="outlined" color="primary">CANCEL</Button>

    </div>
    </ThemeProvider>
  )
}