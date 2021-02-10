import React from 'react'
import Text from 'ui/atoms/Text'
import Title from 'ui/atoms/Title'
import * as S from './BlogPost.style'

const BlogPost = ({ frontmatter, html }) => {
  return (
    <S.Article key={frontmatter.slug}>
      <Title size="h2" text={frontmatter.title} style={{}} bold unique />
      <Title size="h4" text={frontmatter.author} unique />
      <Title size="h4" text={frontmatter.date} bold unique />
      <S.Body dangerouslySetInnerHTML={{ __html: html }} />
    </S.Article>
  )
}

export default BlogPost
