import React, { useState, useEffect, useContext} from 'react';
import { Link, Redirect } from 'react-router-dom';
// import Styled from "styled-components";
import { AuthContext } from "../App";
import { createMuiTheme, ThemeProvider, Button } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  label: {
    backgroundColor: "white"
  }
}));

export default function Signup() {
    // const { state, dispatch } = useContext(AuthContext);
    // const [data, setData] = useState({ errorMessage: "", isLoading: false });

    // const { client_id, redirect_uri } = state;

    // useEffect(() => {
    //   // After requesting Github access, Github redirects back to your app with a code parameter
    //   const url = window.location.href;
    //   const hasCode = url.includes("?code=");

    //   // If Github API returns the code parameter
    //   if (hasCode) {
    //     const newUrl = url.split("?code=");
    //     window.history.pushState({}, null, newUrl[0]);
    //     setData({ ...data, isLoading: true });

    //     const requestData = {
    //       code: newUrl[1]
    //     };

    //     const proxy_url = state.proxy_url;

    //     // Use code parameter and other parameters to make POST request to proxy_server
    //     fetch(proxy_url, {
    //       method: "POST",
    //       body: JSON.stringify(requestData)
    //     })
    //       .then(response => response.json())
    //       .then(data => {
    //         dispatch({
    //           type: "LOGIN",
    //           payload: { user: data, isLoggedIn: true }
    //         });
    //       })
    //       .catch(error => {
    //         setData({
    //           isLoading: false,
    //           errorMessage: "Sorry! Login failed"
    //         });
    //       });
    //   }
    // }, [state, dispatch, data]);

    // if (state.isLoggedIn) {
    //   return <Redirect to="/" />;
    // }

  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <ThemeProvider theme={theme}>
    <div>
        <h2>Log In</h2>
        {/* <span>{data.errorMessage}</span>
        <div>
        {data.isLoading ? (
          <div className="loader-container">
                <div className="loader"></div>
              </div>          ) : (
              <>
                {
                  // Link to request GitHub access
                }
                  <a
                    className="login-link"
                    href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                    onClick={() => {
                      setData({ ...data, errorMessage: "" });
                    }}
                  > */}
                    <Button variant="contained" color="primary" >LOG IN WITH GITHUB</Button>
                  {/* </a> */}
                  <Button variant="outlined" color="primary">LOG IN WITH LINKEDIN</Button>
              {/* </> */}
                {/* )} */}
        {/* </div> */}
        <br/>
        <p>or</p>
        <form noValidate autoComplete="off">
          <TextField  className={clsx(classes.margin, classes.textField)} id="outlined-basic" label="Your Email" variant="outlined" size="small" />
          <br/>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Your Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </form>
        <Button variant="contained" color="primary">LOG IN</Button>
        <Button variant="outlined" color="primary" href="/">CANCEL</Button>
        <p>You have forgotten your password?<Link to="/Login" className="nav-link">Reset it here.</Link></p>
    </div>
    </ThemeProvider>
  )
}