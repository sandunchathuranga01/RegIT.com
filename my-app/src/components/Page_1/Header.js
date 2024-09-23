import React from 'react';
import './Header.css';
import logo from './logo.png';


function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
        <img src={logo} alt="Logo" />
          
        </div>

        {/* Navigation Menu */}
        <nav className="nav">
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Service</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
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
