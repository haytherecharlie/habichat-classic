import { getStatusBarHeight } from 'react-native-status-bar-height'
import { View } from 'react-native'
import { isSmallScreen } from 'utils/helpers'
import styled from 'styled-components'
import theme from 'assets/theme'

export const HeaderLayout = styled(View)({
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const StatusBar = styled(View)({
  height: getStatusBarHeight(true),
  width: `100%`,
  background: 'theme.BACKGROUND_COLOR'
})

export const Header = styled(View)({
  minHeight: 45,
  width: `100%`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomColor: theme.OPAQUE_BRAND,
  paddingLeft: isSmallScreen ? 12 : 22,
  paddingRight: isSmallScreen ? 12 : 22
})
