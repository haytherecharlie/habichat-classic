import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'atoms/SEO'
import BlogPost from 'components/BlogPost'
import Header from 'components/Header'
import Footer from 'components/Footer'
import BlogLayout from 'layouts/BlogLayout'
import PageLayout from 'layouts/PageLayout'

const Blog = ({ data }) => {
  return (
    <PageLayout>
      <SEO page="blog" crawl={true} />
      <Header />
      <BlogLayout>
        {data.allMarkdownRemark.edges.map(({ node }) => <BlogPost frontmatter={node.frontmatter} html={node.html} />)}
      </BlogLayout>
      <Footer />
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
