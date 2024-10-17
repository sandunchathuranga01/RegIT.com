import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './HeroSection.css';

function HeroSection() {
  const fullText = "Excellent IT services for your success";
  const [displayedText, setDisplayedText] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer); // Stop the timer when all letters are displayed
      }
    }, 100); // Adjust the speed of the letter printing here (100ms delay between letters)

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [fullText]);

  // Function to navigate to the contact page when button is clicked
  const handleContactClick = () => {
    navigate('/contact'); // Navigates to the contact page
  };

  return (
    <section className="hero-section">
      <div className="container">
        {/* Left section with text */}
        <div className="hero-text">
          <div className="hero-tagline">
            <p>EMPOWER YOUR BUSINESS</p>
          </div>
          <h1 className="Hero">{displayedText}</h1>
          <p className="subtext">
            Empowering businesses with cutting-edge software, seamless integrations, and exceptional support. 
            Transforming your vision into reality with custom solutions.
          </p>
          <div className="hero-buttons">
            {/* Call the navigate function on button click */}
            <button className="contact-btn" onClick={handleContactClick}>
              Contact Us
            </button>
            <button className="quote-btn">Request Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
