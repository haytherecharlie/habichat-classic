import React from 'react'
import PageLayout from 'templates/PageLayout'
import Header from 'components/Header'
import Text from 'atoms/Text'
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html }
  } = data

  return (
    <PageLayout>
      <Header />
      <Text type="h1">{frontmatter.title}</Text>
      <Text type="h5">{frontmatter.date}</Text>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD-MM-YYYY")
        path
        title
      }
    }
  }
`

export default BlogPost
