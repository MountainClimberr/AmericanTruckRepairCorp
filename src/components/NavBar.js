// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import TruckLogo from '../assets/TruckLogo.png';

function NavBar() {
  return (
      <div className='navbar'>
        <img src={TruckLogo} className='logo' alt=''/>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
  );
}

export default NavBar;
