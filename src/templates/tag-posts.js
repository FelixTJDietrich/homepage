import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/Post';

function TagPosts({ data, pageContext }) {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <h2 className="mb-1">
        {`${tag} posts`}
      </h2>
      <p className="mb-4 text-muted">
        {`${totalCount} post${totalCount === 1 ? '' : 's'}`}
      </p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
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
    </Layout>
  );
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
            date(formatString: "MMM D, YYYY")
            slug
            tags
            image {
              childImageSharp {
                gatsbyImageData(height: 200)
              }
            }
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;

export default TagPosts;
