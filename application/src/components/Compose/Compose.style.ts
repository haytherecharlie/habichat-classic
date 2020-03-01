import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View } from 'react-native'

export const Compose = styled(View)({
  height: 70,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: `10px ${theme.DISPLAY_PADDING}px`,
  background: theme.INVERSE_COLOR,
  boxShadow: `0 0 5px rgba(0,0,0,0.2)`
})

export const TextInputWrapper = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  border: `2px solid ${theme.BRAND_COLOR}`,
  borderRadius: 20,
  padding: 7,
  marginRight: 5
})

export const ButtonWrapper = styled(View)({
  height: 35,
  width: 35,
  borderRadius: 20,
  background: theme.BRAND_COLOR,
  alignItems: 'center',
  justifyContent: 'center'
})
