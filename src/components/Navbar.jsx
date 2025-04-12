import React, { useState } from "react";
import { Link } from "react-router-dom";
import keysystem from "../assets/keysystem.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-teal-200 p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={keysystem}
            alt="IT Consultant"
            className="w-24 rounded-xl" // 6rem width
          />
        </div>

        {/* Menu Items for Desktop */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-teal-500 p-4 space-y-4">
          <Link to="/" className="text-white hover:text-yellow-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-300">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-yellow-300">
            Services
          </Link>
          <Link to="/contactUs" className="text-white hover:text-yellow-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
