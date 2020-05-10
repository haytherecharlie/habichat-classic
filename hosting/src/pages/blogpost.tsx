import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'atoms/SEO'
import Header from 'components/Header'
import Footer from 'components/Footer'
import BlogPost from 'components/BlogPost'
import PageLayout from 'layouts/PageLayout'

const Blogpost = ({ data: { markdownRemark } }) => {
  return (
    <PageLayout>
      <SEO page="blog" crawl={false} />
      <Header locale={false} />
      <BlogPost {...markdownRemark} />
      <Footer />
    </PageLayout>
  )
}

export default Blogpost

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        slug
        title
      }
    }
  }
`
