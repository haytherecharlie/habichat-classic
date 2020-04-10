import styled from 'styled-components'
import { ScrollView, View } from 'react-native'

export const Center = styled(View)(({ style }) => ({
  flex: 1,
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ...style
}))

export const Top = styled(View)(({ style }) => ({
  flex: 1,
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ...style
}))

export const Scroll = styled(ScrollView)(({ style }) => ({
  margin: 'auto',
  width: `100%`,
  display: 'flex',
  ...style
}))
