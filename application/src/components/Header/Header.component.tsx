import React from 'react'
import HeaderLayout from 'layouts/HeaderLayout'
import BackButton from 'atoms/BackButton'
import Text from 'atoms/Text'
import * as S from './Header.style'

const Auth = ({ title = '' }) => {
  return (
    <HeaderLayout>
      <BackButton screen="landing" />
      <Text type="h2" style={S.TitleStyle} text={title}></Text>
      <S.Placeholder />
    </HeaderLayout>
  )
}

const CreateProfile = ({ title = '' }) => {
  return (
    <HeaderLayout>
      <S.Placeholder />
      <Text type="h2" style={S.TitleStyle} text={title}></Text>
      <S.Placeholder />
    </HeaderLayout>
  )
}

const Basic = () => {
  return <HeaderLayout />
}

export default {
  Auth,
  Basic,
  CreateProfile
}
