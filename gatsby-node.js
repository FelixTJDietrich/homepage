const path = require('path');
const _ = require('lodash');
const { slugify } = require('./src/util/utilityFunctions');

exports.createSchemaCustomization = ({ actions }) => {
  // Allow for an optional image in the blog's markdown frontmatter
  const { createTypes } = actions;
  const typeDefs = [
    `type MarkdownRemark implements Node {
          frontmatter: Frontmatter
      }`,
    `type Frontmatter @infer {
          slug: String!
          image: File @fileByRelativePath,
      }`,
  ];
  createTypes(typeDefs);
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  // List of all template components for creating pages dynamically
  const templates = {
    singlePost: path.resolve('src/templates/single-post.js'),
    tagsPage: path.resolve('src/templates/tags-page.js'),
    tagPosts: path.resolve('src/templates/tag-posts.js'),
    postList: path.resolve('src/templates/post-list.js'),
  };

  // Querrying all posts for creating their corresponding pages dynamically
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    const posts = res.data.allMarkdownRemark.edges;

    // Create `post/{slug}` pages for posts
    posts.forEach(({ node }) => {
      createPage({
        path: `post/${node.frontmatter.slug}`,
        component: templates.singlePost,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });

    // Accumulate tags of all posts
    let tags = [];
    _.each(posts, (edge) => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });

    const tagPostCounts = {};
    tags.forEach((tag) => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
    });

    tags = _.uniq(tags);

    // Create a page displaying all tags
    createPage({
      path: '/tags',
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    });

    // Create a filtered by tag page for each tag
    tags.forEach((tag) => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag,
        },
      });
    });

    // Paginate all posts
    const postsPerPage = 10;
    const numberOfPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0;
      const currentPage = index + 1;

      if (isFirstPage) return;

      createPage({
        path: `/page/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          numberOfPages,
        },
      });
    });

    // Redirect '/page/1' to the home page
    createRedirect({
      fromPath: '/page/1',
      toPath: '/',
      redirectInBrowser: true,
      isPermanent: true,
    });

    // Redirect '/blog' to the home page
    createRedirect({
      fromPath: '/blog',
      toPath: '/',
      redirectInBrowser: true,
      isPermanent: true,
    });

    return res;
  });
};
