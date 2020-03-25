import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import HeaderLayout from 'layouts/HeaderLayout'
import Text from 'atoms/Text'
// import Logo from 'atoms/Logo'
// import ProfileCircle from 'atoms/ProfileCircle'
import * as A from 'services/redux/actions'
import theme from 'assets/styles/theme.style'
import * as S from './Header.style'

const Register = () => {
  const dispatch = useDispatch()
  return (
    <HeaderLayout>
      <S.BackButton onPress={() => dispatch({ type: A.NAVIGATE, screen: 'landing' })}>
        <Entypo {...S.IconStyle} />
        <Text size="h1">Back</Text>
      </S.BackButton>
      <Text size="h1">REGISTER</Text>
      <S.Placeholder />
    </HeaderLayout>
  )
}

const SignIn = () => {
  const dispatch = useDispatch()
  return (
    <HeaderLayout>
      <S.BackButton onPress={() => dispatch({ type: A.NAVIGATE, screen: 'landing' })}>
        <Entypo {...S.IconStyle} />
        <Text size="h1">Back</Text>
      </S.BackButton>
      <Text size="h1">SIGN IN</Text>
      <S.Placeholder />
    </HeaderLayout>
  )
}

export default {
  Register,
  SignIn
}
