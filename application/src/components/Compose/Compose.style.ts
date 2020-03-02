import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { View } from 'react-native'

export const Compose = styled(View)({
  minHeight: 70,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: `0 10px`,
  zIndex: 200,
  boxShadow: `0 1px 1px rgba(0,0,0,0.2)`,
})

export const BasicWrapper = styled(View)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: `5px 10px 0px 10px`
})

export const TextInputWrapper = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.FOREGROUND_COLOR,
  border: `1px solid #CCC`,
  borderRadius: 25,
  padding: `10px 20px`,
  marginRight: 10,
  minHeight: 35,
})

export const ButtonWrapper = styled(View)({
  height: 45,
  width: 45,
  borderRadius: 25,
  background: theme.BRAND_COLOR,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Icon = styled(Ionicon)({})
