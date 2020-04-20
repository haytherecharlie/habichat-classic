import styled from 'styled-components'
import { View, TextInput } from 'react-native'
import theme from 'assets/theme'

export const PostalCodeInput = styled(View)({
  flex: 1,
  display: 'flex',
  width: `100%`,
  flexDirection: 'column',
  position: 'relative'
})

export const InputBorder = styled(View)({
  marginTop: 5,
  borderRadius: 25,
  border: 1,
  borderColor: p => theme[p.valid.toUpperCase()] || theme.BRAND_COLOR,
  overflow: 'hidden'
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
