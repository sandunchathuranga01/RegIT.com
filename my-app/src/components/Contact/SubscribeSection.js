import React from "react";
import "../../Assets/PageCovers/product example.jpg"; // Add your styles in this file
import "./SubscribeSection.css"

function SubscribeSection() {
  return (
    <section className="subscribe-section">
      <div className="container">
        <h2>
          <span className="highlight">Subscribe</span> to our newsletter
        </h2>
      </div>
      <div>
        <p className="subtitle">subscribe to our newsletter and stay update</p>

        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your Email address"
            className="subscribe-input"
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection;
