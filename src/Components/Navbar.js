// import React from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// // import Elevations from 'react-native-elevation'
// import { animateScroll as scroll} from 'react-scroll';
 
// const Navbar = () => {
//   return (
//     <nav className="nav-style">
//       <ul className="nav">
//         <img src="" alt=""/>
//         <li className="nav-item-foliobuddies mr-auto p-2">
//             <Link to="/" className="nav-link-foliobuddies" onClick={() => scroll.scrollToTop()}>Folio<b>Buddies</b></Link>
//         </li>
//         <li className="nav-item-home">
//             <Link to="/" className="nav-link">HOME</Link>
//         </li>
//         <li className="nav-item-signup">
//             <Link to="/Signup" className="nav-link">SIGN UP</Link>
//         </li>
//         <li className="nav-item-login">
//             <Link to="/Login" className="nav-link">LOG IN</Link>
//         </li>
//         </ul>
//     </nav>
//   )
// }
 
// export default Navbar;

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
import { createMuiTheme, ThemeProvider, Button, Box } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { flexbox } from '@material-ui/system';


// function ElevationScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

export default function ElevateAppBar() {
  return (
    <React.Fragment>
        <AppBar style={{backgroundColor: "#F9F0F1", elevation:8}}>
          <Toolbar>
            <nav className="nav-style">
              <ul className="nav">
                <Box display="flex" flexGrow={1}>
                  <img src="" alt=""/>
                  <li className="nav-item-foliobuddies mr-auto p-2" style={{fontSize: "16px"}} >
                  <Typography>
                    <Link style={{color: "#1E1E24", fontSize: "26px"}} to="/" className="nav-link-foliobuddies" onClick={() => scroll.scrollToTop()}>Folio<b>Buddies</b></Link>
                  </Typography>
                  </li>
                </Box>
                <Box flexGrow={1}>
                <li className="nav-item-home">
                <Typography>
                  <Link style={{color: "#1E1E24"}} to="/" className="nav-link">HOME</Link>
                </Typography>
                </li>
                </Box>
                <Box>
                <li className="nav-item-signup">
                <Typography>
                  <Link style={{color: "#1E1E24"}} to="/Signup" className="nav-link">SIGN UP</Link>
                </Typography>  
                </li>
                </Box>
                <Box>
                <li className="nav-item-login">
                <Typography>
                  <Link style={{color: "#1E1E24"}} to="/Login" className="nav-link">LOG IN</Link>
                </Typography>  
                </li>
                </Box>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}