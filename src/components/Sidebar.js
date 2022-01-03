import React from "react";
import { Card, CardTitle, CardBody, CardText, Form, FormGroup, Input } from "reactstrap";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { graphql, Link, StaticQuery } from "gatsby";

import author from "../util/author";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTwitter, 
  faInstagram, 
  faGithub, 
} from '@fortawesome/free-brands-svg-icons'

import { 
  faMapMarkerAlt,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div>
    <Card>
      <StaticImage className="card-image-top" src="../images/author.jpg"/>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">{author.name}</CardTitle>
        <CardText>{author.bio}</CardText>
        
        <div className="author-social-links text-left">
          <ul>
            <li style={{ marginBottom: "10px" }}>
              <a href={author.location.url} target="_blank" rel="noopener noreferrer" className="location">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" fixedWidth/>{author.location.title}
              </a>
            </li>
            <li>
              <a href={"mailto:" + author.email} target="_blank" rel="noopener noreferrer" className="email">
                <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" fixedWidth/>Email
              </a>
            </li>
            <li>
              <a href={"https://www.twitter.com/" + author.handles.twitter} target="_blank" rel="noopener noreferrer" className="twitter">
                <FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth/>Twitter
              </a>
            </li>
            <li>
              <a href={"https://www.instagram.com/" + author.handles.instagram} target="_blank" rel="noopener noreferrer" className="instagram">
                <FontAwesomeIcon icon={faInstagram} size="lg" fixedWidth/>Instagram
              </a>
            </li>
            <li>
              <a href={"https://www.github.com/" + author.handles.github} target="_blank" rel="noopener noreferrer" className="github">
                <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth/>GitHub
              </a>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input type="email" name="email" placeholder="Your email address..."/>
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Recent Posts
        </CardTitle>
        <StaticQuery query={sidebardQuery} render={(data) => (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card key={node.id}>
                <Link to={node.fields.slug}>
                  <GatsbyImage className="card-image-top" image={getImage(node.frontmatter.image)}/>
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={node.fields.slug}>
                      {node.frontmatter.title}
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))}
          </div>
        )} />
      </CardBody>
    </Card>
  </div>
)

const sidebardQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar