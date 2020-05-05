import React from 'react'
// import { graphql } from 'gatsby'
// import Text from 'atoms/Text'
// import Header from 'components/Header'
// import Footer from 'components/Footer'
// import ContentLayout from 'layouts/ContentLayout'
import PageLayout from 'layouts/PageLayout'

const Articles = () => {
  // const posts = data.allMarkdownRemark.edges

  return (
    <PageLayout>
      {/* <Header />
      <ContentLayout.Top style={{ flex: 1, paddingTop: 20 }}>
        <ContentLayout.Padding style={{ maxWidth: theme.LARGE_VIEW }}>
          <Text
            size="h1"
            text="Latest Articles"
            style={{ textAlign: 'left', width: `100%`, textTransform: 'uppercase' }}
            unique
          />
          {posts.map(({ node }) => (
            <article style={{ border: `1px solid ${theme.BRAND_COLOR}`, borderRadius: 5, padding: 10 }}>
              <Text size="h3" text={node.frontmatter.title} style={{ textTransform: 'uppercase' }} unique />
            </article>
          ))}
        </ContentLayout.Padding>
      </ContentLayout.Top>
      <Footer /> */}
    </PageLayout>
  )
}

export default Articles

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           frontmatter {
//             slug
//             lang
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
