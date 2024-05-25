import React, { useState } from "react";
import logo from "../../Images/logo/logo.png";
import "./navbar.css";

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen);
    };
  return (
    <div className="container navbar-sticky-top p-0">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`backdrop ${isNavOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="navbar-links">
          <a href="#home" className="navbar-link active">
            Home
          </a>
          <a href="#about" className="navbar-link">
            About Us
          </a>
          <a href="#services" className="navbar-link">
            Our Services
          </a>
          <a href="#responsibilities" className="navbar-link">
            Responsibilities
          </a>
          <a href="#country" className="navbar-link">
            Country
          </a>
          <a href="#apply" className="navbar-apply-button">
            Apply
          </a>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
