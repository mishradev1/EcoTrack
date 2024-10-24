import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUserPlus, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between items-center magic-hover magic-shadow animate__animated animate__fadeInDown">
    {/* Logo */}
    <div className="text-2xl font-bold text-green-600 flex items-center space-x-2 ml-3">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600" />
      <span>EcoTrack</span>
    </div>

    {/* Navigation Links */}
    <div className="flex space-x-6">
      <Link to="/" className="flex items-center space-x-2 hover:text-green-600 transition">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </Link>
      <Link to="/login" className="flex items-center space-x-2 hover:text-green-600 transition">
        <FontAwesomeIcon icon={faSignInAlt} />
        <span>Login</span>
      </Link>
      <Link to="/register" className="flex items-center space-x-2 hover:text-green-600 transition">
        <FontAwesomeIcon icon={faUserPlus} />
        <span>Register</span>
      </Link>
      <Link to="/issues" className="flex items-center space-x-2 hover:text-green-600 transition">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span>Issues</span>
      </Link>
      <Link to="/profile" className="flex items-center space-x-2 hover:text-green-600 transition">
        <FontAwesomeIcon icon={faUser} />
        <span>Profile</span>
      </Link>
    </div>
  </nav>
);

export default Navbar;
