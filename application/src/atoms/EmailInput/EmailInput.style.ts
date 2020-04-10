import styled from 'styled-components'
import { View, TextInput, TouchableOpacity } from 'react-native'
import theme from 'assets/theme'

export const EmailInput = styled(View)({
  width: `100%`,
  marginTop: 5
})

export const Input = styled(TextInput)({
  width: `100%`,
  fontWeight: 400,
  fontSize: theme.FONT_MEDIUM,
  display: 'flex',
  alignItems: 'center',
  color: theme.PRIMARY_COLOR,
  height: 40,
  borderRadius: 25,
  padding: `0% 25px`,
  background: theme.OPAQUE_BRAND,
  position: 'relative',
  border: p => {
    if (p.validation === 'pending') return `1px solid ${theme.BRAND_COLOR}`
    if (p.validation === 'valid') return `1px solid ${theme.VALID_GREEN}`
    if (p.validation === 'invalid') return `1px solid ${theme.INVALID_RED}`
  }
})

export const Button = styled(TouchableOpacity)({
  height: 38,
  width: 80,
  borderTopRightRadius: 25,
  borderBottomRightRadius: 25,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.BRAND_COLOR,
  position: 'absolute',
  right: 1,
  top: 1
})
