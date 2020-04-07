import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import Text from 'atoms/Text'
import * as S from './Link.style'

const Link = ({ href = '#', text = null }) => {
  const { locale } = useIntl()
  return (
    <S.Link href={`/${locale}${href}`}>
      <Text size="span" text={text}></Text>
    </S.Link>
  )
}

export default Link
