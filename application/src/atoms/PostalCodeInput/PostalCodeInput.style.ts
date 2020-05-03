import styled from 'styled-components'
import { View, TextInput } from 'react-native'
import theme from 'assets/theme'

export const PostalCodeInput = styled(View)({
  width: `100%`,
  marginTop: 20
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
  padding: `0 25px`,
  background: theme.OPAQUE_BRAND,
  border: p => {
    if (p.validation === 'pending') return `1px solid ${theme.BRAND_COLOR}`
    if (p.validation === 'valid') return `1px solid ${theme.VALID}`
    if (p.validation === 'invalid') return `1px solid ${theme.INVALID}`
  }
})
