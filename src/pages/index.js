import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Post from '../components/Post';
import PaginationLinks from '../components/PaginationLinks';

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            slug
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
`;

function IndexPage() {
  const postsPerPage = 10;
  let numberOfPages;

  return (
    <Layout>
      <Seo title="Blog" />
      <StaticQuery
        query={indexQuery}
        render={(data) => {
          numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage);
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  slug={`post/${node.frontmatter.slug}`}
                  body={node.excerpt}
                  tags={node.frontmatter.tags}
                  image={node.frontmatter.image}
                />
              ))}
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
            </div>
          );
        }}
      />
    </Layout>
  );
}

export default IndexPage;
