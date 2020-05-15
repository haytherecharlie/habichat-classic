import React from 'react'
import { graphql } from 'gatsby'
import Link from 'atoms/Link'
import SEO from 'atoms/SEO'
import Text from 'atoms/Text'
import Header from 'components/Header'
import Footer from 'components/Footer'
import BlogLayout from 'layouts/BlogLayout'
import PageLayout from 'layouts/PageLayout'

const Blog = ({ data }) => {
  return (
    <PageLayout>
      <SEO page="blog" crawl={false} />
      <Header locale={false} />
      <BlogLayout>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.frontmatter.slug}>
            <Link href={node.frontmatter.slug}>
              <Text size="XL" text={node.frontmatter.title} style={{ textTransform: 'uppercase' }} bold unique link />
              <Text size="XS" style={{ margin: `10px 0`, fontWeight: 100 }} text={node.frontmatter.date} unique />
              <Text size="S" text={node.frontmatter.description} unique />
            </Link>
          </article>
        ))}
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
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            lang
            slug
            title
          }
        }
      }
    }
  }
`
