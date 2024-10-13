import React from 'react';
import './DomainSearchSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

function DomainSearchSection() {
  return (
    <section className="domain-search-section">
      <div className="container">
        <h2>SEARCH FOR YOUR NEW <span className="highlight">DOMAIN </span>HERE</h2></div>
        <div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search Your Domain" 
            className="search-input" 
          />
          <button className="search-btn">
            <i className="fas fa-search"></i> {/* Font Awesome Search Icon */}
          </button>
        </div>
      </div>
    </section>
  );
}

export default DomainSearchSection;
