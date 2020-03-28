import styled from 'styled-components'
import theme from 'assets/styles'
import { ScrollView, View, Text } from 'react-native'

export const RegisterForm = styled(ScrollView)({
  margin: 'auto',
  width: `100%`,
  display: 'flex',
  padding: `0px 25px`,
  background: theme.BACKGROUND_COLOR
})

export const LabelWrapper = styled(View)({
  marginTop: 15,
  marginLeft: 20,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
})

export const InputWrapper = styled(View)(p => {
  const style = {
    height: 40,
    borderRadius: 25,
    padding: `0% 25px`,
    marginTop: 5,
    marginBottom: 5,
    background: theme.OPAQUE_BRAND
  }
  if (p.validation === 'pending') {
    return {
      borderWidth: 1,
      borderColor: theme.BRAND_COLOR,
      ...style
    }
  }
  if (p.validation === 'valid') {
    return {
      borderWidth: 1,
      borderColor: theme.VALID_GREEN,
      ...style
    }
  }
  if (p.validation === 'invalid') {
    return {
      borderWidth: 1,
      borderColor: theme.INVALID_RED,
      ...style
    }
  }
})

export const ErrorText = styled(Text)({
  color: theme.INVALID_RED,
  fontWeight: 600,
  width: `100%`,
  textAlign: 'center'
})

export const ButtonWrapper = styled(View)({
  background: theme.BRAND_COLOR,
  height: 40,
  borderRadius: 25,
  marginTop: 20,
})
