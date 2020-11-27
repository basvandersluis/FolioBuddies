import React from 'react';
import './Navbar.css';
 
const Navbar = () => {
  return (
    <nav className="nav-style">
        <li className="nav-item-1 ">
             <a className="nav-link" href="#">FolioBuddies</a>
        </li>
        <ul className="nav">
            
            <li className="nav-item">
                <a className="nav-link" href="#">HOME</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">SIGN UP</a>
            </li>
            <li className="nav-item">
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