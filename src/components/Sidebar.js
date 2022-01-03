import React from "react";
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link, StaticQuery } from "gatsby";

const Sidebar = () => (
  <div>
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