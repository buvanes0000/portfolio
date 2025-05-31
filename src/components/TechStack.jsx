import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faPython,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faNetworkWired,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "./TechStack.css";

const techStacks = [
  { id: 1, icon: faHtml5, title: "HTML", hoverColor: "#e34f26" },
  { id: 2, icon: faCss3Alt, title: "CSS", hoverColor: "#1572b6" },
  { id: 3, icon: faPython, title: "Python", hoverColor: "#3776ab" },
  { id: 4, icon: faDatabase, title: "MySQL", hoverColor: "#4479a1" },
  { id: 5, icon: faNetworkWired, title: "Networking", hoverColor: "#2d89ef" },
  { id: 6, icon: faFigma, title: "Figma", hoverColor: "#f24e1e" },
  { id: 7, icon: faLock, title: "Cyber Tech", hoverColor: "#4b0082" }, // Indigo or any preferred color
];

const TechStack = () => {
  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <div className="tech-stack">
      <h2 className="tech-stack-title">Technologies I've Learned</h2>
      <div className="tech-stack-container">
        {techStacks.map((tech) => (
          <div
            className="tech-stack-card"
            key={tech.id}
            style={{ "--hover-color": tech.hoverColor }}
            onMouseMove={(e) => handleMouseMove(e, tech.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="tech-icon">
              <FontAwesomeIcon icon={tech.icon} size="1.75x" />
            </div>
            <h3>{tech.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
