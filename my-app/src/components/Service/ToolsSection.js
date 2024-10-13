import React, { useState } from "react";
import "./ToolsSection.css";

import figmaIcon from "../../Assets/ICONS/Technology/Figma.png";
import canvaIcon from "../../Assets/ICONS/Technology/Canva.png";
import photoshopIcon from "../../Assets/ICONS/Technology/Photoshop.png";
import sketchIcon from "../../Assets/ICONS/Technology/AndroidStudio.png"; //import correct icon

import reactIcon from "../../Assets/ICONS/Technology/React.png";
import bootstrapIcon from "../../Assets/ICONS/Technology/Bootstrap.png";
import htmlIcon from "../../Assets/ICONS/Technology/Html.png";
import cssIcon from "../../Assets/ICONS/Technology/CSS.png";
import angularIcon from "../../Assets/ICONS/Technology/Angular.png";
import jsIcon from "../../Assets/ICONS/Technology/JS.png";
import flutterIcon from "../../Assets/ICONS/Technology/Flutter.png";
import dartIcon from "../../Assets/ICONS/Technology/Dart.png";
import androidIcon from "../../Assets/ICONS/Technology/AndroidStudio.png";

import springIcon from "../../Assets/ICONS/Technology/SpringBoot.png";
import dotNetIcon from "../../Assets/ICONS/Technology/AndroidStudio.png"; //import correct icon
import djangoIcon from "../../Assets/ICONS/Technology/DJango.png";
import nodejsIcon from "../../Assets/ICONS/Technology/Nodejs.png";

import firebaseIcon from "../../Assets/ICONS/Technology/Firebase.png";
import mongodbIcon from "../../Assets/ICONS/Technology/Mongodb.png";
import mysqlIcon from "../../Assets/ICONS/Technology/MySQL.png";

import hostingIcon from "../../Assets/ICONS/Host and Domain/Hostinger.png";
import lkDomainIcon from "../../Assets/ICONS/Host and Domain/DotLK.png";
import godaddyIcon from "../../Assets/ICONS/Host and Domain/GoDaddy.png";
import digitalOceanIcon from "../../Assets/ICONS/Host and Domain/Porkbun.png";

function ToolsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tools = [
    "Design Technologies",
    "Backend Technologies",
    "Frontend Technologies",
    "Database Technologies",
    "Our Server and Domain partners",
  ];

  const renderIcons = () => {
    if (tools[activeIndex] === "Design Technologies") {
      return (
        <div className="design-icons">
          <img src={figmaIcon} alt="Figma" />
          <img src={canvaIcon} alt="Canva" />
          <img src={photoshopIcon} alt="Photoshop" />
          <img src={sketchIcon} alt="Sketch" />
        </div>
      );
    } else if (tools[activeIndex] === "Backend Technologies") {
      return (
        <div className="backend-icons">
          <img src={springIcon} alt="Spring" />
          <img src={dotNetIcon} alt=".NET" />
          <img src={djangoIcon} alt="Django" />
          <img src={nodejsIcon} alt="Node.js" />
        </div>
      );
    } else if (tools[activeIndex] === "Frontend Technologies") {
      return (
        <div className="frontend-icons">
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
    } else if (tools[activeIndex] === "Database Technologies") {
      return (
        <div className="database-icons">
          <img src={firebaseIcon} alt="Firebase" />
          <img src={mongodbIcon} alt="MongoDB" />
          <img src={mysqlIcon} alt="MySQL" />
        </div>
      );
    } else if (tools[activeIndex] === "Our Server and Domain partners") {
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
        <h4>Our Tools</h4>
      </div>
      <div>
        <h3>
          We've got you <span className="highlight">covered</span>
        </h3>
        <p className="description">
          Right from creating mobile app UI to scalable MVPs. We have the
          experience to take you to the next level.
        </p>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`tool-card ${activeIndex === index ? "active" : ""}`}
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
