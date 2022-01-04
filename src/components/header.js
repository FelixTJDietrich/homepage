import * as React from "react"
import PropTypes from "prop-types"

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTwitter, 
  faInstagram, 
  faGithub, 
} from '@fortawesome/free-brands-svg-icons'

import author from "../util/author";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" light expand="sm" container="sm">
          <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags">Topics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"https://www.twitter.com/" + author.handles.twitter} target="_blank" rel="noopener noreferrer" className="twitter">
                  <FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth/>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"https://www.instagram.com/" + author.handles.instagram} target="_blank" rel="noopener noreferrer" className="instagram">
                  <FontAwesomeIcon icon={faInstagram} size="lg" fixedWidth/>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"https://www.github.com/" + author.handles.github} target="_blank" rel="noopener noreferrer" className="github">
                  <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth/>
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
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
