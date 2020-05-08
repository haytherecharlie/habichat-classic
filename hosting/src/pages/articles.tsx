import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'atoms/SEO'
import ArticleList from 'components/ArticleList'
import Header from 'components/Header'
import Footer from 'components/Footer'
import PageLayout from 'layouts/PageLayout'

const Articles = ({ data }) => {
  return (
    <PageLayout>
      <SEO page="articles" crawl={false} />
      <Header locale={false} />
      <ArticleList articles={data.allMarkdownRemark.edges} />
      {/* {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            key={node.frontmatter.slug}
            style={{ border: `1px solid purple`, width: `100%`, padding: 20, borderRadius: 10 }}>
            <Text size="L" text={node.frontmatter.title} bold unique />
          </div>
        ))} */}
      <Footer />
    </PageLayout>
  )
}

export default Articles

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            description
            lang
            title
          }
        }
      }
    }
  }
`
