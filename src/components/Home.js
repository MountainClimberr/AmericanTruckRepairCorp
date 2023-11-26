// Home.js

import React from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import NavBar from './NavBar';



function Home() {

  const handleCallNow = () => {
    // Use window.location.href to initiate a phone call
    window.location.href = 'tel:+203-561-7469'; // Replace with your actual phone number
  };

  return (
    <div className='home-container'>
      <div className='hero-container'>
        <NavBar/>
        <div className='row'>
          <div className='col, button'>
            <h1>Your Trusted Partner In Truck Repairs</h1>
            <p>To schedule your repair call +203-223-5795 or</p>
            <button onClick={handleCallNow}>Call Now</button>
          </div>
          <div className='col'>
          
          </div>
        </div>
      </div>
      <section className='gallery-section'>
        <Gallery />
      </section>

      <section className='contact-section'> 
        <Contact />
      </section>
    </div>
  );
}

export default Home;
