import React from 'react';
import {
  Card, CardTitle, CardBody, CardText,
} from 'reactstrap';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

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

import author from '../util/author';

export const sidebarQuery = graphql`
  query {
    authorImage: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function Sidebar() {
  return (
    <div className="position-sticky" style={{ top: '2em' }}>
      <Card className="shadow-sm">
        <CardBody>
          <StaticQuery
            query={sidebarQuery}
            render={(data) => (
              <Img
                fluid={data.authorImage.childImageSharp.fluid}
                alt="My profile image"
                className="rounded-circle avatar-image"
              />
            )}
          />
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
                <a href={author.location.url} target="_blank" rel="noopener noreferrer" className="location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" fixedWidth />
                  {author.location.title}
                </a>
              </li>
              <li>
                <a href={`mailto:${author.email}`} target="_blank" rel="noopener noreferrer" className="email">
                  <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" fixedWidth />
                  Email
                </a>
              </li>
              <li>
                <a href={`https://www.twitter.com/${author.handles.twitter}`} target="_blank" rel="noopener noreferrer" className="twitter">
                  <FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth />
                  Twitter
                </a>
              </li>
              <li>
                <a href={`https://www.instagram.com/${author.handles.instagram}`} target="_blank" rel="noopener noreferrer" className="instagram">
                  <FontAwesomeIcon icon={faInstagram} size="lg" fixedWidth />
                  Instagram
                </a>
              </li>
              <li>
                <a href={`https://www.github.com/${author.handles.github}`} target="_blank" rel="noopener noreferrer" className="github">
                  <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth />
                  GitHub
                </a>
              </li>
              <li>
                <a href={`https://www.linkedin.com/in/${author.handles.linkedin}`} target="_blank" rel="noopener noreferrer" className="linkedin">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" fixedWidth />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Sidebar;
