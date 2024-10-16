import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from './logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Menu */}
        <nav className="nav">
          <ul>
            <li><Link to="/" className="active">Home</Link></li> {/* Use Link for navigation */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li><Link to="/OurProduct">Our Product</Link></li> */}
            <li><Link to="/updates">Updates</Link></li>
            <li><Link to="/readmore">Read More</Link></li>
          </ul>
        </nav>

        {/* Join Us Button */}
        <div className="join-us">
          <button>Join us</button>
        </div>
      </div>
    </header>
  );
}

export default Header;


