import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View, Text } from 'react-native'

export const RegisterForm = styled(View)({
  width: `80%`,
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center'
})

export const TitleWrapper = styled(View)({
  width: `100%`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20
})

export const LabelWrapper = styled(View)({
  marginLeft: 20
})

export const InputWrapper = styled(View)({
  background: theme.FOREGROUND_COLOR,
  width: `100%`,
  height: 35,
  borderRadius: 25,
  padding: `0px 25px`,
  boxShadow: `0 1px 1px rgba(0,0,0,0.2)`,
  margin: `10px 0px 30px 0px`
})

export const ButtonWrapper = styled(View)({
  background: theme.BRAND_COLOR,
  height: 40,
  width: `100%`,
  borderRadius: 25,
  marginTop: 10
})
