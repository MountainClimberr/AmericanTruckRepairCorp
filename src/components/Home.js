// Home.js

import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import NavBar from './NavBar';
import Testimonials from './Testimonials.js';
import { Link } from 'react-scroll';

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCallNow = () => {
    window.location.href = 'tel:203-223-5795'; // Replace with your actual phone number
  };

  return (
    <div className={`home-container ${scrollPosition > 50 ? 'fade-out' : ''}`}>
      <div className='hero-container'>
        <NavBar />
        <div className='row'>
          <div className='col, button'>
            <h1>Your Trusted Partner In Truck Repairs</h1>
            <p>To schedule your repair call +203-223-5795 or</p>
            <button onClick={handleCallNow}>Call Now</button>
          </div>
          <div className='col'></div>
        </div>
      </div>

      <section className='gallery-section' id="gallery">
        <Gallery />
      </section>

      <section className='testimonials-section' id="testimonials">
        <Testimonials />
      </section>

      <section className='contact-section' id="contact">
        <Contact />
      </section>

      {/* Add a scroll link to the top of the page */}
      <Link to="hero" smooth={true} duration={500} className="scroll-to-top">
        <i className="fas fa-chevron-up"></i>
      </Link>
    </div>
  );
}

export default Home;
