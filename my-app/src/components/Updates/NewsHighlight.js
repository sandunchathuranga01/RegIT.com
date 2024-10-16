import React from 'react';
import './NewsHighlight.css'; // Import the styles

// Import the background image
import backgroundImage from "../../Assets/PageCovers/cover\ 03.jpg"; // Replace with your image path

function NewsHighlight() {
  return (
    <div
      className="news-highlight"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <h2>Global renewables company RES selects</h2>
        <h1>IFS Cloud to support operations</h1>
        <p>
          IFS Cloud's combination of enterprise-class operational ERP
          proficiency, leading service management, and asset management
          capabilities within a single, integrated platform will enable RES
          to support all its global processes.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
}

export default NewsHighlight;
