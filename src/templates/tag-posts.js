import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Post from "../components/Post"

const TagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <Layout pageTitle={pageHeader}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
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

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

export default TagPosts