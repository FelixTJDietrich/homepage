import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import author from '../util/author';

function Footer() {
  return (
    <div className="site-footer">
      <div className="text-center">
        © Felix T.J. Dietrich 2022
        { new Date().getFullYear() === 2022 ? '' : `-${new Date().getFullYear()}` }
      </div>
      <p className="text-center mb-2">Follow me on social media</p>
      <div className="footer-social-links">
        <ul className="social-links-list mb-2">
          <li>
            <OutboundLink href={`https://www.twitter.com/${author.handles.twitter}`} target="_blank" rel="noopener noreferrer" className="twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href={`https://www.instagram.com/${author.handles.instagram}`} target="_blank" rel="noopener noreferrer" className="instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href={`https://www.github.com/${author.handles.github}`} target="_blank" rel="noopener noreferrer" className="github">
              <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href={`https://www.linkedin.com/in/${author.handles.linkedin}`} target="_blank" rel="noopener noreferrer" className="linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
            </OutboundLink>
          </li>
        </ul>
      </div>
      <Link to="/privacy" className="link-muted">
        Privacy Policy
      </Link>
    </div>
  );
}

export default Footer;
