import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-2 py-3 flex items-center justify-between">
        {/* Logo and App Name */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <div className="flex flex-col">
            <span className="text-xl font-bold">CampusFix</span>
            <span className="text-xs text-gray-500">Electrical Management</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
             <Link to="/home" className="text-gray-800 hover:bg-gray-100 p-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/aboutsection" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">About</Link>
          <Link to="/ourservices" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Services</Link>
             <Link to="/contact" className="text-gray-800 hover:bg-gray-100 p-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>

        {/* Desktop Login and Sign Up Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-gray-600 border border-gray-300 py-1 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-200">Login</Link>
          <Link to="/signup" className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">Sign Up</Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}


      
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
             <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <div className="flex flex-col">
            <span className="text-xl font-bold">CampusFix</span>
            <span className="text-xs text-gray-500">Electrical Management</span>
          </div>
        </div>
             <Link to="/home" className="text-gray-800 hover:bg-gray-100 p-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/aboutsection" className="text-gray-800 hover:bg-gray-100 p-2 rounded-md" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/ourservices" className="text-gray-800 hover:bg-gray-100 p-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/contact" className="text-gray-800 hover:bg-gray-100 p-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
         
          <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
            <Link to="/login" className="text-gray-800 hover:bg-gray-100 p-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link to="/signup" className="bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
