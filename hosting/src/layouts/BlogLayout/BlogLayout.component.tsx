import React from 'react'
import CenterLayout from 'layouts/CenterLayout'
import TopLayout from 'layouts/TopLayout'
import Text from 'atoms/Text'
import { graphql } from 'gatsby'

const BlogLayout = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html }
  } = data

  return (
    <CenterLayout>
      <TopLayout>
        <Text type="h1">{frontmatter.title}</Text>
        <Text type="h5">{frontmatter.date}</Text>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </TopLayout>
    </CenterLayout>
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

export default BlogLayout
