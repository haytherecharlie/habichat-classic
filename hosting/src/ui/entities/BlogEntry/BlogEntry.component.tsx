import React from 'react'
import Title from 'ui/atoms/Title'
import * as S from './BlogEntry.style'

const BlogEntry = ({ frontmatter, html }) => {
  return (
    <S.BlogEntry key={frontmatter.slug}>
      <Title size="h2" text={frontmatter.title} style={{}} bold unique />
      <Title size="h4" text={frontmatter.author} unique />
      <Title size="h4" text={frontmatter.date} bold unique />
      <S.Body dangerouslySetInnerHTML={{ __html: html }} />
    </S.BlogEntry>
  )
}

export default BlogEntry
