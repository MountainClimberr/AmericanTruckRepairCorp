// NavBar.js

import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import TruckLogo from '../assets/TruckLogo.png';

function NavBar() {
  return (
    <div className='navbar'>
      <img src={TruckLogo} className='logo' alt='' />
      <nav>
        <ul>
          <li><ScrollLink to="gallery" smooth={true} duration={500}>Gallery</ScrollLink></li>
          <li><ScrollLink to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
