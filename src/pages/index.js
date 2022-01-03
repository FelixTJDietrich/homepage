import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/Post"

import { getImage } from "gatsby-plugin-image"
import { Row, Col } from "reactstrap"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Homepage</h1>
    <Row>
      <Col md="8">
        <StaticQuery 
        query={indexQuery} 
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post 
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  path={node.frontmatter.path}
                  body={node.excerpt}
                  tags={node.frontmatter.tags}
                  image={getImage(node.frontmatter.image)}
                />
              ))}
            </div>
          )
        }}
        />
      </ Col>
      <Col md="4">
        <div style={{width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)"}}></div>
      </Col>
    </ Row>
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            path
            tags
            image {
              childImageSharp {
                gatsbyImageData(height: 200)
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
