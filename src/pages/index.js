import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/Post"

import { getImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Homepage</h1>
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
                image={getImage(node.frontmatter.image)}
              />
            ))}
          </div>
        )
      }}
    />
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
            image {
              childImageSharp {
                gatsbyImageData(width: 600)
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
