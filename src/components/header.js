import * as React from 'react';
import PropTypes from 'prop-types';

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
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

    const { location, siteTitle } = this.props;
    this.location = location;
    this.siteTitle = siteTitle;
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { pathname } = this.location;
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar fixed="top" light expand="sm" container="sm">
          <NavbarBrand href="/">{this.siteTitle}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/" className={pathname === '/' ? 'active' : 'normal'}>
                  Blog
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/tags" className={pathname === "/tags" ? "active" : "normal"}>
                  Topics
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/about" className={pathname === '/about' ? 'active' : 'normal'}>
                  About
                </NavLink>
              </NavItem>
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
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

function HeaderInsertLocation(props) {
  return (
    <Location>
      {(locationProps) => <Header {...locationProps} {...props} />}
    </Location>
  );
}

export default HeaderInsertLocation;
