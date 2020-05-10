import React from 'react'
import ContentLayout from 'layouts/ContentLayout'
import * as S from './BlogLayout.style'

const BlogLayout = ({ children }) => {
  return (
    <S.BlogLayout>
      <S.StripeWrapper>
        <S.Stripe />
      </S.StripeWrapper>
      <ContentLayout.Padding>{children}</ContentLayout.Padding>
    </S.BlogLayout>
  )
}

export default BlogLayout
