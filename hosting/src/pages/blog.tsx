import React from 'react'
import { graphql } from 'gatsby'
// import Wrapper from 'components/Wrapper'

const BlogPost = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html }
  } = data

  // return (
  //   <Wrapper type="page" loading={false}>
  //     <h1>{frontmatter.title}</h1>
  //     <h2>{frontmatter.date}</h2>
  //     <div
  //       style={{
  //         flex: 1,
  //         display: 'flex',
  //         flexDirection: 'column',
  //         alignItems: 'stretch',
  //         justifyContent: 'center'
  //       }}
  //       dangerouslySetInnerHTML={{ __html: html }}
  //     />
  //   </Wrapper>
  // )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default BlogPost
