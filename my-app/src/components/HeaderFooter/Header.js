import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to determine active link
import logo from './logo.png';

function Header() {
  const location = useLocation(); // Get the current location

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
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}> {/* Add 'active' if current route is '/' */}
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}> {/* Add 'active' if current route is '/about' */}
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={location.pathname === '/services' ? 'active' : ''}> {/* Add 'active' if current route is '/services' */}
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}> {/* Add 'active' if current route is '/contact' */}
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/updates" 
                className={location.pathname === '/updates' ? 'active' : ''}> {/* Add 'active' if current route is '/updates' */}
                Updates
              </Link>
            </li>
            <li>
              <Link 
                to="/readmore" 
                className={location.pathname === '/readmore' ? 'active' : ''}> {/* Add 'active' if current route is '/readmore' */}
                Read More
              </Link>
            </li>
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
