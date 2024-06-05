// Contact.js

import React from 'react';
import '../contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        {/* Contact Section */}
        <div className="contact-section">
          <h3>Contact</h3>
          <p>Phone: (203) 223-5795</p>
          <button onClick={() => window.location.href = 'tel:203-223-5795'}>Call Now</button>
          
          <p>americantruckrepaircorp@gmail.com</p>
          <a href="mailto:americantruckrepaircorp@gmail.com">Email Us</a>
        </div>

        {/* Address Section */}
        <div className="contact-section">
          <h3>Address</h3>
          <p>289 East Village Road<br />Shelton, CT 06484<br />USA</p>
          <button onClick={() => window.location.href = 'https://www.google.com/maps?q=289+East+Village+Road,+Shelton,+CT+06484,+USA'}>GET DIRECTIONS</button>
          
        </div>

        {/* Business Hours Section */}
        <div className="contact-section">
          <h3>Business Hours</h3>
          <table>
            <tbody>
              <tr>
                <td>Mon:</td>
                <td>7:00 AM – 6:00 PM</td>
              </tr>
              <tr>
                <td>Tue:</td>
                <td>7:00 AM – 6:00 PM</td>
              </tr>
              <tr>
                <td>Wed:</td>
                <td>7:00 AM – 6:00 PM</td>
              </tr>
              <tr>
                <td>Thu:</td>
                <td>7:00 AM – 6:00 PM</td>
              </tr>
              <tr>
                <td>Fri:</td>
                <td>7:00 AM – 6:00 PM</td>
              </tr>
              <tr>
                <td>Sat:</td>
                <td>7:00 AM – 6:00 PM</td>
              </tr>
              <tr>
                <td>Sun:</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contact;
