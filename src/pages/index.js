import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/Post"
import Sidebar from "../components/Sidebar"

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
                  key={node.id}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  slug={node.fields.slug}
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
        <Sidebar />
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
            tags
            image {
              childImageSharp {
                gatsbyImageData(height: 200)
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
