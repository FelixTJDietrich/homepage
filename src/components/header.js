import * as React from 'react';

import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import { Location } from '@reach/router';
import author from '../util/author';

class Header extends React.Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    this.location = location;
  }

  render() {
    const { pathname } = this.location;
    return (
      <Container className="site-header py-3">
        <NavLink className="header-logo text-center" href="/">
          {author.name}
        </NavLink>
        <Navbar>
          <Nav className="mr-auto">
            <NavItem>
              <NavLink href="/" className={pathname === '/' ? 'active' : 'normal'}>
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className={pathname === '/about' ? 'active' : 'normal'}>
                About
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href={`https://www.twitter.com/${author.handles.twitter}`} target="_blank" rel="noopener noreferrer" className="twitter">
                <FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`https://www.instagram.com/${author.handles.instagram}`} target="_blank" rel="noopener noreferrer" className="instagram">
                <FontAwesomeIcon icon={faInstagram} size="lg" fixedWidth />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`https://www.github.com/${author.handles.github}`} target="_blank" rel="noopener noreferrer" className="github">
                <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

function HeaderInsertLocation(props) {
  return (
    <Location>
      {(locationProps) => <Header {...locationProps} {...props} />}
    </Location>
  );
}

export default HeaderInsertLocation;
