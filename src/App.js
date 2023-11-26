// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './index.css'; // Updated stylesheet name

function App() {
  return (
    <Router>
      <header>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

