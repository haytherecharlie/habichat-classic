import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { View } from 'react-native'

export const Compose = styled(View)({
  height: 70,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `10px ${theme.DISPLAY_PADDING}px`,
  background: theme.INVERSE_COLOR,
  boxShadow: `0 0 2px rgba(0,0,0,0.2)`,
  zIndex: 200
})

export const TextInputWrapper = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  border: `1px solid ${theme.BRAND_COLOR}`,
  borderRadius: 20,
  padding: 5,
  marginRight: 5
})

export const ButtonWrapper = styled(View)({
  height: 40,
  width: 40,
  borderRadius: 20,
  background: theme.BRAND_COLOR,
  alignItems: 'center',
  justifyContent: 'center'
})

export const Icon = styled(Ionicon)({})
