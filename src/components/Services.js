// Service.js

import React from 'react';
import '../service.css'; 

const Service = () => {
  return (
    <section className='service-section' id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <h4 className='service-card-number'>1</h4>
              <div className="service-card-body">
                <h5 className="service-card-title">Body Repairs</h5>
                <p className="service-card-text">Our body repair service includes fixing damages to the truck body caused by accidents, corrosion, or wear and tear.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <h4 className='service-card-number'>2</h4>
              <div className="service-card-body">
                <h5 className="service-card-title">Suspension</h5>
                <p className="service-card-text">We provide suspension repair and maintenance services to ensure smooth and safe rides for your trucks.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <h4 className='service-card-number'>3</h4>
              <div className="service-card-body">
                <h5 className="service-card-title">Inspection</h5>
                <p className="service-card-text">Our inspection service helps identify any issues with your truck's components and systems, ensuring compliance with safety regulations.</p>
              </div>
            </div>
          </div>
          {/* Add more cards for other services */}
        </div>
      </div>
    </section>
  );
};

export default Service;
