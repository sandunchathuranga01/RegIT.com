import React from "react";
import "./ContactInfoSection.css"; // Create this CSS file
import phoneIcon from "../../Assets/PageCovers/contact us.png";

function ContactInfoSection() {
  return (
    <section className="contact-info-section">
      <div className="container">
        <h2>
          Get in <span className="highlight">Touch?</span>
        </h2>
      </div>
      <div>
        <p className="description">
          We are dedicated to providing exceptional service and support. Let us
          know how we can help you achieve your goals and overcome any
          challenges you may face.
        </p>
        <div className="contact-grid">
          <div className="contact-details">
            <h3>Reach Us</h3>
            <address>
              123/B, Route 66, Downtown,
              <br />
              Washington, DC 20004, US
              <br />
              <a href="mailto:info@regit.com">info@regit.com</a>
              <br />
              +94 78 463 8116
              <br />
              +94 78 463 8116
            </address>
          </div>
          <div className="contact-icon">
            <img src={phoneIcon} alt="Phone Icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection;
