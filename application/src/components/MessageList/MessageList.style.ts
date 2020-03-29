import styled from 'styled-components'
import theme from 'assets/theme'
import { View, ScrollView, Text } from 'react-native'

export const Padding = styled(View)({
  height: 10,
  width: `100%`
})

export const ScrollList = styled(ScrollView)({})

export const MessageList = styled(View)({
  flex: 1,
  width: `100%`,
  padding: `0px 10px`,
  justifyContent: 'center',
  background: theme.BACKGROUND_COLOR
})

export const NoMessages = styled(Text)({
  alignSelf: 'center',
  color: theme.SHADOW_COLOR
})
