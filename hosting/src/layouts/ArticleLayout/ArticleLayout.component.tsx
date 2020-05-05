import React from 'react'
import Text from 'atoms/Text'

const ArticleLayout = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html }
  } = data

  return (
    <div>
      <Text size="h1" text={frontmatter.title} unique />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export default ArticleLayout
