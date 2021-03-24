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
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
import { createMuiTheme, ThemeProvider, Button, Box } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { flexbox } from '@material-ui/system';


export default function ElevateAppBar() {
  // const handleLogout = () => {
  //   dispatch({
  //     type: "LOGOUT"
  //   });
  return (
    <React.Fragment>
        <AppBar style={{backgroundColor: "#F9F0F1", elevation:8}}>
          <Toolbar>
            <nav className="nav-style">
              <ul className="nav">
                <Box display="flex" flexGrow={1} alignItems="center">
                  <img src="" alt=""/>
                  <li className="nav-item-foliobuddies mr-auto p-2" style={{fontSize: "16px"}} >
                  <Typography>
                    <Link style={{color: "#1E1E24", fontSize: "26px"}} to="/" className="nav-link-foliobuddies" onClick={() => scroll.scrollToTop()}>Folio<b>Buddies</b></Link>
                  </Typography>
                  </li>
                
                <Box display="flex" alignItems="right" >
                <li className="nav-item-home">
                <Typography>
                  <Link style={{color: "#1E1E24"}} to="/" className="nav-link">HOME</Link>
                </Typography>
                </li>
                
                
                <li className="nav-item-signup">
                <Typography>
                  <Link style={{color: "#1E1E24"}} to="/Signup" className="nav-link">SIGN UP</Link>
                </Typography>  
                </li>
                
                
                <li className="nav-item-login">
                <Typography>
                  <Link style={{color: "#1E1E24"}} to="/Login" className="nav-link">LOG IN</Link>
                </Typography>  
                </li>
                {/* <button onClick={()=> handleLogout()}>Logout</button> */}
                </Box>
                </Box>
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
