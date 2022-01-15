import React from 'react';
import { graphql } from 'gatsby';
import {
  Card, CardBody, CardSubtitle, CardTitle, CardHeader,
} from 'reactstrap';
import Layout from '../components/layout';
import Post from '../components/Post';

function TagPosts({ data, pageContext }) {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <Card className="mb-3">
        <CardHeader>
          Info
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5" className="mb-1 info-title">
            {`Posts tagged with "${tag}"`}
          </CardTitle>
          <CardSubtitle className="mb-1 text-muted">
            {`${totalCount} post${totalCount === 1 ? '' : 's'}`}
          </CardSubtitle>
        </CardBody>
      </Card>
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
          excerpt
        }
      }
    }
  }
`;

export default TagPosts;
