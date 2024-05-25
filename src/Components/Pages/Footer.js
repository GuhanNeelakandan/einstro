import React from 'react';
import './footer.css';
import logo from "../../Images/logo/logo.png";

function Footer() {
  return (
    <div className='container-fluid p-0 footer'>
      <div className='footer-container'>
          <div className='footer-company-details'>
            <img src={logo} alt="logo" className='footer-logo' />
            <div className='footer-address'>
              No. 4/636 A, VOC Street, PTC, Thuraipakkam (OMR), Chennai - 600 097, Tamil Nadu, India.
            </div>
            <div className='footer-contact'>
             8754543330
            </div>
            <div className='footer-mail'>
              <a href='mailto:info@einstroacademy.com'>Einstro Academy</a>
            </div>
          </div>
          <div className='footer-link-details'>
              <div>
              <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/responsibilities">Responsibilities</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
              </div>
          </div>
          <div className='footer-link-details' >
            <ul className="footer-links">
          <li><a href="/disclaimer">Disclaimer</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-social-details">
            <a href="https://www.facebook.com" className='footer-social'><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com" className='footer-social'><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com" className='footer-social'><i className="fab fa-instagram"></i></a>
          </div>
      </div>
    </div>
  );
}

export default Footer;
