import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import Text from 'atoms/Text'
import * as S from './Link.style'

const Link = ({ to = '#', children = null }) => {
  const { locale } = useIntl()
  return (
    <S.Link href={`/${locale}${to}`}>
      <Text color="inherit">{children}</Text>
    </S.Link>
  )
}

export default Link
