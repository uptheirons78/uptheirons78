/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const _ = require("lodash");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/postTemplate.js`);
  const tagTemplate = path.resolve(`src/templates/tagsTemplate.js`);

  const response = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `);

  const posts = response.data.allMarkdownRemark.edges;

  //Create Blog Posts
  posts.forEach(({ node }) => {
    createPage({
      component: postTemplate,
      path: node.frontmatter.path,
      context: {},
    });
  });

  // create Tags pages
  // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags
  tags = _.uniq(tags);
  tags.forEach(tag => {
    createPage({
      component: tagTemplate,
      path: `/tags/${_.kebabCase(tag)}/`,
      context: {
        tag,
      },
    });
  });
};
