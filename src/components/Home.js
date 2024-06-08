import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import NavBar from './NavBar';
import Testimonials from './Testimonials.js';
import { animateScroll as scroll } from 'react-scroll';

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
    window.location.href = 'tel:203-223-5795'; 
  };

  const scrollToTop = () => {
    scroll.scrollToTop(); 
  };

  const heroOpacity = 1 - Math.min(scrollPosition / 750, 1);

  return (
    <div className={`home-container`}>
      <div className='hero-container' style={{ opacity: heroOpacity }}>
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

      <div className="scroll-to-top" onClick={scrollToTop}>
        {/* Render the SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16 15a1 1 0 0 1-.707-.293L12 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 15z" style={{ fill: '#1c1b1e' }}/>
        </svg>
      </div>
    </div>
  );
}

export default Home;
