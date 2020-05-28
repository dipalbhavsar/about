/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const startCase = require('lodash/startCase');

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const result = await graphql(
//     `
//       {
//         allMdx {
//           edges {
//             node {
//               fields {
//                 id
//                 slug
//               }              
//             }
//           }
//         }
//       }
//     `
//   );
//   if (result.errors) {
//     reporter.panic('error loading content', result.errors);
//     return;
//   }
//   result.data.allMdx.edges.forEach(({ node }) => {
//     actions.createPage({
//       path: node.fields.slug ? node.fields.slug : '/',
//       component: require.resolve('./src/templates/docs'),
//       context: {
//         id: node.fields.id
//       }
//     });
//   });
// };

// exports.onCreateNode = ({ node, getNode, actions, reporter }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `Mdx`) {
//     const parent = getNode(node.parent);
//     const title = node.frontmatter.title || startCase(parent.name)

//     let value =  node.frontmatter.slug;
//     if(!value && parent.relativePath){
//       value = parent.relativePath.replace(parent.ext, '');
//     }
    
//     if (!value) {
//       reporter.panic(`Can not create node with title: ${title} there is no relative path or frontmatter to set the "slug" field`);
//       return;
//     }

//     if (value === 'index') {
//       value = '';
//     }

//     createNodeField({
//       name: `slug`,
//       node,
//       value: `/${value}`
//     });

//     createNodeField({
//       name: 'id',
//       node,
//       value: node.id
//     });

//     createNodeField({
//       name: 'title',
//       node,
//       value: title
//     });
//   }
// };

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/index.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
