import React from 'react'
import BackButton from 'atoms/BackButton'
import Text from 'atoms/Text'
import HeaderLayout from 'layouts/HeaderLayout'
import * as S from './Header.style'

const Auth = ({ title = '' }) => {
  return (
    <HeaderLayout>
      <BackButton screen="landing" />
      <Text type="h2" style={{ textTransform: 'uppercase' }} text={title}></Text>
      <S.Placeholder />
    </HeaderLayout>
  )
}

const Basic = () => <HeaderLayout />

const CreateProfile = ({ title = '' }) => {
  return (
    <HeaderLayout>
      <S.Placeholder />
      <Text type="h2" style={{ textTransform: 'uppercase' }} text={title}></Text>
      <S.Placeholder />
    </HeaderLayout>
  )
}

export default {
  Auth,
  Basic,
  CreateProfile
}
