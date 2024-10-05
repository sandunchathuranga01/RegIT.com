import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Left section with text */}
        <div className="hero-text">
          <div className="hero-tagline">
            <p>EMPOWER YOUR BUSINESS</p>
          </div>
          <h1>Excellent IT services <br></br>
            <div className="a">for your success</div></h1>
          <p className="subtext">
            Empowering businesses with cutting-edge software, seamless integrations, and exceptional support. 
            Transforming your vision into reality with custom solutions.
          </p>
          <div className="hero-buttons">
            <button className="contact-btn">Contact Us</button>
            <button className="quote-btn">Request Quote</button>
          </div>
        </div>

        {/* Right section with graphical element */}
        <div className="hero-graphic">
          <img src="/path/to/graphic.png" alt="image" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
