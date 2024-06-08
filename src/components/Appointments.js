// Appointments.js

import React from 'react';

function Appointments() {
  const handleCallNow = () => {

    window.location.href = 'tel:+203-561-7469';
  };

  return (
    <div>
      <h2>Book an Appointment</h2>

      
      <button onClick={handleCallNow}>Call Now</button>
    </div>
  );
}

export default Appointments;
