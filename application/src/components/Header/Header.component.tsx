import React from 'react'
import HeaderLayout from 'layouts/HeaderLayout'
import BackButton from 'atoms/BackButton'
import Text from 'atoms/Text'
import * as S from './Header.style'

const Auth = ({ title = '' }) => {
  return (
    <HeaderLayout>
      <BackButton screen="landing" />
      <Text size="h1">{title.toUpperCase()}</Text>
      <S.Placeholder />
    </HeaderLayout>
  )
}

const CreateProfile = ({ title = '' }) => {
  return (
    <HeaderLayout>
      <S.Placeholder />
      <Text size="h1">{title.toUpperCase()}</Text>
      <S.Placeholder />
    </HeaderLayout>
  )
}

const Blank = () => {
  return <HeaderLayout />
}

export default {
  Auth,
  Blank,
  CreateProfile
}
