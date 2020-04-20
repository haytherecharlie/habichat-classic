import styled from 'styled-components'
import { ScrollView, View } from 'react-native'

export const Center = styled(View)(({ style }) => ({
  flex: 1,
  width: `100%`,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ...style
}))

export const Top = styled(View)(({ style }) => ({
  flex: 1,
  width: `100%`,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  ...style
}))

export const Scroll = styled(ScrollView)(({ style }) => ({
  margin: 'auto',
  width: `100%`,
  ...style
}))

export const Padding = styled(View)({
  flex: 1,
  paddingLeft: 20,
  paddingRight: 20,
  width: `100%`
})
