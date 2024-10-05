import React from 'react';
import './PortfolioSection.css';
import image from './image.png';

function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Portfolio</h2></div>
        <div>
        <p className="subtitle">
          Explore our diverse range of projects and see how we’ve helped clients achieve their goals
          through innovative design and development.
        </p></div>
        <div>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src={image} alt="Project 1" />
          </div>
          <div className="portfolio-item">
            <img src={image} alt="Project 2" />
          </div>
          <div className="portfolio-item">
            <img src={image} alt="Project 3" />
          </div>
        </div></div>
        <div>
        <div className="explore-more">
          <button className="explore-btn">
            EXPLORE MORE <span className="arrow">→</span>
          </button></div>
        </div>
    
    </section>
  );
}

export default PortfolioSection;
