import React from 'react';
import './Navbar.css';
 
const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul className="nav">
        <img src="" alt=""/>
        <li className="nav-item-foliobuddies mr-auto p-2">
             <a className="nav-link" href="#">FolioBuddies</a>
        </li>
        <li className="nav-item-home">
            <a className="nav-link" href="#">HOME</a>
        </li>
        <li className="nav-item-signup">
            <a className="nav-link" href="#">SIGN UP</a>
        </li>
        <li className="nav-item-login">
            <a className="nav-link" href="#">LOG IN</a>
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