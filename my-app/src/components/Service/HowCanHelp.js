import React, { useState } from "react";
import "./HowCanHelp.css";

import UXDesign_Icon from "../../Assets/ICONS/Services/ux-design.png";
import WebApplication_Icon from "../../Assets/ICONS/Services/webApp.png";
import MobileApplication_Icon from "../../Assets/ICONS/Services/MobileApplication.png";
import HelpSupport_Icon from "../../Assets/ICONS/Services/support.png";
import ITConsulting_Icon from "../../Assets/ICONS/Services/MobileApplication.png";
import DevOps_Icon from "../../Assets/ICONS/Services/support.png";

const HowCanHelp = () => {
  const services = [
    {
      name: "UI / UX Design",
      icon: UXDesign_Icon,
      details:
        "Our UX Design service creates intuitive, engaging user experiences that drive business success. We understand user needs and behaviors to design interfaces that are both beautiful and functional. Whether revamping an existing product or developing a new one, our skilled designers help you achieve your goals and overcome challenges.",
    },
    {
      name: "Custom Web Application",
      icon: WebApplication_Icon,
      details:
        "Build robust and scalable web applications tailored to meet your business needs. We provide custom solutions that align with your goals, ensuring a seamless digital experience for your users.",
    },
    {
      name: "Custom Mobile Application",
      icon: MobileApplication_Icon,
      details:
        "Develop responsive mobile applications that deliver an exceptional experience on any device. Our team ensures your app is optimized for performance, usability, and scalability.",
    },
    {
      name: "DevOps",
      icon: DevOps_Icon,
      details:
        "Streamline your development and operations processes with our DevOps solutions. We help you implement continuous integration and delivery practices to increase efficiency.",
    },
    {
      name: "IT Consulting",
      icon: ITConsulting_Icon,
      details:
        "Our IT consulting services provide expert guidance on strategy, technology, and execution. Let us help you make informed decisions and stay ahead in the digital landscape.",
    },
    {
      name: "Help & Support",
      icon: HelpSupport_Icon,
      details:
        "We provide 24/7 support to ensure your operations run smoothly. Whether it's troubleshooting, maintenance, or advice, we are here to help.",
    },
  ];

  // Set UI / UX Design as the default selected service
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const otherServices = services.filter(
    (service) => service.name !== selectedService?.name
  );

  return (
    <div className="How-can-help-container">
      <h2 className="How-can-help-process-heading">
        How can we help <span className="highlight">you?</span>
      </h2>
      <p className="How-can-help-process-explain">
        We are dedicated to providing exceptional service and support. Let us
        know how we can help you achieve your goals and overcome any challenges
        you may face.
      </p>

      <div className="How-can-help-details-container">
        <div className="How-can-help-details">
          <img
            src={selectedService.icon}
            alt={`${selectedService.name} Icon`}
            className="S-process-icon-large"
          />
          <h3>{selectedService.name}</h3>
          <p>{selectedService.details}</p>
        </div>

        <div className="How-can-help-other-services">
          {otherServices.map((service, index) => (
            <div
              key={index}
              className="How-can-help-process-step-small"
              onClick={() => handleServiceClick(service)}
            >
              <img
                src={service.icon}
                alt={`${service.name} Icon`}
                className="S-process-icon"
              />
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowCanHelp;
