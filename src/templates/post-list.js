import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/Post';
import PaginationLinks from '../components/PaginationLinks';

function PostList({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <Layout>
      {posts.map(({ node }) => (
        <Post
          key={node.id}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          slug={`post/${node.frontmatter.slug}`}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          image={node.frontmatter.image}
          timeToRead={node.timeToRead}
        />
      ))}
      <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages} />
    </Layout>
  );
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
            date(formatString: "MMM D, YYYY")
            slug
            tags
            image {
              childImageSharp {
                gatsbyImageData(height: 200)
              }
            }
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;

export default PostList;
