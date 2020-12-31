import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import Elevations from 'react-native-elevation'
import { animateScroll as scroll} from 'react-scroll';
 
const Navbar = () => {
  return (
    <nav className="nav-style">
    
      <ul className="nav">
        <img src="" alt=""/>
        <li className="nav-item-foliobuddies mr-auto p-2">
            <Link to="/" className="nav-link-foliobuddies" onClick={() => scroll.scrollToTop()}>Folio<b>Buddies</b></Link>
        </li>
        <li className="nav-item-home">
            <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item-signup">
            <Link to="/Signup" className="nav-link">SIGN UP</Link>
        </li>
        <li className="nav-item-login">
            <Link to="/Login" className="nav-link">LOG IN</Link>
        </li>
        </ul>
      {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul> */}
    </nav>
  )
}
 
export default Navbar;