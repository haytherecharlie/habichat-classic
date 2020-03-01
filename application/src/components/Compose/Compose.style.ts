import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View } from 'react-native'

export const Compose = styled(View)({
  height: 70,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: `20px ${theme.DISPLAY_PADDING}px`,
  background: theme.INVERSE_COLOR
})

export const TextInputWrapper = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  border: `1px solid ${theme.PRIMARY_COLOR}`,
  borderRadius: 20,
  padding: 5,
  marginRight: 5
})

export const ButtonWrapper = styled(View)({
  height: 30,
  width: 30,
  borderRadius: 20,
  background: theme.PRIMARY_COLOR,
  alignItems: 'center',
  justifyContent: 'center'
})
