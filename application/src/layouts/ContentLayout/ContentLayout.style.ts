import styled from 'styled-components'
import { ScrollView, View } from 'react-native'
import { isSmallScreen } from 'utils/helpers'

export const Bottom = styled(View)(({ style }) => ({
  flex: 1,
  width: `100%`,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  ...style
}))

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
  paddingLeft: isSmallScreen ? 10 : 20,
  paddingRight: isSmallScreen ? 10 : 20,
  width: `100%`
})
