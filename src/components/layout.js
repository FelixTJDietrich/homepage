/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import Sidebar from "../components/Sidebar"
import { Container, Row, Col } from "reactstrap"

import Header from "./header"
import Footer from "./Footer"
import "../styles/index.scss"

const Layout = ({ children }) => (
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
    render={data => (
      <body className="d-flex flex-column min-vh-100">
        <header>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        </header>
        <content>
          <Container className="container" id="content">
            <Row>
              <Col md="8">
              {children}
              </Col>
              <Col md="4">
                <Sidebar/>
              </Col>
            </Row>
          </Container>
        </content>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
