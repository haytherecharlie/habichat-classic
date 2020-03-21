import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View } from 'react-native'

export const RegisterForm = styled(View)({
  width: `100%`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `0 20px`
})

export const TitleWrapper = styled(View)({
  width: `100%`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20
})

export const LabelWrapper = styled(View)({
  marginLeft: 50,
  width: `100%`,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
})

export const InputWrapper = styled(View)({
  background: theme.FOREGROUND_COLOR,
  width: `100%`,
  height: 38,
  borderRadius: 25,
  padding: `0% 25px`,
  borderRightWidth: 1.5,
  borderRightColor: 'rgba(0,0,0,0.1)',
  borderBottomWidth: 1.5,
  borderBottomColor: 'rgba(0,0,0,0.1)',
  margin: `10px 0px 30px 0px`
})

export const ButtonWrapper = styled(View)({
  background: theme.BRAND_COLOR,
  height: 40,
  width: `100%`,
  borderRadius: 25,
  marginTop: 30
})
