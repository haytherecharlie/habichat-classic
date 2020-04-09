import styled from 'styled-components'
import { ScrollView, View } from 'react-native'

export const Center = styled(View)(({ style }) => ({
  flex: 1,
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 18,
  paddingRight: 18,
  ...style
}))

export const Top = styled(View)(({ style }) => ({
  flex: 1,
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 18,
  paddingRight: 18,
  ...style
}))

export const Scroll = styled(ScrollView)(({ style }) => ({
  margin: 'auto',
  width: `100%`,
  display: 'flex',
  padding: `0px 25px`,
  ...style
}))
