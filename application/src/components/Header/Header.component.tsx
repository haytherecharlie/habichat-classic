import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import HeaderLayout from 'layouts/HeaderLayout'
import Text from 'atoms/Text'
// import Logo from 'atoms/Logo'
// import ProfileCircle from 'atoms/ProfileCircle'
import * as A from 'services/redux/actions'
import * as S from './Header.style'

const Auth = ({ title }) => {
  const dispatch = useDispatch()
  return (
    <HeaderLayout>
      <S.BackButton onPress={() => dispatch({ type: A.NAVIGATE, screen: 'landing' })}>
        <Entypo {...S.IconStyle} />
        <S.BackText size="h1">Back</S.BackText>
      </S.BackButton>
      <Text size="h1">{title}</Text>
      <S.Placeholder />
    </HeaderLayout>
  )
}

export default {
  Auth
}
