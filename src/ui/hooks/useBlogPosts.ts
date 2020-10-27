import { graphql, useStaticQuery } from 'gatsby'

const useBlogPosts = () => {
  return useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              lang
              slug
              title
              author
            }
          }
        }
      }
    }
  `)
}

export default useBlogPosts
