import React from 'react';
import './Footer.css'; // Make sure to create the CSS file for styling

const Footer = () => {
  return (
    <footer className="paytm-footer">
      <div className="footer-section">
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <span>Follow us on:</span>
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Paytm. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
