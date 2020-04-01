const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/BlogLayout/BlogLayout.component.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.path.substring(4, node.frontmatter.path.length)
    createPage({
      path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    })
  })
}

// exports.onCreatePage = ({ page, actions }) => {
//   const { deletePage } = actions
//   return new Promise((resolve) => {
//     if (page.componentPath === `${__dirname}/src/pages/blogpost.tsx`)
//       deletePage(page)
//     resolve()
//   })
// }
