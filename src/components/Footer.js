import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedin, 
  faGoogle
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <div className="site-footer">
    <div className="text-center">
        Code Blog
    </div>
    <p className="text-center">Follow me on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="nooppener noreferrer" className="facebook">
            <FontAwesomeIcon icon={faFacebookF} size="2x" fixedWidth/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="nooppener noreferrer" className="twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="nooppener noreferrer" className="instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth/>
          </a>
          <a href="https://www.google.com" target="_blank" rel="nooppener noreferrer" className="google">
            <FontAwesomeIcon icon={faGoogle} size="2x" fixedWidth/>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="nooppener noreferrer" className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth/>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;