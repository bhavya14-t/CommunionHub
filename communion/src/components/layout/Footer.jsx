import React from 'react';

export const Footer = () => {
  return (
    <div className="footer-container">
    <div className="footer-grid">
      <div className="footer-part">
        <h2> Communion Hub </h2> 
        <p> Connecting people of all faiths
        <br /> through events and community support.</p>
      </div>
      <div className="footer-part">
        <h2> Quick Links</h2>
        <ul className="quick-links">
          <li> <a href="#"className="footer-link">
            Home
          </a></li>
          <li> <a href="#"className="footer-link">
            Events
          </a></li>
          <li> <a href="#"className="footer-link">
            About
          </a></li>
        </ul>
      </div>
      <div className="footer-part">
        <h2> Contact </h2>

        <div className="contact-info">
          <i className="fas-fa-envelope"></i>
          <a href="mailto:support@communionhub.com" className="footer-link"> support@communionhub.com</a>
        </div>

        <div className="contact-info">
          <i className="fas-fa-phone"></i>
           <span className="footer-text"> +91 XXXXX-XXXXX</span>
        </div>
        
        <div className="contact-info">
          <i className="fas-fa-map-marker-alt"></i>
          <span className="footer-text"> Banglore, India</span>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <p>&copy; 2025 Communion Hub. All rights reserved.</p>
    </div>
    </div>
  );
};
