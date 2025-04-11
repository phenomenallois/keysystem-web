import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services";
import ContactUs from "./pages/contactUs";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
  
    </Router>
  );
}

export default App;
