import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View, ScrollView } from 'react-native'

export const MessageList = styled(View)({
  flex: 1,
  width: `100%`,
  padding: `0px 10px`,
  background: theme.BACKGROUND_COLOR
})

export const TitleWrapper = styled(View)({
  marginLeft: 10
})

export const ScrollList = styled(ScrollView)({
  // borderTopColor: theme.BRAND_COLOR,
  // borderTopWidth: 1
})