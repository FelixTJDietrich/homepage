import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import { Container, Row, Col } from 'reactstrap';
import Sidebar from './Sidebar';

import Header from './header';
import Footer from './Footer';
import '../styles/index.scss';

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={(data) => (
        <div className="d-flex flex-column min-vh-100">
          <header>
            <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
          </header>
          <Container className="container" id="content">
            <Row>
              <Col md="8">
                {children}
              </Col>
              <Col md="4">
                <Sidebar />
              </Col>
            </Row>
          </Container>
          <footer className="mt-auto">
            <Footer />
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
