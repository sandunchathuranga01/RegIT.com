import React from 'react';
import './Footer.css';
import logo from './logo.png';


function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
          <div className="logo">
            <img src={logo} alt="Logo" />
          
            </div>
            <p>
              Enhancing your digital presence with innovative IT solutions. Let us help you transform your business through technology.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick links</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Join us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">UX design</a></li>
              <li><a href="#">Mobile Application Dev</a></li>
              <li><a href="#">Web Application Dev</a></li>
              <li><a href="#">24/7 Support</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact us</h3>
            <address>
              No 98, Pahan uyana,<br />
              Kumbuka north,<br />
              Gonapola.<br />
              +94 78 463 8116<br />
              <a href="mailto:info@regit.com">info@regit.com</a>
            </address>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="subscribe-form">
            <input type="email" placeholder="Enter email Address" />
            <button>Subscribe</button>
          </div>
          <div>
          <p>Copyright © 2024 RegIT. All Right Reserved</p></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
