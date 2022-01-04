import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTwitter, 
  faInstagram, 
  faGithub, 
} from '@fortawesome/free-brands-svg-icons'

import author from "../util/author";

const Footer = () => (
  <div className="site-footer">
    <div className="text-center">
      © Felix T.J. Dietrich 2022{ new Date().getFullYear() === 2022 ? "" : `-${new Date().getFullYear()}` }
    </div>
    <p className="text-center">Follow me on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a href={"https://www.twitter.com/" + author.handles.twitter} target="_blank" rel="noopener noreferrer" className="twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth/>
          </a>
        </li>
        <li>
          <a href={"https://www.instagram.com/" + author.handles.instagram} target="_blank" rel="noopener noreferrer" className="instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth/>
          </a>
        </li>
        <li>
          <a href={"https://www.github.com/" + author.handles.github} target="_blank" rel="noopener noreferrer" className="github">
            <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth/>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;