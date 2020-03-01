import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View, Text } from 'react-native'

export const MessageList = styled(View)({
  flex: 1,
  width: `100%`,
  padding: `20px 10px`,
  background: theme.BACKGROUND_COLOR
})

export const Title = styled(Text)({
  marginLeft: 10,
  fontSize: 16
})
