import React from 'react';
import './DomainSearchSection.css'; // Import the CSS file

function DomainSearchSection() {
  return (
    <section className="domain-search-section">
      <div className="container">
        <h2>SEARCH FOR YOUR NEW DOMAIN HERE</h2></div>
        <div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search Your Domain" 
            className="search-input" 
          />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default DomainSearchSection;
