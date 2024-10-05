import React from "react";
import "./ContactFormSection.css"; // Add styles in this file
import mapImage from "./map.png"; // Add image in this file

function ContactFormSection() {
  return (
    <section className="contact-form-section">
      <div className="container">
        {/* Left side form */}
        <div className="form-container">
          <h2>
            Request Free <span className="highlight">Consultation</span>
          </h2>

          <form className="contact-form">
            <input type="text" placeholder="Your name" className="form-input" />
            <input
              type="email"
              placeholder="Email or Phone number"
              className="form-input"
            />
            <textarea
              placeholder="Message"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Right side map */}
        <div className="map-container">
          <img src={mapImage} alt="Map" />
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
