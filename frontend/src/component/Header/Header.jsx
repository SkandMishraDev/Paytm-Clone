import React from 'react';
import './Header.css'; // Make sure to create the CSS file for styling

const Header = () => {
  return (
    <header className="paytm-header">
      <div className="logo-container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" 
          alt="Paytm Logo" 
          className="paytm-logo" 
        />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products, services, etc." />
      </div>
      <div className="icons-container">
        <button className="icon-btn">
          <i className="fas fa-bell"></i>  {/* Notification icon */}
        </button>
        <button className="icon-btn">
          <i className="fas fa-user"></i> {/* Profile icon */}
        </button>
      </div>
    </header>
  );
}

export default Header;
