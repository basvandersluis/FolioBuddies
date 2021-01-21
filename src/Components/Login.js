import React from 'react';
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
        <h2>Log In</h2>
        <Button variant="contained" color="primary">LOG IN UP WITH GITHUB</Button>
        <Button variant="outlined" color="primary">LOG IN WITH LINKEDIN</Button>
        <br/>
        <p>or</p>
        <Button variant="contained" color="primary">LOG IN</Button>
        <Button variant="outlined" color="primary">CANCEL</Button>
        <p>You have forgotten your password?<Link to="/Login" className="nav-link">Reset it here.</Link></p>
    </div>
    </ThemeProvider>
  )
}