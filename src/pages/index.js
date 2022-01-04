import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/Post"
import PaginationLinks from "../components/PaginationLinks"

const IndexPage = () => {
  const postPerPage = 2
  let numberOfPages 

  return (
    <Layout pageTitle="Home page">
      <Seo title="Home" />
      <StaticQuery 
        query={indexQuery} 
        render={data => {
          numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postPerPage)
          console.log(numberOfPages)
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
                  image={node.frontmatter.image}
                />
              ))}
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages}/>
            </div>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
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

export default IndexPage
