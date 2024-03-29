import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({
  description, lang, meta, title, image, article,
}) {
  const { pathname } = useLocation();
  const { site, allImageSharp } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        allImageSharp(filter: {resize: {originalName: {eq: "author.jpg"}}}, limit: 1) {
          edges {
            node {
              resize {
                src
              }
            }
          }
        }
      }
    `,
  );

  const defaultImageUrl = allImageSharp.edges[0].node.resize.src;
  let defaultImage = `${site.siteMetadata.siteUrl}${image || defaultImageUrl}`;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;
  const url = `${site.siteMetadata.siteUrl}${pathname}`;

  let articleMeta = [];
  if (article) {
    const {
      section,
      tags,
      publishedTime,
      modifiedTime,
      imagePublicUrl,
      timeToRead,
    } = article;
    if (imagePublicUrl) {
      defaultImage = `${site.siteMetadata.siteUrl}${imagePublicUrl}`;
    }

    articleMeta = [
      {
        name: 'twitter:label1',
        content: 'Reading time',
      },
      {
        name: 'twitter:data1',
        content: `${timeToRead} min read`,
      },
      {
        name: 'article:section',
        content: section,
      },
      {
        name: 'article:published_time',
        content: publishedTime,
      },
      {
        name: 'article:modified_time',
        content: modifiedTime,
      },
    ];

    tags.forEach((tag) => {
      articleMeta.push({
        name: 'article:tag',
        content: tag,
      });
    });
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s · ${defaultTitle}` : null}
      meta={[
        {
          property: 'og:title',
          content: title,
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:site_name',
          content: defaultTitle,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: defaultImage,
        },
        {
          property: 'og:type',
          content: article ? 'article' : 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(articleMeta).concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  image: undefined,
  article: undefined,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  article: PropTypes.shape({
    section: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    publishedTime: PropTypes.string,
    modifiedTime: PropTypes.string,
    imagePublicUrl: PropTypes.string,
  }),
};

export default Seo;
