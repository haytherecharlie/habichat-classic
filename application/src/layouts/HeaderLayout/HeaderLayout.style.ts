import { getStatusBarHeight } from 'react-native-status-bar-height'
import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const StatusBar = styled(View)({
  height: getStatusBarHeight(true),
  width: `100%`,
  background: theme.BACKGROUND_COLOR
})

export const Header = styled(View)({
  height: 45,
  width: `100%`,
  background: theme.BACKGROUND_COLOR,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomColor: theme.OPAQUE_BRAND,
  padding: `0px 25px`
})
