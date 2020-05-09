import React from 'react'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import ContentLayout from 'layouts/ContentLayout'
import * as S from './ArticleList.style'

const ArticleList = ({ articles = [] }) => {
  return (
    <S.ArticleList>
      <S.StripeWrapper>
        <S.Stripe />
      </S.StripeWrapper>
      <ContentLayout.Padding>
        {/* <Text size="XL" text="Latest Articles:" style={{ fontSize: 50 }} bold unique /> */}
        {articles.map(({ node }) => (
          <S.ItemWrapper key={node.frontmatter.slug}>
            <Link href={node.frontmatter.slug}>
              <Text size="XL" text={node.frontmatter.title} bold unique link />
              <Text size="S" style={{ margin: `5px 0 10px 5px` }} text={node.frontmatter.date} unique />
              <Text size="M" text={node.frontmatter.description} unique />
            </Link>
          </S.ItemWrapper>
        ))}
      </ContentLayout.Padding>
    </S.ArticleList>
  )
}

export default ArticleList
