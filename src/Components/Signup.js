import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div>
        <h2>Signup</h2>
        <Button variant="contained" color="primary">SIGN UP WITH GITHUB</Button>
        <Button variant="outlined" color="primary">SIGN UP WITH LINKEDIN</Button>
        <br/>
        <p>or</p>
        <Button variant="contained" color="primary">SIGN UP</Button>
        <Button variant="outlined" color="primary">Cancel</Button>
        <p>You are already signet up?<Link to="/Login" className="nav-link">Log in here.</Link></p>

    </div>
  
  )
}