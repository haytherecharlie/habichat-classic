import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import Text from 'atoms/Text'
import * as S from './HeroBanner.style'

const HeroBanner = () => {
  const intl = useIntl()
  return <S.Wrapper>
    <Text type="h1" color="inverse">{intl.formatMessage({ id: 'hero-title' })}</Text>
    <Text type="h3" color="inverse">{intl.formatMessage({ id: 'hero-subtitle' })}</Text>
  </S.Wrapper>
}

export default HeroBanner
