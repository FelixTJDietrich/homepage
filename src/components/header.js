import * as React from 'react';

import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Container,
  Button,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { Location } from '@reach/router';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
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
        <div className="header">
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <div className="toggle-theme-container text-end">
                <div
                  className="toggle-theme"
                  style={{
                    WebkitTransform: theme === 'dark' ? 'scaleX(1)' : 'scaleX(-1)',
                    transform: theme === 'dark' ? 'scaleX(1)' : 'scaleX(-1)',
                  }}
                >
                  <Button
                    onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
                  >
                    {theme === 'dark' ? 'light' : 'dark'}
                    _mode
                  </Button>
                </div>
              </div>
            )}
          </ThemeToggler>
          <NavLink className="logo text-center" href="/">
            {author.name}
          </NavLink>
        </div>
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
              <OutboundLink href={`https://www.twitter.com/${author.handles.twitter}`} target="_blank" rel="noopener noreferrer" className="twitter nav-link">
                <FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth />
              </OutboundLink>
            </NavItem>
            <NavItem>
              <OutboundLink href={`https://www.instagram.com/${author.handles.instagram}`} target="_blank" rel="noopener noreferrer" className="instagram nav-link">
                <FontAwesomeIcon icon={faInstagram} size="lg" fixedWidth />
              </OutboundLink>
            </NavItem>
            <NavItem>
              <OutboundLink href={`https://www.github.com/${author.handles.github}`} target="_blank" rel="noopener noreferrer" className="github nav-link">
                <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth />
              </OutboundLink>
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
