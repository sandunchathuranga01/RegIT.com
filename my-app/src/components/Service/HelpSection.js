import React, { useState } from 'react';
import './HelpSection.css'; // Add this CSS for styling
import uxIcon from '../../Assets/PageCovers/product example.jpg';
import webAppIcon from '../../Assets/PageCovers/product example.jpg';
import mobileAppIcon from '../../Assets/PageCovers/product example.jpg';
import devOpsIcon from '../../Assets/PageCovers/product example.jpg';
import consultingIcon from '../../Assets/PageCovers/product example.jpg';
import supportIcon from '../../Assets/PageCovers/product example.jpg';

function HelpSection() {
    const serviceDetails = [
      {
        id: 'uxDesign',
        title: 'UI / UX Design',
        description: `Our UX Design service creates intuitive, engaging user experiences that drive business success. 
        We understand user needs and behaviors to design interfaces that are both beautiful and functional. 
        Whether revamping an existing product or developing a new one, our skilled designers help you achieve your goals 
        and overcome challenges. Let us transform your ideas into seamless digital experiences that captivate and retain your audience.`,
        icon: uxIcon,
      },
      {
        id: 'webApp',
        title: 'Custom Web Application',
        description: 'Developing a web application involves planning and requirement analysis, designing intuitive and responsive UI/UX, and building the front-end and back-end. Rigorous testing ensures functionality and performance before deployment to a suitable hosting server. Domain registration and effective SEO strategies, including on-page optimization and backlink building, enhance visibility and search ranking. Regular maintenance, security measures, and monitoring ensure the application remains efficient, secure, and delivers a seamless user experience.',
        icon: webAppIcon,
      },
      {
        id: 'mobileApp',
        title: 'Custom Mobile Application',
        description: 'Our mobile app development service creates user-friendly, high-quality apps with careful planning, intuitive design, and advanced technology. We ensure robust performance through thorough testing and handle deployment to major app stores. We also offer hosting, app store optimization, SEO, content strategy, and ongoing maintenance. Post-launch, we provide security measures, analytics, and monitoring to keep your app secure, efficient, and discoverable, ensuring a seamless user experience.',
        icon: mobileAppIcon,
      },
      {
        id: 'devOps',
        title: 'DevOps',
        description: 'Our UX Design service creates intuitive, engaging user experiences that drive business success. We understand user needs and behaviors to design interfaces that are both beautiful and functional. Whether revamping an existing product or developing a new one, our skilled designers help you achieve your goals and overcome challenges. Let us transform your ideas into seamless digital experiences that captivate and retain your audience.',
        icon: devOpsIcon,
      },
      {
        id: 'itConsulting',
        title: 'IT Consulting',
        description: 'Our UX Design service creates intuitive, engaging user experiences that drive business success. We understand user needs and behaviors to design interfaces that are both beautiful and functional. Whether revamping an existing product or developing a new one, our skilled designers help you achieve your goals and overcome challenges. Let us transform your ideas into seamless digital experiences that captivate and retain your audience.',
        icon: consultingIcon,
      },
      {
        id: 'helpSupport',
        title: 'Help & Support',
        description: 'Our customer care services offer 24/7 support via email, live chat, phone, and social media, ensuring users can reach us anytime. We provide personalized assistance and prompt issue resolution through our ticketing system. By analyzing feedback and maintaining a comprehensive knowledge base, we continuously improve our services. We also offer proactive support, training, and onboarding to enhance user satisfaction and experience.',
        icon: supportIcon,
      },
    ];
  
    return (
      <section className="help-section">
        <div className="container">
          <h2>How can we help <span className="highlight">you?</span></h2></div>
          <div>
          <p className="subtitle">
            We are dedicated to providing exceptional service and support. Let us know how we can help you achieve your goals and overcome any challenges you may face.
          </p></div>
          <div>
          <div className="service-grid">
            {serviceDetails.map((service) => (
              <div className="service-card" key={service.id}>
                <img src={service.icon} alt={service.title} />
                <h3>{service.title}</h3>
                <div className="service-details">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default HelpSection;