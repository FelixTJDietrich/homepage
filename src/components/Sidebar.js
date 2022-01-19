import React from 'react';
import {
  Card, CardTitle, CardBody, CardText,
} from 'reactstrap';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  faMapMarkerAlt,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import author from '../util/author';

function Sidebar() {
  return (
    <div className="position-sticky" style={{ top: '2em' }}>
      <Card className="shadow-sm">
        <CardBody>
          <StaticImage src="../images/author.jpg" alt="My profile picture" className="avatar-image" imgClassName="rounded-circle" />
          <CardTitle className="text-center text-uppercase mb-3">{author.name}</CardTitle>
          <CardText>
            {author.bio}
            <br />
            <Link to="/about" className="read-more">
              Read more →
            </Link>
          </CardText>
          <div className="author-social-links text-left">
            <ul>
              <li style={{ marginBottom: '5px' }}>
                <OutboundLink href={author.location.url} target="_blank" rel="noopener noreferrer" className="location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" fixedWidth />
                  {author.location.title}
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href={`mailto:${author.email}`} target="_blank" rel="noopener noreferrer" className="email">
                  <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" fixedWidth />
                  Email
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href={`https://www.twitter.com/${author.handles.twitter}`} target="_blank" rel="noopener noreferrer" className="twitter">
                  <FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth />
                  Twitter
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href={`https://www.instagram.com/${author.handles.instagram}`} target="_blank" rel="noopener noreferrer" className="instagram">
                  <FontAwesomeIcon icon={faInstagram} size="lg" fixedWidth />
                  Instagram
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href={`https://www.github.com/${author.handles.github}`} target="_blank" rel="noopener noreferrer" className="github">
                  <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth />
                  GitHub
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href={`https://www.linkedin.com/in/${author.handles.linkedin}`} target="_blank" rel="noopener noreferrer" className="linkedin">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" fixedWidth />
                  LinkedIn
                </OutboundLink>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Sidebar;
