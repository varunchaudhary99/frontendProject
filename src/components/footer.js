// Footer.jsx
import React from 'react';
import '../App.css'
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';
import greet from '../assets/Grating.png'
import smiles from '../assets/happysmiles.png'
import claim from '../assets/claimsetteled.png'
import { Link } from 'react-router-dom'
function Footer (){
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
            <Link to="/"><img src={require('../assets/logo1.png')}  alt="Logo" className="logo" alt="InsuranceDekho"
              style={{ width: '200px', height: 'auto' }} /></Link>
          <div className="social-icons">
           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebookF size={20} />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={20} />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={20} />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn size={20} />
      </a>
          </div>
          <p>Email: <a href="mailto:support@insurancedekho.com">support@insurancedekho.com</a></p>
          <p>Call: 755 1196 989</p>
        </div>
        
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li><Link to="/car">Car Insurance</Link></li>
              <li><Link to="/bike">Bike Insurance</Link></li>
              <li><Link to="/health">Health Insurance</Link></li>
              <li><Link to="/trem">Term Insurance</Link></li>
               <li><Link to="/investment">Investment</Link></li>
                <li><Link to="/business">Business</Link></li>
                 <li><Link to="/adminNavbar">Admin</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Policy</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Grievance Redressal</li>
              <li>Fraud Detection</li>
              <li>Shipping Policy</li>
              <li>Terms of Use</li>
              <li>Cancellation & Refund</li>
              <li>E-Insurance Account</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>General</h4>
            <ul>
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Fraud Identification</li>
              <li>Disclaimer</li>
              <li>Annual Reports / Annual Returns</li>
              <li>Solicitation Process</li>
              <li>ID Alumni Page</li>
              <li>Corporate Social Responsibility</li>
            </ul>
          </div>
        </div>

        <div className="footer-stats">
          <div>
            <img src={smiles} alt="Happy" />
            <p><strong>80 Lacs+</strong><br />Happy Smiles</p>
          </div>
          <div>
            <img src={greet} alt="Google" />
            <p><strong>4.8</strong><br />Rated on Google</p>
          </div>
          <div>
            <img src={claim} alt="Claims" />
            <p><strong>35k+</strong><br />Claims Served</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
