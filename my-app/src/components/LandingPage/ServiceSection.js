import React from "react";
import "./ServiceSection.css";

import UXDesignIcon from "../../Assets/ICONS/Services/ux-design.png";
import WebApplicationIcon from "../../Assets/ICONS/Services/webApp.png";
import MobileApplicationIcon from "../../Assets/ICONS/Services/MobileApplication.png";
import HelpSupportIcon from "../../Assets/ICONS/Services/support.png";

function ServiceSection() {
  return (
    <section className="service-section">
      <div className="container">
        <h2>
          How can we help <span className="highlight">you?</span>
        </h2>
      </div>
      <div>
        <p className="subtitle">
          <div>
            We are dedicated to providing exceptional service and support. Let
            us know how we can help you{" "}
          </div>
          achieve your goals and overcome any challenges you may face.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <div className="service-icon">
            <img src={UXDesignIcon} alt="UX Design Icon" />
          </div>
          <h3>UX Design</h3>
          <p>
            We create seamless, user-centered digital experiences that ensure
            your products are not only functional but also loved by users.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={WebApplicationIcon} alt="Web Application Icon" />
          </div>
          <h3>Web Application</h3>
          <p>
            We transform your innovative web concepts into robust, reliable, and
            user-friendly websites.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={MobileApplicationIcon} alt="Mobile Application Icon" />
          </div>
          <h3>Mobile Application</h3>
          <p>
            Partner with us to develop mobile applications designed to cater to
            millions of users efficiently.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={HelpSupportIcon} alt="Help & Support Icon" />
          </div>
          <h3>Help & Support</h3>
          <p>
            Our dedicated support team is here to assist you. Whether you need
            help or have questions, we’re available 24/7 to provide solutions
            and support.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
