import React from "react";
import "./Asection05.css"; // CSS file for styling
import ceoImage from "./AboutUs_ForMutualAdvantage_1920x1080.jpg"; // Path to your uploaded image

const Asection05 = () => {
  return (
    <div className="leadership-container">
      <h2 className="leadership-heading">
        Meet Our <span className="highlight">Leadership</span>
      </h2>
      <p className="leadership-description">
        Our leadership team is dedicated to driving innovation and excellence,
        ensuring the success and growth of our company and clients.
      </p>
      <div className="leadership-grid">
        <div className="leadership-card">
          <div className="image-container">
            <img
              src={ceoImage}
              alt="Mr. Sandun Chathuranga"
              className="leadership-image"
            />
          </div>
          <div className="leadership-info">
            <h3>Mr. Sandun Chathuranga</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div className="leadership-card">
          <div className="image-container">
            <img
              src={ceoImage}
              alt="Mr. Sandun Chathuranga"
              className="leadership-image"
            />
          </div>
          <div className="leadership-info">
            <h3>Miss. Nihinsa Bandara</h3>
            <p>Chief External Affairs Officer</p>
          </div>
        </div>
        <div className="leadership-card">
          <div className="image-container">
            <img
              src={ceoImage}
              alt="Mr. Sandun Chathuranga"
              className="leadership-image"
            />
          </div>
          <div className="leadership-info">
            <h3>Mr. Sandun Chathuranga</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asection05;
