import React from 'react'
import Text from 'atoms/Text'
import BlogLayout from 'layouts/BlogLayout'
import * as S from './BlogPost.style'

const BlogPost = ({ frontmatter, html }) => {
  return (
    <BlogLayout>
      <Text size="XL" text={frontmatter.title} style={{ fontSize: 40 }} bold unique />
      <Text size="XS" text={frontmatter.date} style={{ margin: `5px 0` }} unique />
      <S.Article dangerouslySetInnerHTML={{ __html: html }} />
    </BlogLayout>
  )
}

export default BlogPost
