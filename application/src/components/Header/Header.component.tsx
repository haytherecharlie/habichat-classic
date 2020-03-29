import React from 'react'
import HeaderLayout from 'layouts/HeaderLayout'
import BackButton from 'atoms/BackButton'
import Text from 'atoms/Text'
import * as S from './Header.style'

const Auth = ({ title }) => {
  return (
    <HeaderLayout>
      <BackButton screen="landing" />
      <Text size="h1">{title}</Text>
      <S.Placeholder />
    </HeaderLayout>
  )
}

export default {
  Auth
}
