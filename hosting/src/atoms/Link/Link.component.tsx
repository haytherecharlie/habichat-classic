import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import Text from 'atoms/Text'
import * as S from './Link.style'

const Link = ({ href = '#', translation = null }) => {
  const { locale, formatMessage } = useIntl()
  return (
    <S.Link href={`/${locale}${href}`}>
      <Text color="inherit" size="span">{translation ? formatMessage({ id: translation }) : Link}</Text>
    </S.Link>
  )
}

export default Link
