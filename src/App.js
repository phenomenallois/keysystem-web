import React from 'react';
import { BrowserRouter as Router, } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';


import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

function App() {
  return (
    <Router>  {/* Wrap your app inside Router */}
      <div>
        <Navbar />  {/* Navbar should be within the Router context */}
        {/* Other content */}
        <Hero />
        <Footer />
      </div>
  
      {/* Wrap your routes inside Routes */}
     
  
    </Router>
  );
}

export default App;
