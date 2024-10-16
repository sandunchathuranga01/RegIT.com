import React from "react";
import "./ContactInfoSection.css";
import phoneIcon from "../../Assets/PageCovers/contact us.png";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; // Import icons

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
          know how we can help you achieve your goals and overcome <br></br>any
          challenges you may face.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-details">
          <h2>Reach Us</h2>
          <h4>
            <FaMapMarkerAlt className="icon" size={24} /> 123/B, Colombo 07
            ,Srilanka
          </h4>
          <h4>
            <FaEnvelope className="icon" size={10} />{" "}
            <a href="mailto:info@regit.com">info@regit.com</a>
          </h4>
          <h4>
            <FaPhoneAlt className="icon" size={24} /> +94 78 463 8116
          </h4>
          <h4>
            <FaPhoneAlt className="icon" size={24} /> +94 70 532 2534
          </h4>
        </div>

        <div className="contact-icon">
          <img src={phoneIcon} alt="Phone Icon" />
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection;
