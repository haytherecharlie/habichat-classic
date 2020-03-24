import { getStatusBarHeight } from 'react-native-status-bar-height'
import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/styles/theme.style'

export const StatusBar = styled(View)({
  height: getStatusBarHeight(true),
  width: `100%`,
  background: theme.HEADER_BACKGROUND
})

export const Header = styled(View)({
  height: 45,
  background: theme.HEADER_BACKGROUND,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomWidth: 1,
  borderBottomColor: theme.PRIMARY_COLOR
})
