import React, { useState } from 'react';
import './ToolsSection.css';
// Assuming you have imported the icons in your project
import figmaIcon from './ux.png';
import canvaIcon from './web.png';
import photoshopIcon from './dev.png';
import sketchIcon from './consult.png';

import reactIcon from './ux.png';
import bootstrapIcon from './ux.png';
import htmlIcon from './ux.png';
import cssIcon from './ux.png';
import angularIcon from './ux.png';
import jsIcon from './ux.png';
import flutterIcon from './ux.png';
import dartIcon from './ux.png';
import androidIcon from './ux.png';

import springIcon from './ux.png';
import dotNetIcon from './ux.png';
import djangoIcon from './ux.png';
import nodejsIcon from './ux.png';

import firebaseIcon from './ux.png';
import mongodbIcon from './ux.png';
import mysqlIcon from './ux.png';

// New server and domain partner icons
import hostingIcon from './ux.png';
import lkDomainIcon from './ux.png';
import godaddyIcon from './ux.png';
import digitalOceanIcon from './ux.png';

function ToolsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const tools = [
      'Design Technologies',
      'Backend Technologies',
      'Frontend Technologies',
      'Database Technologies',
      'Our Server and Domain partners',
    ];
  
    const renderIcons = () => {
      if (tools[activeIndex] === 'Design Technologies') {
        return (
          <div className="design-icons">
            <img src={figmaIcon} alt="Figma" />
            <img src={canvaIcon} alt="Canva" />
            <img src={photoshopIcon} alt="Photoshop" />
            <img src={sketchIcon} alt="Sketch" />
          </div>
        );
      } else if (tools[activeIndex] === 'Backend Technologies') {
        return (
          <div className="backend-icons">
            <img src={reactIcon} alt="React" />
            <img src={bootstrapIcon} alt="Bootstrap" />
            <img src={htmlIcon} alt="HTML5" />
            <img src={cssIcon} alt="CSS3" />
            <img src={angularIcon} alt="Angular" />
            <img src={jsIcon} alt="JavaScript" />
            <img src={flutterIcon} alt="Flutter" />
            <img src={dartIcon} alt="Dart" />
            <img src={androidIcon} alt="Android" />
          </div>
        );
      } else if (tools[activeIndex] === 'Frontend Technologies') {
        return (
          <div className="frontend-icons">
            <img src={springIcon} alt="Spring" />
            <img src={dotNetIcon} alt=".NET" />
            <img src={djangoIcon} alt="Django" />
            <img src={nodejsIcon} alt="Node.js" />
          </div>
        );
      } else if (tools[activeIndex] === 'Database Technologies') {
        return (
          <div className="database-icons">
            <img src={firebaseIcon} alt="Firebase" />
            <img src={mongodbIcon} alt="MongoDB" />
            <img src={mysqlIcon} alt="MySQL" />
          </div>
        );
      } else if (tools[activeIndex] === 'Our Server and Domain partners') {
        return (
          <div className="server-icons">
            <img src={hostingIcon} alt="Hosting" />
            <img src={lkDomainIcon} alt=".LK Domain" />
            <img src={godaddyIcon} alt="GoDaddy" />
            <img src={digitalOceanIcon} alt="DigitalOcean" />
          </div>
        );
      }
      return null;
    };
  
    return (
      <section className="tools-section">
        <div className="container">
          <h2>Our Tools</h2></div>
        <div>
          <h3>We've got you <span className="highlight">covered</span></h3>
          <p className="description">
            Right from creating mobile app UI to scalable MVPs. We have the experience to take you to the next level.
          </p>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className={`tool-card ${activeIndex === index ? 'active' : ''}`} 
                onClick={() => setActiveIndex(index)}
                role="button"
                aria-selected={activeIndex === index}
                tabIndex="0"
              >
                {tool}
              </div>
            ))}
          </div>
          {renderIcons()}
        </div>
      </section>
    );
  }
  
  export default ToolsSection;