import React from 'react'
import { graphql } from 'gatsby'
import BlogPost from 'components/BlogPost'
import PageLayout from 'layouts/PageLayout'

const Blog = ({ data }) => {
  return (
    <PageLayout page="blog" crawl={true}>
      {data.allMarkdownRemark.edges.map(({ node }, id) => (
        <BlogPost key={id} frontmatter={node.frontmatter} html={node.html} />
      ))}
    </PageLayout>
  )
}

export default Blog

export const pageQuery = graphql`
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
`
