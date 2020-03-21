import styled from 'styled-components'
import { TextInput } from 'react-native'
import theme from 'assets/styles/theme.style'

export const Input = styled(TextInput)({
  flex: 1,
  width: `100%`,
  maxHeight: 60,
  fontWeight: 400,
  fontSize: theme.FONT_MEDIUM,
  display: 'flex',
  alignItems: 'center'
})
