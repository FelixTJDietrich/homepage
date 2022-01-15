/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, Link } from 'gatsby';
import {
  CardSubtitle, CardTitle, Badge,
} from 'reactstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { DiscussionEmbed } from 'disqus-react';
import author from '../util/author';
import { slugify } from '../util/utilityFunctions';
import Seo from '../components/seo';
import Layout from '../components/layout';

function SinglePost({ data, pageContext }) {
  const post = data.markdownRemark.frontmatter;
  const file = data.markdownRemark.parent;
  const baseUrl = 'https://felixdietrich.com/';

  const disqusShortname = 'felixtjdietrich';
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: post.title,
    url: baseUrl + pageContext.slug,
  };

  return (
    <Layout>
      <Seo title={post.title} />
      <div className="blog-post">
        {post.image
          && (
          <GatsbyImage
            className="card-image-top rounded mb-4"
            image={getImage(post.image)}
            style={{ width: '100%' }}
            imgStyle={{ objectFit: 'cover' }}
            alt=""
          />
          )}
        <CardTitle tag="h1" className="mb-1">{post.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted">
          {post.date}
          {` · ${data.markdownRemark.timeToRead} min read`}
        </CardSubtitle>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <ul className="post-tags mb-2">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" className="btn text-uppercase">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-muted mb-4">
          <small>
            Updated
            {' '}
            {file.modifiedTime}
            .&nbsp;
            <Link
              href={`https://github.com/FelixTJDietrich/homepage/commits/main/${file.sourceInstanceName}/${file.relativePath}`}
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              View changes on GitHub
              {' '}
              <FontAwesomeIcon icon={faGithub} fixedWidth />
            </Link>
          </small>
        </div>
      </div>

      <h3 className="text-center">
        Share this post
      </h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}/post/${pageContext.slug}`}
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" fixedWidth />
            </a>
          </li>
          <li>
            <a
              href={
                `https://www.twitter.com/share?url=${
                  baseUrl
                }/post/${pageContext.slug
                }&text=${
                  post.title
                }&via=${
                  author.handles.twitter}`
              }
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
            </a>
          </li>
          <li>
            <a
              href={
                `https://www.linkedin.com/shareArticle?url=${
                  baseUrl}/post/${pageContext.slug}`
              }
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
            </a>
          </li>
        </ul>
      </div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Layout>
  );
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
        tags
        image {
          childImageSharp {
            gatsbyImageData(height: 400)
          }
        }
      }
      parent {
        ... on File {
          relativePath
          sourceInstanceName
          modifiedTime(formatString: "MMM D, YYYY")
        }
      }
    }
  }
`;

export default SinglePost;
