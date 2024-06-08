// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Appointments from './components/Appointments';
// import Gallery from './components/Gallery';
// import Contact from './components/Contact';
import './index.css'; 

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

