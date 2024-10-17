import React from 'react';
import './Footer.css'; // Import your CSS file

import logo from './logo.png';
import Facebook from '../../Assets/ICONS/Social media/facebook.png';
import Email from '../../Assets/ICONS/Social media/gmail.png';     
import Instagram from '../../Assets/ICONS/Social media/instagram.png';
import LinkedIn from '../../Assets/ICONS/Social media/linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src={logo} alt="RegIT Logo" className="logo-image" />
          <p><div>Enhancing your digital presence with</div> innovative IT solutions. <div>Let us help you transform your </div>business through technology.</p>
        </div>

        <div className="quick-links">
          <h3>Quick links</h3>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#join">Join us</a></li>
          </ul>
        </div>
        
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li><a href="#ux-design">UX Design</a></li>
            <li><a href="#mobile-dev">Mobile Application Dev</a></li>
            <li><a href="#web-dev">Web Application Dev</a></li>
            <li><a href="#support">24/7 Support</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h3>Contact us</h3>
          <p>No 98, Pahan uyana, Kumbuka north, Gonapola.</p>
          <p>+94 78 463 8116</p>
          <p>+94 70 532 2534</p>
          <p><a href="mailto:info@regit.com">info@regit.com</a></p>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#"><img src={Facebook} alt="Facebook" /></a>
            <a href="#"><img src={Email} alt="Email" /></a>
            <a href="#"><img src={Instagram} alt="Instagram" /></a>
            <a href="#"><img src={LinkedIn} alt="LinkedIn" /></a>
            <div className="subscribe">
          <input type="email" placeholder="Enter email Address" />
          <button>Subscribe</button>
        </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RegIT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;