import React from "react";
import Layout from "../components/layout"
import Post from "../components/Post";
import { graphql } from "gatsby";

const PostList = ({ data, pageContext}) => {
  const posts = data.allMarkdownRemark.edges
  const { currentPage } = pageContext

  return (
    <Layout pageTitle={`Page: ${currentPage}`}>
      {posts.map(({ node }) => (
        <Post 
          key={node.id}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          slug={node.fields.slug}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          image={node.frontmatter.image}
        />
      ))}
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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

export default PostList

