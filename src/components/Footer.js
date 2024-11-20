import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>bigbasket</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">In News</a></li>
            <li><a href="#">Green bigbasket</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Careers At bigbasket</a></li>
            <li><a href="#">bb Instant</a></li>
            <li><a href="#">bb Daily</a></li>
            <li><a href="#">bb Blog</a></li>
            <li><a href="#">bbnow</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">bb Wallet FAQs</a></li>
            <li><a href="#">bb Wallet T&Cs</a></li>
            <li><a href="#">Vendor Connect</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Download Our App</h4>
          <div>
          <a href="#"><img src="/images/google-play-badge.png" alt="Google Play" className="glogo"/></a>
          </div>
          <a href="#"><img src="/images/apple.png" alt="App Store" className='alogo' /></a>
        </div>

        <div className="footer-section">
          <h4>Get Social With Us</h4>
          <div className="social-icons">
            <a href="#"><i class="bi bi-facebook social"></i></a>
            <a href="#"><i class="bi bi-pinterest social"></i></a>
            <a href="#"><i class="bi bi-twitter social"></i></a>
            <a href="#"><i class="bi bi-instagram social"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2022-2024 Supermarket Grocery Supplies Pvt Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
