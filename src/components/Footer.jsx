import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <footer className="footer" onMouseMove={handleMouseMove}>
      <div
        className="footer-interaction-layer"
        style={{
          backgroundPosition: `${mousePosition.x / 10}px ${mousePosition.y / 10}px`,
        }}
      ></div>
      <div className="footer-content">
        <div className="footer-logo">
          <h2 style={{ fontFamily: "VT323, serif" }}>Buvanes</h2>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com/profile.php?id=61558372202884" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/buvaneswaran-v-07013518b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/buvaneswaran_vinayagam?igsh=NGtqN2JzODNpODgy" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} buvanes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

