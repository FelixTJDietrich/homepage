/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, Link } from 'gatsby';
import {
  CardSubtitle, CardTitle, Badge, Button, UncontrolledTooltip,
} from 'reactstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// import { DiscussionEmbed } from 'disqus-react';
import { faExternalLinkAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import author from '../util/author';
import { slugify } from '../util/utilityFunctions';
import Seo from '../components/seo';
import Layout from '../components/layout';

function SinglePost({ data, pageContext }) {
  const post = data.markdownRemark.frontmatter;
  const file = data.markdownRemark.parent;
  const baseUrl = 'https://felixdietrich.com/';
  const postUrl = `${baseUrl}post/${pageContext.slug}`;

  // const disqusShortname = 'felixtjdietrich';
  // const disqusConfig = {
  //   identifier: data.markdownRemark.id,
  //   title: post.title,
  //   url: postUrl,
  // };

  return (
    <Layout>
      <Seo title={post.title} />
      <div className="blog-post">
        {post.image
          && (
          <GatsbyImage
            className="card-image-top mb-4"
            image={getImage(post.image)}
            style={{ width: '100%' }}
            imgStyle={{ objectFit: 'cover' }}
            alt=""
            imgClassName="rounded"
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
        <div className="text-muted mb-2">
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
        <button
          type="button"
          className="btn btn-link share-btn mb-4"
          id="ShareBtn"
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" fixedWidth />
          Share
        </button>
        <UncontrolledTooltip
          target="ShareBtn"
          placement="top"
          trigger="click"
          className="social-share-tooltip"
        >
          <div className="social-share-links">
            <ul>
              <li>
                <a
                  href={
                    `https://www.twitter.com/share?url=${
                      postUrl
                    }&text=${
                      post.title
                    }&via=${
                      author.handles.twitter}`
                  }
                  className="twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
                  className="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="lg" fixedWidth />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={
                    `https://www.linkedin.com/shareArticle?url=${postUrl}`
                  }
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" fixedWidth />
                  LinkedIn
                </a>
              </li>
              <li>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(postUrl);
                  }}
                  className="permalink"
                  id="CopyLinkButton"
                >
                  <FontAwesomeIcon icon={faLink} size="lg" fixedWidth />
                  Copy link
                </Button>
                <UncontrolledTooltip
                  target="CopyLinkButton"
                  placement="right"
                  trigger="click"
                  className="social-share-tooltip"
                >
                  Copied link!
                </UncontrolledTooltip>
              </li>
            </ul>
          </div>
        </UncontrolledTooltip>
      </div>
      {/* <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} theme="light" /> */}
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
