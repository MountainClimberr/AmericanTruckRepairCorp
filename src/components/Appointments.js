// Appointments.js

import React from 'react';

function Appointments() {
  const handleCallNow = () => {
    // Use window.location.href to initiate a phone call
    window.location.href = 'tel:+203-561-7469'; // Replace with your actual phone number
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      {/* Add appointment booking form here */}
      
      <button onClick={handleCallNow}>Call Now</button>
    </div>
  );
}

export default Appointments;
